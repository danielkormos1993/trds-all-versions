import '../layout/$layout.css';
import { Container } from '../layout';
import { Hamburger } from '../elements';
import { useEffect, useRef, useState } from 'react';
import createStyle from '../libs/createStyle';

export default function Header({logo, children, breakpoint}){

    const [opened, setOpened] = useState(false);

    const HeaderNav = useRef();
    const HeaderElement = useRef();

    const closeMenuOnOutsideClick = e => {

        HeaderNav.current.querySelectorAll(':scope > *').forEach(navElement => {
            if(!navElement.contains(e.target)){
                setOpened(false);
                HeaderElement.current.scrollTop = 0;
            }
        });

    }

    useEffect(() => {

        HeaderNav.current.querySelectorAll(':scope > *').forEach(navElement => {
            navElement.addEventListener('focus', () => setOpened(true));
        });

        createStyle(`

            header{
                background-color: var(--color--secondary-bg);
                height: 5rem;
                width: 100%;
                overflow: hidden;
            }

            header[opened]{
                height: auto;
                overflow: visible;
            }

            header trds-container{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                flex-wrap: wrap;
            }

            header top-bar{
                height: 5rem;
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            header top-bar > *:not(trds-hamburger){
                width: 7rem;
            }

            header nav{
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: start;
                padding: var(--space--l) 0;
                gap: var(--space--s);
            }

            @media (min-width: ${breakpoint}){
                
                header trds-hamburger{
                    display: none;
                }

                header nav{
                    flex-direction: row;
                    width: auto;
                    align-items: center;
                    gap: var(--space--l);
                    padding: 0;
                }

            }

        `);

    }, [breakpoint]);

    useEffect(() => {

        if(opened){
            document.addEventListener('click', closeMenuOnOutsideClick);
        } else {
            document.removeEventListener('click', closeMenuOnOutsideClick);
        }

    }, [opened])

    const toggleMenu = (e) => {
        e.stopPropagation();
        opened ? setOpened(false) : setOpened(true);
    }

    return(

        <header ref={HeaderElement} {...opened && {'opened' : ''}}>
            <Container>
                <top-bar>
                    {logo}
                    <Hamburger active={opened} onClick={toggleMenu} />
                </top-bar>
                <nav ref={HeaderNav}>
                    {children}
                </nav>
            </Container>
        </header>

    )

}