"use client";

import { Bar, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Sunday", task: 5 },
  { day: "Monday", task: 1 },
  { day: "Tuesday", task: 3 },
  { day: "Wednesday", task: 1 },
  { day: "Thursday", task: 3 },
  { day: "Friday", task: 2 },
  { day: "Saturday", task: 0 },
];

const chartConfig = {
  task: {
    label: "Task",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type Props = {};

const ActivityLinearCard = (props: Props) => {
  return (
    <Card className="bg-[#F5F5F7] w-2/5 p-4">
      <CardHeader>
        <div className="flex items-center">
          <CardTitle>Activity</CardTitle>
          <CardDescription className="text-[#141522] font-bold ml-auto">
            This Week ↓
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="bg-white rounded-sm w-auto h-auto">
        <ChartContainer config={chartConfig}>
          <LineChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={4}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Line
              dataKey="task"
              type="natural"
              stroke="#141522"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityLinearCard;
