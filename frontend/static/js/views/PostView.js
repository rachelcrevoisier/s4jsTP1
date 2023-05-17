import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor(params) {
        super(params)
        this.setTitle('Information sur la photo')
    }

    async getHtml() {
        
        const nu = this.params.id
        console.log(this.params.id);
        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/posts.json')

        const article = data.find(item => item.date == nu)

        
        
        return `
        <h1>`+article.title+`</h1>
        <p>`+ article.explanation+`</p>
        <strong>`+article.copyright+` - `+article.date+`</strong>
        <br>
        <img src=" `+ article.url + `"><br>`+article.media_type+` - `+article.service_version+` - <a href="`+article.url+`" target=_blank>`+article.url+`

        <br><a href='/posts' data-link>Retourner</a>`
    }
}