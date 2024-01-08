<template>
    <NavBar/>
    <ProjectPresentation :project="project"/>
    <section>
        <h2>LA REFLEXION UX</h2>
        <div class = "keywords" :style = "{'color' : '#f6f6f6'}">
        <p>Figma</p>
        <p>Excalidraw</p>
        </div>
        <p>
Voici les différentes étapes de réflexion que nous avons suivies pour mener à bien notre projet. Tout d'abord, nous avons élaboré et diffusé un guide d'entretien auprès des élèves de notre entourage. En regroupant les réponses dans une carte d'affinité, nous avons identifié les éléments récurrents, ceux qui étaient les plus représentatifs des besoins des utilisateurs. À partir de ces informations, nous avons créé un persona et une expérience map afin de mieux comprendre notre public cible. En parallèle, nous avons réfléchi au minimum viable product pour prioriser les éléments essentiels de notre application. Enfin, munis des données recueillies au cours des premières étapes, nous avons élaboré les userflows et les wireframes de notre maquette.</p>
        <div class = "background-rectangle"></div>
    </section>
    <div class = gallery>
        <div class="gallery-item" v-for="(image, index) in images" :key="index">
        <img
        :src="image.src"
        :alt="image.alt"
        @click="toggleImageClass(index)"
        :class="{ 'enlarged': enlargedIndex === index }"
        />
        <p>{{ image.description }}</p>
        </div>
    </div>

    <section>
        <h2>LA MAQUETTE</h2>
        <div class = "keywords" :style = "{'color' : '#AFD818'}">
        <p>Figma</p>
        </div>
        <p>En ce qui concerne la conception de l'interface utilisateur (UI), notre objectif était de créer une esthétique moderne, lumineuse et séduisante pour contraster avec le site web vieillissant de notre université. Nous avons opté pour une teinte verte pomme comme couleur principale, symbolisant la fraîcheur, la vitalité, l'énergie et la jeunesse. Parallèlement, nous avons arrondi tous les angles pour instiller une sensation de convivialité et de tranquillité, visant à rassurer les étudiants quant à la préparation de leur mobilité, qui s'avère stressante pour beaucoup.</p>
    </section>

    <div class = "quartet">
    <img src = "assets/img/schoolmouv/maquette1.png" alt = "maquette de l'accueil" class="maquette1">
    <div class = "duet">
    <img src = "assets/img/schoolmouv/maquette.png" alt = "maquette de la page destinations" class = "maquette2">
    <img src = "assets/img/schoolmouv/maquette2.png" alt = "maquette de la page carte intéractive" class = "maquette3">
    </div>
    <img src = "assets/img/schoolmouv/maquette3.png" alt = "maquette de la page compte rendu des étudiants" class = "maquette4">
    </div>

    <div class = "ad">
    <video ref = "video" src = "assets/img/schoolmouv/ad.mp4" loop></video>
    </div>  
    
    
    <FooterPage/>
</template>

<script>
import NavBar from '../NavBar.vue';
import ProjectPresentation from '../ProjectPresentation.vue';
import FooterPage from '../FooterPage.vue';

