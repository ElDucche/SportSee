import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Performance } from '../lib/models/types';
import { useEffect, useState } from 'react';

interface PerformanceGraphProps {
    data: Performance['data'];
}

const PerformanceGraph : React.FC<PerformanceGraphProps> = ({data}) => {
    const [screenXl, setScreenXl] = useState<boolean>(window.innerWidth < 1280);
    const [screen2xl, setScreen2xl] = useState<boolean>(window.innerWidth > 1536);
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

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenXl(window.innerWidth < 1280);
            setScreen2xl(window.innerWidth > 1536);
        })
    })
    
    // const screenXl = window.innerWidth < 1280;  
    return (

                <ResponsiveContainer width="100%" height={screenXl ? '82%' : '83%'}>
                    <RadarChart data={formattedData} startAngle={-150} endAngle={210}>
                        <PolarGrid stroke='#FFF' strokeWidth={1} gridType='polygon' radialLines={false} polarRadius={screenXl ? [5 ,15 , 25, 38 , 50] : screen2xl ? [25, 40, 55, 70, 89] : [15 ,35 , 55, 70]}/>
                        <PolarAngleAxis dataKey="kind" tickLine={false} axisLine={false} style={{fill: '#FFF'}} tick={screenXl ? { fill: "white", fontSize: 8 }: { fill: "white", fontSize: 12 }} />
                        <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} legendType='diamond'/>
                    </RadarChart>
                </ResponsiveContainer>
                   
                   
                //    <RadarChart data={formattedData} startAngle={-150} endAngle={210}>
                //         <PolarGrid stroke='#FFF' strokeWidth={1} gridType='polygon' radialLines={false} polarRadius={[15 ,35 , 55, 70]}/>
                //         <PolarAngleAxis dataKey="kind" tickLine={false} axisLine={false} style={{fill: '#FFF'}} tick={{ fill: "white", fontSize: 12 }} />
                //         <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} legendType='diamond'/>
                //     </RadarChart>
            )
}
export default PerformanceGraph;