<template>
    <main>
      <router-view></router-view> 
    </main>
    
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,600;9..40,700&family=Inter:wght@400;500;700;900&family=Prompt:wght@700;800&display=swap');

html {
  font-size : 16px;
  height: 100vh;
  background-color: #f6f6f6;
}

body {
  margin : 0;
  height : 100%;
  width : 100%;
}

main  {
  height : 100%;
  width : 100%;
}

#app{
  height: 100%;
  width: 100%;
}

h1 {
  font-family: 'Prompt', sans-serif;
  font-weight: 800;
  font-size: 4rem;
  text-transform: uppercase;
  color: #131412;
  margin: 0;
}

h2 {
  font-family: 'Prompt', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  color: #131412;
  margin: 2% 0;
}

p {
  font-family: 'Inter', sans-serif;
  margin : 0;
} 

a{
  text-decoration: none;
  color: #131412;
}

/* Barre de défilement */
::-webkit-scrollbar {
    width: 10px; /* Largeur de la barre de défilement */
}

/* Bouton de la barre de défilement */
::-webkit-scrollbar-thumb {
    border-radius: 6px; /* Coins arrondis du bouton */
    background-color : #131412;
}

/* Zone de la barre de défilement non couverte par le bouton */
::-webkit-scrollbar-track {
    background-color: #f6f6f6; /* Couleur de la zone de la barre de défilement */
}

/* Barre de défilement pour Firefox */
::-moz-scrollbar {
    width: 10px; /* Largeur de la barre de défilement */
}

/* Bouton de la barre de défilement */
::-moz-scrollbar-thumb {
    border-radius: 6px; /* Coins arrondis du bouton */
    background-color : #131412;
}

/* Zone de la barre de défilement non couverte par le bouton */
::-moz-scrollbar-track {
    background-color: #f6f6f6; /* Couleur de la zone de la barre de défilement */
}


@media screen and (max-width : 1024px) {
  html {
    font-size : 12px;
  }
}

@media screen and (max-width : 800px) {
  html {
    font-size : 8px;
  }
}

</style>
