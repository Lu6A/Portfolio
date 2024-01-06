<template>

<footer>
<div class = signature>
    <p class = name>LUCIE AUGIER</p>
    <h2 class = title>PORTFOLIO</h2>
    <p class = date>©2023</p>
</div>

<div class = contact>
    <p class = "hover-effect"> 06.95.47.49.16 </p>
    <a href = "mailto:lucie.augier.pro@gmail.com" class = "hover-effect">lucie.augier.pro@gmail.com</a>
    <a href = "https://www.linkedin.com/in/lucie-augier/?originalSubdomain=fr" class = "hover-effect">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M1.75586 3.625C1.75586 4.15543 1.96657 4.66414 2.34165 5.03921C2.71672 5.41429 3.22543 5.625 3.75586 5.625C4.28629 5.625 4.795 5.41429 5.17007 5.03921C5.54515 4.66414 5.75586 4.15543 5.75586 3.625C5.75586 3.09457 5.54515 2.58586 5.17007 2.21079C4.795 1.83571 4.28629 1.625 3.75586 1.625C3.22543 1.625 2.71672 1.83571 2.34165 2.21079C1.96657 2.58586 1.75586 3.09457 1.75586 3.625Z" stroke="black" stroke-linejoin="round"/>
<path d="M1.75586 22.625V8.625H5.75586V22.625H1.75586Z" stroke="black" stroke-linejoin="round"/>
<path d="M8.25586 8.625V22.625H12.2559V15.717C12.2559 14.625 13.2559 12.625 16.1509 12.625C17.7939 12.625 18.7559 13.47 18.7559 15.125V22.625H22.7559V15.125C22.7559 13.816 22.4439 12.188 21.3619 10.848C20.2179 9.431 18.4489 8.625 16.1519 8.625C14.6389 8.625 13.3169 9.24 12.2559 9.991V8.625H8.25586Z" stroke="black" stroke-linejoin="round"/>
</svg></a>
    <ButtonGeneric buttonText = "À propos"/>
</div>

<div class = "linkedin">
    <a href = "https://www.linkedin.com/in/lucie-augier/?originalSubdomain=fr" class = "hover-effect">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M1.75586 3.625C1.75586 4.15543 1.96657 4.66414 2.34165 5.03921C2.71672 5.41429 3.22543 5.625 3.75586 5.625C4.28629 5.625 4.795 5.41429 5.17007 5.03921C5.54515 4.66414 5.75586 4.15543 5.75586 3.625C5.75586 3.09457 5.54515 2.58586 5.17007 2.21079C4.795 1.83571 4.28629 1.625 3.75586 1.625C3.22543 1.625 2.71672 1.83571 2.34165 2.21079C1.96657 2.58586 1.75586 3.09457 1.75586 3.625Z" stroke="black" stroke-linejoin="round"/>
<path d="M1.75586 22.625V8.625H5.75586V22.625H1.75586Z" stroke="black" stroke-linejoin="round"/>
<path d="M8.25586 8.625V22.625H12.2559V15.717C12.2559 14.625 13.2559 12.625 16.1509 12.625C17.7939 12.625 18.7559 13.47 18.7559 15.125V22.625H22.7559V15.125C22.7559 13.816 22.4439 12.188 21.3619 10.848C20.2179 9.431 18.4489 8.625 16.1519 8.625C14.6389 8.625 13.3169 9.24 12.2559 9.991V8.625H8.25586Z" stroke="black" stroke-linejoin="round"/>
</svg></a>
</div>

</footer>
</template>

<script>

import ButtonGeneric from './ButtonGeneric.vue';

export default {
    name: 'FooterPage',
    components: {
        ButtonGeneric
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

footer {
    width  : 100%;
    height : 30vh;
    background-color: #f6f6f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.signature {
    width: auto;    
    height: auto;
    margin-left : 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title{
    margin: 0;
    line-height: 0.8;
}

.date {
    align-self: flex-end;
}



.contact {
    width: 100%;
    padding-right : 3%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap : 5%;
    box-sizing: border-box;
}

.linkedin{
    display : none;
}

a{
    font-family: 'Inter', sans-serif;
    margin : 0;
}

.hover-effect:hover{
    transform: scale(1.05);
    transition : ease-in-out 0.2s;
}

@media screen and (max-width : 1024px) {
  .contact svg{
    width : 24px;
    height : 24px;
  }
}

@media screen and (max-width : 800px) {
  .contact svg{
    width : 12px;
    height : 12px;
  }
}

@media screen and (max-width : 465px) {
  footer {
    height : 25%;
    justify-content: space-around;
  }

    .contact {
        display : none;
    }

    .linkedin {
        display : inline;
    }

    .linkedin svg{
        width : 12px;
        height : 12px;
    }
}
</style>