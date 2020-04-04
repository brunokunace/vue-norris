<template>
  <div id="app">
    <frames>
      <template
        v-if="!isMobile"
        slot="left"
      >
        <container-left />
      </template>
      <template slot="right">
        <container-left v-if="isMobile" />
        <container-facts />
      </template>
    </frames>
  </div>
</template>

<script>
import Frames from '@/components/Frames'
import ContainerFacts from '@/components/containers/ContainerFacts'
import ContainerLeft from '@/components/containers/ContainerLeft'
export default {
  name: 'App',
  components: {
    Frames,
    ContainerFacts,
    ContainerLeft
  },
  data: () => ({
    width: window.innerWidth
  }),
  computed: {
    isMobile () {
      return this.width <= 700
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.width = window.innerWidth
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/_reset'
#app
  background-color: #ddd
  width: 100vw
  height: 100vh
  +flex(column, center, center)
</style>
