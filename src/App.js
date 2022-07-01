import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
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
    <Footer />
    </>
  )

}

export default App;
