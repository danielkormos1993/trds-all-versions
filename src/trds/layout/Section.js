import createStyle from '../libs/createStyle.js';
import Container from './Container.js';

createStyle(`

    section{
        display: block;
        padding: var(--space--xxl) 0;
    }

    section:last-child{
        flex: 1;
    }

`);

export default function Section({children, ...rest}){

    return(
        <section {...rest}>
            <Container>
                {children}
            </Container>
        </section>
    )

}