export default {
    name : 'SchoolMouvProject',
    components : {
        NavBar,
        ProjectPresentation,
        FooterPage
    },
    data(){
        return {
            enlargedIndex: null,
            userInteracted: false,
            project : {
                id : 6,
                title: 'SchoolMouv',
                color : '#AFD818',
                categories : ['communication', 'UX/UI'],
                description: "SchoolMouv représente un projet élaboré dans le cadre du cours d'UX/UI design de ma formation IMAC. En équipe de quatre personnes, notre mission consistait à conceptualiser l'expérience utilisateur complète d'un projet que nous avions imaginé. Nous avons suivi toutes les étapes de réflexion nécessaires pour élaborer la maquette d'un produit au design intuitif, répondant aux attentes de clients potentiels. Notre choix s'est porté sur le développement d'une application mobile visant à simplifier l'organisation d'un échange scolaire à l'étranger.",
                class : 'noLink',
            },
            images : [{src: "assets/img/schoolmouv/interview-min.png", alt: "guide d'interview", description: "guide d'interview"},
            {src: "assets/img/schoolmouv/affinity_map-min.png", alt: "affinity map", description: "affinity map"},
        {src: "assets/img/schoolmouv/persona-min.png", alt: "persona", description: "persona"},
            {src: "assets/img/schoolmouv/xp_map-min.png", alt: "experience map", description: "experience map"},
            {src: "assets/img/schoolmouv/mvp-min.png", alt: "Minimum viable product", description: "minimum viable product"},
            {src: "assets/img/schoolmouv/userflow-min.png", alt: "userflow", description: "userflow"},
            {src: "assets/img/schoolmouv/wireframe-min.png", alt: "wireframe", description: "wireframe"}]
        }},

    methods: {
    toggleImageClass(index) {
      // Définissez enlargedIndex pour activer/désactiver la classe 'enlarged'
      this.enlargedIndex = this.enlargedIndex === index ? null : index;
    },

    handleScroll() {
        if (this.userInteracted){
        this.$refs.video.play();
    }
//     const videoElement = this.$refs.video;
//     const rect = videoElement.getBoundingClientRect();
//     const windowHeight = window.innerHeight || document.documentElement.clientHeight;

//     // Vérifiez si la vidéo est dans la fenêtre visible
//     if (rect.top >= 0 && rect.bottom <= windowHeight && this.userInteracted) {
//       // Lancez la lecture de la vidéo
//       videoElement.play();
//     } else {
//       // Mettez en pause la vidéo si elle n'est pas visible ou si l'utilisateur n'a pas interagi
//       videoElement.pause();
//     }
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

unmounted() {
  window.removeEventListener('scroll', this.handleScroll);
  window.removeEventListener('click', this.handleUserInteraction);
}

}

</script>

<style scoped>

*{
    --projectColor : #AFD818;
}

section {
    width : 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin : 20% auto 10% auto;
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

.keywords{
    display: flex;
    margin-bottom: 5%;
    justify-content: center;
    column-gap: 10%;
}

.background-rectangle
{
    width : calc(100vw - 12px);
    height : 325%;
    position : absolute;
    z-index : -1;
    top : calc(-30%);
    background-color : var(--projectColor);
}

.gallery{
    width : 80%;
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    column-gap : 3%;
    margin : auto;
    position : relative;
}

.gallery-item{
    width : 20%;
    aspect-ratio : 16/9;
    margin-bottom : 3%;
    cursor : pointer;
}

.gallery-item p {
    text-align : center;
    font-size : 0.8rem;
    color : #f6f6f6;
}

.gallery-item:hover img {
    transform: scale(1.1); /* ou la valeur que vous préférez pour agrandir l'image */
    transition: transform 0.3s ease; /*Ajoute une transition pour une animation fluide */
}

.gallery-item img{
    width : 100%;
    height : 100%;
    object-fit : cover;
    transition: scale 0.3s ease;
    will-change: transform  ;
}

.gallery-item img.enlarged {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 130%;
  object-fit: contain; /* Utilisez "contain" pour conserver les proportions tout en s'assurant que l'image est entièrement visible */
  transform : scale(1.1) translate(-50%, -50%); /* Redimensionnez et centrez l'image */
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  cursor: pointer;
}

.quartet{
    width : 80%;
    margin : 10% auto;
    display : flex;
    align-items: center;
    justify-content: space-between;
}


.duet{
    height : 110%;
    display : flex;
    flex-direction : column;    
}

.duet img{
    margin-bottom : 15%;
}

.ad{
    width : 100%;
    height : 90vh;
}

video {
    width : 100%;
    height : 100%;
    object-fit : cover;
}

</style>