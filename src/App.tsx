import CalendarHeatmap from "./components/calendar/CalendarHeatmap";

function App() {
  return (
    <div className="w-screen items-center space-y-10">
      <div className="pt-24 flex flex-col space-y-6 text-center">
        <h1 className="font-bold text-4xl">shadcn/ui Calendar Heatmap</h1>
        <p className="text-xl">
          A calendar heatmap component built with shadcn/ui calendar&tooltip,
          inspired by github's commit calendar graph.
        </p>
      </div>
      <div className="p-8">
        <CalendarHeatmap />
      </div>
    </div>
  );
}

export default App;
