<template>
  <label
    :id="id"
    :for="forCheck"
    class="fact_container"
    :class="{disabled: !active}"
  >
    <div class="fact_avatar">
      <img :src="avatarUrl">
    </div>
    <div
      class="fact_message"
      :class="{disabled: !active}"
    >
      <span class="fact_message-text">
        {{ message }}
      </span>
      <div class="fact_info">
        <a
          :href="link"
          class="fact_info-link"
          :class="{disabled: !active}"
          :disabled="!active"
          target="_blank"
        >
          See more
        </a>
        <span class="fact_info-counter">
          {{ currentFact }}/{{ totalFacts }}
        </span>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'Fact',
  props: {
    forCheck: {
      type: String,
      default: ''
    },
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
  computed: {
    avatarUrl () {
      const status = this.active ? 'active' : 'disabled'
      return require(`@/assets/images/avatar-${status}.svg`)
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
    width: 300px
    min-height: 130px
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.37)
    position: absolute
    margin: auto
    left: 0
    right: 0
    transition: transform 0.4s ease
    &.disabled
      background-color: $primary-light
      cursor: pointer
      &:hover
        background-color: $primary-hover
  &_avatar
    padding: 0 6.5px 0 20px
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
        pointer-events: none
    &-counter
      font-weight: bold
</style>
