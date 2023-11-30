<template>
<div class="home-page">
    <TitleHomePage class="title"/>
    <div class="buttons">
        <ButtonGeneric/>
        <ButtonGeneric/>
    </div>
    <ProjectsCarousel class="projects"/>  
</div>
</template>


<script>
import TitleHomePage from './TitleHomePage.vue';
import ButtonGeneric from './ButtonGeneric.vue';
import ProjectsCarousel from './ProjectsCarousel.vue';


export default {
    name: 'HomePage',
    components: {
    TitleHomePage,
    ButtonGeneric,
    ProjectsCarousel
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
    grid-template-rows: min-content 1fr;
    grid-template-areas: 
    "title buttons ." 
    "projects projects projects";
}

.title {
    grid-area: title;
}

.buttons {
    grid-area: buttons;
    justify-self: end;
    display : flex;
    column-gap : 10%;
}

.projects {
    grid-area: projects;
}

</style>