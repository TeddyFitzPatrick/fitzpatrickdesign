import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './header.tsx';
import Footer from './footer.tsx'

import Home from './home.tsx';
import About from './about.tsx';
import White from './white.tsx';
import Wood from './wood.tsx';
import Contact from './contact.tsx';

import "../css/styles.css"; 

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <div className="bg-[#434946] text-white h-min-[100vh]">
            <Header/>
            <div className="">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/white" element={<White />}/>
                    <Route path="/wood" element={<Wood />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
)