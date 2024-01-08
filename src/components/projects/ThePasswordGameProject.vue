<template>
    <NavBar/>
    <ProjectPresentation :project="project"/>
    <div class = video-container>
        <video ref = "video" src = "assets/img/passwordgame/gameplay1.mp4" controls loop></video>
        <div class = background-rectangle></div>
    </div>

    <section>
        <h2>DETAILS TECHNIQUES</h2>
        <div class = "keywords" :style = "{'color' : '#f6f6f6'}">
        <p>VueJS</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        </div>
        <p>
L'essence du jeu repose sur l'utilisation des expressions régulières en JavaScript, que nous avons découvertes lors de notre cours et que nous souhaitions maîtriser de manière concrète. De plus, le jeu intègre deux API REST, Sunrise & Sunset et Spotify, pour incorporer des éléments externes et enrichir l'expérience. Cela signifie que le joueur doit parfois quitter l'application pour rechercher les informations requises, ajoutant ainsi une dimension interactive à l'expérience globale.</p>
    </section>

    <div class = "duet">
        <img src = "assets/img/passwordgame/game.png" alt = "the password game">
        <img src = "assets/img/passwordgame/victory.png" alt = "menu de victoire">
    </div>
    <FooterPage/>
</template>


<script>
import NavBar from '../NavBar.vue';
import ProjectPresentation from '../ProjectPresentation.vue';
import FooterPage from '../FooterPage.vue';

export default {
    name : 'ThePasswordGameProject',
    components : {
        NavBar,
        ProjectPresentation,
        FooterPage
    },
    data() {
        return {
            userInteracted: false,
            project : {
                id : 7,
                title : "The Password Game 2.0",
                color : "#6585A0",
                categories : ["game", "web"],
                description : "Le jeu ''The Password Game 2.0 (pour ceux qui n'auraient pas réussi à résoudre The Password Game, le vrai)'' est un projet réalisé dans le cadre du cours de conception et programmation de sites web au cours de mon semestre d'études à l'Université du Québec à Chicoutimi. En collaboration avec ma camarade Nina Grignola, nous avons bénéficié d'une liberté créative pour ce projet, à condition d'appliquer les notions apprises en cours. Toutes deux amatrices du jeu ''The Password Game'', nous nous sommes lancé le défi de le reproduire en y ajoutant nos propres règles, dans le but de proposer un jeu qui puisse être résolu avec succès, contrairement à son ''grand frère''.",
                class : "link",
                link : "github.com/grignolanina/UQAC_PROGRAMMATION_WEB_PROJET",
                buttonText : "Lien github",
            }
        }
    },
    methods : {
        handleScroll() {
        if (this.userInteracted){
        this.$refs.video.play();
        }
    },

    handleUserInteraction() {
    // Marquez que l'utilisateur a interagi avec la page
    this.userInteracted = true;
    // Déclenchez la vérification du défilement
    this.handleScroll();
    }
    },
    mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('click', this.handleUserInteraction);
    },

    beforeUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('click', this.handleUserInteraction);
    }
}

</script>

<style scoped>

*{
    --projectColor : #6585A0;
}

section {
    width : 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin : 15% auto 10% auto;
    position : relative;
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


video {
    width : 100%;
    height : 100%;

    object-fit: cover;
}

.video-container {
    margin-top: 20%;
    width : 100%;
    position : relative;
}

.background-rectangle
{
    width : 100%;
    height : 330%;  
    position : absolute;
    z-index : -1;
    top : 0;
    background-color : var(--projectColor);
}

.keywords{
    display: flex;
    margin-bottom: 5%;
    justify-content: center;
    column-gap: 10%;
}

.duet {
    display : flex;
    justify-content : space-between;
    width : 80%;
    height : 20vh;
    margin : 30% auto 20% auto;
}

.duet img {
    width : 49.5%;
}


.duet img:first-child {
    align-self : flex-end;
}

.duet img:last-child {
    align-self : flex-start;
}

@media screen and (max-width : 465px)
{
    .background-rectangle{
        height : 465%;
    }
}
</style>
