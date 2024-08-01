"use client";
import React from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig } from "@/components/ui/chart";
const chartData = [{ browser: "safari", visitors: 45, fill: "#546FFF" }];

type Props = {};

const TaskCard = (props: Props) => {
  const {} = props;
  return (
    <Card className="flex flex-col rounded-lg	bg-secondary pb-0">
      <CardContent className="flex flex-col">
        <CardHeader>
          <div className="flex flex-col">
            <CardTitle className="text-white">Running Task</CardTitle>
            <span className="text-white text-5xl font-bold justify-center pt-4">
              65
            </span>
          </div>
        </CardHeader>
        <div className="flex items-center">
          <div className="aspect-square max-h-[250px]">
            <RadialBarChart
              width={200}
              height={200}
              data={chartData}
              startAngle={0}
              endAngle={250}
              innerRadius={100}
              outerRadius={30}
              barSize={10}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="visitors" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  value={chartData[0].visitors.toLocaleString() + "%"}
                  position="center"
                  className="text-white text-3xl font-bold"
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </div>
          <div className="flex flex-col ml-4">
            <span className="text-white text-xl">100</span>
            <span className="text-[#8E92BC] text-xl">Task</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
