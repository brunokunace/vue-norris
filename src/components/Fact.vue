<template>
  <div class="fact_container" :class="{disabled: !active}" @click="selectFact">
    <div class="fact_avatar">
      <img :src="avatarUrl" />
    </div>
    <div class="fact_message" :class="{disabled: !active}">
      <span class="fact_message-text">
        {{ message }}
      </span>
      <div class="fact_info">
        <a
          :href="link"
          class="fact_info-link"
          :class="{disabled: !active}"
          target="_blank"
        >
          See more
          </a>
        <span class="fact_info-counter">
          {{ currentFact }}/{{ totalFacts }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fact',
  props: {
    id: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    currentFact: {
      type: [Number, String],
      default: 0
    },
    totalFacts: {
      type: [Number, String],
      default: 0
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    selectFact () {
      if (this.active) { return }
      this.$emit('select', this.id)
    }
  },
  computed: {
    avatarUrl () {
      const status = this.active ? 'active' : 'disabled'
      return require(`@/assets/avatar-${status}.svg`)
    }
  }

}
</script>

<style lang="sass" scoped>
.fact
  &_container
    +flex(row, center, center)
    border-radius: 9.5px
    background-color: $background-fact-active
    width: 377px
    min-height: 160px
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3)
    transform: scale(1.1)
    z-index: 2
    transition: all 0.2s ease-in-out
    &.disabled
      background-color: $primary-light
      opacity: 0.7
      transform: scale(1)
      z-index: 1
      box-shadow: none
      cursor: pointer
      &:hover
        transform: scale(1.03)
  &_avatar
    padding: 0 6.5px 0 30px
    img
      width: 65px
      &:hover
        +shake()
  &_message
    +flex(column, center, center)
    width: 100%
    font-family: Open Sans
    padding: 10px 30px 10px 20px
    border-left: 1px solid $primary
    color: $fact-message
    font-size: 0.7em
    &.disabled
      color: $fact-message-disabled
      border-left: 1px solid $fact-border-disabled
  &_info
    +flex(row, center, space-between)
    width: 100%
    margin-top: 10px
    font-size: 0.7em
    &-link
      text-decoration: underline
      color: $primary
      &.disabled
        color: $fact-message-disabled
        opacity: 0
    &-counter
      font-weight: bold
</style>
