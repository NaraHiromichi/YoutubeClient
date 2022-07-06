import Content from "./Content";
import Nav from "./nav/Nav";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Nav />
        <Content />
      </DataProvider>
    </div>
  );
}

export default App;
