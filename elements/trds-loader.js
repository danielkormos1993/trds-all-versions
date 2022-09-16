const TrdsLoaderStyle = document.createElement('style');
TrdsLoaderStyle.id = 'trds-loader';
TrdsLoaderStyle.textContent = `

    .loader-parent{
        position: relative;
        max-height: 100vh;
        overflow: hidden;
    }

    .loader-parent *{
        visibility: hidden;
    }

    .loader-parent > trds-loader{
        visibility: visible;
    }

`;
document.head.appendChild(TrdsLoaderStyle);

customElements.define('trds-loader', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `

            <style>

                :host{
                    width: 100%;
                    height: 100%;
                    max-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    visibility: hidden;
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                loading-icon{
                    display: block;
                    border-radius: 50%;
                    width: 1em;
                    height: 1em;
                    border: .25em solid rgba(128, 128, 128, .5);
                    border-top-color: currentColor;
                    animation: spin 1s infinite linear;
                }

            </style>
            
            <loading-icon />

        `;

        this.Parent = this.parentElement || this.getRootNode().host;

    }

    static get observedAttributes(){ 
        return ['active']; 
    }

    attributeChangedCallback(){
        if(this.hasAttribute('active')){
            this.Parent.classList.add('loader-parent');
        } else {
            this.Parent.classList.remove('loader-parent');
        }
    }

});