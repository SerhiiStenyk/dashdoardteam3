import Landing from './pages/Landing/Landing';
import './App.css';
import './fonts.css';
import AddButton from './component/addButton/button'
import DifficultLevelModal from './components/DifficultLevelModal';


function App() {
  return (
    <div>
      <AddButton/>
      <Landing/>
      <DifficultLevelModal />
    </div>
  );
}

export default App;
