import logo from './logo.svg';
import './App.css';
import C1  from './components/C1';
import C2 from './components/C2';
import C4 from './components/C4';
import "D:/Jannat/5.5 Interim Sem/MERN/React and node js/f1/node_modules/bootstrap/dist/css/bootstrap.min.css";
import F1 from './components/F1';
import 'D:/Jannat/5.5 Interim Sem/MERN/React and node js/f1/src/components/style.css'
import Nav from './components/Nav';

import {HashRouter, Routes, Route} from "react-router-dom";
import { Home } from './components/F2';
import { About } from './components/F2';
import { Blog } from './components/F2';
import { Contact } from './components/F2';
function App() {
  return (
    <div>
      {/* <C1 brand="nike"/> */}
      {/* <F1/>
      <C2/>
      <C4/> */}
      {/* <Nav/>  */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
