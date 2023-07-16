import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from "recharts";
import { useState, useEffect } from "react";
const data = [
  {
    name: "Video 1",
    views: 316019
  },
  { name: "Video 2", views: 634776 },
  { name: "Video 3", views: 214971 },

  { name: "Video 4", views: 418352 },
  { name: "Video 5", views: 286386 }
];

const renderLineChart = (
  //   <ResponsiveContainer width="50%" height={200}>
  <AreaChart
    width={500}
    height={400}
    data={data}
    margin={{ top: 5, right: 5, bottom: 5, left: 20 }}
  >
    <defs>
      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area
      type="monotone"
      dataKey="views"
      stroke="#8884d8"
      fillOpacity={1}
      fill="url(#colorViews)"
    />
  </AreaChart>
  //   </ResponsiveContainer>
);

function StatisticsChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="bg-slate-20 ">{isClient ? renderLineChart : null}</div>
  );
}

export default StatisticsChart;
