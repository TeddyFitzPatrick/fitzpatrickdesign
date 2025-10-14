function Projects(){
    return (<div className="flex h-auto w-full flex-wrap pt-6 px-2 md:px-12">
        <ProjectPanel 
        title="Charming Black and White in Chappaqua" 
        imgPath="/assets/projects/chappaqua_black_white/cover.jpg"/>

        <ProjectPanel
        title="Off-White and Retro Red Accented Kitchen"
        imgPath="/assets/projects/off_white_retro/cover.jpg"/>

        <ProjectPanel
        title="Light and Airy in Bronxville"
        imgPath="/assets/projects/light_bronxville/cover.jpg"/>

        <ProjectPanel
        title="Contemporary White Kitchen in Scarsdale"
        imgPath="/assets/projects/contemporary_white/cover.jpg"/>

        <ProjectPanel
        title="Hastings Kitchen Makeover"
        imgPath="/assets/projects/hastings_makeover/cover.jpg"/>

        <ProjectPanel
        title="White, Blue, and Brass in Bronxville"
        imgPath="/assets/projects/white_brass_bronxville/cover.jpg"/>

        <ProjectPanel
        title="Contemporary White High Gloss and Wenge in Scarsdale"
        imgPath="/assets/projects/gloss_and_wenge/cover.jpg"/>

        <ProjectPanel
        title="Transitional White Kitchen in Pelham Manor"
        imgPath="/assets/projects/pelham_manor/cover.jpg"/>

        <ProjectPanel
        title="Bronxville Off-White Open Kitchen"
        imgPath="/assets/projects/off_white_bronxville/cover.jpg"/>

        <ProjectPanel
        title="Bright Bronxville Transitional"
        imgPath="/assets/projects/bronxville_bright/cover.jpg"/>

        <ProjectPanel
        title="Stained Beech and Painted Maple in Rye"
        imgPath="/assets/projects/beech_maple_rye/cover.jpg"/>

        <ProjectPanel
        title="Classic White Inset Kitchen in Larchmont"
        imgPath="/assets/projects/classic_white_larchmont/cover.jpg"/>
    </div>);
}

function ProjectPanel({title, imgPath}: {title: string, imgPath: string}){
    return (
        <button className="appearance-none flex mb-8 flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-md font-bold hover:underline">{title}</h1>
            <img className="rounded-xl aspect-square w-[95%] h-[95%]" src={imgPath} alt="kitchen photo" />   
        </button>
    );
}

export default Projects;