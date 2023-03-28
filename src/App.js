import style from './App.module.css';
import MountainsPage from './Pages/MountainPage/MountainsPage';
// import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className={style.parent}>
      {/* <HomePage /> */}
      <MountainsPage />
    </div>
  );
}

export default App;
