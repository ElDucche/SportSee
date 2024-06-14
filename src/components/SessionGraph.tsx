import { CartesianAxis, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AvgSession } from "../lib/models/types";

interface SessionGraphProps {
    data : AvgSession['sessions'];
}

const SessionGraph: React.FC<SessionGraphProps> = ({ data }) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const formattedData = data.map((item) => {
        return {
            day: days[item.day-1],
            sessionLength: item.sessionLength
        }
    })

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={formattedData}>
                <CartesianAxis tickLine={false}/>
                <YAxis dataKey={'sessionLength'} tickLine={false} hide domain={['dataMin - 10', 'dataMax + 30']}/>
                <XAxis dataKey='day' axisLine={false} style={{fill:'#FFF', fontSize:'10px'}} tickLine={false}/>
                <Tooltip content={<CustomTooltip active={false} payload={[]}/>}/>
                <Line dot={false} type="monotone" strokeWidth={2} dataKey="sessionLength" stroke="#FFF"/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default SessionGraph;


interface TooltipProps {
     active: boolean;
     payload: { value: string }[];
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="h-fit w-fit p-2 bg-white z-50">
          <p className="font-medium text-xs">{`${payload[0].value}min`}</p>
        </div>
      );
    }
    return null;
};