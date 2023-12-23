<template>
    <NavBar/>
    <ProjectPresentation :project="project"/>
    <div class="video-container">
      <iframe
        :src="'https://youtube.com/embed/v99aoiWDbmM'"
        frameborder="0"
        allowfullscreen
        ref="video"
      ></iframe>
      <div class="background-rectangle rect1"></div>
    </div>
    <section>
    <div class = "description">
        <h2>LE TITLE SEQUENCE</h2>
        <div class = keywords>
        <p>Blender</p> <p>Premiere Pro</p> <p>After Effects</p> <p>Photoshop</p>
        </div>
        <p>Le choix de la technique étant libre, nous avons opté pour une approche ambitieuse en combinant la 3D et la prise de vue réelle. Nos principales sources d'inspiration étaient les séquences d'ouverture des séries La Casa de Papel, qui projette des textes sur les maquettes blanches des bâtiments, et Narcos, qui superpose des textes sur des images d'archives.
        </p><br><br><br>
        <p>L'utilisation de la 3D nous a permis d'évoquer des lieux emblématiques des gouvernements américain et chinois, avec la possibilité d'y superposer des textes de manière immersive. À l'exception de deux extraits issus d'une banque d'images, l'ensemble des séquences a été tourné par notre équipe. En tant que responsable du montage, j'ai travaillé sur l'assemblage de ces séquences en les synchronisant avec une musique originale spécialement composée pour l'occasion.</p>
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
import NavBar from '../NavBar.vue';
import ProjectPresentation from '../ProjectPresentation.vue';
import FooterPage from '../FooterPage.vue';
export default {
    name: 'HacktivistsProject',
    components: {
        NavBar,
        ProjectPresentation,
        FooterPage
    },
    data() {
        return {
            project : {
                id : 5,
                title: 'Hacktivists',
                color : '#C3E4EE',
                categories : ['audiovisuel', 'prise de vue réelle','3D'],
                description: "'Hacktivists' est un projet conçu dans le cadre du cours de langue et compréhension du cinéma au sein du programme d'IMAC2. Réalisé en collaboration avec mes camarades Nina Grignola et Keziah Apaloo-Kingslove, ce projet nous a conduit à imaginer un long métrage complet. Notre tâche comprenait la création d'un synopsis détaillé, la sélection d'un casting, la constitution d'une équipe technique, et enfin, la concrétisation de la séquence d'ouverture du film. L'intrigue que nous avons développée se déroule en 2028, au cours d'une guerre ouverte opposant les États-Unis et la Chine. Un groupe de hackers prend pour cible les politiciens des deux nations, avec pour objectif de dévoiler leurs secrets les plus sombres afin de discréditer les gouvernements des deux côtés.",
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

.video-container {
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

.background-rectangle {
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