import './App.css';
import MainPage from './components/MainPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import BrowseJobs from './components/BrowseJobs';
import FindJobs from './components/FindJobs';
import Navbar from './components/Navbar';
import JobSearch from './components/JobSearch';
import Footer from './components/Footer';


function App() {
  return (
    <>
    {/* <Navbar/> */}
        <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        </Routes>
        <Routes>

        {/* <Route exact path="/browse-job" element={<JobSearch/>}></Route> */}
        </Routes>
        <Routes>

        <Route exact path="/find-job" element={<FindJobs/>}></Route>
        </Routes>
        <Footer/>
      </>
  );
}

export default App;
