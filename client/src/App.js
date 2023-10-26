import "bootstrap/dist/css/bootstrap.min.css";
import { BoardList } from "./components/BoardList";
import { Write } from "./components/Write";

function App() {
  return (
    <div className="App">
      <BoardList></BoardList>
      <Write></Write>
    </div>
  );
}

export default App;
