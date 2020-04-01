<template>
  <div id="app">
    <fact v-for="fact in facts" v-bind="fact" :key="fact.id" />
  </div>
</template>

<script>
import Fact from '@/components/Fact'
export default {
  name: 'App',
  components: {
    Fact
  },
  data: () => ({
    facts: [
      {
        id: 'G-K6OGD0T-Cjy_5Y-x1pxw',
        message: "Chuck Norris does not say 'thank you', that would imply you had the option to decline his request.",
        link: 'https://api.chucknorris.io/jokes/hydtndocT6qyvBWxN7unTg',
        currentFact: 1,
        totalFacts: 99,
        active: false
      },
      {
        id: 'G-K6OGD0T-Cjy_5Y-x2pxw',
        message: "Chuck Norris does not say 'thank you', that would imply you had the option to decline his request.",
        link: 'https://api.chucknorris.io/jokes/hydtndocT6qyvBWxN7unTg',
        currentFact: 2,
        totalFacts: 99,
        active: true
      },
      {
        id: 'G-K6OGD0T-Cjy_5Y-x3pxw',
        message: "Chuck Norris does not say 'thank you', that would imply you had the option to decline his request.",
        link: 'https://api.chucknorris.io/jokes/hydtndocT6qyvBWxN7unTg',
        currentFact: 3,
        totalFacts: 99,
        active: false
      }

    ]
  })
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
