<template>
  <div class="container_left">
    <div class="container_left-image">
      <img
        src="@/assets/images/little-chuck.svg"
        class="image_icon"
      >
      <p class="image_title">
        Chuck Norris
      </p>
    </div>
    <span class="container_left-subtitle">
      Type any word to know Chuck Norris facts
    </span>
    <search-fact />
  </div>
</template>
<script>
import SearchFact from '@/components/SearchFact'
export default {
  name: 'ContainerLeft',
  components: {
    SearchFact
  }
}
</script>

<style lang="sass" scoped>
.container_left
  +flex(column, center, space-between)
  width: 100%
  height: 100%
  max-height: 272px
  padding: 45px 0
  &-image
    +flex(column, center, center)
  &-subtitle
    font-family: Raleway
    font-size: 1em
    color: $title
    max-width: 180px
    text-align: center
.image
  &_title
    font-family: Raleway
    font-weight: 900
    color: $title
    font-size: 1.7em
    margin-top: 10px
</style>
