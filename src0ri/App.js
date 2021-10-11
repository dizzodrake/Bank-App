import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/Dashboard';
// import './App.css';
import Landing from './components/landingPage/Landing';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Dashboard/>
    </div>
  );
}

export default App;
