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
  height: 100vh;
  background-color: #f6f6f6;
}

body {
  margin : 4vh 0 0 0;
  height : 95vh;
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


</style>
