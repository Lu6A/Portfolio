<template>
    <NavBar></NavBar>
    <ProjectPresentation :project="project"/>
    <div class = group1>
    <img src="assets/img/mikii/mikii1.png" alt = "mikii page d'accueil" class="homePage">
    <div class = "backgroundRectangle rect1"></div>
    </div>

    <section>
        <h2>LES MAQUETTES</h2>
        <div class = keywords :style = "{'color' : '#F06473'}">
        <p>Figma</p>
        <p>Illustrator</p>
        </div>
        <p>Lors de mon stage, j'ai réalisé une analyse de la concurrence et de l’entreprise (SWOT, personas…), un
calendrier de communication sur les réseaux sociaux et une première maquette du site internet. <br><br><br> Les maquettes présentées ici ne sont qu'une première version de la page d'accueil, du menu et de la page des réalisations de MIKII. En effet, mon stage s'est terminé avant de les voir validées définitivement par mes tuteurs et fondateurs de l'entreprise. Cependant, elles sont représentatives de la direction que nous avons prise pour le site internet, le moodboard ayant été validé au préalable.</p>
    </section>

    <div class = mockups>
        <img src="assets/img/mikii/mikii2.png" alt = "mikii page réalisations" class="reals">
        <div class="menus">
        <img src="assets/img/mikii/mikii3.png" alt = "mikii page réalisations">
        <img src="assets/img/mikii/mikii4.png" alt = "mikii menu 1">
        <img src="assets/img/mikii/mikii5.png" alt = "mikii menu 2">
        <img src="assets/img/mikii/mikii6.png" alt = "mikii menu 3">
        </div> 
    </div>

    <img src="assets/img/mikii/mikii7.png" alt = "mikii moodboard" class="banner">

    <FooterPage></FooterPage>
</template>

<script>
import NavBar from '../NavBar.vue';
import ProjectPresentation from '../ProjectPresentation.vue'
import FooterPage from '../FooterPage.vue';

export default {
    name: "MikiiProject",
    components: {
        NavBar,
        ProjectPresentation,
        FooterPage
    },
    data() {
    return {
            project: {
            id: 3,
            title: 'Mikii',
            color : '#F06473',
            categories: ['communication', 'UX/UI'],
            description: `Lors de mon stage de deuxième année de formation IMAC, j'ai rejoins MIKII, une entreprise dynamique spécialisée dans le développement de sites internet e-commerce sous le CMS Magento. Ma mission consistait à contribuer à six points stratégiques visant à refaçonner l'image et la communication de l'entreprise. Ces objectifs incluaient le réalignement de la communication interne, l'amélioration de la valeur perçue par les prospects et clients, la démonstration de l'indispensabilité de MIKII pour ses clients, l'attraction de nouveaux talents et la visibilité accrue sur les réseaux sociaux. En l'espace de deux mois, ce stage m'a offert une immersion complète dans les coulisses d'une agence web en pleine transition.
                        `,
            class : 'noLink',
            },
            }
    }
}
</script>

<style scoped>

*{
    --projectColor : #F06473;
}

section {
    width : 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin : 0 auto 10% auto;
}

p{
    font-weight: 500;
    text-align: center;
    font-size: 1.25rem;
}

h2{
    text-align: center;
}

img {
    border-radius : 1rem;
    box-shadow: 3px 3px 40px rgba(70,70,70,0.2);
}

.backgroundRectangle
{
    width : 100%;
    position : absolute;
    z-index : -1;
    background-color : var(--projectColor);
}

.keywords{
    display: flex;
    margin-bottom: 5%;
    justify-content: center;
    column-gap: 10%;
}

.homePage{
    width : 80%;
    margin : 20% 10% 20% 10%;
}

.group1 {
    width : 100%;   
    position : relative;
}

.rect1 {
    top : calc(2%);
    height : 96%;
}

.mockups {
    width : 90%;    
    margin : 0 auto 10% auto;
    display : flex;
    align-items : center;
    justify-content : space-around;
}

.reals {
    width : 48%;
}

.menus {
    height : 100%;
    width : 48%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
}

.menus img {
    margin-bottom : 2%;
}

.menus img:last-child {
    margin-bottom: 0;
}


.banner {
    border-radius: 0;
    box-shadow: none;
    width : 100%;
}



</style>
s