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
    </div>
    <div class="backgroundRectangle1" :style = "{'top' : videoCenter + 'px'}"></div>

</template>

<script>
import NavBar from './NavBar.vue';
import ProjectPresentation from './ProjectPresentation.vue';

export default {
    name: "CombimacProject",
    components: {
        NavBar,
        ProjectPresentation
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
        link : 'combimac.oulico.fr',
        buttonText : 'Voir le site'
        },
        videoCenter : 0,
        // videoPositionY : this.$refs.video.offsetLeft,
    }
    },

    mounted() {
        this.videoCenter = this.$refs.video.getBoundingClientRect().top + window.scrollY + this.$refs.video.offsetHeight/2;
    }
}

</script>

<style scoped>

.videoContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10%;
}

iframe {
    width: 50vw;
    aspect-ratio: 16/9;
    border: none;
    border-radius: 1rem;
    /* position : relative; */
}

.backgroundRectangle1 {
--projectColor: #79C9D8;
  position: absolute;
  /* top: 953px; */
  width: 100%; /* Largeur de la page */
  height: 200px; /* Hauteur du rectangle */
  background-color: var(--projectColor) ;/* Couleur du rectangle */
  z-index: -1; /* Place le rectangle en arrière-plan */
}

</style>
