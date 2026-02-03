import { NavLink, Link} from 'react-router-dom';
import { ContactMethod } from '../pages/contact';

const houzzURL: string = "https://www.houzz.com/professionals/kitchen-and-bath-designers/fitzpatrick-design-and-cabinetry-pfvwus-pf~251686724";

function Footer(){
    return <>
    <div className="w-full mt-12">
        {/* Lighter Gray Section */}
        <div className="flex h-64 w-full flex-col items-center justify-center space-y-4 bg-slate-500">
            <h1 className="text-center text-xl lg:text-2xl md:text-3xl tracking-wide text-white">
                Start your next project today
            </h1>
            <Link to="/contact" className="w-auto rounded-lg bg-white px-8 py-4 text-xl tracking-[0.2em] text-slate-500"> Contact Us </Link>
        </div>
        {/* Dark Gray Section Bottom */}
        <div className="flex w-full bg-gray-600 text-[#aec7c0] flex-col lg:flex-row p-10 sm:p-12">
            {/* Navigation  */}
            <nav className="space-y-4 hidden lg:flex m-0 list-none flex-col justify-evenly tracking-[0.2em]">
                <NavLink to="/" className={({ isActive }) => (isActive ? "active_footer" : "unactive_footer")}>HOME</NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? "active_footer" : "unactive_footer")}>PROJECTS</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active_footer" : "unactive_footer")}>ABOUT</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active_footer" : "unactive_footer")}>CONTACT</NavLink>
            </nav>
            {/* Houzz and Contacts  */}
            <div className="flex h-full w-full items-center justify-center lg:justify-end space-y-6 lg:space-y-0 flex-col lg:flex-row">
                {/* Awards  */}
                <div className="w-full h-full flex-wrap flex flex-row gap-4  lg:px-12">
                    <Award imgSrc="/awards/2022.png"/>
                    <Award imgSrc="/awards/2020.png"/>
                    <Award imgSrc="/awards/2019.png"/>
                    <Award imgSrc="/awards/2018.png"/>
                    <Award imgSrc="/awards/2017.png"/>
                    <Award imgSrc="/awards/2016.png"/>
                    <Award imgSrc="/awards/2015.png"/>
                    <Award imgSrc="/awards/2014.png"/>
                    <Award imgSrc="/awards/2013.png"/>
                </div>
                {/* Contact Links  */}
                <div className="flex flex-col space-y-3 text-lg sm:text-xl tracking-wide">
                    <ContactMethod imgSrc="/svg/pinpoint.svg" text="Larchmont, NY 10538"/>
                    <ContactMethod imgSrc="/svg/phone_icon.svg" text="(914) 500-5232"/>
                    <ContactMethod imgSrc="/svg/mail.svg" text="info@fitzpatrickdesigninc.com"/>
                </div>
            </div>
        </div>
    </div>
    </>
}

function Award({imgSrc}: {imgSrc: string}){
    return <a target="_blank" href={houzzURL}>
        <img src={imgSrc} className="award"></img>
    </a>
}

export default Footer;