import { useRef, useEffect } from "react"; 

// @ts-ignore
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

export default function Carousel ({imagePaths, classStyles}: {imagePaths: string[], classStyles: string | undefined}){
    const glideRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const glide = new Glide(glideRef.current);
        if (!glide) return;
        glide.mount();
        return () => glide.destroy();
    });
    return (
    <div className="glide overflow-hidden" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
                {/* photo slides as list elements  */}
                {imagePaths.map((src, index) => (
                    <li className="glide__slide flex items-center justify-center" key={index}>
                        <img src={src} alt={`Photo ${index + 1}`} className={classStyles} />
                    </li>
                ))}
            </ul>
        </div>

        {/* Optional Navigation */}
        <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left " data-glide-dir="<">‹</button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">›</button>
        </div>
    </div>
    );
}