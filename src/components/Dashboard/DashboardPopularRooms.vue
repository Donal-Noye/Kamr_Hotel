<template>
  <div class="popular-rooms">
    <h2 class="heading">Popular Rooms</h2>
    <ul class="popular-rooms__list">
      <li class="popular-rooms__card" v-for="item in popularRooms" :key="item.name">
        <a class="popular-rooms__link" href="#">
          <img class="popular-rooms__image" :src="require(`@/assets/img/popular-rooms/${item.image}.jpg`)" alt="">
          <div class="popular-rooms__content">
            <p v-if="item.status === 'available'" class="popular-rooms__status status available">{{ item.status }}</p>
            <p v-if="item.status === 'booked'" class="popular-rooms__status status booked">{{ item.status }}</p>
            <h3 class="heading">{{ item.name }}</h3>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularRooms: [
        { name: '404 Brrom Str, Fl2', status: 'available', image: 'room-1' },
        { name: '235 Cream, G3', status: 'booked', image: 'room-2' },
        { name: '992 Green, HF', status: 'available', image: 'room-3' },
        { name: '914 White Cream', status: 'available', image: 'room-4' },
        { name: '172 Grey 22F, JF', status: 'booked', image: 'room-5' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.popular-rooms {
  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    margin-top: 38px;
  }

  &__card {
    height: 330px;

    color: #fff;
    background: #C4C4C4;
    position: relative;
    border-radius: 24px;
    overflow: hidden;

    transition: transform .2s ease;

    &:hover {
      transform: scale(1.08);
    }

    &:after {
      content: '';
      width: 100%;
      height: 100%;

      pointer-events: none;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 29.8%, rgba(0, 0, 0, 0.44) 100%);

      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
    }
  }

  &__link {
    height: 100%;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    bottom: 33px;
    left: 25px;
    z-index: 2;
  }

  &__status {
    margin-bottom: 16px;

    &.available {
      background-color: $green;
    }

    &.booked {
      background-color: $red;
    }
  }
}

.status {
  display: inline-block;
  padding: 8px 14px;

  font-size: 12px;
  border-radius: 14px;
  line-height: 18px;
  text-transform: uppercase;
}
</style>