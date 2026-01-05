import Carousel from "./carousel";

/**
 * Note to self: the project folders of /projects/.../project_name each contain
 * a cover.jpg and images titled s1.jpg to s#.jpg where numSlides = # (exludes the cover image)
 */

function Projects(){
    type Project = {
        title: string,
        basePath: string,
        numSlides: number
    };
    const whiteKitchenProjects: Project[] = [
        {
            title: "Bright Bronxville Transitional",
            basePath: "/white_kitchens/bronxville_bright/",
            numSlides: 21
        },
        {
            title: "Charming Black and White in Chappaqua",
            basePath: "/white_kitchens/chappaqua_black_white/",
            numSlides: 13
        },
        {
            title: "Classic White Inset Kitchen in Larchmont",
            basePath: "/white_kitchens/classic_white_larchmont/",
            numSlides: 9
        },
        {
            title: "Contemporary White Kitchen in Scarsdale",
            basePath: "/white_kitchens/contemporary_white/",
            numSlides: 27
        },
        {
            title: "Contemporary White High Gloss and Wenge in Scarsdale",
            basePath: "/white_kitchens/gloss_and_wenge/",
            numSlides: 19
        },
        {
            title: "Hastings Kitchen Makeover",
            basePath: "/white_kitchens/hastings_makeover/",
            numSlides: 29
        },
        {
            title: "Light and Airy in Bronxville",
            basePath: "/white_kitchens/light_bronxville/",
            numSlides: 34
        },
        {
            title: "Bronxville Off-White Open Kitchen",
            basePath: "/white_kitchens/off_white_bronxville/",
            numSlides:27
        },
        {
            title: "Off-White and Retro Red Accented Kitchen",
            basePath: "/white_kitchens/off_white_retro/",
            numSlides: 28
        },
        {
            title: "White, Blue, and Brass in Bronxville",
            basePath: "/white_kitchens/white_brass_bronxville/",
            numSlides: 33
        },
        {
            title: "Transitional White Kitchen in Pelham Manor",
            basePath: "/white_kitchens/pelham_manor/",
            numSlides: 19
        },
    ];
    const woodKitchenProjects: Project[] = [
        {
            title: "Stained Beech and Painted Maple in Rye",
            basePath: "/wood_kitchens/stained_beech_maple/",
            numSlides: 26
        },
        {
            title: "Bonnie Crest Kitchen with Wavy Glass Uppers",
            basePath: "/wood_kitchens/bonnie_crest_wavy/",
            numSlides: 16
        }
    ];
    return <>
    <div className="flex w-full flex-wrap pt-6 px-2 md:px-12">
        {/* White Kitchen Projects */}
        <h1 className="w-full h-fit text-white font-extrabold text-2xl sm:text-4xl">
            WHITE KITCHENS
        </h1>
        <hr className="bg-white h-0.5 w-full mt-2 mb-6"/>
        {whiteKitchenProjects.map((project, index) => (
            <ProjectPanel title={project.title} basePath={project.basePath} numSlides={project.numSlides} key={index}/>
        ))}

        {/* Stained Wood Kitchen Projects  */}
        <h1 className="w-full h-fit text-white font-extrabold text-2xl sm:text-4xl mt-8">
            STAINED WOOD KITCHENS
        </h1>
        <hr className="bg-white h-0.5 w-full mt-2 mb-6"/>
        {woodKitchenProjects.map((project, index) => (
            <ProjectPanel title={project.title} basePath={project.basePath} numSlides={project.numSlides} key={index}/>
        ))} 
    </div>
    </>;
}

function ProjectPanel({title, basePath, numSlides}: {title: string, basePath: string, numSlides: number}){
    const imagePaths: string[] = [];
    imagePaths.push(`/projects/${basePath}cover.jpg`);
    for (let index = 1; index <= numSlides; index++){
        imagePaths.push(`/projects/${basePath}s${index}.jpg`);
    }
    return <>
    <div className="p-1 rounded-xl shadow-2xl flex mb-8 flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-xl font-bold hover:underline tracking-widest">{title.toUpperCase()}</h1>
        <Carousel imagePaths={imagePaths} classStyles="rounded-xl object-contain aspect-square w-[95%] h-[95%]"/>
    </div>
    </>;
}

export default Projects;