import SearchInput from "./components/SearchInput";
import SearchResultsView from "./components/SearchResultsView";
import Trend from "./components/Trend"
import Navbar from "./components/Navbar"
import {BrowserRouter,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Route path="/" exact component={Trend}/>
     <Route path="/da" component={SearchResultsView}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
