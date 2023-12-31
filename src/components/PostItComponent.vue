<template>
    <div
      ref="postIt_"
      class="post-it"
      :style="postItStyle"
      @mousedown="startDrag">
      <p>{{contenu}}</p>
    </div>
</template>

<script>
export default {
  name: 'PostItComponent',
  props : {
    top: {
      type: String,
      default: "10px"
    },
    left: {
      type: String,
      default: "10px"
    },
    contenu : {
      type : String,
      default : 'hello world !'
    }
  },
  data() {
    return {
      uniqueId: Math.random().toString(36).substring(2, 9),
      postItStyle: {
        top: this.top,
        left: this.left,
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
      // console.log("Reference:", 'postIt_' + this.uniqueId);
      // console.log("object : ", this.$refs["postIt_" + this.uniqueId]);
      this.mouseOffset.x = event.clientX - this.$refs.postIt_.offsetLeft;
      console.log("mouseOffset.x:", this.mouseOffset.x);
      this.mouseOffset.y = event.clientY - this.$refs.postIt_.offsetTop;

      document.addEventListener('mouseup', this.stopDrag);
      document.addEventListener('mousemove', this.drag);
    },

    stopDrag() {
        console.log('stopDrag')
      this.isDragging = false
      document.removeEventListener('mouseup', this.stopDrag);
      document.removeEventListener('mousemove', this.drag);
      this.applyInertia();
    },

    drag(event) {
      console.log('drag')
    event.preventDefault();
    //event.stopPropagation(); 
      if (this.isDragging) {
        this.velocity.x = event.clientX - this.mouseOffset.x - this.$refs.postIt_.getBoundingClientRect().left;
        this.velocity.y = event.clientY - this.mouseOffset.y - this.$refs.postIt_.getBoundingClientRect().top;
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
}


</script>

<style scoped>

p{
  text-transform : uppercase;
  font-weight : 700;
  text-align : center;
}
.post-it {
  box-shadow: 3px 3px 40px rgba(70,70,70,0.2);
  width: 150px;
  height: 150px;
  padding: 10px;
  cursor: grab;
  position: absolute;
  z-index: 1;
  display : flex;
  justify-content : center;
  align-items : center;
}

.post-it:active {
  cursor: grabbing;
}


</style>