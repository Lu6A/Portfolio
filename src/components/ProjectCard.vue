<template>
    <div class="projectCard">
      <div class="categories">
        <p>{{ category }}</p>
      </div>
      <p class="title">{{ title }}</p>
      <div class="imgContainer">
        <img :src="imageSrc" alt="image" />
      </div>
    </div>
  </template>

<script>
export default {
    name: 'ProjectCard',
    components: {
    },
    props: {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
}
</script>


<style scoped>
    .projectCard {
        width: 320px;
        height : 100%;
        display : flex;
        flex-direction : column;
        row-gap : 2%;
        justify-content : flex-end;
        text-align: end;
    }

    .categories {
        margin-right : 3%;
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
    }

    .imgContainer img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

</style>