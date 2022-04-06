<template>
  <div class="concierge-card card" v-for="concierge in conciergeList" :key="concierge.name">
    <div class="concierge-card__avatar">
      <img src="https://via.placeholder.com/125x125" alt="">
    </div>
    <h2 class="concierge-card__name heading">{{ concierge.name }}</h2>
    <p class="concierge-card__id paragraph">{{ concierge.id }}</p>
    <div class="concierge-card__actions">
      <button class="concierge-card__action">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M16.5848 3.47492H15.6483V1.60201C15.6483 1.35365 15.5496 1.11546 15.374 0.939839C15.1984 0.76422 14.9602 0.665558 14.7119 0.665558C14.4635 0.665558 14.2253 0.76422 14.0497 0.939839C13.8741 1.11546 13.7754 1.35365 13.7754 1.60201V3.47492H6.28376V1.60201C6.28376 1.35365 6.1851 1.11546 6.00948 0.939839C5.83386 0.76422 5.59567 0.665558 5.34731 0.665558C5.09895 0.665558 4.86076 0.76422 4.68514 0.939839C4.50952 1.11546 4.41086 1.35365 4.41086 1.60201V3.47492H3.4744C2.72931 3.47492 2.01474 3.77091 1.48788 4.29776C0.961025 4.82462 0.665039 5.53919 0.665039 6.28428V7.22074H19.3941V6.28428C19.3941 5.53919 19.0981 4.82462 18.5713 4.29776C18.0444 3.77091 17.3298 3.47492 16.5848 3.47492Z" />
          <path d="M0.665039 16.5852C0.665039 17.3303 0.961025 18.0449 1.48788 18.5718C2.01474 19.0986 2.72931 19.3946 3.4744 19.3946H16.5848C17.3298 19.3946 18.0444 19.0986 18.5713 18.5718C19.0981 18.0449 19.3941 17.3303 19.3941 16.5852V9.09363H0.665039V16.5852Z" />
        </svg>
      </button>
      <button class="concierge-card__action">
        <svg width="23" height="23" viewBox="0 0 23 23">
          <path d="M22.0202 17.2472L18.9572 14.1949C18.3521 13.6005 17.3828 13.6005 16.7777 14.1949L14.8339 16.1869C14.6358 16.3583 14.3466 16.3583 14.1485 16.1869C12.708 15.0357 11.3265 13.8147 10.0145 12.5189C8.70259 11.2176 7.47097 9.84677 6.31432 8.40631C6.13225 8.21354 6.13225 7.91366 6.31432 7.72089L8.34917 5.73423C8.94356 5.11842 8.94356 4.14383 8.34917 3.52802L5.28618 0.465026C4.66502 -0.113301 3.70114 -0.113301 3.07997 0.465026L0.563181 2.99253C0.563181 2.99253 0.450729 3.09963 0.413245 3.14247C-1.0058 4.84532 1.25932 10.2484 6.75342 15.7104C10.7535 19.7319 15.273 22.4254 17.9719 22.4254C18.4217 22.4682 18.8929 22.4147 19.2678 22.163C19.3427 22.1094 19.5516 21.922 19.5516 21.922L22.0202 19.4427C22.6199 18.8323 22.6199 17.8577 22.0202 17.2472Z" />
        </svg>
      </button>
      <button class="concierge-card__action">
        <img src="@/assets/img/icon/more.svg" alt="">
      </button>
    </div>
    <div class="concierge-card__row">
      <p class="concierge-card__joined paragraph">Join at January, 2014</p>
      <p class="concierge-card__status paragraph" :class="{ active: concierge.status === 'active' }">{{ concierge.status }}</p>
    </div>
    <div class="concierge-card__descr">
      <p class="concierge-card__title paragraph">Job Desc</p>
      <p class="paragraph">{{ concierge.descr }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    conciergeList: Object
  }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.concierge-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: box-shadow .3s ease;

  &:hover {
    box-shadow: 0px 22px 47px rgba(0, 0, 0, 0.08);
  }

  &__avatar {
    margin-bottom: 11px;

    width: 125px;
    height: 125px;

    overflow: hidden;
    border-radius: 50%;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    text-align: center;
  }

  &__id {
    margin-bottom: 8px;

    text-align: center;
    color: $grey-1;
  }

  &__actions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  &__action {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 58px;
    height: 58px;

    border-radius: 50%;
    background-color: rgba($green, .15);

    transition: background-color .2s ease;

    &:last-child {
      background-color: $grey-4;

      &:hover {
        background-color: $grey-3;
      }
    }

    svg {
      fill: $green;

      transition: fill .2s ease;
    }

    &:not(:last-child):hover {
      background-color: $green;

      svg {
        fill: #fff;
      }
    }
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 23px 0;
    width: 100%;
  }

  &__status {
    text-transform: capitalize;

    &.active {
      color: $green;
    }
  }

  &__title {
    margin-bottom: 6px;
    color: $grey-1;
  }
}
</style>