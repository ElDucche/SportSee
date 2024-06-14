import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Performance } from '../lib/models/types';

interface PerformanceGraphProps {
    data: Performance['data'];
}

const PerformanceGraph : React.FC<PerformanceGraphProps> = ({data}) => {
    const kind: Performance['kind'] = {
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
        <ResponsiveContainer width="100%" height='82%'>
            <RadarChart data={formattedData} startAngle={-150} endAngle={210}>
                <PolarGrid stroke='#FFF' strokeWidth={1} gridType='polygon' radialLines={false} polarRadius={[5 ,15 , 25, 38 , 50]}/>
                <PolarAngleAxis dataKey="kind" tickLine={false} axisLine={false} style={{fill: '#FFF'}} tick={{ fill: "white", fontSize: 8 }} />
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} legendType='diamond'/>
            </RadarChart>
        </ResponsiveContainer>
    )
}
export default PerformanceGraph;