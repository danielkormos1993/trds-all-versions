// usage: trds-hamburger [active]
// change color with color style attribute

customElements.define('trds-hamburger', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'}).innerHTML = `

            <style>

                :host{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 28px;
                    height: 17px;
                    cursor: pointer;
                }

                div{
                    display: block;
                    height: 3px;
                    background-color: currentColor;
                    transition: transform .25s, opacity .25s;
                }
            
                :host([active]) div:nth-of-type(1){
                    transform: rotate(45deg) translate(6px,4px);
                }
                
                :host([active]) div:nth-of-type(2){
                    opacity: 0;
                }
                
                :host([active]) div:nth-of-type(3){
                    transform: rotate(-45deg) translate(6px,-4px);
                }

            </style>
            
            <div></div>
            <div></div>
            <div></div>

        `
    }

});