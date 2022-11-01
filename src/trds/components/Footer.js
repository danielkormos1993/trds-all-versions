import createStyle from "../libs/createStyle";
import Container from '../layout/Container';
import '../layout/$layout.css';

createStyle(`

    footer{
        display: block;
        background-color: var(--color--secondary-bg);
        padding: var(--space--xl) 0;
        box-sizing: border-box;
    }

`);

export default function Footer({children, ...rest}){

    return (

        <footer {...rest}>
            <Container>
                {children}
            </Container>
        </footer>

    )

}