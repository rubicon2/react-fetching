import InfoDisplay from './components/infoDisplay';
import Sidebar from './components/sidebar';
import './App.scss';

function App() {
  return (
    <>
      <h1 className="text-centered app-title">Some App</h1>
      <div className="grid-1-5">
        <Sidebar />
        <InfoDisplay />
      </div>
    </>
  );
}

export default App;
