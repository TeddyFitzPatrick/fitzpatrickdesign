function Contacts(){
    return <>
        <div className="flex flex-col text-xl space-y-4 w-full h-[50vh] items-center">
            <h1 className="pb-6 text-4xl md:text-6xl tracking-[0.2em]">Contacts</h1>
        
            <div className="flex flex-row items-center">
                <img src="/assets/svg/pinpoint.svg" className="w-6 h-6 fill-cyan-500 mr-2"/>
                <a target="_blank" href="https://maps.app.goo.gl/1ZY5ScefcBgpdptd9" className="font-bold hover:underline hover:text-cyan-400">Larchmont, NY 10538</a>
            </div>

            <div className="flex flex-row items-center">
                <img src="/assets/svg/phone_icon.svg" className="w-6 h-6 fill-cyan-500 mr-2"/>
                <p className="font-bold">(914) 500-5232</p>
            </div>

            <div className="flex flex-row items-center">
                <img src="/assets/svg/mail.svg" className="w-6 h-6 fill-cyan-500 mr-2"/>
                <a className="font-bold tracking-[0.05em]">info@fitzpatrickdesigninc.com</a>
            </div>
        </div>  
    </>
}

export default Contacts;