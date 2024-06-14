import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const ScoreGraph = ({ score }: { score: number }) => {
    const scores = [
        { name: 'A', score: score*100, fill: '#FF0101', background: '#FBFBFB'},
        { name: 'B', score: 100 - score*100 , fill: '#FBFBFB'}
    ];
    
    return (
        <ResponsiveContainer width="100%" height='100%' style={{zIndex:10}}>
            <RadialBarChart data={scores} innerRadius='80%' outerRadius='100%' barSize={20}>
                <RadialBar dataKey='score'/>  
            </RadialBarChart>
        </ResponsiveContainer>
    );
}
export default ScoreGraph;

