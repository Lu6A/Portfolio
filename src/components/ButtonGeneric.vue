<template>
  <button class="cool-button" @click="handleClick">
    <div>{{ buttonText }}</div>
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
      <path d="M20.9562 15.3554L12.3493 23.9623L10.9351 22.5481L19.542 13.9412L11.9562 13.9412L11.9562 11.9415H22.9559V22.9413L20.9562 22.9413V15.3554Z" fill="#131412"/>
    </svg>
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
  },
  methods: {
    handleClick() {
      if (this.buttonText == "À propos") {
        this.$router.push("/about");
      console.log("Bouton cliqué !");
    }
  }
}
};
</script>

<style scoped>

.cool-button {
  width: 8.5em;
  height: 2.5em;
  border: 1px solid #131412;
  background-color: #f6f6f6;
  border-radius: 1em;
  font-family: 'inter', sans-serif;
  font-weight: 500;
  font-size: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: .2s transform ease-in-out;
  will-change: transform;
  position: relative;
  z-index: 1;
}

.cool-button:hover {
  background : #131412;
  color : #f6f6f6;
  transform: scale(1.05);
  fill : #f6f6f6;
}

.cool-button:hover path {
  fill : #f6f6f6;
}


@media screen and (max-width : 1024px) {
  .cool-button svg{
    width : 24px;
    height : 24px;
  }
}

@media screen and (max-width : 800px) {
  .cool-button svg{
    width : 12px;
    height : 12px;
  }
}




/* .cool-button path:hover {
  fill:#f6f6f6;
} */

/* .cool-button::after {
  background-color: #131412;
  border-radius: 1rem;
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-100%, 0) rotate(10deg);
  transform-origin: top left;
  transition: .2s transform ease-out;
  will-change: transform;
  z-index: -1;
}

.cool-button:hover::after {
  transform: translate(0, 0);
}

.cool-button:hover {
  border: 1px solid transparent;
  color: #f6f6f6;
  transform: scale(1.05);
  will-change: transform;
} */
</style>

