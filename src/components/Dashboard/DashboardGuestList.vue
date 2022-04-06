<template>
  <div class="guest-list card">
    <div class="card__header">
      <h2 class="heading">Guest List</h2>
      <AppButton text="More" type="dashboard" @click="$router.push({ name: 'GuestList' })" />
    </div>
    <ul class="guest__list">
      <li class="guest__item" v-for="item in guestList" :key="item.id">
        <a class="guest__link" href="#">
          <div class="guest__avatar">
            <img src="https://via.placeholder.com/53" alt="">
          </div>
          <div class="guest__info">
            <h4 class="guest__name heading">{{ item.name }}</h4>
            <p class="guest__id paragraph">#GS-{{ item.id }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import AppButton from "../ui/AppButton.vue";

export default {
  data() {
    return {
      guestList: [
        { name: 'Jordyn George', id: '2234' },
        { name: 'Marilyn Bator', id: '2235' },
        { name: 'Jaxson Rosser', id: '2236' },
        { name: 'Davis Culhane', id: '2237' },
        { name: 'Lydia Westervelt', id: '2238' },
      ]
    }
  },
  components: { AppButton }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.guest-list {
  width: 25%;
}

.guest {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 28px;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__avatar {
    width: 53px;
    height: 53px;

    border-radius: 50%;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__id {
    margin-top: 2px;
    color: $tertiary;
  }
}
</style>