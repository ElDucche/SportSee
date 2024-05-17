import { getUserActivity, getUserAverageSessions, getUserInfos, getUserPerformance } from "../lib/service";
import Header from "./Header";
import KeyData from "./KeyData";
import ActivityGraph from "./ActivityGraph";
import SessionGraph from "./SessionGraph";
import PerformanceGraph from "./PerformanceGraph";
import ScoreGraph from "./ScoreGraph";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Activity, AvgSession, User, Performance } from "../../types";

const Dashboard = () => {
    const user : UseQueryResult<User, Error> = useQuery({queryKey:['user'], queryFn: getUserInfos});
    const activity : UseQueryResult<Activity, Error> = useQuery({queryKey:['activity'], queryFn: getUserActivity});
    const sessions : UseQueryResult<AvgSession, Error> = useQuery({queryKey:['sessions'], queryFn: getUserAverageSessions});
    const performances : UseQueryResult<Performance, Error>= useQuery({queryKey:['performances'], queryFn: getUserPerformance});

    if (user.isLoading || activity.isLoading || sessions.isLoading || performances.isLoading) {
        return <div>Loading...</div>; // ou un autre composant de chargement
    }
    if (user.isError || activity.isError || sessions.isError || performances.isError) {
        return <div>Une erreur est survenue</div>; // ou un autre composant d'erreur
    }
    if (user.isSuccess && activity.isSuccess && sessions.isSuccess && performances.isSuccess) {
        return (
            <div className="h-full w-6xl">
                <Header user={user.data.userInfos} />
                <main className="layout-dashboard grid gap-4">
                    <div className="grid-a rounded-lg bg-tertiary relative">
                        <h3></h3>
                        <ActivityGraph data={activity.data.sessions}/>
                    </div>
                    <div className="grid-b grid gap-4">
                        {
                            Object.entries(user.data.keyData).map(([key, value]) => {
                                return <KeyData type={key} amount={value} key={key}/>
                            })
                        }
                    </div>
                    <div className="grid-c flex items-center justify-between">
                        <div className="py-4 bg-primary rounded-lg aspect-square w-64 flex items-center p-4 relative">
                            <h3 className="absolute w-40 text-white top-4 left-4">Durée moyenne des sessions</h3>
                            {/* graph sessions */}
                            <SessionGraph data={sessions.data.sessions}/>
                        </div>
                        <div className="w-80  bg-secondary rounded-lg flex items-center justify-center">  
                            {/* graph radar perf */}
                            <PerformanceGraph data={performances.data.data}/>
                        </div>
                        <div className="w-64 self-end bg-tertiary rounded-lg aspect-square flex items-center justify-center -rotate-90 relative">
                            {/* graph objectif % */}
                            <ScoreGraph score={user.data.todayScore}/>
                            <h3 className="absolute top-8 rotate-90 right-2 text-lg font-semibold">Score</h3>
                            <div className="absolute rotate-90 text-center">
                                <span className="text-5xl font-bold">{user.data.todayScore * 100}%</span>
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