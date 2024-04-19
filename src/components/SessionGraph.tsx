import { CartesianAxis, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface SessionGraphProps {
    data : {
        day: number;
        sessionLength: number;
    }[];
}

const SessionGraph: React.FC<SessionGraphProps> = ({ data }) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const formattedData = data.map((item) => {
        return {
            day: days[item.day-1],
            sessionLength: item.sessionLength
        }
    })
    console.log(formattedData)

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={formattedData}>
                <Label value="Durée des sessions" position="insideTopLeft" style={{stroke:'#FFF'}}/>
                <CartesianAxis />
                <YAxis dataKey={'sessionLength'} hide/>
                <XAxis dataKey='day' axisLine={false} style={{fill:'#FFF'}}/>
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
        <div className="h-fit w-fit p-2 bg-white">
          <p className="font-medium">{`${payload[0].value}min`}</p>
        </div>
      );
    }
    return null;
};