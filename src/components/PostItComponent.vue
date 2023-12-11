<template>
    <div
      ref="postIt"
      class="post-it"
      :style="postItStyle"
      @mousedown="startDrag">
      <p>Contenu du post-it</p>
    </div>
</template>

<script>
export default {
  name: 'PostItComponent',
  data() {
    return {
      postItStyle: {
        top: '10px',
        left: '10px',
      },
      isDragging: false,
      mouseOffset: {
        x: 0,
        y: 0
      },
      velocity: {
        x: 0,
        y: 0
      },
      friction: 0.8
    }
  },
  methods: {
    startDrag(event) {
        console.log('startDrag')
      this.isDragging = true
      this.velocity.x = 0;
      this.velocity.y = 0;
      this.mouseOffset.x = event.clientX - this.$refs.postIt.getBoundingClientRect().left;
      this.mouseOffset.y = event.clientY - this.$refs.postIt.getBoundingClientRect().top;
    },

    stopDrag() {
        console.log('stopDrag')
      this.isDragging = false
      this.applyInertia();
    },

    drag(event) {
    event.preventDefault();
    //event.stopPropagation(); 
      if (this.isDragging) {
        this.velocity.x = event.clientX - this.mouseOffset.x - this.$refs.postIt.getBoundingClientRect().left;
        this.velocity.y = event.clientY - this.mouseOffset.y - this.$refs.postIt.getBoundingClientRect().top;
        this.postItStyle.left = event.clientX - this.mouseOffset.x + 'px'
        this.postItStyle.top = event.clientY - this.mouseOffset.y + 'px'
 
      }
    },

    applyInertia() {
      const updatePosition = () => {
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
        this.postItStyle.left = parseFloat(this.postItStyle.left) + this.velocity.x + 'px';
        this.postItStyle.top = parseFloat(this.postItStyle.top) + this.velocity.y + 'px';

        if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
          requestAnimationFrame(updatePosition);
        }
      };

      updatePosition();
    }
  },
  mounted() {
    document.addEventListener('mouseup', this.stopDrag)
    document.addEventListener('mousemove', this.drag)
  },
  beforeUnmount() {
    document.removeEventListener('mouseup', this.stopDrag)
    document.removeEventListener('mousemove', this.drag)
  }
}


</script>

<style scoped>
.post-it {
  box-shadow: 3px 3px 40px rgba(70,70,70,0.2);
  width: 150px;
  height: 150px;
  padding: 10px;
  cursor: grab;
  position: absolute;
  z-index: 1;
}

.post-it:active {
  cursor: grabbing;
}


</style>