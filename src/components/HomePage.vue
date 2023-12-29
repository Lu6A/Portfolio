<template>
  <div class = "home-page">
  <div class = navbar>
      <TitleHomePage/>
      <div class = "buttons">
          <ButtonGeneric/>
          <ButtonGeneric/>
      </div>
  </div>
      <div class="slider-wrap" ref="sliderWrap" 
      @mousedown="handleMouseDown" 
      @mousemove="handleMouseMove" 
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseUp">
        <div class="slider" ref="slider">
          <div class="slider-item" v-for="project in duplicatedProjects" :key="project.id">
            <ProjectCard :project="project" class="card" />
          </div>
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
        { id: 1, title: 'Combimac', categories: ['exposition','UX/UI','web'], imageSrc: 'assets/img/combimac/combimac.jpg'},
        { id: 2, title: 'Keycube', categories: ['UX/UI', 'web'], imageSrc: 'assets/img/keycube/keycube.png' },
        { id: 3, title: 'Mikii', categories: ['communication','UX/UI'], imageSrc: 'assets/img/mikii/mikii.png'},
        { id: 4, title: 'Rick and Morty API', categories: ['web'], imageSrc: 'assets/img/rickAndMorty/rick.jpg'},
        { id: 5, title: 'Hacktivists', categories: ['audiovisuel', '3D'], imageSrc: 'assets/img/Hacktivists/hack.png' },
        { id: 6, title: 'SchoolMouv', categories: ['UX/UI'], imageSrc: 'assets/img/SchoolMouv/school.png' },
        { id: 7, title: 'The Password Game 2.0', categories: ['web', 'game'], imageSrc: 'assets/img/passwordGame/password.png' },  
        ], 
        duplicatedProjects: [],
        isDragging: false,
        startX: 0,
        scrollLeft: 0,
      }
    },
    methods: {
      handleMouseDown(event) {
        console.log('handleMouseDown')
        this.isDragging = true;
        event.preventDefault();
        this.startX = event.pageX - this.$refs.sliderWrap.offsetLeft;
        this.scrollLeft = this.$refs.slider.scrollLeft;
      },
      handleMouseMove(event) {
        console.log('handleMouseMove')
        if (!this.isDragging) return;
        event.preventDefault();
        const x = event.pageX - this.$refs.sliderWrap.offsetLeft;
        const walk = (x - this.startX) * 2;
        this.$refs.slider.scrollLeft = this.scrollLeft - walk;
      },
      handleMouseUp() {
        console.log('handleMouseUp')
        this.isDragging = false;
      },
    },
    mounted() {
      this.duplicatedProjects = [...this.projects, ...this.projects];
    },
  }

</script>


<style>



.navbar {
    padding-top : 1%;
    height : auto;
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
    height : auto;
    white-space: nowrap;
    display: flex;
}

.slider {
    height : 100%;
    display: flex;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Remove scrollbar */
.slider::-webkit-scrollbar {
    display: none;
}

/*remove scrollbar for mozilla*/
.slider {
    overflow: -moz-scrollbars-none;
}

</style>