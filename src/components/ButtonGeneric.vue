<template>
  <button @click="handleClick" :class="buttonClass">
    <div class = "button-container">
      <span>{{ buttonText }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
      <path d="M20.9562 15.3554L12.3493 23.9623L10.9351 22.5481L19.542 13.9412L11.9562 13.9412L11.9562 11.9415H22.9559V22.9413L20.9562 22.9413V15.3554Z" fill="#131412"/>
      </svg>
    </div>
  </button>
</template>

<script>
export default {
  name: "ButtonGeneric",
  props: {
    buttonText: {
      type: String,
      default: "À propos" // Texte par défaut du bouton
    },
    buttonClass: {
      type: String,
      default: "general" // Classe CSS par défaut du bouton
    }
  },
  methods: {
    handleClick() {
      console.log("Bouton cliqué !");
    }
  }
};
</script>

<style scoped>

.general {
  width: 8.5rem;
  height: 2.5rem;
  border: 1px solid #131412;
  background-color: #f6f6f6;
  border-radius: 1rem;
  font-family: 'inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  }

  .button-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

</style>

