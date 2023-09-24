import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Topbar/>
      <MainContent/>
    </div>
  );
}

export default App;
