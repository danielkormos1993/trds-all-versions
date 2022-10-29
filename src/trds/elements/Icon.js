import { useEffect, useRef } from 'react';
import createStyle from '../libs/createStyle';

createStyle(`

    i{
        display: block;
        width: 1em;
        height: 1em;
        background: currentColor;
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position: center center;
        mask-position: center center;
        -webkit-mask-image: var(--icon);
        mask-image: var(--icon);
    }

`);

export default function Icon({icon, ...rest}){

    const IconElement = useRef();

    useEffect(() => {

        IconElement.current.style.setProperty('--icon', `url("https://trds-icons.storage.googleapis.com/${icon}.svg")`);
        
    }, [icon])

    return(
        <i ref={IconElement} {...rest}></i>
    )

}