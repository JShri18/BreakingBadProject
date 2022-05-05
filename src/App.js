// import './App.css';
import Landing from './components/Landing/Landing';
import Search from './components/Search';
import SearchDemo from './components/SearchDemo';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"; 


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
      {/* <SearchDemo/> */}
    </>
  );
}

export default App;
