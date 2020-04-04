<template>
  <div class="container_facts">
    <input
      v-for="(input, index) in 3"
      :id="`s${index}`"
      :key="index"
      v-model="checker"
      type="radio"
      name="slider"
      :value="index"
    >
    <fact
      v-for="(fact, index) in facts"
      :id="`slide${index}`"
      :key="fact.id"
      :for-check="`s${index}`"
      :active="index === checker"
      v-bind="fact"
    />
  </div>
</template>

<script>
import Fact from '@/components/Fact'
export default {
  name: 'ContainerFacts',
  components: {
    Fact
  },
  data: () => ({
    checker: 0,
    facts: [
      {
        id: 'G-K6OGD0T-Cjy_5Y-x1pxw',
        message: "Chuck Norris does not say 'thank you', that would imply you had the option to decline his request.",
        link: 'https://api.chucknorris.io/jokes/hydtndocT6qyvBWxN7unTg',
        currentFact: 1,
        totalFacts: 99
      },
      {
        id: 'G-K6OGD0T-Cjy_5Y-x2pxw',
        message: "Chuck Norris does not say 'thank you', that would imply you had the option to decline his request.",
        link: 'https://api.chucknorris.io/jokes/hydtndocT6qyvBWxN7unTg',
        currentFact: 2,
        totalFacts: 99
      },
      {
        id: 'G-K6OGD0T-Cjy_5Y-x3pxw',
        message: "Chuck Norris does not say 'thank you', that would imply you had the option to decline his request.",
        link: 'https://api.chucknorris.io/jokes/hydtndocT6qyvBWxN7unTg',
        currentFact: 3,
        totalFacts: 99
      }

    ]
  })
}
</script>

<style lang="sass" scoped>
.container_facts
  +flex(row, center, center)
  width: 100%
  height: 100%
  position: relative
  perspective: 1000px
  transform-style: preserve-3d
[type=radio]
  display: none
#s0:checked ~ #slide2,
#s1:checked ~ #slide0,
#s2:checked ~ #slide1
  transform: translate3d(0,-40%,-100px)

#s0:checked ~ #slide0,
#s1:checked ~ #slide1,
#s2:checked ~ #slide2
  box-shadow: 0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)
  transform: translate3d(0,0,0)

#s0:checked ~ #slide1,
#s1:checked ~ #slide2,
#s2:checked ~ #slide0
  transform: translate3d(0,40%,-100px)
</style>
