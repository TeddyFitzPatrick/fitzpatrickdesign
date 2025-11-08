function About(){
    return (<>
    {/* Christine Photo and Title  */}
    <div className="flex h-1/2 flex-col justify-center md:flex-row">
        <img className="py-12 pl-12 pr-12 md:pl-24 md:pr-0" src="/christine_fitzpatrick.png" />
        <div className="flex h-auto w-full flex-col justify-center pl-12 md:w-2/5">
            <h1 className="pb-12 text-2xl tracking-[0.2em] md:text-4xl">
                Delivering the best design and service in the industry for over two decades.
            </h1>
        </div>
    </div>
    
    {/* Quote */}
    <div className="flex h-64 w-full flex-col items-center justify-center space-y-3 bg-slate-600 text-center">
        <p className="p-4 sm:p-0 text-4xl font-light tracking-wider">
            "the kitchen in my home is to die for"
        </p>
        <p className="text-2xl tracking-[0.2em]">MARTHA BOUCHER</p>
    </div>

    {/* Proven record of success title  */}
    <h1 className="px-4 pb-4 pt-20 text-center text-4xl font-bold tracking-wide">
        Our proven record of success
    </h1>

    {/* Record of success quotes grid */}
    <div className="flex flex-wrap px-4 md:px-12 lg:px-24">
        {/* S R Review */}
        <Review clientName="S R:" clientReview="
            Christine and Edward of Fitzpatrick Designs did an amazing job on our
            kitchen redesign. From the first meeting to the final day they were
            thoughtful, responsive and actively involved. They are a pleasure to
            work with – the entire process was painless (and that’s saying a lot
            for a full kitchen reno.) The design was executed perfectly, on time
            and on budget. We started with a dark, interior kitchen from the 50’s
            and ended with a bright, cheerful space that perfectly suits our
            family’s needs. Edward’s cabinet installation was meticulous and done
            with great pride. The fact that they are locally based is a strong
            plus as well. We very strongly recommend Christine and Edward for your
            project. They are a great team.
        "
        reviewURL = "https://www.houzz.com/viewReview/1303743/s-r"/>

        {/* Satisfied Client #1  */}
        <Review clientName="Satisfied Client" clientReview="
            Over the past 10 years Ed has helped me with nunerous custom projects
            in 3 diff homes - fixing kitchen cabinetry and molding after a leak,
            creating addtl cabinetry to match existing kitchen and repairing
            various items. Quality work - always done efficiently and honestly and
            with a smile. Local roots in community are a plus!
        "
        reviewURL = "https://www.houzz.com/viewReview/1163482/"/>

        {/* Satisfied Client #2 */}
        <Review clientName="Satisfied Client" clientReview="
            The complete replacement of our kitchen cabinets was done
            professionally. Care was taken at every step and our wishes for the
            design and materials was respected and used. They are a pleasure to
            work with. We recommend them to all.
        " 
        reviewURL = "https://www.houzz.com/viewReview/1163482/"/>

        {/* 360 Painting Monmouth County */}
        <Review clientName="360 Painting Monmouth County:" clientReview="
            Christine and the rest of the FitzPatrick team did an amazing job on
            our kitchen redesign. She suggested some ideas that transformed our
            kitchen/Greatroom into something we had never imagined. The job was
            done on time and on budget and we would strongly recommend Christine
            for your next project.
        "
        reviewURL = "https://www.houzz.com/viewReview/1090877/360-painting%20monmouth%20county"/>

        {/* Paul Jancski's Review */}
        <Review clientName="Paul Jancski" clientReview="
            Fitzpatrick design and cabinetry designed and managed every detail of
            my new kitchen. The completed project exceeded my expectations and is
            admired by friends and family.
        " 
        reviewURL="https://www.houzz.com/viewReview/1717454/paul-jancski"/>
    </div>

    </>);
}

function Review({clientName, clientReview, reviewURL}: {clientName: string, clientReview: string, reviewURL: string}){
    return (<>
        <div className="w-full p-8 lg:w-1/2 xl:w-1/4">
            <h1 className="py-2 text-3xl font-bold">{clientName}</h1>
            <p className="text-xl">
                "{clientReview}"
            </p>
            <a className="text-xl font-bold hover:underline" href={reviewURL}>Read More...</a>
        </div>
    </>);
}

export default About;