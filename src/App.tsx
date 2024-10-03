import "./App.css";
import { RouletteTable } from "./lib/components/roulette-table";

function App() {

  return (
    <main>
      <RouletteTable bets={{}} onBet={() => {}}/>
    </main>
  );
}

export default App;