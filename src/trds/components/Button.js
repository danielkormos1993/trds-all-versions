import createStyle from "../libs/createStyle";
import '../layout/$layout.css';
import '../typhography/$typhography.css';
import Icon from '../elements/Icon';
import '../elements/trds-loader.css';

createStyle(`

    .trds-button{
        display: block;
        width: max-content;
        --base-bg-color: var(--color--primary);
        all: unset;
        box-sizing: border-box;
        background-color: var(--base-bg-color);
        border-radius: 5px;
        overflow: hidden;
        display: flex;
        padding: .75em 1.5em;
        transition: filter 0.25s ease-in-out, transform 0.25s ease-in-out;
        align-items: center;
        justify-content: center;
        gap: var(--space--s);
        cursor: pointer;
        color: inherit;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
        font-size: var(--size--xs);
    }

    .trds-button:hover,
    .trds-button:focus{
        filter: brightness(125%);
    }

    .trds-button:active{
        transform: scale(0.95);
    }

    .trds-button.disabled{
        filter: brightness(0.75);
        pointer-events: none;
    }

    .trds-button.plain{
        padding: 0;
        border-radius: 0;
        background-color: transparent;
        font-size: var(--size--s);
        color: var(--color--secondary-text);
    }

    .trds-button.plain:focus-visible{
        border-bottom: 2px solid var(--color--primary);
    }

    .trds-button.rounded{
        border-radius: 50px;
    }

    .trds-button.block{
        width: 100%;
    }

    .trds-button.icon-on-right i{
        order: 2;
    }

    .trds-button.outline{
        box-shadow: inset 0 0 0 2px currentColor;
        background-color: transparent;
    }

    .trds-button.outline:hover,
    .trds-button.outline:focus{
        box-shadow: none;
        background-color: var(--base-bg-color);
    }

`);

export default function Button({text, icon, loading, href, className, ...rest}){

    const Element = href ? 'a' : 'button';

    return (

        <Element
            className={`trds-button ${loading ? 'disabled' : ''} ${className || ''}`}
            {...href && {'href':href}}
            {...rest}
        >
            {icon ? <Icon icon={icon} /> : ''}
            {text ? <span>{text}</span> : ''}
            <trds-loader {...loading && {'active':''}}></trds-loader>
        </Element>

    )

}