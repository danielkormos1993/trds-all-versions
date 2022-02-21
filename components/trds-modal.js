// usage: trds-modal[showonfirsthit(optional - acts like a popup)]
// slot name title for title
// slot for modal body
// show func and close func

import '../typhography/trds-heading.js';
import '../elements/trds-icon.js';

const TrdsModalStyle = document.createElement('style');
TrdsModalStyle.textContent = `

    trds-modal{
        width: 100vw;
        height: 100vh;
        padding: var(--space--m) 0;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        background-color: rgba(0,0,0,.72);
    }
    trds-modal.show{
        opacity: 1;
        visibility: visible;
        transform: scale(1.0);
        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
    }
    trds-modal_container{
        display: block;
        width: 90%;
        max-width: var(--element--max-width);
        max-height: 100%;
        overflow: auto;
    }
    trds-modal_header{
        display: flex;
        align-items: center;
        padding: var(--space--m);
        box-sizing: border-box;
        background-color: var(--color--primary);
        justify-content: space-between;
    }
    trds-modal_body{
        display: block;
        padding: var(--space--l);
        box-sizing: border-box;
        background-color: var(--color--secondary-bg);
        overflow: auto;
        max-height: 90vh;
    }
    trds-modal_header trds-icon{
        flex-shrink: 0;
    }
    trds-modal_header trds-heading{
        text-transform: uppercase;
        margin-right: var(--space--m);
        letter-spacing: 2px;
        font-weight: bold;
        font-size: var(--size--s) !important;
    }

`;
document.head.appendChild(TrdsModalStyle);

const TrdsModalTemplate = document.createElement('template');
TrdsModalTemplate.innerHTML = `
    <trds-modal_container>
        <trds-modal_header>
            <trds-heading level="2"></trds-heading>
            <trds-icon icon="solid/times" onclick="this.closest('trds-modal').close()"></trds-icon>
        </trds-modal_header>
        <trds-modal_body>
        </trds-modal_body>
    </trds-modal_container>
`;

export default class TrdsModal extends HTMLElement{

    constructor(){
        super()

        this.rendered = false;
        this.template = TrdsModalTemplate.content.cloneNode(true);

    }

    connectedCallback(){

        if(!this.rendered) this.render();

        if(this.hasAttribute('showonfirsthit') && sessionStorage.getItem('popup') != 'true'){
            this.show();
            sessionStorage.setItem('popup', 'true');
        }
        
    }

    render = () => {

        this.template.querySelector('trds-modal_body').append(...this.children);
        this.template.querySelector('trds-modal_header trds-heading').textContent = this.getAttribute('title');

        this.append(this.template);

        this.rendered = true;

    }

    show = () => {

        let currentModal = document.querySelector('trds-modal.show');
        if(currentModal) currentModal.close();
        
        this.classList.add('show');
    }

    close = () => this.classList.remove('show');
    
}

customElements.define('trds-modal', TrdsModal);