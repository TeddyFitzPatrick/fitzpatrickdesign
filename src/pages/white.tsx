import { ProjectPanel, type Project } from "./projects";

export default function White(){
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
    return <>
        <div className="flex w-full flex-wrap pt-6 px-2 md:px-12">
            {/* White Kitchen Projects */}
            <h1 className="w-full h-fit text-white font-extrabold text-2xl sm:text-4xl border-b-2 pb-2 mb-6">
                WHITE KITCHENS
            </h1>
            {/* White Kitchen Project Slideshows  */}
            <div className="paneled">
                {whiteKitchenProjects.map((project, index) => (
                    <ProjectPanel title={project.title} basePath={project.basePath} numSlides={project.numSlides} key={index}/>
                ))}
            </div>
        </div>
    </>
}