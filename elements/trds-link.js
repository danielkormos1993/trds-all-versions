// this is the base class for an anchor element
// it copies the neccessary attributes and add rel noopener norefferer if needed

export class trdsLink extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <a>
                <slot></slot>
            </a>
        `;

        this.anchorTag = this.shadowRoot.querySelector('a');

    }

    connectedCallback(){

        const desiredAttributes = ['download', 'href', 'target'];

        [...this.attributes].forEach(attribute => {

            if(desiredAttributes.includes(attribute.name)){

                this.anchorTag.setAttribute(attribute.name, attribute.value);

                if(attribute.name === 'href' && attribute.value.startsWith('http') && !attribute.value.includes(location.hostname))
                    this.anchorTag.setAttribute('rel', 'noopener noreferrer');
                    
            }

        });

    }

}