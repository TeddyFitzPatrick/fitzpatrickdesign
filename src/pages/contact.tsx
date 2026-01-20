function Contact(){
    return <>
        <div className="flex flex-col text-xl space-y-4 w-full h-[100vh] items-center">
            <div className="flex flex-col space-y-2">
                <h1 className="text-2xl md:text-7xl tracking-[0.1em] my-6">Contact</h1>
                <ContactMethod imgSrc="/svg/pinpoint.svg" text="Larchmont, NY 10538"/>
                <ContactMethod imgSrc="/svg/phone_icon.svg" text="(914) 500-5232"/>
                <ContactMethod imgSrc="/svg/mail.svg" text="info@fitzpatrickdesigninc.com"/>
                <div className="flex flex-row items-center">
                    <img src={"/svg/houzz.svg"} className="w-6 h-6 fill-white stroke-white mr-2"/>
                    <a target="_blank" href="https://www.houzz.com/professionals/kitchen-and-bath-designers/fitzpatrick-design-and-cabinetry-pfvwus-pf~251686724" 
                        className="tracking-[0.05em] hover:underline">Houzz</a>
                </div>

            </div>
        </div>  
    </>
}

export function ContactMethod({imgSrc, text}: {imgSrc: string, text: string}){
    return <>
        <div className="flex flex-row items-center space-x-2">
            <img src={imgSrc} className="w-6 h-6 fill-white stroke-white"/>
            <a className="tracking-[0.05em]">{text}</a>
        </div>
    </>
}

export default Contact;