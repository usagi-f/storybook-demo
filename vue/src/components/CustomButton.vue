<template>
  <button
    type="button"
    class="btn"
    :class="[propsColor]"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: ['color'],
  data () {
    return {
      text: this.$slots.default[0].text,
      propsColor: this.color
    }
  },
  methods: {
    handleClick () {
      console.log(`click: ${this.color ? this.color : 'default'}`)
    }
  }
}
</script>

<style scoped>
.btn {
  font-size: 16px;
  position: relative;
  padding: 10px;
  overflow: hidden;
  border-width: 0;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: #2ecc71;
  color: #fff;
  transition: background-color .3s;
}
.btn:hover, .btn:focus {
  background-color: #27ae60;
}
.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0;
  padding-top: 0;
  border-radius: 100%;
  background-color: rgba(236, 240, 241, .3);
  transform: translate(-50%, -50%);
}
.btn:active::before {
  width: 120%;
  padding-top: 120%;
  transition: width .2s ease-out, padding-top .2s ease-out;
}

/* color */
.btn.orange {
  background-color: #e67e22;
}
.btn.orange:hover, .btn.orange:focus {
  background-color: #d35400;
}

.btn.red {
  background-color: #e74c3c;
}
.btn.red:hover, .btn.red:focus {
  background-color: #c0392b;
}
</style>
