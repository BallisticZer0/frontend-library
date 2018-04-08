import dom from "./tagged-dom/tagged-dom.js";

class Logo extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const logo = dom`
            <svg viewBox="0 0 171 165">
                <g fill="none" fill-rule="evenodd">
                    <g fill="currentColor" fill-rule="nonzero">
                        <path d="M0 9L105 159 27 129z" opacity=".17" transform="translate(3 3)"></path>
                        <path d="M0 9L165 0 105 159z" opacity=".07" transform="translate(3 3)"></path
                        <path d="M0 9L165 0 27 129z" opacity=".03" transform="translate(3 3)"></path>
                    </g>
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M138 0L0 129" transform="translate(30 3)"></path>
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="4.5" d="M0 9L165 0 105 159 27 129zM0 9l105 150" transform="translate(3 3)"></path>
                </g>
            </svg>
        `;

        const html = dom`
            ${styles}
            <a href="https://cedeber.fr">${logo}</a>
        `;

        html.render(this.shadow);
    }
}

const styles = dom`
<style>
    :host {
        position: fixed;
        top: 11px;
        left: 11px;
        z-index: 99;
    }

    a {
        display: block;
        padding: 13px 10px 7px;
        border-radius: 30px;
        color: #ffcc66;
        transform: translateZ(0);
        transition: box-shadow 350ms;
    }

    a:hover {
        box-shadow: 0 0 0 3px #ffcc66;
    }

    svg {
        display: block;
        width: 42px;
        height: auto;
    }
</style>`;

export default Logo;
