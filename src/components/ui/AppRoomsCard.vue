<template>
  <div class="rooms-card" v-for="card in roomsList" :key="card">
    <div class="rooms-card__info">
      <img class="rooms-card__image" src="https://via.placeholder.com/263x330" alt="">
      <div class="rooms-card__inner">
        <div class="rooms-card__status" :class="{ booked: card.status === 'booked', available: card.status === 'available' }">
        <p class="paragraph">{{ card.status }}</p>
        </div>
        <h3 class="rooms-card__name heading">{{ card.name }}</h3>
        <p class="rooms-card__id paragraph">{{ card.id }}</p>
        <button class="rooms-card__more">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="rooms-card__content">
      <div class="rooms-card__rating">
        <div class="rooms-card__right">
          <p class="rooms-card__value">{{ card.rating }}</p>
          <div class="rooms-card__stars">
            <div class="rooms-card__stars" v-if="card.rating === '4'">
              <img src="@/assets/img/icon/star-filled.svg" alt="">
              <img src="@/assets/img/icon/star-filled.svg" alt="">
              <img src="@/assets/img/icon/star-filled.svg" alt="">
              <img src="@/assets/img/icon/star-filled.svg" alt="">
            </div>
            <div class="rooms-card__stars" v-else-if="card.rating === '3'">
              <img src="@/assets/img/icon/star-filled.svg" alt="">
              <img src="@/assets/img/icon/star-filled.svg" alt="">
              <img src="@/assets/img/icon/star-filled.svg" alt="">
            </div>
            <div class="rooms-card__stars" v-else-if="card.rating === '2'">
              <img src="@/assets/img/icon/star-filled.svg" alt="">
              <img src="@/assets/img/icon/star-filled.svg" alt="">
            </div>
            <div class="rooms-card__stars" v-else-if="card.rating === '1'">
              <img src="@/assets/img/icon/star-filled.svg" alt="">
            </div>
          </div>
        </div>
        <p class="rooms-card__reviews">{{ card.reviews }} Reviews</p>
      </div>
    </div>
    <div class="rooms-card__char">
      <div class="item">
        <p class="title paragraph">Floor</p>
        <p class="value paragraph">{{ card.floor }}</p>
      </div>
      <div class="item">
        <p class="title paragraph">Bed Type</p>
        <p class="value paragraph">{{ card.bedType }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roomsList: Object
  }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.rooms-card {
  &__info {
    position: relative;
    margin-bottom: 17px;

    width: 263px;
    height: 330px;

    overflow: hidden;
    border-radius: 24px;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;

      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 29.8%, rgba(0, 0, 0, 0.44) 100%);

      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  &__image {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 33px 25px;

    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  &__more {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;

    background-color: rgba(#000, .2);
    border-radius: 50%;

    position: absolute;
    top: 16px;
    right: 16px;

    transition: background-color .2s ease;

    &:hover {
      background-color: rgba(#000, .3);
    }
  }

  &__status {
    margin-bottom: 12px;
    padding: 4px 14px;

    color: #fff;
    text-transform: uppercase;
    border-radius: 14px;

    &.available {
      background-color: $green;
    }

    &.booked {
      background-color: $red;
    }
  }

  &__name {
    margin-bottom: 6px;
    color: #fff;
  }

  &__id {
    color: #faf8ed;
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__right {
    display: flex;
    align-items: flex-start;
    gap: 5px;
  }

  &__value {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000;
  }

  &__stars {
    display: flex;
    gap: 4px;
  }

  &__reviews {
    color: $grey-1;
  }

  &__char {
    margin-top: 25px;

    .item {
      display: flex;
      justify-content: space-between;

      &:first-child {
        padding-bottom: 12px;
        margin-bottom: 12px;

        border-bottom: 1px solid $grey-3;
      }
    }

    .value {
      color: $grey-1;
    }
  }
}
</style>