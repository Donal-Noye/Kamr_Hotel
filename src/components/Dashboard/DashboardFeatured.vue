<template>
  <div class="featured">
    <div class="featured-incomes">
      <div class="featured-incomes__left">
        <div class="featured__icon">
          <img src="@/assets/img/icon/income.svg" alt="">
        </div>
        <div class="featured-incomes__content">
          <h1 class="featured__profit display">$45,945</h1>
          <h5 class="featured__title heading">Total incomes</h5>
        </div>
      </div>
      <div class="featured-incomes__right">
        <div class="featured-incomes__graph">
          <img src="@/assets/img/icon/graph.svg" alt="">
        </div>
        <div class="featured-incomes__content">
          <h4 class="featured-incomes__percent heading">+2.4%</h4>
          <p class="featured__title paragraph">Than last week</p>
        </div>
      </div>
    </div>
    <div class="featured__card" v-for="item in featured" :key="item.title">
      <div class="featured__content">
        <h1 class="featured__value heading">{{ item.value }}</h1>
        <h5 class="featured__title heading">{{ item.title }}</h5>
      </div>
      <div class="featured__icon">
        <img :src="require(`@/assets/img/icon/${item.icon}.svg`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featured: [
        { title: 'New Guest', value: '845', icon: 'guest' },
        { title: 'Rooms', value: '195', icon: 'rooms' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.featured {
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  padding: 18px 0;
  
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;

    background: linear-gradient(180deg, rgba(246, 111, 77, 0.15) 0%, rgba(246, 111, 77, 0.06) 100%);
    border-radius: 24px;
  }

  &__title {
    color: $grey-1;
  }

  &__card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    border-left: 1px solid $grey-3;
  }
}

.featured-incomes {
  display: flex;
  align-items: center;
  margin-right: 54px;
  gap: 86px;

  &__left {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 17px;
  }

  &__percent {
    color: $green;
  }
}
</style>