<template>
  <div id="app">
    <Counter msg="Trucks failed this year:" val="Press in times of retard alert"/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';

export default {
  name: 'App',
  created() {
    document.title = 'Dummy truck counter'
  },
  components: {
    Counter,
  }
}
</script>

<style lang="scss">
body {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#app {
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
</style>
