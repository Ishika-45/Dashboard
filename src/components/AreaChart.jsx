import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const AreaChartExample = ({ darkMode }) => {
  
  const gridStroke = darkMode ? '#fff' : '#000';
  const axisStroke = darkMode ? '#fff' : '#000';
  const fillColors = {
    uv: darkMode ? '#8884d880' : '#8884d8',
    pv: darkMode ? '#82ca9d80' : '#82ca9d',
    amt: darkMode ? '#ffc65880' : '#ffc658'
  };

  return (
    <div className="w-full h-[300px] p-3">
      <ResponsiveContainer width={570} height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke={gridStroke} strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={axisStroke} />
          <YAxis stroke={axisStroke} />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? '#333' : '#fff',
              borderColor: darkMode ? '#555' : '#ccc',
              color: darkMode ? '#fff' : '#000'
            }}
          />
          <Area type="monotone" dataKey="uv" stackId="1" stroke={fillColors.uv} fill={fillColors.uv} />
          <Area type="monotone" dataKey="pv" stackId="1" stroke={fillColors.pv} fill={fillColors.pv} />
          <Area type="monotone" dataKey="amt" stackId="1" stroke={fillColors.amt} fill={fillColors.amt} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartExample;
