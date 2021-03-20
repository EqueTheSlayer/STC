<template>
  <div class="preloader" v-if="!isLoaded">
    <div class="preloader__item"></div>
    <div class="preloader__item preloader__item_bridge"></div>
    <div class="preloader__item"></div>
  </div>
</template>

<script>
export default {
  props: {
    isLoaded: Boolean,
  }
}
</script>

<style scoped lang="scss">
.preloader {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 10000;

  &__item {
    height: 30px;
    width: 30px;
    background: url("../assets/stupidTruck.svg");

    &:first-child {
      animation: left 1s infinite;
    }

    &:last-child {
      transform: rotateY(180deg);
      animation: right 1s infinite .5s;
    }

    &_bridge {
      background: url("../assets/bridge.svg");
    }
  }
}

@keyframes left {
  45% {
    transform: translateX(-30px);
  }
  50% {
    transform: translateX(0);
  }
}

@keyframes right {
  45% {
    transform: translateX(30px) rotateY(180deg);
  }
  50% {
    transform: translateX(0) rotateY(180deg);
  }
}

</style>