import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Post')
    }

    async getHtml(){

        async function getData(url) {
            const response = await fetch(url)
            return response.json()
        }
        
        const data = await getData('/static/js/views/posts.json')

        let listPosts = "<ul>"
        for(let i in data) {
            listPosts += "<a href='/post-view/" + data[i]['date'] + "'data-link>" + data[i]['title'] + "<br><img src=" + data[i]['url'] + "></a><br><br>"
        }
        listPosts +="</ul>"

        return `
            <h1>Visuels</h1>
        `+listPosts
    }
}
