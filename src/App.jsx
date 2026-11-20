import "./App.css";
import Navbar from "./components/Navbar.jsx";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className='m-4'>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
