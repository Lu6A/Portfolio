<template>
    <NavBar/>
    <PostItComponent :style = "{'background-color' : '#79C9D8'}"/>
    <PostItComponent :style = "{'background-color' : '#EA5919'}"/>
    <PostItComponent :style = "{'background-color' : '#FBBC19'}"/>
    <PostItComponent :style = "{'background-color' : '#E61B70'}"/>
    <PostItComponent :style = "{'background-color' : '#5E4A99'}"/>
    <PostItComponent :style = "{'background-color' : '#79C9D8'}"/>
    <PostItComponent :style = "{'background-color' : '#EA5919'}"/>
    <div class = "presentationContainer">
        <div class = "textContainer">
        <h1>BONJOUR,</h1>
        <h1>JE M'APPELLE</h1>
        <h1 class ="name">LUCIE</h1>
        </div>
        <img src="/assets/img/portraitCV.jpg" alt="photo de Lucie Augier" class="picture">
    </div>
</template>

<script>

import NavBar from './NavBar.vue';
import PostItComponent from './PostItComponent.vue';
export default {
    name: 'AboutPage',
    components: {
        NavBar,
        PostItComponent
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>

h1{
    line-height: 1.2em;
}
    .presentationContainer {
        margin-top : -5%;
        width : 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        column-gap: 3%;
        align-items: center;
    }
    .textContainer {
        display: flex;
        flex-direction: column;
        text-align : end;
        justify-content: flex-end;
        align-items: end;
    }
    .name {
        line-height: 1em;
        font-size: 8em;
        font-weight: bold;
        color: #111111;
        color: transparent;
        -webkit-text-stroke: 1px rgba(234, 89, 25, 1);
        -moz-text-stroke: 1px rgba(234, 89, 25, 1);
    }
    .picture {
        height: 100%;
        object-fit: contain;
        width: 30%;
    }

</style>