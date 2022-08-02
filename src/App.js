import Home from "./Home";
import SiteProvider from "./context/SiteContext";

function App() {
  return (
    <div className="App">
      <SiteProvider>
        <Home />
      </SiteProvider>
    </div>
  );
}

export default App;
