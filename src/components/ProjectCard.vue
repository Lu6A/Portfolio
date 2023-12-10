<template>
  <router-link :to="'/' + project.title" >
    <div class="projectCard">
      <div class="categories">
        <p v-for="category in project.categories" :key="category">{{category}}</p>
      </div>
      <p class="title">{{ project.title }}</p>
      <div class="imgContainer">
        <img v-bind:src='project.imageSrc' alt="image" />
      </div>
    </div>
  </router-link>
  </template>

<script>

export default {
    name: 'ProjectCard',
    components: {
    },
    props: {
    project: {
      type : Object,
      required : true,},
  }
}
</script>


<style scoped>
    .projectCard {
        width: 20rem;
        height : 100%;
        display : flex;
        flex-direction : column;
        row-gap : 2%;
        justify-content : flex-end;
        text-align: end;
    }

    .categories {
        margin-right : 3%;
        display : flex;
        justify-content: flex-end;
        column-gap: 10%;
        
    }

    .title {
        margin-bottom : 3%;
        margin-right : 3%; 
        font-weight: 700; /*semibold*/
        font-size: 1rem;
        text-transform: uppercase;
        color: #131412;
    }

    .imgContainer {
        width : 100%;
        height : 80%;
        overflow : hidden;
    }

    .imgContainer img {
        width : 100%;
        height : 100%;
        object-fit : cover;
        transform-origin: center center;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: .7s ease-in;
        transition: .7s ease;
    }

    .imgContainer img:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

</style>