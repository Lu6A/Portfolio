<template>
    <NavBar/>
    <ProjectPresentation :project="project"/>
    <div class = video-container>
        <video ref = "video" src = "assets/img/passwordgame/gameplay.mp4" controls loop></video>
        <div class = background-rectangle></div>
    </div>

    <section>
        <h2>DETAILS TECHNIQUES</h2>
        <div class = "keywords" :style = "{'color' : '#f6f6f6'}">
        <p>Vue JS</p>
        <p>Node JS</p>
        <p>Socket IO</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        </div>
        <p>L'essence de ce projet réside dans la communication entre les joueurs. Pour cela, j'ai utilisé la librairie Socket IO qui permet de créer des sockets entre les joueurs. Ainsi, les joueurs peuvent communiquer entre eux en temps réel. J'ai également utilisé Vue JS pour la partie front-end et Node JS pour la partie back-end. Le jeu est disponible en français et en anglais.</p>
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
                title : "The Password Game",
                color : "#6585A0",
                categories : ["game", "web"],
                description : "The Password Game est un jeu de société qui se joue à partir de 4 joueurs. Le but du jeu est de faire deviner un mot à son coéquipier en donnant des indices. Le jeu se joue en 3 manches. Chaque manche a une durée de 1 minute 30. Le jeu est disponible en français et en anglais.",
                link : "https://github.com/grignolanina/UQAC_PROGRAMMATION_WEB_PROJET",
                textButton : "Voir le projet sur Github",
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
    font-size: 1.25em;
}

h2{
    text-align: center;
}

img {
    border-radius : 1em;
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


</style>
