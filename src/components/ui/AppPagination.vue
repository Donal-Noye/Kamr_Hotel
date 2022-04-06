<template>
  <div class="pagination">
    <div class="container">
      <div class="pagination__inner">
        <button class="button prev">Previous</button>
        <button class="button button--number" v-for="item in 3" :key="item">{{ item }}</button>
        <button class="button next">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";
.pagination {
  margin-top: auto;

  &__inner {
    display: flex;
    justify-content: flex-end;
    gap: 14px;
  }

  .button {
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    border-radius: 18px;

    &:first-child,
    &:last-child {
      padding: 12px 18px;
      color: $tertiary;
      border: 1px solid $tertiary;
    }

    &--number {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 46px;
      height: 46px;

      color: #fff;
      background-color: $tertiary;

      &.active {
        color: $tertiary;
        background-color: rgba($tertiary, .15);
      }
    }
  }
}
</style>