<template>
<div class = "title-container">
<p class="name">LUCIE AUGIER - PORTFOLIO 2023</p>
<div class = "welcome-container">
<p class="welcome">BIENVENUE <br> SUR MON PORTFOLIO</p>
<div class="hello-container"><p class="hello">HELLO !</p></div>
</div>
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
    position : relative;
    padding-left : 3%;

}
.name {
    font-family: 'Inter', sans-serif;
    font-weight: 400; /*regular*/
    font-size: 1rem;
    margin-left : -5%;
}

.welcome-container {
    position : relative;
}


.hello-container {
    position : absolute;
    top : calc(33%);
    left :calc(-13%);
}
.hello {
    white-space: nowrap;
    transform: rotate(-90deg);
    font-family: 'Prompt', sans-serif;
    font-weight: 800; /*extrabold*/
    font-size: 1.625rem; 
    color: transparent;
    -webkit-text-stroke: 1px rgba(234, 89, 25, 1);
    
}

.welcome {
    font-family: 'Prompt', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.2;
}

</style>