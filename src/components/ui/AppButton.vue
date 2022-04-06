<template>
  <button class="button" :class="type">
    {{ text }}
    <slot name="icon" />
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    type: String,
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 24px;

  font-weight: 500;
  font-size: 14px;
  line-height: 164%;

  border-radius: 14px;

  transition: background-color .2s ease;

  &.dashboard {
    color: $tertiary;
    background-color: rgba($tertiary, .15);

    &:hover {
      background-color: rgba($tertiary, .1);
    }

    &:active {
      background-color: rgba($tertiary, .2);
    }
  }

  &.accept {
    color: #fff;
    background-color: $green;

    &:hover {
      background-color: rgba($green, .9);
    }

    &:active {
      background-color: darken($green, 2%);
    }
  }

  &.reject {
    color: #fff;
    background-color: $red;

    &:hover {
      background-color: rgba($red, .9);
    }

    &:active {
      background-color: darken($red, 2%);
    }
  }
}
</style>