import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Settings')
    }

    async getHtml(){
        return `
            <h1>Settings</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta veniam facere provident earum optio non iste tempore minima distinctio corporis adipisci nihil culpa, sit saepe repellat accusamus est molestiae!</p>
        `
    }
}