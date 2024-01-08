<template>
    <NavBar/>
    <ProjectPresentation :project="project"/>
    <div class="videoContainer">
      <iframe
        :src="'https://www.youtube.com/embed/k7d7twiG1os'"
        frameborder="0"
        allowfullscreen
        ref="video"
      ></iframe>
    <div class="background-rectangle rect1"></div>
    </div>
    <section>
    <div class = "description">
        <h2>LE SITE INTERNET</h2>
        <div class = keywords>
        <p>Figma</p> <p>HTML</p> <p>CSS</p> <p>Javascript</p> <p>SQL</p>
        </div>
        <p>Le site internet permet de pérenniser les oeuvres des étudiants, ainsi que notre exposition.
        Conçu et et codé entièrement par notre groupe, il offre la possibilité de jouer avec les textes, combinés grâce à l’aléatoire, mais aussi retrouver des informations sur le mouvement de l’Oulipo, des photos de l’exposition et des liens vers les créations personnelles des étudiants apprentis écrivains autour de leurs textes.
        </p><br><br><br>
        <p>Nous avons établi une connexion entre le monde physique et le numérique en plaçant un QR code menant vers le site internet sur chaque cartel de l'exposition.  Nous avons de plus introduit une dimension interactive dans une projection au sein de la bibliothèque. En scannant un QR code à l'aide d'un smartphone, nous encouragions les visiteurs à contribuer en projetant des vers sur le mur d'un simple clic. Ces vers vagabondaient dans l'espace, permettant une lecture libre qui dépendait de la trajectoire du regard, s'inspirant ainsi du concept des "Bristols" du poète Frédéric Forte. En conséquence, chaque visiteur avait la possibilité de découvrir un poème unique.</p>
    </div>
    
    <div class="PCimg">
        <img src="assets/img/combimac/combimac1.png" alt="combimac1" class="combimacPC">
        <img src="assets/img/combimac/combimac2.png" alt="combimac2" class="combimacPC">
        <img src="assets/img/combimac/combimac3.png" alt="combimac3" class="combimacPhone">
    </div>

    </section>

    <div class = "triptych">
        <img src="assets/img/combimac/combimac14.jpg" alt="projection exposition">
        <img src="assets/img/combimac/combimac1.png" alt="combimac4" ref="triptych">
        <img src="assets/img/combimac/combimac15.jpg" alt="projection exposition">
    </div>

    <section>
    <div class = "description">
        <h2>L’EXPOSITION</h2>
        <div class = keywords2>
        <p>Figma</p> <p>Illustrator</p>
        </div>
        <p>La nature du public étudiant présente souvent un défi, en particulier lorsqu'il s'agit d'aborder des sujets littéraires. Lors de la création de l'exposition, notre objectif était de susciter l'interaction au maximum. Notre approche consistait à concevoir des structures manipulables pour inciter les visiteurs à s'arrêter et à explorer le monde de la littérature combinatoire avec ses nombreuses possibilités.
        Ainsi, nous avons offert aux visiteurs la possibilité de faire tourner des roues, de manipuler des cubes pivotants, de résoudre une enquête policière en utilisant des fils sur un grand tableau, de participer à une "chasse au trésor" dans la bibliothèque, et de découvrir divers autres objets en papier à manipuler et à afficher.
        </p><br><br><br>
        <p>Mon rôle consistait à concevoir les structures de l'exposition en utilisant des matériaux récupérés que j'ai soigneusement découpés et assemblés dans un atelier situé sur le campus de l'université. Parallèlement, j'ai élaboré les affiches qui représentent les graphes des "contes à votre façon", des récits où le lecteur façonne son propre cheminement en prenant des décisions.
        De nombreux écrivains de l’Oulipo, en plus d’écrire les contes, les ont représentés sous forme de graphes. Cela permet de visualiser l’arborescence de l’histoire. C’est un regard mathématique et statistique sur la littérature. J’ai ainsi imaginé des affiches à la fois informatives et décoratives.</p>
    </div>
    </section>

    <div class = expo>
        <img src="assets/img/combimac/combimac7.jpg" alt="combimac7" class = "exposition1" ref="exposition1">
        <div class="background-rectangle rect2"></div>
    </div>
    

    <div class = "triptych2">
        <img src="assets/img/combimac/combimac8.png" alt="combimac8">
        <img src="assets/img/combimac/combimac9.png" alt="combimac9">
        <img src="assets/img/combimac/combimac10.png" alt="combimac10">
    </div>

    <img src="assets/img/combimac/combimac11.jpg" alt="combimac11" class = "banner">

    <div class = "duet">
        <img src="assets/img/combimac/combimac12.jpg" alt="combimac12" ref="duet">
        <img src="assets/img/combimac/combimac13.jpg" alt="combimac13">
    </div>

    <FooterPage/>

