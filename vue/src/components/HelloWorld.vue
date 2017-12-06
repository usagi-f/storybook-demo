<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="buttonGroup">
      <CustomButton>Info Button</CustomButton>
      <CustomButton color="orange">Warning Button</CustomButton>
      <CustomButton color="red">Error Button</CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue'

export default {
  name: 'HelloWorld',
  components: {
    CustomButton
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.buttonGroup {
  width: 300px;
  margin: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.buttonGroup button {
  margin-bottom: 20px;
}
</style>
