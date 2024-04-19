import { getUserActivity, getUserAverageSessions, getUserInfos, getUserPerformance } from "../lib/service";
import Header from "./Header";
import { useQuery } from '@tanstack/react-query';
import KeyData from "./KeyData";
import ActivityGraph from "./ActivityGraph";
import SessionGraph from "./SessionGraph";
import PerformanceGraph from "./PerformanceGraph";
import ScoreGraph from "./ScoreGraph";

const Dashboard = () => {
    const user = useQuery({
        queryKey: ['userInfos'],
        queryFn: getUserInfos
    });
    const activity = useQuery({
        queryKey: ['userActivity'],
        queryFn: getUserActivity
    });
    const sessions =useQuery({
        queryKey: ['userAverageSessions'],
        queryFn: getUserAverageSessions
    });
    const performances = useQuery({
        queryKey: ['userPerformance'],
        queryFn: getUserPerformance
    });
    if (user.isLoading) {
        return <p>Loading...</p>
    }
    if (user.isError) {
        return <p>Error</p>
    }
    if (user.isSuccess && activity.isSuccess && sessions.isSuccess && performances.isSuccess) {
        return (
            <div className="h-full w-6xl">
                <Header user={user.data.data.userInfos} />
                <main className="layout-dashboard grid gap-4">
                    <div className="grid-a rounded-lg bg-tertiary relative">
                        <h3></h3>
                        <ActivityGraph data={activity.data.data.sessions}/>
                    </div>
                    <div className="grid-b grid gap-4">
                        {
                            Object.entries(user.data.data.keyData).map(([key, value]) => {
                                return <KeyData type={key} amount={value} key={key}/>
                            })
                        }
                    </div>
                    <div className="grid-c flex items-center justify-between">
                        <div className="py-4 bg-primary rounded-lg aspect-square w-64 flex items-center">
                            {/* graph sessions */}
                            <SessionGraph data={sessions.data.data.sessions}/>
                        </div>
                        <div className="w-64  bg-secondary rounded-lg aspect-square flex items-center justify-center">  
                            {/* graph radar perf */}
                            <PerformanceGraph data={performances.data.data.data}/>
                        </div>
                        <div className="w-64 self-end bg-tertiary rounded-lg aspect-square flex items-center justify-center -rotate-90 relative">
                            {/* graph objectif % */}
                            <ScoreGraph score={user.data.data.todayScore}/>
                            <h3 className="absolute top-8 rotate-90 right-2 text-lg font-semibold">Score</h3>
                            <div className="absolute rotate-90 text-center">
                                <span className="text-5xl font-bold">{user.data.data.todayScore * 100}%</span>
                                <p className="text-secondary/50 w-[80%] mx-auto text-2xl">de votre objectif</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }      
}
export default Dashboard;