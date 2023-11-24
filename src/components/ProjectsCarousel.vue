<template>
    <div class="carousel-wrapper">
        <div class="carousel">
          <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
        </div>
    </div>
  </template>
  
  <script>
  import ProjectCard from "./ProjectCard.vue";
  
  export default {
    name: "ProjectsCarousel",
    components: {
      ProjectCard,
    },
    data() {
      return {
        projects: [
          { title: "Projet 1", category: "En groupe", imageUrl: "https://picsum.photos/200/300" },
          { title: "Projet 2", category: "En solo", imageUrl: "https://picsum.photos/200/300" },
            { title: "Projet 3", category: "En groupe", imageUrl: "https://picsum.photos/200/300" },
            { title: "Projet 4", category: "En solo", imageUrl: "https://picsum.photos/200/300" },
            { title: "Projet 5", category: "En groupe", imageUrl: "https://picsum.photos/200/300" },
            { title: "Projet 6", category: "En solo", imageUrl: "https://picsum.photos/200/300" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  
  .carousel-wrapper {
    height : 100%;
    width: 100%;
    overflow-x: auto;
    display: flex;
    white-space: nowrap;
  }
  
  .carousel {
    display: flex;
  }

  </style>