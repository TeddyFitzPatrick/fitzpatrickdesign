import {useEffect, useRef} from 'react';
// @ts-ignore
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

// Carousel images
const carouselImgs = [
  "/assets/slideshow/bronxille_cabinetry.jpg",
  "/assets/slideshow/contemporary_white_kitchen.jpg",
  "/assets/slideshow/hastings_kitchen_makeover.jpg",
  "/assets/slideshow/home_design.jpg",
  "/assets/slideshow/off_white_retro_red.jpg",
  "/assets/slideshow/white_blue_brass_bronx.jpg",
];

function GlideCarousel(){
    const glideRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const glide = new Glide(glideRef.current);
        if (!glide) return;

        glide.mount();

        return () => glide.destroy();
    });

    return (
    <div className="glide overflow-hidden" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
                {/* photo slides as list elements  */}
                {carouselImgs.map((src, index) => (
                    <li className="glide__slide flex items-center justify-center" key={index}>
                        <img src={src} alt={`Photo ${index + 1}`} className="w-[95vw] h-[50vh] sm:h-[70vh]" />
                    </li>
                ))}
            </ul>
        </div>

        {/* Optional Navigation */}
        <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left " data-glide-dir="<">‹</button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">›</button>
        </div>
    </div>
    );
}

function Home(){
    return (<>
        <GlideCarousel/>

        {/* Expert Design & Installation */}
        <div className="lg:py-16 px-2 md:px-12 flex h-auto w-full flex-col items-center justify-center text-left text-white lg:w-auto lg:flex-row">
            <h1 className="py-3 lg:py-12 flex w-full h-full items-start lg:w-1/3 max-w-screen tracking-[0.2em] text-4xl">
                EXPERT DESIGN & INSTALLATION
            </h1>
            <p className="h-auto text-3xl tracking-wider max-w-screen w-full lg:w-2/3">
                <b>FitzPatrick Design is an eight-times winner of the Best of Houzz
                    award.</b>
                We are a team of seasoned cabinet installers and designers with
                experience installing cabinets from all major brands. We will order and
                or build your cabinets, working with professionals in stone dealing,
                contracting, and architecture.
            </p>
        </div>

        {/* Kitchen Design and Construction  */}
        <div className="flex flex-col lg:flex-row pb-8">
            <img className="w-full resize-none object-cover p-2 md:w-1/2 md:pl-12"
                src="/assets/slideshow/white_blue_brass_bronx.jpg" />

            <div className="flex w-full flex-col justify-center p-2 text-white lg:w-1/2 md:px-12">
                <h1 className="pb-3 sm:pb-12 text-3xl lg:text-4xl tracking-[0.2em] md:text-5xl">
                    KITCHEN MOCKUPS & 3D RENDERINGS
                </h1>
                <p className="text-2xl tracking-wider md:text-3xl">
                    <b>Christine FitzPatrick is a graduate of the Culinary Institute of
                        America</b>, using her extensive culinary background to help homeowners design
                    their dream kitchen. Using color 3D renderings, you can preview
                    exactly what your space will look like before installation.
                </p>
            </div>
        </div>

        {/* Bathroom Design & Construction */}
        <div className="flex flex-col lg:flex-row">
            <div className="flex w-full lg:w-2/3 flex-col justify-center text-white px-2 md:px-12">
                <h1 className="pb-3 sm:pb-12 text-3xl lg:text-4xl tracking-[0.2em] md:text-5xl">
                    BATHROOM DESIGN & CONSTRUCTION
                </h1>
                <p className="pb-0 lg:pb-12 text-2xl tracking-wider md:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <img className="w-full lg:w-1/3 p-3 lg:pl-0 resize-none object-cover" src="/assets/bathroom_demo.jpg" />
        </div>
    </>);
}

export default Home;