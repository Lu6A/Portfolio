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
    </div>
</div>
</template>

<script>
export default {
    name: 'ProjectPresentation',
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>

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
}

.description {
    width : 40%;
}

</style>