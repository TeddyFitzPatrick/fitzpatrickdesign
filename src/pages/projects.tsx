import Carousel from "./carousel";

/**
 * Note to self: the project folders of /projects/.../project_name each contain
 * a cover.jpg and images titled s1.jpg to s#.jpg where numSlides = # (exludes the cover image)
 */
export type Project = {
    title: string,
    basePath: string,
    numSlides: number
};

export function ProjectPanel({title, basePath, numSlides}: {title: string, basePath: string, numSlides: number}){
    const imagePaths: string[] = [];
    imagePaths.push(`/projects/${basePath}cover.jpg`);
    for (let index = 1; index <= numSlides; index++){
        imagePaths.push(`/projects/${basePath}s${index}.jpg`);
    }
    return <>
    <div className="p-2 sm:p-4 border-2 border-y-0 border-white rounded-xl shadow-2xl flex flex-col justify-between items-center ">
        <h1 className="text-xl font-bold hover:underline tracking-widest">{title.toUpperCase()}</h1>
        <Carousel imagePaths={imagePaths} classStyles="rounded-xl object-contain aspect-square w-full h-full"/>
    </div>
    </>;
}