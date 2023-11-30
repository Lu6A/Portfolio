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
      default: "À propos"
    },
    buttonClass: {
      type: String,
      default: "general"
    }
  },

  methods: {
    handleClick() {
      if (this.buttonText == "À propos") {
        this.$router.push("/about");
      }
      console.log("Bouton cliqué !");
    },
    handleMouseEnter(event) {
      const relX = event.clientX - this.$refs.button.getBoundingClientRect().left;
      const relY = event.clientY - this.$refs.button.getBoundingClientRect().top;
      this.$refs.circle.style.left = `${relX}px`;
      this.$refs.circle.style.top = `${relY}px`;
    },
    handleMouseLeave() {
      this.$refs.circle.style.width = "0";
      this.$refs.circle.style.height = "0";
    }
  }
};
</script>

<style scoped>
.general {
  width: 8.5rem;
  height: 2.5rem;
  border: 1px solid #131412;
  background-color: transparent;
  border-radius: 1rem;
  font-family: 'inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
}

.general:hover {
  color: #f6f6f6;
}

.button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}

.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: #131412;
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
  /* transform: translate(-50%, -50%); */
  z-index: -1;
}

.circle:hover {
  width: 100%;
  height: 100%;
}
</style>