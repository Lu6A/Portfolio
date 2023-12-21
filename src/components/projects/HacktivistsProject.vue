<template>
    <ProjectPresentation :project="project"/>
    <div class="videoContainer">
      <iframe
        :src="'https://youtube.com/embed/v99aoiWDbmM'"
        frameborder="0"
        allowfullscreen
        ref="video"
      ></iframe>
      <div class="backgroundRectangle rect1"></div>
    </div>
    <section>
    <div class = "description">
        <h2>DU BLABLA</h2>
        <div class = keywords>
        <p>Figma</p> <p>HTML</p> <p>CSS</p> <p>Javascript</p> <p>SQL</p>
        </div>
        <p>Le site internet permet de pérenniser les oeuvres des étudiants, ainsi que notre exposition.
        Conçu et et codé entièrement par notre groupe, il offre la possibilité de jouer avec les textes, combinés grâce à l’aléatoire, mais aussi retrouver des informations sur le mouvement de l’Oulipo, des photos de l’exposition et des liens vers les créations personnelles des étudiants apprentis écrivains autour de leurs textes.
        </p><br><br><br>
        <p>Nous avons établi une connexion entre le monde physique et le numérique en visiteurs à contribuer en projetant des vers sur le mur d'un simple clic. Ces vers vagabondaient dans l'espace, permettant une lecture libre qui dépendait de la trajectoire du regard, s'inspirant ainsi du concept des "Bristols" du poète Frédéric Forte. En conséquence, chaque visiteur avait la possibilité de découvrir un poème unique.</p>
    </div>
    </section>
        <div class = "slider">
            <div class="slidewrapper">
                <img src="assets\img\hacktivists\storyboard1.png" alt = "storyboard 1" class = "slide">
            </div>
            <div class="slidewrapper">
                <img src="assets\img\hacktivists\storyboard2.png" alt = "storyboard 2" class = "slide">
            </div>
            <div class="slidewrapper">
                <img src="assets\img\hacktivists\storyboard3.png" alt = "storyboard 3" class = "slide">
            </div>
            <div class="slidewrapper">
                <img src="assets\img\hacktivists\storyboard4.png" alt = "storyboard 4" class = "slide">
            </div>
            <div class="slidewrapper">
                <img src="assets\img\hacktivists\storyboard5.png" alt = "storyboard 5" class = "slide">
            </div>
            <div class="slidewrapper">
                <img src="assets\img\hacktivists\storyboard6.png" alt = "storyboard 6" class = "slide">
            </div> 
            <div class="slidewrapper">
                <img src="assets\img\hacktivists\storyboard7.png" alt = "storyboard 7" class = "slide">
            </div>
        </div>

        <img src="assets\img\hacktivists\hack2.png" alt = "captures d'écran d'Hacktivists" class = "banner">

    <FooterPage/>
</template>

<script>
import ProjectPresentation from '../ProjectPresentation.vue';
import FooterPage from '../FooterPage.vue';
export default {
    name: 'HacktivistsProject',
    components: {
        ProjectPresentation,
        FooterPage
    },
    data() {
        return {
            project : {
                id : 5,
                title: 'Hacktivists',
                color : '#C3E4EE',
                categories : ['audiovisuel', '3D'],
                description: 'Hacktivists is a web application that allows users to create and join events. The application is built with Vue.js, Node.js, Express.js, MongoDB, and Bootstrap.',
                link: 'https://hacktivists.herokuapp.com/',
                class : 'noLink',   
            }
    };
    },
}


</script>

<style scoped>

*{
    --projectColor : #C3E4EE;
}

section {
    width : 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin : 15% auto 10% auto;
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
}

.videoContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10%;
    position: relative;
}

iframe {
    width: 50vw;
    aspect-ratio: 16/9;
    border: none;
    border-radius: 1em;
    box-shadow: 3px 3px 40px rgba(70,70,70,0.2);
}

.keywords{
    display: flex;
    margin-bottom: 5%;
    color : #f6f6f6;
    justify-content: center;
    column-gap: 2%;
}

.backgroundRectangle {
    width: 100%;
    position: absolute;
    z-index: -1;
    background-color: var(--projectColor);
}

.rect1 {
    height: 450%;
    top: calc(50%);
    left: 0;
}

.slider {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: min(100%, 500px);
  margin : 5% auto 10% auto;
  border-radius: 1em;
  box-shadow: 3px 3px 40px rgba(70,70,70,0.2);
}

.slidewrapper {
  scroll-snap-align: center;

  /* Size me */
  flex: 0 0 min(100%, 500px);
  width: min(100%, 500px);
  
  /* This is needed for the paddings (in the full-bleed variant) to work …*/
  box-sizing: content-box;

  /* To allow the child .slide to stretch out inside me */
  display: flex;
}


.slide {
  /* Stretch me out in my .slidewrapper parent */
  flex: 1;
  width : 100%;
}

.slidewrapper :last-child {
  margin-right: 0;
}


.slider .slidewrapper {  
  margin-right: 40px;
}


.slider::-webkit-scrollbar {
    height : 6px;
}

/* Bouton de la barre de défilement */
.slider::-webkit-scrollbar-thumb {
    border-radius: 6px; /* Coins arrondis du bouton */
    background-color : #131412;
}

/* Zone de la barre de défilement non couverte par le bouton */
.slider::-webkit-scrollbar-track {
    background-color: transparent; /* Couleur de la zone de la barre de défilement */
}

/* Barre de défilement pour Firefox */
.slider::-moz-scrollbar {
    height : 6px; /* Largeur de la barre de défilement */
}

/* Bouton de la barre de défilement */
.slider::-moz-scrollbar-thumb {
    border-radius: 6px; /* Coins arrondis du bouton */
    background-color : #131412;
}

/* Zone de la barre de défilement non couverte par le bouton */
.slider::-moz-scrollbar-track {
    background-color: transparent; /* Couleur de la zone de la barre de défilement */
}

.banner{
    width: 100%;
    object-fit: cover;
    border-radius : 0;
}

</style>