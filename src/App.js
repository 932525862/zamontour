import "./App.css";
import {Home} from "./components/Home/Home";
import AppNavbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <Home></Home>
    </div>
  );
}

export default App;
