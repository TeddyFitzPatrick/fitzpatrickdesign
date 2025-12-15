import { Link } from 'react-router-dom';

function Footer(){
    return (
        <div className="w-full mt-12">
            <div className="flex h-64 w-full flex-col items-center justify-center space-y-4 bg-slate-500">
                <h1 className="text-center text-xl lg:text-2xl md:text-3xl tracking-wide text-white">
                    Start your next project today
                </h1>
                <Link to="/contacts" className="w-auto rounded-lg bg-white px-8 py-4 text-xl tracking-[0.2em] text-slate-500"> Contact Us </Link>
            </div>
            <div className="flex h-auto min-h-64 w-full flex-col bg-gray-600 py-16 text-[#aec7c0] md:flex-row">
                <nav className="space-y-4 hidden md:flex m-0 list-none flex-col items-center justify-center pl-4 text-center tracking-[0.2em] md:pl-24">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/projects">PROJECTS</Link>
                    <Link to="/contact">CONTACT</Link>
                </nav>
                <div className="flex h-full w-full items-center justify-center md:justify-end">
                    <div className="pr-0 sm:pr-12 flex h-fit w-auto flex-col space-y-4 text-lg sm:text-xl md:text-2xl tracking-wide">
                        <div className="flex flex-row items-center">
                            <img src="/svg/pinpoint.svg" className="w-6 h-6 fill-cyan-500 mr-2"/>
                            <a target="_blank" href="https://maps.app.goo.gl/1ZY5ScefcBgpdptd9" className="font-bold hover:underline hover:text-cyan-400">Larchmont, NY 10538</a>
                        </div>
            
                        <div className="flex flex-row items-center">
                            <img src="/svg/phone_icon.svg" className="w-6 h-6 fill-cyan-500 mr-2"/>
                            <p className="font-bold">(914) 500-5232</p>
                        </div>
            
                        <div className="flex flex-row items-center">
                            <img src="/svg/mail.svg" className="w-6 h-6 fill-cyan-500 mr-2"/>
                            <a target="_blank" href="mailto:info@fitzpatrickdesigninc.com"
                            className="font-bold hover:underline hover:text-cyan-400">info@fitzpatrickdesigninc.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;