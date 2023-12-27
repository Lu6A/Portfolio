<template>
  <div class = navbar>
      <TitleHomePage/>
      <div class = "buttons">
          <ButtonGeneric/>
          <ButtonGeneric/>
      </div>
  </div>
      <div class="slider-wrap" ref="sliderWrap">
        <div class="slider">
          <div class="slider-item" v-for="project in projects" :key="project.id">
            <ProjectCard :project="project" class="card" />
          </div>
        </div>
      </div>
</template>

<script>
import TitleHomePage from './TitleHomePage.vue';
import ButtonGeneric from './ButtonGeneric.vue';
import ProjectCard from './ProjectCard.vue';


export default {
    name: 'HomePage',
    components: {
    TitleHomePage,
    ButtonGeneric,
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies al
}
</script>


<style>

.navbar {
    margin-top : 3vh;
    height : 17vh;
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : start;
}

.buttons {
    padding-right : 3%;
    display : flex;
    column-gap : 10%;
}

.sliderWrap {
    margin-top : 3vh;
    height : 77vh;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
}

.slider {
    height : 100%;
    display: flex;
}

/* .projects {
    height : 80%;
    width : 100%;
} */

/* .home-page {
    height: 100%;   
    width: 100%;
    margin-right : 3%;
    display : grid;
    grid-template-columns: auto auto 2vw;
    grid-template-rows: min-content 1fr;
    grid-template-areas: 
    "title buttons ." 
    "projects projects projects";
} */

/* .title {
    grid-area: title;
} */

/* .buttons {
    grid-area: buttons;
    justify-self: end;
    display : flex;
    column-gap : 10%;
} */


</style>