import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Dashboard')
    }

    async getHtml(){
        return `
            <h1>Bienvenue sur APOD, des images d'astronomie</h1>
            <p>L'un des sites Web les plus populaires de la NASA est l' Astronomy Picture of the Day . En fait, ce site Web est l'un des sites Web les plus populaires de tous les organismes fédéraux. Il a l'attrait populaire d'une vidéo de Justin Bieber. Ce point de terminaison structure les images APOD et les métadonnées associées afin qu'elles puissent être réutilisées pour d'autres applications. De plus, si le concept_tagsparamètre est défini sur True, les mots clés dérivés de l'explication de l'image sont renvoyés. Ces mots-clés pourraient être utilisés comme hashtags générés automatiquement pour les flux Twitter ou Instagram ; mais aident généralement à la découverte des images pertinentes.</p>
            <a href="/posts" data-link>Voir les images</a>
        `
    }
}