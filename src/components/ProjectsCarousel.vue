<template>
    <div class="projectsCarousel" ref="carousel">
      <div class="projectWrapper" :style="{ width: projects.length * projectWidth + 'px' }">
        <div class="innerWrapper">
        <ProjectCard v-for="project in duplicatedProjects" :key="project.id" :project="project" class="card" />
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
        { id: 1, title: 'Projet 1', category: 'Catégorie 1', imageSrc: 'https://picsum.photos/200/300' },
        { id: 2, title: 'Projet 2', category: 'Catégorie 2', imageSrc: 'https://picsum.photos/200/300' },
        { id: 3, title: 'Projet 3', category: 'Catégorie 3', imageSrc: 'https://picsum.photos/200/300' },
        { id: 4, title: 'Projet 4', category: 'Catégorie 4', imageSrc: 'https://picsum.photos/200/300' },
        { id: 5, title: 'Projet 5', category: 'Catégorie 5', imageSrc: 'https://picsum.photos/200/300' },
        // { id: 6, title: 'Projet 6', category: 'Catégorie 6', imageSrc: 'https://picsum.photos/200/300' },
        // { id: 7, title: 'Projet 7', category: 'Catégorie 7', imageSrc: 'https://picsum.photos/200/300' },
        // { id: 8, title: 'Projet 8', category: 'Catégorie 8', imageSrc: 'https://picsum.photos/200/300' },
        // { id: 9, title: 'Projet 9', category: 'Catégorie 9', imageSrc: 'https://picsum.photos/200/300' },
        // { id: 10, title: 'Projet 10', category: 'Catégorie 10', imageSrc: 'https://picsum.photos/200/300' },
      ],
      //sequenceLength: 2,
      numberOfVisibleProjects: 6,
      isMounted: false,
    };
  },

  computed: {
    
    duplicatedProjects() {
      return [...this.projects, ...this.projects];
    },

    projectWidth() {
      // Calculez la largeur totale d'une seule carte
      return this.isMounted ? this.$refs.carousel.offsetWidth / this.numberOfVisibleProjects : 0;
    },

    // visibleProjects() {
    //   const totalProjects = this.projects.length;
    //   const startIndex = totalProjects - this.numberOfVisibleProjects;

    //   // Réorganisez les projets de manière circulaire
    //   return [
    //     ...this.projects.slice(startIndex),
    //     ...this.projects,
    //     ...this.projects.slice(0, startIndex),
    //   ];
    // },
  },

  mounted() {
    this.isMounted = true;
    this.$refs.carousel.addEventListener('scroll', this.handleScroll);
    console.log(this.duplicatedProjects);
  },

  beforeUnmount() {
    this.$refs.carousel.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    //handleScroll() {
    //   const carousel = this.$refs.carousel;

    //   if (carousel.scrollLeft <= 0) {
    //     // Vérifiez si le défilement est très proche du début
    //     this.loadMoreProjects('left');
    //   } else if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 10) {
    //     // La condition a été ajustée pour s'assurer que le défilement est très proche de la fin
    //     this.loadMoreProjects('right');
    //   }
    // },

    // loadMoreProjects(direction) {
    //   // Ajoutez tous les projets au tableau
    //   if (direction === 'left') {
    //     // Dupliquez les projets et ajoutez-les à la fin du tableau
    //     this.projects.push(...this.projects.map((project) => ({ ...project })));
    //   } else {
    //     // Dupliquez les projets et ajoutez-les au début du tableau
    //     this.projects.unshift(...this.projects.map((project) => ({ ...project })));
    //   }
    //   console.log('loadMoreProjects appelée');
    // },
  },
};
</script>

<style scoped>
.projectsCarousel {
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
}

.projectWrapper {
  display: flex;
  justify-content: center;
  position: relative; /* Ajout de position relative */
}

.innerWrapper {
  display: flex;
  position: absolute; /* Ajout de position absolue */
  left: 0; /* Alignez l'élément intérieur à gauche */
}


.card 
{
  flex : 0 0 auto;
}

</style>