function About(){

    const reviews: Record<string, string> = {
        "S R": `Christine and Edward of Fitzpatrick Designs did an amazing job on our kitchen redesign. From the
first meeting to the final day they were thoughtful, responsive and actively involved. They are a
pleasure to work with – the entire process was painless (and that’s saying a lot for a full kitchen
reno.) The design was executed perfectly, on time and on budget. We started with a dark, interior
kitchen from the 50’s and ended with a bright, cheerful space that perfectly suits our family’s needs.
Edward’s cabinet installation was meticulous and done with great pride. The fact that they are locally
based is a strong plus as well. We very strongly recommend Christine and Edward for your project.
They are a great team.`,
        "scough": `Over the past 10 years Ed has helped me with nunerous custom projects in 3 diff homes - fixing
kitchen cabinetry and molding after a leak, creating addtl cabinetry to match existing kitchen and
repairing various items. Quality work - always done efficiently and honestly and with a smile. Local
roots in community are a plus!`,
        "HU-910888391": `The complete replacement of our kitchen cabinets was done professionally. Care was taken at every
step and our wishes for the design and materials was respected and used. They are a pleasure to
work with. We recommend them to all.`,
        "360 Painting Monmouth County": `Christine and the rest of the FitzPatrick team did an amazing job on our kitchen redesign. She
suggested some ideas that transformed our kitchen/Greatroom into something we had never
imagined. The job was done on time and on budget and we would strongly recommend Christine for
your next project.`,
        "Paul Jancski": `Moving on to our latest home improvement project, we did not hesitate to call FitzPatrick Design
again. Our prior experience made this an easy decision. For all other decisions we had Edward and
Christine’s professional help and support. This was a smaller project than the first two but they gave
it their usual attention. Ps, the color choice was perfect! Thanks`,
        "Sam G": `Our project involved completely redoing our kitchen while retaining the original footprint and
appliances we inherited when we purchased our house. From the first meeting, Edward and
Christine were meticulous with details, measurements, color, and design specifications regarding our
cabinets. Christine quickly understood the aesthetic I was shooting for from the Houzz photos I
shared and was able to make suggestions about other design aspects of the kitchen although she
was clear that her expertise pertained to the cabinetry. She helped me source a new sink and
microwave, weighed in on my hardware and lighting selections, and recommended an excellent
counter stone company in my area. Likewise, Edward excelled in his domain: installing our cabinets
and fitting all of the interior shelving. He is a perfectionist about his role, as his wife is about hers --
together they are a solid team who took pride in executing my vision. Our project had minor snaffus
that Edward and Christine remedied in a straightforward manner. My only critique would be that I
sometimes felt a little unsure of what needed to happen next: I think it would have been helpful to
have a written timeline with an explanation of all the steps, and what I needed to do when. I
eventually figured all of this out, but I think Christine could have taught me more about the process
up-front and then communicated proactively throughout. That said, whenever I had an issue or
concern, Christine was responsive and helpful, and she did have several outbound emails and texts
to me. My family and I are thrilled with our new gorgeous kitchen; our cabinets are beautiful, sturdy,
and functional. I highly recommend Christine and Edward to your family.`,
        "laura_sonnenfeld": `FitzPatrick Design did the original installation of my cabinets several years ago. Occasionally I've
needed adjustments and they are always very responsive. I would definitely use them again for
future projects.`,
        "cbgcv": `We worked with FitzPatrick Design on the design and custom build of our kitchen. It was a pleasure
working with Christine and Edward. They gave us great ideas on the design, both in terms of
aesthetics - our kitchen is contemporary with clean lines, and practicality. We love how functional
and easy to use everything is; we have a lot of windows in our kitchen and hence not much space
for top cabinets. Christine put a lot of time and thought into laying out the cabinets so all available
space is used in the most efficient manner, literally not wasting an inch. The execution and
installation were also done quickly and professionally by Edward - everything looks and works great.
They designed a custom hood for us which is exactly what we had in mind. We had also chosen
flush installation for our appliances, which is pretty challenging to execute, and Christine and Edward
ensured that everything fitted in seamlessly with the cabinetry. We would work with them again on
any cabinets or built-ins we decide to add to our home. They are a great team!`,
        "John G": `I write this review with a big smile on my face. My new kitchen turned out absolutely stylish,
magazine quality, and functional and for that, I deeply give credit to Christine and Edward of
Fitzpatrick Design and Cabinetry. They are AMAZING!!! Christine is top notch designer and her
projects reflect her professionalism and skills. I had an idea and she made it a reality. Ed is the best
master carpenter around and his custom-fit kitchen cabinets installation was beyond perfection. I
highly recommend Fitzpatrick Design and Cabinetry for the best quality project designs and custom-
fit cabinetry installations and for excellent results and service. Thank you so much Christine and
Edward. Best wishes for continued success from John G.`,
        "kerrie king": `I am so happy to write a review of my experience with Fitzpatrick Design and Cabinetry .. I needed
to have my kitchen remolded and was completely overwhelmed at the prospect of having to do it.
Christine and Edward made the entire process not only stress free ( well as stress free as a
renovation can be ... it is never completely stress free) but an enjoyable experience as well .
Christine was constantly coming up with new ideas but even more important she would listen to my
ideas and help me make the most practical decision. It was such a relief to come in so close to my
budget of $75,000.00 . All my friends told me that never happens. I think this did happen because
,as I said before, both Christine and Edward listen to what I wanted and would tell me if I could afford
it within my budget and if not that would come up with excellent alternatives . I was so pleased with
my kitchen I also had Edward ( who is a master carpenter) do some bookcases for me. His
knowledge of wood and wood finishes is excellent and so hard to find in this day and age..`,
        "Alison Renson": `LOVE our townhouse kitchen designed and built by Christine and Edward a couple of years ago.
Edward's custom kitchens are sturdy, versatile and just beautiful. Ours has weathered the time so far
perfectly and we couldn't be more pleased with the results. We are grateful to them both for their
combined experience and expertise!`,
        "Brigid Boettcher": `FitzPatrick Design recently remodeled our kitchen in CT. They listened carefully to our wishes and
opinions and came up with a couple of options. We edited one option, basically a white and green
plan (northern exposure - dark room). These people have 20 plus years of experience in installation.
It shows in the careful workmanship. Minor problems were corrected to our satisfaction. All in all this
was an excellent, professional job. We encourage anyone to consider Fitzpatrick Design.`,
        "Catherine Zinger": `It's rare you find design professionals like Fitzpatrick Design who "get it" from the word GO. Most
designers in American suburbs like Westchester, NY specialise in classic or traditional design versus
the clean, modern aesthetic more commonly found in major cities or European kitchens. Christine
had an intuitive sense of my very specific design objectives and worked closely with me to achieve
the perfect "modern organic" look without it feeling clinical or cold. Since I live in London, Christine
went above and beyond normal project parameters -- going so far as to source European appliances
as well as rare, raw-edged wood that perfectly contrasts the stark lines of the rest of the kitchen. As
pure bonus, Christine is excellent at client relations. She's no-nonsense, responsive, makes
suggestions within budget and has a keen eye for colour, space, texture and design. Ed's expertise
in wood and cabinetry and his vast knowledge and experience in working with a variety of materials
makes Fitzpatrick Designs a clear stand-out amongst any other kitchen & cabinet design company
out there.`,
        "Sue Childs": `Christine of Fitzpatrick design did a wonderful job on our kitchen design and cabinetry. She is calm,
creative, responsive and particular about the little details that make a kitchen special. We couldn't be
happier with the results and recommend her highly.`,
        "ely711": `Christine and Ed are a delight to work with. Reliable and diligent, they will make recommendations
yet design a kitchen with functionality and style suited to your needs and requirements. We were
referred to them by our friends and have recommended them to ours.`,
        "kouzouli": `Christine designed, and Edward installed the kitchen of my dreams! She was sensitive and realistic
about what I need in my kitchen, both practically and aesthetically. He was efficient, courteous and
timely with the installation. Both were fair, honest, and delightful to work with. They are a great team!`,
        "vfcdc": `Fitzpatrick Design has done many projects for us over the last 12 years. Their attention to detail,
care, concern for the outcome and quality has proven to be of great value for my company over the
years. Our clients love to work with them and I highly recommend using them.`,
        "christinerandolph": `Ed Fitzpatrick installed my new kitchen several years ago. His excellent craftsmanship and attention
to detail were complemented by a professional demeanor. As a testament to the high quality of work,
my kitchen still looks brand new and I have not experienced any problems.`,
        "porchman": `Ed Fitzpatrick restored the porch of our 1883 house. It looks like the day the first owner walked
through the front door. He assembled a team of craftsmen that understood old houses; found an 80
year old craftsman who copied the 6 column bases in mahogany on a 75 year old lathe; made sure
all the structural elements were in place and everything was plum , so this great old house would last
for another 100 years. Not anyone can work on an old house. I think they have to feel it. Care about
it. Ed's enthusiasm to do it right is something you don't find often. We are happy to have finally found
him and plan to work with him this Spring.`,
        "tedstorm": `I recommend FitzPatrick Design, Inc. as an honest & trustworthy contractor. The interest and wishes
of the customer are always considered highest priority. Ted H. Storm Larchmont`,
        "rneschis": `Edward FitzPatrick is knowledgeable about wood and its many varieties, thoughtful about what can
be done with those choices of woods, and skillful at putting his plans into effect. He's done many
different projects both inside and outside of my old house (the largest, a cedar closet), always with
great care and talent. R. Neschis`,
        "runger571": `Fitzpatrick Design is a wonderful company to work with. i have worked with them on several of their
projects, supplying the kitchen appliances, and their attention to detail and follow thru is terrific. I
have only heard excellent comments from their clients throughout the completion of the projects. I
would certainly recommend them for a kitchen renovation anytime.`,
        "michaelbucci": `Ed Fitzpatrick & his firm repaired our 800 square foot, 120 year-old wooden front porch. (We had
used several people/companies before him, none able to do a satisfactory job). The work of
FitzPatrick Design was exceptional. Timely, reasonably priced, and...most important of all...an
exquisite result!!! Ed is a master craftsman, and will not settle for anything less than perfection.`,
        "kjancski": `We used Fitzpatrick Designs to renovate a very outdated kitchen in our house, and were extremely
pleased with the results. Christine is a trained and accomplished chef, and Edward an experienced,
knowledgeable and detail-oriented fine carpenter. That means with Fitzpatrick Designs, you not only
get an expert in the design and installation of kitchens, you get an expert in how a kitchen is used.
They came up with ideas we didn't think of, and probably stopped us from making some mistakes.
The process was painless and the work timely and professional. I highly recommend Fitzpatrick
Designs!`,
        "davidbcase": `Christine and Ed FitzPatrick designed and executed the kitchen in our new townhouse last year. The
project involved combining the dining room and the kitchen with nothing old left behind. Not only was
the outcome dazzling esthetically, but the functionality is everything that we wanted. We worked
closely and cordially with the FitzPatricks all the way across the finish line. In addition, they designed
and constructed a library/video room/bar which draws praise from everyone.`,
        "Sean Jancski Landscape Architects LLC": `Fitzpatrick Design installed (and designed) our entire kitchen. The kitchen was installed almost 7
years ago (time flies) and it looks as good today as it did when they installed it. Very satisfied with
the look and quality. Highly recommended!`,
        "acctpro66": `Very professional to work with and committed to customer satisfaction. The continuity this company
provided from start to finish was refreshing. Being able to communicate and coordinate all aspects of
design, installation, and completion with the same person is invaluable in this line of work. Seemless
transition from concept to finished product.`,
        "petedes": `Edward and Christine FitzPatrick designed and installed my kitchen. They made the design process
much easier than I thought it would be and showed me many different floor plan options. Edward’s
installation was flawless and we have been enjoying our kitchen ever since. I would recommend FD
to anyone who wants a beautiful, functional kitchen. Peter DeSimone, Homeowner`,
        "E.C. McDonald": `Our second kitchen was completed by the Fitzpatricks last year. The beach house kitchen needed a
design that fit in with the rustic interior. Their design incorporated up to date quality cabinets and
appliances with original cottage features. As usual, a job well done!`,
        "sleddy66": `Edward FitzPatrick of FitzPatrick designs is a pleasure to work with. He takes great pride in his
craftsmanship and his attention to detail really shows in his work. Through the entire process,
communication was excellent. Ed is both punctual and organized. My wife and I are extremely
pleased with with our new kitchen and would never consider using any other contractor for future
projects. With the thousands of contractors out there, Ed has really superseded our expectations
and sets himself apart from the rest.`
    };

    return <div className="flex items-center flex-col">
        {/* Christine Photo and Title  */}
        <div className="flex h-1/2 flex-col justify-center md:flex-row">
            <img className="py-0 md:py-12 px-4 sm:px-12 md:pl-24 md:pr-0" src="/christine_fitzpatrick.png" />
            
            <div className="w-full p-8 md:w-2/5 flex justify-center items-center">
                <h1 className="tracking-[0.2em] text-2xl md:text-4xl">
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
        <h1 className="pb-2 my-12 text-4xl font-bold tracking-wide text-center w-fit">
            Our proven record of success:
        </h1>

        {/* Record of success quotes grid */}
        <div className="paneled px-4 md:px-8">
            {Object.keys(reviews).sort((keyA, keyB) => {return reviews[keyB].length - reviews[keyA].length}).map((clientName, index) => 
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl p-4 shadow-2xl border-x-4 border-white max-h-128 overflow-y-auto" key={index}>
                    <h1 className="py-2 text-4xl font-extrabold underline">{clientName}</h1>
                    <p className="text-xl lg:text-2xl">
                        "{reviews[clientName]}"
                    </p>
                    {/* <a className="text-xl font-bold hover:underline" href={reviewURL}>Read More...</a> */}
                </div>
            )}
        </div>
    </div>
}

export default About;