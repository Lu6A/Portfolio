<template>
<!-- <div class="home-page">
    <TitleHomePage class="title"/>
    <div class="buttons">
        <ButtonGeneric/>
        <ButtonGeneric/>
    </div>
    <ProjectsCarousel class="projects"/>  
</div> -->

<div class = navbar>
    <TitleHomePage/>
    <div class = "buttons">
        <ButtonGeneric/>
        <ButtonGeneric/>
    </div>
</div>
    <ProjectsCarousel class = "projects"/>

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

.navbar {
    height : 20%;
    width : 100%;
    display : flex;
    justify-content : space-around;
    align-items : center;
    
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