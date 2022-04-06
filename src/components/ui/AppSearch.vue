<template>
  <div class="search">
    <input class="search__input" type="text" placeholder="Search here...">
    <button class="search__btn">
      <img class="search__icon" src="@/assets/img/icon/search.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.search {
  position: relative;

  width: 554px;

  &__input {
    width: 100%;
    padding: 15px 24px;

    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
    background-color: $grey-4;
    border-radius: 14px;
    border: none;

    &::placeholder {
      color: $grey-2;
    }
  }

  &__btn {
    display: flex;
    padding: 15px 24px;

    position: absolute;
    top: 0;
    right: 0;
  }

  &__icon {
    
  }
}
</style>