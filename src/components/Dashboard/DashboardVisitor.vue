<template>
  <div class="visitor card">
    <h2 class="heading">Visitor</h2>
    <p class="visitor__amount display">12,456</p>
    <div class="visitor__content">
      <div class="visitor__top">
        <div class="visitor__value">
          <p class="paragraph">10 AM</p>
          <p class="paragraph">8 AM</p>
          <p class="paragraph">6 AM</p>
          <p class="paragraph">4 AM</p>
          <p class="paragraph">2 AM</p>
        </div>
        <div class="visitor__graph">
          <svg width="185" height="243" viewBox="0 0 185 243" fill="none">
            <rect y="59.7168" width="39" height="183" rx="13" fill="#DCEEFE"/>
            <rect width="39" height="46" rx="13" fill="#FFF2D9"/>
            <rect x="73" y="133" width="39" height="110" rx="13" fill="#0968C0"/>
            <rect x="73" y="56" width="39" height="63" rx="13" fill="#FFD482"/>
            <rect x="146" y="107" width="39" height="136" rx="13" fill="#DCEEFE"/>
            <rect x="146" y="27" width="39" height="66" rx="13" fill="#FFF2D9"/>
          </svg>
          <div class="visitor__lines">
            <span class="visitor__line"></span>
            <span class="visitor__line"></span>
            <span class="visitor__line"></span>
            <span class="visitor__line"></span>
            <span class="visitor__line"></span>
          </div>
        </div>
      </div>
      <div class="visitor__weeks">
        <p class="paragraph">Week 01</p>
        <p class="paragraph active">Week 02</p>
        <p class="paragraph">Week 03</p>
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

.visitor {
  width: 25%;

  &__amount {
    margin: 15px 0;
  }

  &__top {
    display: flex;
    justify-content: space-between;
  }

  &__value {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;

    p {
      color: $grey-6;
    }
  }

  &__graph {
    margin-right: 12px;
    
    position: relative;
    width: 195px;
    height: 243px;

    svg {
      width: 185px;
      height: 100%;

      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }
  }

  &__lines {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
  }

  &__line {
    display: block;
    width: 100%;
    height: 1px;

    background-color: $grey-4;
  }

  &__weeks {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 28px;

    p {
      cursor: pointer;
      color: $grey-2;

      &.active {
        color: inherit;
      }
    }
  }
}
</style>