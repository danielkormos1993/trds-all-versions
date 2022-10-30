// usage: Section[bgImage] style=[--bg-image-overlay]
// lazy by default

import createStyle from '../libs/createStyle.js';
import Container from './Container.js';
import './$layout.css';
import { useEffect, useRef } from 'react';
import TrdsIntersectionObserver from '../libs/IntersectionObserver';

createStyle(`

    section{
        display: block;
        padding: var(--space--xxl) 0;
    }

    section:last-child{
        flex: 1;
    }

    section.bg-image{
        --bg-image-overlay: var(--color--primary-bg);
        background: var(--bg-image-src) var(--bg-image-overlay);
        background-position: center center;
        background-size: cover;
        background-blend-mode: overlay;
    }

`);

export default function Section({children, bgImage, className, ...rest}){

    const SectionElement = useRef();

    useEffect(() => {

        if(bgImage){

            const $section = SectionElement.current;

            $section.intersecting = () => {
                $section.style.setProperty('--bg-image-src', bgImage);
            }

            TrdsIntersectionObserver.observe($section);

        }

    }, [bgImage]);

    return(
        <section ref={SectionElement} {...rest} className={`${bgImage ? 'bg-image' : ''} ${className || ''}`}>
            <Container>
                {children}
            </Container>
        </section>
    )

}