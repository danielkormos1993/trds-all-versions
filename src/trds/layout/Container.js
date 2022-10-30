import createStyle from "../libs/createStyle";

createStyle(`

    trds-container{
        display: block;
        width: 100%;
        max-width: 1700px;
        padding: 0 5%;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
    }

`);

export default function Container({children, className, ...rest}){

    return(
        <trds-container class={className} {...rest}>
            {children}
        </trds-container>
    )

}