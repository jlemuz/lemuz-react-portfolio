import './styles.css';
import Nav from './components/Nav';
//import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import {Route, Routes} from 'react-router-dom';

function App() {

  return(
    <>
    <Nav />
    <div className='container'>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Resume" element={<Resume />} />

      </Routes>
    </div>
    </>
  )

}

export default App;
