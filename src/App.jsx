import "./App.css";
import Emoji from "./component/emoji";
import Nav from "./component/navbar/nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Emoji />
    </div>
  );
}

export default App;
