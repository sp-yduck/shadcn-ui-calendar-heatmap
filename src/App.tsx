import CalendarHeatmap from "./components/calendar/CalendarHeatmap";

function App() {
  const exampleData = [
    { date: new Date("2024-12-1"), count: 1 },
    { date: new Date("2024-12-2"), count: 2 },
    { date: new Date("2024-12-3"), count: 3 },
    { date: new Date("2024-12-4"), count: 4 },
    { date: new Date("2024-12-5"), count: 0 },
    { date: new Date("2024-12-6"), count: 1 },
  ];

  return (
    <div className="w-screen items-center space-y-10">
      <div className="pt-24 flex flex-col space-y-6 text-center">
        <h1 className="font-bold text-4xl">shadcn/ui Calendar Heatmap</h1>
        <p className="text-xl">
          A calendar heatmap component built with shadcn/ui calendar&tooltip,
          inspired by github's commit calendar graph.
        </p>
      </div>
      <div className="flex p-8 justify-center">
        <CalendarHeatmap data={exampleData} />
      </div>
    </div>
  );
}

export default App;
