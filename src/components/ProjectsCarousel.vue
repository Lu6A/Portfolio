<template>
    <div class="sliderWrap" ref="sliderWrap">
      <div class="slider" :style="{ transform: `translateX(${-scrollPos}px)`}">
        <div class="projectWrapper" v-for="project in duplicatedProjects" :key="project.id">
          <ProjectCard :project="project" class="card" />
        </div>
      </div>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'ProjectsCarousel',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        { id: 1, title: 'Combimac', categories: ['exposition','UX/UI','web'], imageSrc: 'assets/img/combimac/combimac.jpg'},
        { id: 2, title: 'Keycube', categories: ['UX/UI', 'web'], imageSrc: 'assets/img/keycube/keycube.png' },
        { id: 3, title: 'Mikii', categories: ['communication','UX/UI'], imageSrc: 'assets/img/mikii/mikii.png'},
        { id: 4, title: 'Rick and Morty API', categories: ['web'], imageSrc: 'assets/img/rickAndMorty/rick.jpg'},
        { id: 5, title: 'Hacktivists', categories: ['audiovisuel', '3D'], imageSrc: 'assets/img/Hacktivists/hack.png' },
        { id: 6, title: 'SchoolMouv', categories: ['UX/UI'], imageSrc: 'https://picsum.photos/200/300' },
        { id: 7, title: 'The Password Game', categories: ['web', 'game'], imageSrc: 'https://picsum.photos/200/300' },
        // { id: 8, title: 'Projet 8', categories: 'Catégorie 8', imageSrc: 'https://picsum.photos/200/300' },
        // { id: 9, title: 'Projet 9', categories: 'Catégorie 9', imageSrc: 'https://picsum.photos/200/300' },
        // { id: 10, title: 'Projet 10', categories: 'Catégorie 10', imageSrc: 'https://picsum.photos/200/300' },
      ],
      duplicatedProjects: [],
      scrollPos: 0,
      isMounted: false,
      projectWidth: 0,
    };
  },

  methods: {
    duplicateProjects() {
    this.duplicatedProjects = [...this.projects, ...this.projects];
    },

    handleScroll() {
    if (window.innerWidth > 1024 && this.isMounted) {
      // Obtient la position actuelle de défilement horizontal du conteneur
      if (this.$refs.sliderWrap) {
        this.scrollPos = this.$refs.sliderWrap.scrollLeft;

        // Calcule la largeur d'un projet (chaque projet a la même largeur)
        this.projectWidth = this.$refs.sliderWrap.scrollWidth / this.duplicatedProjects.length;

        // Vérifie si la position de défilement dépasse la fin du contenu
        if (this.scrollPos >= this.$refs.sliderWrap.scrollWidth - this.$refs.sliderWrap.clientWidth - 10) {
          // Si c'est le cas, réinitialise la position de défilement au début pour créer l'effet de défilement infini
          this.$refs.sliderWrap.scrollLeft = 1;
        } else if (this.scrollPos <= 0) {
          // Si la position de défilement est inférieure ou égale à zéro, réinitialise la position au dernier projet
          this.$refs.sliderWrap.scrollLeft = this.$refs.sliderWrap.scrollWidth - this.$refs.sliderWrap.clientWidth - this.projectWidth;
        }
      }
      // Planifie une nouvelle exécution de la fonction handleScroll lors de la prochaine animation de la frame
      requestAnimationFrame(this.handleScroll);
    }
    },
},  

  mounted() {
    this.duplicateProjects(); // Appelez la méthode pour dupliquer les projets
    this.isMounted = true;
    window.addEventListener('resize', this.handleScroll);
    this.handleScroll();
  },



};
</script>

<style scoped>
.sliderWrap {
  overflow-y : hidden;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none; /* Pour Firefox */
  -ms-overflow-style: none;
}

.sliderWrap::-webkit-scrollbar {
  display: none;
}

.slider {
  display: flex;
}

.projectWrapper {
  display: flex;
  flex: 0 0 auto;
}

/* .card 
{
  flex : 0 0 auto;
} */

</style>