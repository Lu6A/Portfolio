<template>
    <NavBar/>
    <ProjectPresentation :project="project"/>
    <FooterPage/>
</template>

<script>
import NavBar from '../NavBar.vue';
import ProjectPresentation from '../ProjectPresentation.vue';
import FooterPage from '../FooterPage.vue';

export default {
    name : 'SchoolMouvProject',
    components : {
        NavBar,
        ProjectPresentation,
        FooterPage
    },
    data(){
        return {
            project : {
                id : 6,
                title: 'SchoolMouv',
                color : '#F06473',
                categories : ['communication', 'UX/UI'],
                description: `Lors de mon stage de deuxième année de formation IMAC, j'ai rejoins MIKII, une entreprise dynamique spécialisée dans le développement de sites internet e-commerce sous le CMS Magento. Ma mission consistait à contribuer à six points stratégiques visant à refaçonner l'image et la communication de l'entreprise. Ces objectifs incluaient le réalignement de la communication interne, l'amélioration de la valeur perçue par les prospects et clients, la démonstration de l'indispensabilité de MIKII pour ses clients, l'attraction de nouveaux talents et la visibilité accrue sur les réseaux sociaux. En l'espace de deux mois, ce stage m'a offert une immersion complète dans les coulisses d'une agence web en pleine transition.`,
                class : 'noLink',
            }
        }
    }
}
</script>

<style scoped>

</style>