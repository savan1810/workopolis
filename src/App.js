import './App.css';
import MainPage from './components/MainPage'
import {
  
  Routes,
  Route,
  
} from "react-router-dom";

import FindJobs from './components/FindJobs';

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
