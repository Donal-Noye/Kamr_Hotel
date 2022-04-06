<template>
  <div class="rooms-availability card">
    <h2 class="heading">Rooms Availability</h2>
    <div class="rooms-availability__chart">
      <svg width="233" height="234" viewBox="0 0 233 234" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M233 117.217C233 181.558 180.841 233.717 116.5 233.717C52.1588 233.717 0 181.558 0 117.217C0 52.8756 52.1588 0.716797 116.5 0.716797C180.841 0.716797 233 52.8756 233 117.217ZM58.5411 117.217C58.5411 149.227 84.4902 175.176 116.5 175.176C148.51 175.176 174.459 149.227 174.459 117.217C174.459 85.207 148.51 59.2579 116.5 59.2579C84.4902 59.2579 58.5411 85.207 58.5411 117.217Z" fill="url(#paint0_linear_36_11)"/>
        <path d="M116.5 0.716797C140.92 0.716797 164.722 8.39019 184.543 22.6527C204.365 36.9153 219.204 57.0458 226.963 80.1998C234.722 103.354 235.009 128.361 227.784 151.687C220.558 175.013 206.186 195.479 186.697 210.193L151.423 163.473C161.119 156.152 168.269 145.97 171.864 134.366C175.458 122.761 175.315 110.32 171.455 98.8008C167.595 87.2816 160.213 77.2667 150.352 70.1711C140.49 63.0754 128.649 59.2579 116.5 59.2579V0.716797Z" fill="url(#paint1_linear_36_11)"/>
        <defs>
        <linearGradient id="paint0_linear_36_11" x1="183.149" y1="218.545" x2="17.8814" y2="13.1796" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFD482"/>
        <stop offset="1" stop-color="#FFF382"/>
        </linearGradient>
        <linearGradient id="paint1_linear_36_11" x1="116.5" y1="0.716795" x2="180.44" y2="217.461" gradientUnits="userSpaceOnUse">
        <stop stop-color="#16B455"/>
        <stop offset="1" stop-color="#42FC6B"/>
        </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="rooms-availability__info">
      <div class="rooms-availability__item available">
        <div class="rooms-availability__left">
          <span class="rooms-availability__icon"></span>
          <p class="rooms-availability__title paragraph">Available</p>
        </div>
        <h4 class="heading">66 Rooms</h4>
      </div>
      <div class="rooms-availability__item sold-out">
        <div class="rooms-availability__left">
          <span class="rooms-availability__icon"></span>
          <p class="rooms-availability__title paragraph">Sold Out</p>
        </div>
        <h4 class="heading">129 Rooms</h4>
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

.rooms-availability {
  width: 25%;

  &__chart {
    display: flex;
    justify-content: center;
    margin: 53px 0;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.available {
      .rooms-availability__icon {
        background-color: $green;
      }
    }

    &.sold-out {
      .rooms-availability__icon {
        background-color: #FFD482;
      }
    }
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__icon {
    display: block;
    margin-right: 8px;
    width: 12px;
    height: 12px;
    border-radius: 4px;
  }
}
</style>