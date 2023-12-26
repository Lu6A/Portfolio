<template>
<div class = navbar>
    <TitleHomePage/>
    <div class = "buttons">
        <ButtonGeneric/>
        <ButtonGeneric/>
    </div>
</div>
    <div class="sliderWrap" ref="sliderWrap" @wheel="handleScroll">
      <div class="slider"  :style="{ animationDuration: sliderSpeed }">
        <div class="projectWrapper" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" class="card" />
        </div>
      </div>
      <div class="slider"  :style="{ animationDuration: sliderSpeed }">
        <div class="projectWrapper" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" class="card" />
        </div>
      </div>
    </div>

</template>


<script>
import TitleHomePage from './TitleHomePage.vue';
import ButtonGeneric from './ButtonGeneric.vue';
import ProjectCard from './ProjectCard.vue';
// import ProjectsCarousel from './ProjectsCarousel.vue';


export default {
    name: 'HomePage',
    components: {
    TitleHomePage,
    ButtonGeneric,
    ProjectCard
    // ProjectsCarousel
    },
    data() {
        return {
        sliderSpeed : "10s",
        projects: [
        { id: 1, title: 'Combimac', categories: ['exposition','UX/UI','web'], imageSrc: 'assets/img/combimac/combimac.jpg'},
        { id: 2, title: 'Keycube', categories: ['UX/UI', 'web'], imageSrc: 'assets/img/keycube/keycube.png' },
        { id: 3, title: 'Mikii', categories: ['communication','UX/UI'], imageSrc: 'assets/img/mikii/mikii.png'},
        { id: 4, title: 'Rick and Morty API', categories: ['web'], imageSrc: 'assets/img/rickAndMorty/rick.jpg'},
        { id: 5, title: 'Hacktivists', categories: ['audiovisuel', '3D'], imageSrc: 'assets/img/Hacktivists/hack.png' },
        { id: 6, title: 'SchoolMouv', categories: ['UX/UI'], imageSrc: 'assets/img/SchoolMouv/school.png' },
        { id: 7, title: 'The Password Game 2.0', categories: ['web', 'game'], imageSrc: 'assets/img/passwordGame/password.png' },  
        ],
        }
    },
    methods: {
        handleScroll(event) {
            //créé un scroll horizontal infini pour le sliderWrap
            const sliders = this.$refs.sliderWrap.querySelectorAll('.slider');
            sliders.scrollLeft += event.deltaY;
            
        }
    }
}
</script>   

<style scoped>

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
    animation: scroll linear infinite;
}

/* .sliderWrap:hover .slider{
    animation-play-state: paused;
} */


@keyframes scroll {
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-100%);
  }
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