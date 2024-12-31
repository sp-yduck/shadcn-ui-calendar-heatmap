import React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarHeatmap() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      numberOfMonths={3}
    />
  );
}
