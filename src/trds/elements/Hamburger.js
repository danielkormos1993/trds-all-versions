import createStyle from '../libs/createStyle';

createStyle(`

    .hamburger{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 28px;
        height: 17px;
        cursor: pointer;
    }

    .hamburger div{
        display: block;
        height: 3px;
        background-color: currentColor;
        transition: transform .25s, opacity .25s;
    }

    .hamburger.active div:nth-of-type(1){
        transform: rotate(45deg) translate(6px,4px);
    }

    .hamburger.active div:nth-of-type(2){
        opacity: 0;
    }

    .hamburger.active div:nth-of-type(3){
        transform: rotate(-45deg) translate(6px,-4px);
    }

`);

export default function Hamburger({isActive, ...rest}){

    return(
        <div className={`hamburger ${isActive ? 'active' : ''}`} {...rest}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}