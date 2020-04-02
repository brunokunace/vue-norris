<template>
  <div class="container">
    <div class="container_side left">
      <slot name="left" />
    </div>
    <div class="container_side right">
      <slot name="right" />
      <div class="square1" />
      <div class="square2" />
      <div class="square3" />
      <div class="square4" />
      <div class="square5" />
      <div class="square6" />
      <div class="square7" />
      <div class="square8" />
      <div class="square9" />
      <div class="elipsis1" />
      <div class="elipsis2" />
      <div class="elipsis3" />
      <div class="elipsis4" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="sass" scoped>
.container
  +flex(row, center, center)
  width: 100%
  max-width: 990px
  height: 100%
  max-height: 650px
  &_side
    +flex(column, center, center)
    width: 50%
    height: 100%
    position: relative
    &.left
      background-color: $background-container-left
      border-top-left-radius: 20px
      border-bottom-left-radius: 20px
    &.right
      background: $background-container-right
      border-top-right-radius: 20px
      border-bottom-right-radius: 20px
    & .square1
      +square(100, 0.45, 50px, 0)
    & .square2
      +square(90, 0.2, 50px, -50px)
    & .square3
      +square(70, 0.45, 0, 0, 50px)
    & .square4
      +square(50, 0.45, 120px, 0, -30px)
    & .square5
      +square(40, 0.25, 140px, 0, 40px)
    & .square6
      +square(110, 0.35, auto, 0, 20px, 0)
    & .square7
      +square(60, 0.2, auto, 0, 90px, 0)
    & .square8
      +square(110, 0.45, auto, -10px, auto, 0)
    & .square9
      +square(90, 0.2, auto, 40px, auto, 0)
    & .elipsis1
      +elipsis(50, 0.45, 400px, auto, 0)
    & .elipsis2
      +elipsis(60, 0.2, 350px, 20px)
    & .elipsis3
      +elipsis(50, 0.3, 300px, -30px)
</style>
