import React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarHeatmap() {
  return (
    <Calendar
      numberOfMonths={12}
      classNames={{
        nav: "hidden",
        tbody: "flex",
        row: "[user-select:none;] flex flex-col",
      }}
    />
  );
}
