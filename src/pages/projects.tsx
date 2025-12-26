import Carousel from "./carousel";

function Projects(){
    type Project = {
        title: string,
        basePath: string,
        numSlides: number
    };
    const whiteKitchenProjects: Project[] = [
        {
            title: "Bright Bronxville Transitional",
            basePath: "/projects/bronxville_bright/",
            numSlides: 21
        },
        {
            title: "Charming Black and White in Chappaqua",
            basePath: "/projects/chappaqua_black_white/",
            numSlides: 13
        },
        {
            title: "Classic White Inset Kitchen in Larchmont",
            basePath: "/projects/classic_white_larchmont/",
            numSlides: 9
        },
        {
            title: "Contemporary White Kitchen in Scarsdale",
            basePath: "/projects/contemporary_white/",
            numSlides: 27
        },
        {
            title: "Contemporary White High Gloss and Wenge in Scarsdale",
            basePath: "/projects/gloss_and_wenge/",
            numSlides: 19
        },
        {
            title: "Hastings Kitchen Makeover",
            basePath: "/projects/hastings_makeover/",
            numSlides: 29
        },
        {
            title: "Light and Airy in Bronxville",
            basePath: "/projects/light_bronxville/",
            numSlides: 34
        },
        {
            title: "Bronxville Off-White Open Kitchen",
            basePath: "/projects/off_white_bronxville/",
            numSlides:27
        },
        {
            title: "Off-White and Retro Red Accented Kitchen",
            basePath: "/projects/off_white_retro/",
            numSlides: 28
        },
        {
            title: "White, Blue, and Brass in Bronxville",
            basePath: "/projects/white_brass_bronxville/",
            numSlides: 33
        },
        {
            title: "Transitional White Kitchen in Pelham Manor",
            basePath: "/projects/pelham_manor/",
            numSlides: 19
        },
    ];

    // const woodKitchenProjects: Project[] = [
    //     {
    //         title: "Stained Beech and Painted Maple in Rye",
    //         basePath: "/projects/beech_maple_rye/",
    //         numSlides: 33
    //     },
    // ];


    return <>
    <div className="flex w-full flex-wrap pt-6 px-2 md:px-12">

        {/* White Kitchen Projects */}
        <h1 className="w-full h-fit text-white font-extrabold text-2xl sm:text-4xl">
            White Kitchens
        </h1>
        <hr className="bg-white h-0.5 w-full mt-2 mb-6"/>
        {whiteKitchenProjects.map((project, index) => (
            <ProjectPanel title={project.title} basePath={project.basePath} numSlides={project.numSlides} key={index}/>
        ))}

        {/* Stained Wood Kitchen Projects  */}
        {/* <h1 className="w-full h-fit text-white font-extrabold text-2xl sm:text-4xl mt-8">
            Stained Wood Kitchens
        </h1>
        <hr className="bg-white h-0.5 w-full mt-2 mb-6"/>
        {woodKitchenProjects.map((project, index) => (
            <ProjectPanel title={project.title} basePath={project.basePath} numSlides={project.numSlides} key={index}/>
        ))} */}
    </div>
    </>;
}

function ProjectPanel({title, basePath, numSlides}: {title: string, basePath: string, numSlides: number}){
    const imagePaths: string[] = [];
    imagePaths.push(basePath + "cover.jpg")
    for (let index = 1; index < numSlides; index++){
        imagePaths.push(basePath + `s${index}.jpg`);
    }
    return <>
    <div className="appearance-none flex mb-8 flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-md font-bold hover:underline">{title}</h1>
        <Carousel imagePaths={imagePaths} classStyles="rounded-xl aspect-square w-[95%] h-[95%]"/>
    </div>
    </>;
}

export default Projects;