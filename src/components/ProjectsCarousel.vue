<template>
  <div class="projectsCarousel" ref="carousel">
    <ProjectCard
      v-for="(project, index) in visibleProjects"
      :key="index"
      :projectName="project.projectName"
      :projectImg="project.projectImg"
      :category="project.category"
      :style="{ width: projectWidth }"
    />
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'ProjectsCarousel',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {projectName: 'Projet 1', category:'en groupe', projectImg: 'https://picsum.photos/200/300'},
        {projectName: 'Projet 2', category:'en groupe', projectImg: 'https://picsum.photos/200/300'},
        {projectName: 'Projet 3', category:'en groupe', projectImg: 'https://picsum.photos/200/300'},
        {projectName: 'Projet 4', category:'en groupe', projectImg: 'https://picsum.photos/200/300'},
        {projectName: 'Projet 5', category:'en groupe', projectImg: 'https://picsum.photos/200/300'},
        {projectName: 'Projet 6', category:'en groupe', projectImg: 'https://picsum.photos/200/300'},
        {projectName: 'Projet 7', category:'en groupe', projectImg: 'https://picsum.photos/200/300'},
      ],
      visibleProjects: [], // Liste des projets actuellement visibles
      projectWidth: '200' // Définissez une largeur par défaut en pourcentage
    };
  },

  mounted() {

    // Calculez la largeur du projet une fois que les projets sont chargés
    this.calculateProjectWidth();
    // Remplissez la liste des projets visibles initialement
    this.fillVisibleProjects();

    if (this.$refs.carousel) {
      this.$refs.carousel.addEventListener('scroll', this.handleScroll);
      console.log('Visible Projects:', this.visibleProjects);
    }
  },

  beforeUnmount() {
    if (this.$refs.carousel) {
      this.$refs.carousel.removeEventListener('scroll', this.handleScroll);
    }
  },

  methods: {
    handleScroll() {
      const carousel = this.$refs.carousel;
      const lastVisibleProjectIndex = this.visibleProjects.length - 1;

      if (carousel.scrollLeft >= lastVisibleProjectIndex * this.projectWidth) {
        const firstProject = this.visibleProjects.shift();
        this.visibleProjects.push(firstProject);
        carousel.scrollLeft -= this.projectWidth;
      }
      this.fillVisibleProjects();
    },

    fillVisibleProjects() {
      const carousel = this.$refs.carousel; // Ajout de cette ligne
      const numVisible = Math.floor(carousel.clientWidth / this.projectWidth);
      this.visibleProjects = this.projects.slice(0, numVisible);
    },

    calculateProjectWidth() {
      const containerWidth = this.$refs.carousel.clientWidth;
      this.projectWidth = containerWidth * 0.2;
    },

    getProjectWidth() {
      // return this.projectWidth;
      return 500;
    },
  }
};
</script>

<style scoped>
.projectsCarousel {
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
}
</style>