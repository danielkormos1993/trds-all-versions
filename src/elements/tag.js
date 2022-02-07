

class TrdsTag extends HTMLElement{
    
    constructor(){
        super();

        this.attachShadow({mode: 'open'}).innerHTML = `
            <style>
                :host{
                    background-color: var(--color--accent);
                    border-radius: 50px;
                    box-sizing: border-box;
                    padding: var(--space--xs) var(--space--s);
                    font-size: var(--size--xs);
                    min-width: max-content;
                    max-width: max-content;
                    display: inline-block;
                }
            </style>
            <slot><slot>
        `;

    }

}

window.customElements.define('trds-tag', TrdsTag);
export default TrdsTag;