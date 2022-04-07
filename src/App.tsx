import React from 'react';
import './App.css';
import {Contacts} from "./components/Contacts/Contacts";
import {Projects} from "./components/Projects/Projects";
import {Skills} from "./components/Skills/Skills";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="page">
                <div className="page__container">
                    {/*       <Routes>
              <Route path='/about' element={<AboutMe/>} />
              <Route path='/skills' element={ <Skills/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='/contacts' element={ <Contacts/>} />
          </Routes>*/}
                    <AboutMe/>
                    <Skills/>
                    <Projects/>
                    <Contacts/>
                </div>
            </div>
        </div>
    );
}

export default App;
