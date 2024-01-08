<template>
    <NavBar/>
    <ProjectPresentation :project="project"/>
    <div class = triptych1>
        <img src = "assets/img/rickAndMorty/rick1.png" alt = "character page rick and morty" class = "homePage">
            <div class = "duet1">
            <img src = "assets/img/rickAndMorty/summer.png" alt = "character page  rick and morty filtered">
            <img src = "assets/img/rickAndMorty/rick2.png" alt = "single character page">
            <img src = "assets/img/rickAndMorty/rick3.png" alt = "planet page">
            </div>
        <div class = "backgroundRectangle rect1"></div>
    </div>

    <section>
        <h2>DETAILS TECHNIQUES</h2>
        <div class = keywords :style = "{'color' : '#F6F6F6'}">
        <p>Vue JS</p>
        </div>
        <p>L'essence de ce projet repose sur l'exploitation de Vue JS afin d'en découvrir les fonctionnalités. Dans ce but, nous avions à manipuler, afficher, filtrer et trier des données fournies par une API. Ainsi, les utilisateurs de ce site peuvent personnaliser leurs recherches en les triant de manière ascendante (A à Z) ou descendante (Z à A) et en les filtrant via une barre de recherche permettant de retrouver un personnage grâce à son nom. Ces paramètres de recherche sont enregistrés dans le local storage, offrant ainsi la possibilité à l'utilisateur de les retrouver entre deux sessions. En sélectionnant un personnage, l'utilisateur peut accéder à sa fiche d'identité complète, et donc à de nouvelles données provenant de l'API.</p>
    </section>
    <p class = "credits">©Rick and Morty a été créé par Justin Roiland et Dan Harmon pour Adult Swim. Les données et les images sont utilisées sans revendication de propriété et appartiennent à leurs propriétaires respectifs.</p>
    <FooterPage/>
</template> 

<script>

import NavBar from '../NavBar.vue'
import ProjectPresentation from '../ProjectPresentation.vue'
import FooterPage from '../FooterPage.vue'

export default {
  name: 'RickAndMorty',
    components: {
        NavBar,
        ProjectPresentation,
        FooterPage
    },
  data() {
    return {
        project : {
            id : 4,
            title: 'Rick & Morty Characters',
            color : '#9AD48A',
            categories: ['developpement web'],
            description: 'Rick and Morty Characters est mon premier projet web réalisé avec le framework Vue JS et nécessitant des appels à une API. Il s\'agit d\'une application web qui permet de consulter les informations de la série Rick and Morty. L\'utilisateur peut rechercher un personnage, et retrouver la liste des planètes et des épisodes grâce à des appels à l\'API open source "The Rick and Morty API". Ce projet a été réalisé dans le cadre du cours sur le framework Vue JS dispensé lors de ma deuxième année de formation IMAC.',
            class : 'link',
            link : 'github.com/lucieaugier/projet_vueJS_2023',
            buttonText : 'Lien github'
        }
    }
}
}
</script>

<style scoped>

*{
    --projectColor : #9AD48A;
}

section {
    width : 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin : 0 auto 10% auto;
}

p{
    font-weight: 500;
    text-align: center;
    font-size: 1.25rem;
}

h2{
    text-align: center;
}

img {
    border-radius : 1rem;
    box-shadow: 3px 3px 40px rgba(246,246,246,0.2);
}

.backgroundRectangle
{
    width : 100%;
    position : absolute;
    z-index : -1;
    background-color : var(--projectColor);
}

.keywords{
    display: flex;
    margin-bottom: 5%;
    justify-content: center;
    column-gap: 10%;
}

    .triptych1 {
        width : 100%;
        margin : 30% 0 20% 0;
        position : relative;
    }

    .homePage{
        width : 45%;
        margin : 0 30% 0 10%;
    }

    .duet1 {
        height : 150%;
        position : absolute;
        top : calc(-25%);
        left : calc(54%);
        z-index : 1;
        width : 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .duet1 img {
        width : 100%;
    }

    .rect1 {
        top : calc(-10%);
        height : 220%;
    }


    .credits {
        margin : -5% 0 2% 0;
        font-size : 0.75rem;
    }

    @media screen and (max-width : 465px)
    {
        .rect1 {
            height : 318%;
        }
    }
</style>