</template>

<script>
import NavBar from '../NavBar.vue';
import ProjectPresentation from '../ProjectPresentation.vue';
import FooterPage from '../FooterPage.vue';

export default {
    name: "CombimacProject",
    components: {
        NavBar,
        ProjectPresentation,
        FooterPage
    },
    data() {
    return{
        project: {
        id: 1,
        color : '#79C9D8',
        title: 'Combimac',
        categories: ['en groupe', 'exposition', 'web'],
        description: `Dans le cadre de la résidence de l'écrivain oulipien Eduardo Berti à l'université Gustave Eiffel, les étudiants de première année d'IMAC (ingénieurs en Image, Multimédia, Audiovisuel et Communication) à l’ESIPE ont suivi des cours d’expression et d'écriture autour du thème « littérature et combinatoire », cours animés par Eduardo Berti lui-même et Virginie Tahar, enseignante-chercheuse en littérature française. Lors de ces cours, les IMAC 1 ont produit plusieurs textes combinatoires, de formes différentes.
                    À partir de ces textes, Juliette Jeannin, Grégoire Tinnes, Emma Veauvy et moi-même avons imaginé une exposition qui s’est déroulée du 14 mars au 7 avril à la bibliothèque Georges Perec à l’occasion du Printemps des poètes 2023, ainsi qu’un site internet.
                    À travers des installations originales et interactives, nous invitons le visiteur à découvrir les créations des étudiants en combinant leurs textes de façon ludique.`,
        class : 'link',
        link : 'combimac.oulico.fr',
        buttonText : 'Voir le site'
        },

    }
    },
}

</script>

<style scoped>

*{
    --projectColor : #79C9D8;
}

section {
    width : 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin : auto;
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
iframe {
    box-shadow: 3px 3px 40px rgba(70,70,70,0.2);
}

.videoContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10%;
    position: relative;
}

.background-rectangle {
    width: 100%;
    position: absolute;
    z-index: -1;
    background-color: var(--projectColor);
}

.rect1 {
    height: 545%;
    max-height : 2500px;
    top: calc(50%);
    left: 0;

}

iframe {
    width: 50vw;
    aspect-ratio: 16/9;
    border: none;
    border-radius: 1rem;
}

.description{
    margin : 20% 0;
}

.keywords{
    display: flex;
    margin-bottom: 5%;
    color : #f6f6f6;
    justify-content: center;
    column-gap: 2%;
}

.keywords2
{
    display: flex;
    margin-bottom: 5%;
    color : var(--projectColor);
    justify-content: center;
    column-gap: 2%;
}

.PCimg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 15px;
    margin-bottom: 20%;
    position : relative;
}
.combimacPC{
    width : 85%;
    aspect-ratio: 16/9;
}

.triptych{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.triptych img{
    width : 30%;
    aspect-ratio: 1;
    object-fit: cover;
}

.expo {
    position : relative;
    width : 100%;
}

.rect2 {
    height: 330%;
    top: calc(45%);
    left: 0;
}

.exposition1{
    width : 80%;
    margin :0 10% 10% 10%;
}

.triptych2{
    width: 80%;
    margin: 0 10% 10% 10%;
    display: flex;
    justify-content: space-between;
}

.triptych2 img{
    width : 30%;
    height : auto;
    object-fit: cover;
}

.banner{
    width: 100%;
    object-fit: cover;
    margin-bottom: 10%;
    border-radius : 0;
}

.duet{
    width: 80%;
    margin: 0 10% 10% 10%;
    display: flex;
    justify-content: space-between;
}
.duet img{
    width : 45%;
    aspect-ratio: 1/1.2;
    object-fit: cover;
}

.combimacPhone{
    z-index: 10;
    aspect-ratio: 9/19.5;
    position : absolute;
    top : calc(25%);
    left : calc(75%);
    height : 50%;
}


.backgroundRectangle1 {
  /* --projectColor: #79C9D8; */
  position: absolute;
  /* top: 953px; */
  width: 100%; /* Largeur de la page */
  /* height : 1448px; */
  background-color: var(--projectColor) ;/* Couleur du rectangle */
  z-index: -1; /* Place le rectangle en arrière-plan */
}

.backgroundRectangle2
{
    position: absolute;
    width: 100%;
    background-color: var(--projectColor) ;
    z-index: -1; 
}

::-webkit-scrollbar-thumb, ::-moz-scrollbar-thumb {
    background-color : #79C9D8; /* Coins arrondis du bouton */
}

@media screen and (max-width : 1024px){
    .rect1 {
        height : 560%;
    }
}

@media screen and (max-width : 425px){
    .rect1 {
        height : 760%;
    }
}

@media screen and (max-width : 300px){
    .rect1 {
        height : 1080%;
    }
}





</style>
