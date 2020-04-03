<template>
  <div class="search_fact">
    <input
      type="text"
      placeholder="Facts..."
      class="search_fact-input"
      v-model="value"
      @keyup.enter="search"
    />
    <img
      src="@/assets/images/search.svg"
      class="search_fact-icon"
      @click="search"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchFact',
  data: () => ({
    value: ''
  }),
  methods: {
    search () {
      if (!this.value) { return }
      const value = this.value
      this.value = ''
      this.$emit('search', value)
    }
  }
}
</script>
<style lang="sass" scoped>
.search_fact
  +flex(row, center, space-between)
  min-width: 250px
  height: 20px
  border: 1px solid $primary
  border-radius: 3px
  padding: 9px 12px
  &-input
    width: 100%
    height: 100%
    border: none
  &-icon
    cursor: pointer
</style>>
