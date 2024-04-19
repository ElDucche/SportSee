import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Label } from 'recharts';

const PerformanceGraph = ({data}: {data: {value: number, kind: number}[]}) => {
    const kind: Record<number, string> = {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité'
    }
    const formattedData = data.map((item: {kind:number, value:number}) => {
        return {
            kind: kind[item.kind],
            value: item.value
        }
    })
    return (
        <ResponsiveContainer width="100%" height='100%'>
            <RadarChart data={formattedData} startAngle={150} endAngle={-210}>
                <PolarGrid stroke='#FFF' strokeWidth={2}/>
                <PolarAngleAxis dataKey="kind">
                    <Label style={{fill:'#FFF'}}/>
                </PolarAngleAxis>
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} legendType='diamond'/>
            </RadarChart>
        </ResponsiveContainer>
    )
}
export default PerformanceGraph;