<template>
<div class="home-page">
    <TitleHomePage/>
    <div class="buttons">
        <ButtonGeneric/>
        <ButtonGeneric/>
    </div>
    <div class="projects">
        <!-- <ProjectsCarousel/> -->
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div>   
</div>
</template>


<script>
import TitleHomePage from './TitleHomePage.vue';
import ButtonGeneric from './ButtonGeneric.vue';
//import ProjectsCarousel from './ProjectsCarousel.vue';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'HomePage',
    components: {
    TitleHomePage,
    ButtonGeneric,
    ProjectCard,
    //ProjectsCarousel

}
}
</script>


<style>
.home-page {
    height: 100%;
    width: 100%;
    margin-right : 3%;
    display : grid;
    grid-template-columns: auto auto 2vw;
    grid-template-rows: auto 3fr;
    grid-template-areas: 
    "title buttons ." 
    "projects projects projects";
}

.buttons {
    grid-area: buttons;
    justify-self: end;
    display : flex;
    column-gap : 10%;
}

.projects {
    grid-area: projects;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    display : flex;
    flex-wrap: nowrap;
}

</style>