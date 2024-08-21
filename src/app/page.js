import Grid from "@/components/Grid";
import Toolbar from "@/components/Toolbar";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blueviolet mb-4">
        Spreadsheet Application
      </h1>
      <Toolbar />
      <Grid />
    </div>
  );
}
