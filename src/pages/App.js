import logo from '../logo.svg';
import '../css/App.css';
import Navbar from './Navbar.js';
import { Route, Routes } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

export default function App() {
  return (
    <div className='App'>
      <Navbar style={{flex:0}}/>
      <Routes>
        <Route path='/' element={<DefaultContent />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
}

function DefaultContent() {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </header>
  );
}
