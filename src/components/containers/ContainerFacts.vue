<template>
  <div class="container_facts">
    <input
      v-for="(input, index) in 3"
      :id="`s${index}`"
      :key="index"
      type="radio"
      name="slider"
      :value="index"
      :checked="index === 0"
    >
    <fact
      v-for="(fact, index) in availableFacts"
      :id="`slide${index}`"
      :key="fact.id"
      :for-check="`s${index}`"
      :active="lessThenSize === index"
      :total-facts="facts.length"
      v-bind="fact"
      @select="selectFact"
    />
  </div>
</template>

<script>
import store from '@/store'
import Fact from '@/components/Fact'
import { initial, search } from '@/services/chuckApi'
export default {
  name: 'ContainerFacts',
  components: {
    Fact
  },
  data: () => ({
    checker: 1,
    facts: []
  }),
  computed: {
    availableFacts () {
      let start = this.checker - 2
      const end = this.checker + 1
      let begin = []
      if (this.checker === 1 || this.checker === 2) {
        start = 0
      }
      if (this.checker === this.facts.length && this.checker !== 1) {
        begin = this.facts.slice(0, 1)
      }
      return [...this.facts.slice(start, end), ...begin]
    },
    lessThenSize () {
      return this.availableFacts.length > 2 ? 1 : 0
    },
    query () {
      return store.state.query
    }
  },
  watch: {
    query (value) {
      this.getFacts(value)
    }
  },
  async mounted () {
    this.facts = await initial()
  },
  methods: {
    selectFact (currentFact) {
      this.checker = currentFact
    },
    async getFacts (query) {
      this.facts = await search(query)
    }
  }
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
