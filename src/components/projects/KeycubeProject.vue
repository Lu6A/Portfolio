<template>
    <NavBar/>
    <ProjectPresentation :project="project"/>

    <img src="assets/img/keycube/keycube1.png" alt = "keycube about page" class="aboutPage">

    <section>
    <div class = "description">
        <h2>LE SITE INTERNET</h2>
        <div class = keywords :style = "{'color' : '#D45153'}">
        <p>HTML</p>
        <p>CSS</p>
        <p>Javascript</p>
        <p>Liquid</p>
        <p>Markdown</p>
        </div>
        <p>À la demande de Damien, le site internet a été entièrement codé à l'aide du générateur de sites statiques Jekyll. En effet, ce générateur permet la gestion de blogs de manière simple et intuitive. Une fois notre travail terminé, le site peut être alimenté uniquement grâce à des fichiers markdown, ce qui simplifie grandement sa gestion.</p>
    </div>
    </section>

    <div class = duet>
    <div class = blogContainer>
    <img src="assets/img/keycube/keycube2.png" alt = "keycube blog page" class = "blogPage">
    </div>
    <img src="assets/img/keycube/keycube3.png" alt = "keycube blog page phone" class = "blogPagePhone">
    <div class = "backgroundRectangle rect1"></div>
    </div>

    <div class = triptych>
        <img src = "assets/img/keycube/keycube4.png" alt = "keycube research page">
        <img src = "assets/img/keycube/keycube5.png" alt = "keycube hardware page">
        <img src = "assets/img/keycube/keycube6.png" alt = "keycube software page">
    </div>

    <div class = maquettes>
    <section>
        <h2>MAQUETTES NON RETENUES</h2>
        <div class = keywords :style = "{'color' : '#D45153'}">
        <p>Figma</p>
        </div>
        <p>Nina et moi avons toutes les deux réfléchi à des maquettes à proposer à Damien. Elle s'est inspirée des touches de clavier tandis que je suis partie sur l'aspect carré, cubique de Keycube. C'est finalement la vision de Nina qui a été retenue pour le site final, mais voici un échantillon de mes propositions.</p>
    </section>
    <div class = "backgroundRectangle rect2"></div>
    </div>

    <div class = "duet2">
    <img src="assets/img/keycube/keycube7.png" alt ="maquette non retenue 1">
    <img src="assets/img/keycube/keycube8.png" alt ="maquette non retenue 2">
    </div>

    <FooterPage/>
</template>

<script>

import NavBar from '../NavBar.vue';
import ProjectPresentation from '../ProjectPresentation.vue';
import FooterPage from '../FooterPage.vue';

    export default {
        name: 'KeycubeProject',
        components: {
    NavBar,
    ProjectPresentation,
    FooterPage
},
        data() {
            return {
                project: {
                id: 2,
                title: 'Keycube',
                color : '#D45153',
                categories: ['UX/UI', 'développement web'],
                description: `Keycube, initié par Damien Brun, représente une approche novatrice de la dactylographie avec la création d'un clavier cubique. Intégrées au cours "Projet" de l'Université du Québec à Chicoutimi au cours de notre semestre à l'international, Nina Grignola et moi-même avons rejoint cette initiative sous la direction de Damien. L'objectif de ce dernier est de cultiver une communauté active autour des keycubes et de partager largement son concept. Notre contribution s'est concentrée sur la conception complète de l'identité visuelle de Keycube, englobant le logo et les couleurs, ainsi que le développement du site web. Ce site aspire à devenir une ressource incontournable pour les passionnés de ce projet original et novateur.
                            `,
                class : 'link',
                link : 'keycube.github.io/',
                buttonText : 'Voir le site'
                },
            }
            // this.backgroundRectangle1Height = 0;
        },
        
        mounted(){

            // this.backgroundRectangle1Height = document.body.scrollHeight 
        }

    }
</script>

<style scoped>

.duet2{
    margin : -10% auto 10% auto;
    width : 80%;
    display : flex;
    justify-content: space-between;
    align-items : center;
}

.duet2 img {
    width : 45%;
    object-fit : cover;
}

.rect2{
    width : 100%;
    height : 750%;
    /* max-height : 650px; */
    position : absolute;
    top : calc(-45%);
    background-color : var(--projectColor);
}

.maquettes 
{
    position : relative;
}
.triptych{
    width : 90%;
    margin : 0 auto 20% auto;
    display : flex; 
    justify-content: space-between;
    align-items : center;
}

.triptych img {
    width : 31%;
    height : fit-content; 
}

.rect1 
{
    width: 100%;
    height : 127%;
    background-color : var(--projectColor);
    position : absolute;
    top : calc(-13%);
    z-index : -1;
}
.duet {
    position : relative;
    margin-bottom : 20%;
}

.blogPagePhone{
    width : 20%;
    z-index : 1;
    position : absolute;
    top: calc(25%);
    left: calc(65%); 
}

.blogContainer {
    width : 80%;
    margin : auto;
    display : flex;
}

.blogPage 
{
    width :70%;
    object-fit: cover;
}

.keywords{
    display: flex;
    margin-bottom: 5%;
    justify-content: center;
    column-gap: 2%;
}

.aboutPage
{
    width : 60%;
    margin: 10% 20% 10% 20%;
}

.backgroundRectangle
{
    width : 100%;
    position : absolute;
    z-index : -1;
    background-color : var(--projectColor);
}

*{
    --projectColor : #DfDFDF;
}

section {
    width : 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin : 0 auto 20% auto;
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
    box-shadow: 3px 3px 40px rgba(70,70,70,0.2);
}

@media screen and (max-width : 768px){
    .rect2 {
        height : 550%;
    }
}

@media screen and (max-width : 600px){
    .rect2 {
        height : 450%;
    }
}

@media screen and (max-width : 465px){
    .rect2{
        height : 350%;
    }
}


</style>