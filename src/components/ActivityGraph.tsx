import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ActivityGraphProps {
    data: {
        kilogram: number;
        calories: number;
        day: string;
    }[];
}

const ActivityGraph: React.FC<ActivityGraphProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis axisLine={false} tickLine={false}/>
                <YAxis hide  yAxisId="right" orientation="left" dataKey="calories" tickLine={false}/>
                <YAxis yAxisId="left" orientation="right" dataKey='kilogram' tickLine={false} axisLine={false} domain={['dataMin-1', 'dataMax + 1']} allowDecimals={false}/>
                <Tooltip content={<CustomTooltip active={false} payload={[]} />}/>
                <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={10} radius={[5,5,0,0]}/>
                <Bar yAxisId="right" dataKey="calories" fill="#FF0101" barSize={10} radius={[5,5,0,0]}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ActivityGraph;

interface TooltipProps {
    active: boolean;
    payload: { value: string }[];
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
   if (active && payload && payload.length) {
     return (
       <div className="h-fit w-fit p-2 bg-primary">
         <p className="font-medium text-white p-2">{`${payload[0].value}Kg`}</p>
         <p className="font-medium text-white p-2">{`${payload[1].value}Kcal`}</p>
       </div>
     );
   }
   return null;
};