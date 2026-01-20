import { ProjectPanel, type Project } from "./projects";
export default function Wood(){
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
            {/* Stained Wood Kitchen Projects  */}
            <h1 className="w-full h-fit text-white font-extrabold text-2xl sm:text-4xl mt-8 border-b-2 pb-2 mb-6">
                STAINED WOOD KITCHENS
            </h1>
            {/* Wood Kitchen Project Slideshows */}
            <div className="paneled">
                {woodKitchenProjects.map((project, index) => (
                    <ProjectPanel title={project.title} basePath={project.basePath} numSlides={project.numSlides} key={index}/>
                ))} 
            </div>
        </div>
    </>
}