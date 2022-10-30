// usage: Image[src, alt]
// lazy by default
// style: --image-padding-bottom % for aspect-ratio, object-fit for fitting

import { useEffect, useRef } from 'react';
import createStyle from '../libs/createStyle';
import './trds-loader.css';
import '../layout/$layout.css';
import TrdsIntersectionObserver from '../libs/IntersectionObserver';

createStyle(`

    trds-image{
        display: block;
        width: 100%;
        max-width: var(--element--max-width);
        position: relative;
        object-fit: contain;
        object-position: center center;
        --image-padding-bottom: 56.25%;
    }

    trds-image aspect-ratio-box{
        padding-bottom: var(--image-padding-bottom);
        display: block;
        box-sizing: border-box;
    }

    trds-image img{
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
    const LoaderElement = useRef();

    useEffect(() => {

        const $image = ImageElement.current;
        const $loader = LoaderElement.current;

        $image.addEventListener('load', () => {
            requestAnimationFrame(() => {requestAnimationFrame(() => { 
                $loader.removeAttribute('active');
            })});
        });

        $image.intersecting = () => $image.src = src;

        TrdsIntersectionObserver.observe($image);
        
    });

    return(
        <trds-image class={className} {...rest}>
            <trds-loader active ref={LoaderElement}/>
            <aspect-ratio-box></aspect-ratio-box>
            <img ref={ImageElement} alt={alt} />
        </trds-image>
    )

}