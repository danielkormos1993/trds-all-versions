import { useEffect, useRef } from 'react';
import createStyle from '../libs/createStyle';

createStyle(`

    .image{
        display: block;
        width: 100%;
        max-width: var(--element--max-width);
        position: relative;
        object-fit: contain;
        object-position: center center;
        --image-padding-bottom: 56.25%;
    }

    .image aspect-ratio-box{
        padding-bottom: var(--image-padding-bottom);
        display: block;
        box-sizing: border-box;
    }

    .image img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: inherit;
        object-position: inherit;
    }

`);

export default function Image({className, src, alt, ...rest}){

    const ImageElement = useRef();
    const [isLoaded,setIsLoaded] = useEffect(false);

    useEffect(() => {

        ImageElement.current.addEventListener('load', () => {
            requestAnimationFrame(() => {requestAnimationFrame(() => { 
                setIsLoaded(true);
            })});
        });
        
    }, [])

    return(
        <div className={`image ${className}`} {...rest}>
            <trds-loader {...isLoaded && {'active':''}}/>
            <aspect-ratio-box></aspect-ratio-box>
            <img ref={ImageElement} src={src} alt={alt}></img>
        </div>
    )

}