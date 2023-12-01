<template>
<div class = "projectPresentation">
    <div class = "categoriesAndTitle">
        <div class = categories>
        <p v-for="category in project.categories" :key="category.id" :style="{color:project.color}">{{category}}</p>
        </div>
        <h1>{{project.title}}</h1>
    </div>
    <div class="description">
        <p>{{project.description}}</p>
        <ButtonProject :project="project" :style="{'--projectColor' : project.color}"/>
    </div>
</div>
</template>

<script>

import ButtonProject from './ButtonProject.vue';

export default {
    name: 'ProjectPresentation',
    components: {
        ButtonProject
    },
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>

p{
    font-weight : 500;
}

.projectPresentation
{
    width: 100%;
    display : flex;
    align-items : center;
    justify-content : center;
}

.categoriesAndTitle
{
    width : 40%;
    display : flex;
    flex-direction : column;
    row-gap : 2%;
}

.categories {
    display : flex;
    column-gap : 3%;
    font-weight : 700;
}

.description {
    width : 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

a {
    margin-top : 10%;
    padding : 2% 5%;
    border-radius : 1rem;
}


</style>