<template>
<div class = "title-container">
<p class="name">LUCIE AUGIER - PORTFOLIO 2023</p>
<div class="hello-container"><p class="hello">HELLO !</p></div>
<p class="welcome">BIENVENUE <br> SUR MON PORTFOLIO</p>
</div>
</template>


<script>
export default {
    name: 'TitleHomePage',
    components: {
    }
}
</script>

<style scoped>

.title-container {
    margin-left : 2vw;
    overflow: hidden;
    display : grid;
    grid-template-columns: min-content auto;
    grid-template-rows: min-content 1fr;
    grid-template-areas: 
    "name name" 
    "hello welcome";
}
.name {
    grid-area: name;
    margin : 0 0 1% 0;
    font-family: 'Inter', sans-serif;
    font-weight: 400; /*regular*/
    font-size: 1rem;
}

.hello-container {
    grid-area: hello;
    /* place-self :start; */
    width: fit-content;
    height: fit-content;
    margin : 0;
    position : relative;
}
.hello {
    position : absolute;
    margin : 0;
    white-space: nowrap;
    transform: rotate(-90deg) translate(-40%, -90%);
    font-family: 'Prompt', sans-serif;
    font-weight: 800; /*extrabold*/
    font-size: 1.625rem; 
    color: transparent;
    -webkit-text-stroke: 1px rgba(234, 89, 25, 1);
}

.welcome {
    grid-area: welcome;
    margin: 0 0 0 4%;
    font-family: 'Prompt', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.2;
}

</style>