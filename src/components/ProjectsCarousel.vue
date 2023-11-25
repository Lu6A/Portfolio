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
        { id: 1, title: 'Projet 1', category: 'Catégorie 1', imageSrc: 'https://picsum.photos/200/300' },
        { id: 2, title: 'Projet 2', category: 'Catégorie 2', imageSrc: 'https://picsum.photos/200/300' },
        { id: 3, title: 'Projet 3', category: 'Catégorie 3', imageSrc: 'https://picsum.photos/200/300' },
        { id: 4, title: 'Projet 4', category: 'Catégorie 4', imageSrc: 'https://picsum.photos/200/300' },
        { id: 5, title: 'Projet 5', category: 'Catégorie 5', imageSrc: 'https://picsum.photos/200/300' },
        { id: 6, title: 'Projet 6', category: 'Catégorie 6', imageSrc: 'https://picsum.photos/200/300' },
        { id: 7, title: 'Projet 7', category: 'Catégorie 7', imageSrc: 'https://picsum.photos/200/300' },
        { id: 8, title: 'Projet 8', category: 'Catégorie 8', imageSrc: 'https://picsum.photos/200/300' },
        { id: 9, title: 'Projet 9', category: 'Catégorie 9', imageSrc: 'https://picsum.photos/200/300' },
        { id: 10, title: 'Projet 10', category: 'Catégorie 10', imageSrc: 'https://picsum.photos/200/300' },
        { id: 11, title: 'Projet 11', category: 'Catégorie 11', imageSrc: 'https://picsum.photos/200/300' },
        { id: 12, title: 'Projet 12', category: 'Catégorie 12', imageSrc: 'https://picsum.photos/200/300' },
        { id: 13, title: 'Projet 13', category: 'Catégorie 13', imageSrc: 'https://picsum.photos/200/300' },
        { id: 14, title: 'Projet 14', category: 'Catégorie 14', imageSrc: 'https://picsum.photos/200/300' },
        { id: 15, title: 'Projet 15', category: 'Catégorie 15', imageSrc: 'https://picsum.photos/200/300' },
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