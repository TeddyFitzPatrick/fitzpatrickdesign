import { Link } from 'react-router-dom';

function Nav(){
    return (  
        <nav className="text-xs lg:text-xl flex flex-row pt-4 md:pt-0 items-center justify-center tracking-[0.2em]">
            <NavItem destination="/" name="HOME"/>
            <NavItem destination="/about" name="ABOUT"/>
            <NavItem destination="/projects" name="PROJECTS"/>
            <NavItem destination="/contact" name="CONTACT"/>
        </nav> 
    )
}

function NavItem({destination, name}: {destination: string, name: string}){
    return (
        <Link to={destination} className="p-2 sm:p-3 hover:underline">{name}</Link>
    )
}

function Header(){
    return (
    <div className="flex-col lg:flex-row pb-4 lg:pb-9 p-5 sm:p-9 flex h-auto min-h-[16.67%] w-full justify-between text-2xl text-[#aec7c0]">
        <div>
            {/* Logo  */}
            <Link to="/" className="text-left text-2xl sm:text-4xl leading-[1] tracking-[0.2em] md:text-[46px] text-white">
                FITZPATRICK DESIGN, INC.
            </Link>
            <h2 className="mt-4 text-base tracking-widest ">
                CABINETRY DESIGN FOR ANY ROOM IN YOUR HOME
            </h2>
        </div>
        {/* Navigation Bar */}
        <Nav/>
    </div>
    );
}

export default Header;