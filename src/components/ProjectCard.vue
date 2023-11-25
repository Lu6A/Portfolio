<template>
    <div class = "projectCard">
        <div class = "categories">
            <p>{{category}}</p>
        </div>
        <p class="title">{{projectName}}</p>
        <div class = "imgContainer">
            <img src = "https://picsum.photos/200/300" alt = "image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    components: {
    },
    props: {
    projectName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    projectImg: {
      type: String,
      required: true,
    },
  },
}
</script>


<style scoped>
    .projectCard {
        /* min-width: 20%; */
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