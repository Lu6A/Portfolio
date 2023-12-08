<template>
    <div class = navBar>
    <router-link :to="'/'">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" class="arrow">
    <path d="M20.9562 15.3554L12.3493 23.9623L10.9351 22.5481L19.542 13.9412L11.9562 13.9412L11.9562 11.9415H22.9559V22.9413L20.9562 22.9413V15.3554Z" fill="#131412"/>
    </svg>
    </router-link>  
    <div class="buttonsContainer">
    <ButtonGeneric buttonText = "À propos" buttonClass = "general"></ButtonGeneric>
    <ButtonGeneric buttonText = "Contact" buttonClass = "general"></ButtonGeneric>
    </div>
    </div>

</template>

<script>
import ButtonGeneric from './ButtonGeneric.vue';
export default {
    name: "NavBar",
    components: {
        ButtonGeneric
    }
}
</script>


<style scoped>

.navBar {
    margin: 0 3% 25vh 3%;
    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 94%;
}

.buttonsContainer {
    display : flex;
    column-gap : 10%;
}

.arrow {
    transform : rotate(-135deg);
}

</style>
