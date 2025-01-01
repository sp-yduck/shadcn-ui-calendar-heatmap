import { type CalendarHeatmapData } from "../components/calendar/CalendarHeatmap";

// generate random datas for calendar heatmap with count from 0 to 4
// for the last 365 days
export function generateRandomDatas(): CalendarHeatmapData[] {
  const datas: CalendarHeatmapData[] = [];
  for (let i = 0; i < 365; i++) {
    datas.push({
      date: new Date(
        new Date(new Date().setDate(new Date().getDate() - i)).setHours(
          0,
          0,
          0,
          0
        )
      ),
      count: Math.floor(Math.random() * 5),
    });
  }
  return datas;
}
