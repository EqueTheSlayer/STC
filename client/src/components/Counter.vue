<template>
  <div class="truck">
    <Preloader :isLoaded="this.isLoaded"/>
    <h1 class="truck__heading"
        v-for="(value) in counter"
        v-bind:item="value"
        v-bind:key="value._id">
      {{ msg }}
      {{ value.counter }}
      <img class="truck__icon" src="../assets/stupidTruck.svg" alt="STUPID FUCKING TRUCK">
    </h1>
    <input
        v-for="(value, index) in counter"
        :item="value"
        :key="index"
        type="button" class="truck__button" v-on:click="putNumber(value._id, value.counter + 1)" :value="val">
  </div>
</template>

<script>
import CounterService from '../CounterService';
import Preloader from './Preloader.vue';

export default {
  name: 'Counter',
  data() {
    return {
      counter: this.getNumber(),
      error: '',
      isLoaded: false,
    }
  },
  methods: {
    async getNumber() {
      try {
        this.isLoaded = false;
        this.counter = await CounterService.getCounter();
        this.isLoaded = true;
      } catch (err) {
        this.error = err.message;
      }
    },

    async putNumber(id, number) {
        this.isLoaded = false;
        await CounterService.updateCounter(id, number);
        this.counter = await CounterService.getCounter();
        this.isLoaded = true;
    }
  },
  props: {
    msg: String,
    val: String,
  },
  components: {
    Preloader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$background: #A60000;

.truck {
  margin: auto;
  max-width: 1000px;
  max-height: 1000px;

  &__button {
    border-color: #A60000;
    padding: 10px 20px;
    color: white;
    background: $background;
    font-size: 50px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    border-style: solid;

    &:focus {
      border-color: #A60000;
    }

    &:hover {
      background: lighten($background, 20%);
    }
  }

  &__heading {
    text-align: center;
    line-height: 1;
    font-size: 50px;
  }

  &__icon {
    display: inline-block;
    height: 50px;
    width: 50px;
    top: 8px;
    position: relative;
  }
}
</style>
