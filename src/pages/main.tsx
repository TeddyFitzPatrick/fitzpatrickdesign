import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from '../util/header.tsx';
import Footer from '../util/footer.tsx'

import Home from './home.tsx';
import About from './about.tsx';
import Projects from './projects.tsx'; 
import Contact from './contact.tsx';

import "../styles.css"; 

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <div className="bg-[#434946] text-white h-min-[100vh]">
            <Header/>
            <div className="">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
)