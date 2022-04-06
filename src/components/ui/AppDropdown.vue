<template>
  <div class="dropdown">
    <button class="dropdown__btn" @click="toggleDropdown">
      <h6 class="heading">{{ selectedOption }}</h6>
      <svg class="dropdown__icon" width="16" height="11" viewBox="0 0 16 11" fill="none">
        <path d="M1.95877 0.997682C1.76855 1.00276 1.58372 1.06194 1.42599 1.16839C1.26826 1.27484 1.14417 1.4241 1.06829 1.59861C0.992417 1.77312 0.967904 1.96568 0.99763 2.15364C1.02736 2.3416 1.11009 2.51718 1.23612 2.65976L7.23026 9.66564C7.32415 9.77565 7.44078 9.864 7.57212 9.92458C7.70345 9.98516 7.84636 10.0165 7.991 10.0165C8.13563 10.0165 8.27855 9.98516 8.40988 9.92458C8.54122 9.864 8.65785 9.77565 8.75174 9.66564L14.7517 2.65976C14.8425 2.56081 14.9125 2.44457 14.9574 2.318C15.0023 2.19143 15.0212 2.05712 15.0131 1.92307C15.005 1.78902 14.9699 1.65793 14.9101 1.53771C14.8502 1.4175 14.7667 1.31066 14.6646 1.22341C14.5625 1.13615 14.4439 1.07029 14.3159 1.02986C14.1878 0.989439 14.0529 0.975269 13.9192 0.988108C13.7855 1.00095 13.6558 1.04054 13.5378 1.1046C13.4197 1.16866 13.3158 1.2558 13.2322 1.36089L7.99002 7.48002L2.74979 1.36089C2.65383 1.24466 2.53284 1.1517 2.39587 1.0888C2.25889 1.02591 2.10947 0.994703 1.95877 0.997682Z" fill="#C1C1C1"/>
      </svg>
    </button>
    <transition name="fade">
      <ul class="dropdown__options" v-show="options">
        <li 
          class="dropdown__option"
          :class="{ 'active': selectedOption === option }"
          v-for="option in optionsList" 
          :key="option"
          @click="setOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: false,
      selectedOption: 'Sort by Newest',
      optionsList: ['Sort by Newest', 'Sort by Oldest']
    }
  },
  methods: {
    toggleDropdown() {
      this.options = !this.options
    },
    setOption(option) {
      this.selectedOption = option
      this.options = false
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.dropdown {
  position: relative;

  &__btn {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 30px 16px 24px;

    border: 1px solid $grey-3;
    border-radius: 14px;
  }

  &__options {
    position: absolute;
    z-index: 100;
    width: 100%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
  }

  &__option {
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;

    background-color: #fff;

    transition: background-color .3s ease;

    &.active {
      background-color: $grey-3;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>