<template>
    <div class="projects-carousel">
      <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :category="project.category"
      :imageSrc="project.imageSrc"
      class="card"
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
        { id: 1, title: 'Projet 1', category: 'Catégorie 1', imageSrc: 'https://example.com/image1.jpg' },
        { id: 2, title: 'Projet 2', category: 'Catégorie 2', imageSrc: 'https://example.com/image2.jpg' },
        // Ajoutez d'autres projets selon vos besoins
      ],
    };
  },
  }
</script>

<style scoped>
.projects-carousel {
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
}

.card 
{
  flex : 0 0 auto;
}

</style>