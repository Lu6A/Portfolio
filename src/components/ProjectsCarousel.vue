<template>
    <div class="projects-carousel">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div>
</template>

<script>
  import ProjectCard from './ProjectCard.vue';
  export default {
    name: 'ProjectsCarousel',
    components: {
      ProjectCard
    }
  }
</script>

<style scoped>
.projects-carousel {
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  display : flex;
  flex-wrap: nowrap;
}
</style>