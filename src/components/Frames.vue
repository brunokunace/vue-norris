<template>
  <div class="frames">
    <div class="frames_side left">
      <slot name="left" />
    </div>
    <div class="frames_side right">
      <slot name="right" />
      <div
        v-for="n in 9"
        :key="`s-${n}`"
        :class="`square${n}`"
      />
      <div
        v-for="n in 4"
        :key="`e-${n}`"
        :class="`elipsis${n}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frames'
}
</script>

<style lang="sass" scoped>
.frames
  +flex(row, center, center)
  flex-wrap: wrap
  width: 100%
  max-width: 990px
  height: 100%
  max-height: 600px
  @media (max-width: 700px)
    max-height: 100%
  &_side
    width: 50%
    min-width: 350px
    height: 100%
    position: relative
    &.left
      +flex(column, centert, flex-start)
      background-color: $background-frames-left
      border-top-left-radius: 20px
      border-bottom-left-radius: 20px
      @media (max-width: 700px)
        height: 0
    &.right
      +flex(column, center, center)
      background: $background-frames-right
      border-top-right-radius: 20px
      border-bottom-right-radius: 20px
      @media (max-width: 700px)
        width: 100%
        height: 100%
        border-radius: 0
        background: $background-frames-right-inverted
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
