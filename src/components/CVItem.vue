<template>
    <div class = "card" :style = "{'background-color': 'rgba(' + hexToRgb(item.color) + ', 0.1)'}">
        <h2 :style ="{'-webkit-text-stroke': '1px ' + item.color, '-moz-text-stroke': '1px ' + item.color}">{{ item.year }}</h2>
        <h3 :style ="{'color' : item.color}"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3301 10.7192C16.3301 11.7801 15.9086 12.7975 15.1585 13.5477C14.4084 14.2978 13.3909 14.7192 12.3301 14.7192C11.2692 14.7192 10.2518 14.2978 9.50165 13.5477C8.75151 12.7975 8.33008 11.7801 8.33008 10.7192C8.33008 9.65837 8.75151 8.64096 9.50165 7.89081C10.2518 7.14067 11.2692 6.71924 12.3301 6.71924C13.3909 6.71924 14.4084 7.14067 15.1585 7.89081C15.9086 8.64096 16.3301 9.65837 16.3301 10.7192ZM14.3301 10.7192C14.3301 11.2497 14.1194 11.7584 13.7443 12.1335C13.3692 12.5085 12.8605 12.7192 12.3301 12.7192C11.7996 12.7192 11.2909 12.5085 10.9159 12.1335C10.5408 11.7584 10.3301 11.2497 10.3301 10.7192C10.3301 10.1888 10.5408 9.6801 10.9159 9.30502C11.2909 8.92995 11.7996 8.71924 12.3301 8.71924C12.8605 8.71924 13.3692 8.92995 13.7443 9.30502C14.1194 9.6801 14.3301 10.1888 14.3301 10.7192Z" :fill= "item.color" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.85211 16.9654C4.56295 15.7379 3.66671 14.1558 3.27674 12.419C2.88678 10.6822 3.02058 8.86875 3.66125 7.20801C4.30192 5.54726 5.42067 4.11379 6.87603 3.08887C8.33138 2.06395 10.058 1.49361 11.8375 1.44997C13.617 1.40634 15.3695 1.89137 16.8733 2.84373C18.3772 3.79609 19.5648 5.17301 20.2861 6.80036C21.0074 8.42771 21.2299 10.2324 20.9256 11.9862C20.6212 13.74 19.8036 15.3642 18.5761 16.6534L12.3701 23.1714L5.85211 16.9654ZM17.1281 15.2744L12.3011 20.3444L7.23111 15.5174C6.22848 14.5627 5.53145 13.3321 5.22816 11.9813C4.92487 10.6305 5.02894 9.22012 5.52722 7.92845C6.0255 6.63679 6.89561 5.52189 8.02751 4.72473C9.15941 3.92756 10.5023 3.48394 11.8863 3.44996C13.2703 3.41598 14.6333 3.79316 15.803 4.53381C16.9727 5.27447 17.8964 6.34532 18.4575 7.61098C19.0186 8.87663 19.1917 10.2802 18.9551 11.6443C18.7185 13.0084 18.0827 14.2716 17.1281 15.2744Z" :fill="item.color" />
</svg>{{item.location}}</h3>
        <h3 :style ="{'color' : item.color}"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M6.80811 3.50244V4.25244H3.80811V20.7524H20.3081V4.25244H17.3081V3.50244H15.8081V4.25244H8.30811V3.50244H6.80811ZM5.30811 5.75244H6.80811V6.50244H8.30811V5.75244H15.8081V6.50244H17.3081V5.75244H18.8081V7.25244H5.30811V5.75244ZM5.30811 8.75244H18.8081V19.2524H5.30811V8.75244ZM9.80811 10.2524V11.7524H11.3081V10.2524H9.80811ZM12.8081 10.2524V11.7524H14.3081V10.2524H12.8081ZM15.8081 10.2524V11.7524H17.3081V10.2524H15.8081ZM6.80811 13.2524V14.7524H8.30811V13.2524H6.80811ZM9.80811 13.2524V14.7524H11.3081V13.2524H9.80811ZM12.8081 13.2524V14.7524H14.3081V13.2524H12.8081ZM15.8081 13.2524V14.7524H17.3081V13.2524H15.8081ZM6.80811 16.2524V17.7524H8.30811V16.2524H6.80811ZM9.80811 16.2524V17.7524H11.3081V16.2524H9.80811ZM12.8081 16.2524V17.7524H14.3081V16.2524H12.8081Z" :fill="item.color"/>
</svg>{{item.date}}</h3>
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
    </div>

</template>


<script>
export default {
    name: 'CVItem',
    props: {
        item : Object        
    },
    methods: {
  hexToRgb(hex) {
    // Supprimer le caractère '#' si présent
    hex = hex.replace(/^#/, '');

    // Convertir en valeurs R, G, B
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Retourner la chaîne RGBA
    return r + ',' + g + ',' + b;
  }
}
}
</script>



<style scoped>

h2{
    font-size : 4rem;
    transform : rotate(-90deg);
    position : absolute;
    top : calc(12%);
    left : calc(-20%);
    color: transparent;
    white-space : normal;
    /* -webkit-text-stroke: 1px rgba(121, 201, 216, 1);
    -moz-text-stroke: 1px rgba(121, 201, 216, 1); */
}

h3 {
    margin : 0 0 3% 0;
    font-family: 'inter', sans-serif;
    font-size : 1rem;
    font-weight : 700;
    display : flex;
    align-items : center;
    white-space : normal;
}

h4 {
    margin : 0 0 3% 0;
    font-family: 'inter', sans-serif;
    font-size : 1rem;
    font-weight : 700;
    white-space : normal;
}

p{
    white-space : normal;
}

.card {
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : start;
    padding: 2%;
    position : relative;
}

/* @media screen and (max-width : 465px){

} */
</style>

