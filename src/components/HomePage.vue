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
        projects: [
        { id: 1, title: 'Combimac', categories: ['exposition','UX/UI','web'], imageSrc: 'assets/img/combimac/combimac.jpg'},
        { id: 2, title: 'Keycube', categories: ['UX/UI', 'web'], imageSrc: 'assets/img/keycube/keycube.png' },
        { id: 3, title: 'Mikii', categories: ['communication','UX/UI'], imageSrc: 'assets/img/mikii/mikii.png'},
        { id: 4, title: 'Rick and Morty API', categories: ['web'], imageSrc: 'assets/img/rickAndMorty/rick.jpg'},
        { id: 5, title: 'Hacktivists', categories: ['audiovisuel', '3D'], imageSrc: 'assets/img/Hacktivists/hack.png' },
        { id: 6, title: 'SchoolMouv', categories: ['UX/UI'], imageSrc: 'assets/img/SchoolMouv/school.png' },
        { id: 7, title: 'The Password Game 2.0', categories: ['web', 'game'], imageSrc: 'assets/img/passwordGame/password.png' },  
        ], 
        clonesWidth : 0,
        sliderWidth : 0,
        clones : [],
        disableScroll : false,
        scrollPos : 0,
        }
      },
    methods : {
      createClones() {
        this.clones = [...this.projects,...this.projects];
      },
      
      getClonesWidth() {
        return this.clonesWidth = 320 * this.clones.length;
      },

      getScrollPos () {
        return this.scrollPos = window.scrollY;
      },

      scrollUpdate() {
  this.scrollPos = this.getScrollPos();
  const slider = document.querySelector('.slider');

  // Adjust the translation based on your specific requirements
  const translationX = -this.scrollPos;

  // Check if the slider has reached the end or the beginning
  if (translationX >= this.clonesWidth) {
    slider.style.transform = `translateX(0)`;
  } else if (translationX <= 0) {
    slider.style.transform = `translateX(${this.clonesWidth}px)`;
  } else {
    slider.style.transform = `translateX(${translationX}px)`;
  }

  requestAnimationFrame(this.scrollUpdate);
},

      calculateDimensions () {
        this.sliderWidth = document.querySelector('.slider').getBoundingClientRect().width;
        this.clonesWidth = this.getClonesWidth();
      },
    },

    mounted () {
      this.createClones();
      this.calculateDimensions();
      document.body.style.height = `${this.sliderWidth}px`;
      window.scrollTo({ top:1});
      this.scrollUpdate();
    },
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

.slider-wrap {
  position : fixed ;
  top : 25vh;
  left : 0;
  width : 80%;
  margin-top : 3vh;
  height : 77vh;
  border : 1px solid black;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}

.slider {
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    display: flex;
    will-change: transform;
    background-color : red;
}

.slider-item {
    border : 1px solid black;
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




</style>