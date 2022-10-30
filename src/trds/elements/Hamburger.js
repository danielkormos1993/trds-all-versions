import createStyle from '../libs/createStyle';

createStyle(`

    trds-hamburger{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 28px;
        height: 17px;
        cursor: pointer;
    }

    trds-hamburger div{
        display: block;
        height: 3px;
        background-color: currentColor;
        transition: transform .25s, opacity .25s;
    }

    trds-hamburger.active div:nth-of-type(1){
        transform: rotate(45deg) translate(6px,4px);
    }

    trds-hamburger.active div:nth-of-type(2){
        opacity: 0;
    }

    trds-hamburger.active div:nth-of-type(3){
        transform: rotate(-45deg) translate(6px,-4px);
    }

`);

export default function Hamburger({active, ...rest}){

    return(
        <trds-hamburger {...rest} class={active ? 'active' : ''}>
            <div></div>
            <div></div>
            <div></div>
        </trds-hamburger>
    )

}