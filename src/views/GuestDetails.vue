<template>
  <div class="guest-details">
    <div class="guest-details__info">
      <div class="guest-profile card">
        <div class="guest-profile__avatar">
          <img src="https://via.placeholder.com/80" alt="" />
        </div>
        <div class="guest-profile__content">
          <h3 class="heading">Thomas Braun</h3>
          <p class="guest-profile__id label">#G-001234125</p>
        </div>
        <button class="button--more">
          <img src="@/assets/img/icon/more.svg" alt="" />
        </button>
      </div>
      <div class="room-info card">
        <h2 class="room-info__title heading">Marcella Court</h2>
        <div class="row">
          <p class="room-info__id label">#R-245T345</p>
          <div class="room-info__status booked">booked</div>
        </div>
        <ul class="room-info-char">
          <li
            class="room-info-char__item"
            v-for="room in roomsChar"
            :key="room"
          >
            <p class="room-info-char__title label md">{{ room.title }}</p>
            <div class="room-info-char__content">
              <img
                class="room-info-char__icon"
                :src="require(`@/assets/img/icon/${room.icon}.svg`)"
                alt=""
              />
              <div class="room-info-char__descr">{{ room.descr }}</div>
            </div>
          </li>
        </ul>
        <div class="room-info-facilities">
          <p class="room-info-facilities__title label md">Facilities</p>
          <ul class="room-info-facilities__list">
            <li
              class="room-info-facilities__item"
              v-for="facility in facilitiesList"
              :key="facility"
            >
              <img src="@/assets/img/icon/check.svg" alt="" />
              <h5 class="heading">{{ facility }}</h5>
            </li>
          </ul>
        </div>
        <button class="room-info__view-more">
          View More
          <svg
            class="icon"
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
          >
            <path
              d="M1.95877 0.497682C1.76855 0.502758 1.58372 0.561937 1.42599 0.668388C1.26826 0.774839 1.14417 0.924103 1.06829 1.09861C0.992417 1.27312 0.967904 1.46568 0.99763 1.65364C1.02736 1.8416 1.11009 2.01718 1.23612 2.15976L7.23026 9.16564C7.32415 9.27565 7.44078 9.364 7.57212 9.42458C7.70345 9.48516 7.84636 9.51651 7.991 9.51651C8.13563 9.51651 8.27855 9.48516 8.40988 9.42458C8.54122 9.364 8.65785 9.27565 8.75174 9.16564L14.7517 2.15976C14.8425 2.06081 14.9125 1.94457 14.9574 1.818C15.0023 1.69143 15.0212 1.55712 15.0131 1.42307C15.005 1.28902 14.9699 1.15793 14.9101 1.03771C14.8502 0.9175 14.7667 0.810663 14.6646 0.723406C14.5625 0.636149 14.4439 0.570286 14.3159 0.529862C14.1878 0.489439 14.0529 0.475269 13.9192 0.488108C13.7855 0.500948 13.6558 0.540543 13.5378 0.604604C13.4197 0.668665 13.3158 0.755801 13.2322 0.860894L7.99002 6.98002L2.74979 0.860894C2.65383 0.744658 2.53284 0.651698 2.39587 0.588802C2.25889 0.525906 2.10947 0.494703 1.95877 0.497682Z"
              fill="#C1C1C1"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="room-gallery">
      <div class="room-gallery__main-photo">
        <img src="https://via.placeholder.com/969x530" alt="" />
        <div class="room-gallery__actions">
          <button class="room-gallery__fullscreen">
            <img src="@/assets/img/icon/fullscreen.svg" alt="" />
          </button>
          <div class="room-gallery__nav">
            <button class="room-gallery__btn prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15.4573 5.98818C15.2309 6.00047 15.0153 6.08929 14.846 6.2402L7.84015 12.2403C7.73013 12.3342 7.64179 12.4508 7.58121 12.5822C7.52063 12.7135 7.48926 12.8563 7.48926 13.001C7.48926 13.1456 7.52063 13.2886 7.58121 13.4199C7.64179 13.5512 7.73013 13.6679 7.84015 13.7618L14.846 19.7559C14.9434 19.8531 15.0599 19.9292 15.1881 19.9794C15.3163 20.0296 15.4535 20.0528 15.5911 20.0475C15.7287 20.0421 15.8637 20.0085 15.9876 19.9486C16.1116 19.8887 16.2219 19.8038 16.3115 19.6993C16.4012 19.5949 16.4683 19.473 16.5087 19.3413C16.549 19.2097 16.5618 19.0712 16.5462 18.9344C16.5305 18.7976 16.4868 18.6655 16.4177 18.5464C16.3487 18.4273 16.2558 18.3238 16.1448 18.2422L10.0257 13.002L16.1448 7.75984C16.3076 7.62614 16.424 7.44442 16.4774 7.24068C16.5308 7.03694 16.5186 6.82158 16.4424 6.62522C16.3661 6.42885 16.2299 6.26149 16.053 6.14712C15.8761 6.03276 15.6677 5.9772 15.4573 5.9883V5.98818Z"
                  fill="#C1C1C1"
                />
              </svg>
            </button>
            <p class="room-gallery__count label">1/4</p>
            <button class="room-gallery__btn next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.53428 4.97018C8.32648 4.96561 8.12242 5.02585 7.95046 5.14262C7.77851 5.25939 7.6472 5.42691 7.57481 5.62175C7.50242 5.81659 7.49253 6.02911 7.54652 6.22983C7.60052 6.43055 7.71571 6.60938 7.87608 6.7416L13.9952 11.9838L7.87608 17.2241C7.76514 17.3057 7.67223 17.4092 7.60318 17.5283C7.53412 17.6474 7.49039 17.7795 7.47474 17.9163C7.45909 18.0531 7.47186 18.1916 7.51223 18.3232C7.5526 18.4548 7.61972 18.5767 7.70938 18.6812C7.79903 18.7857 7.9093 18.8705 8.03326 18.9304C8.15723 18.9903 8.29223 19.0239 8.4298 19.0292C8.56738 19.0345 8.70457 19.0115 8.83278 18.9613C8.961 18.9111 9.07747 18.835 9.17491 18.7378L16.1808 12.7435C16.2908 12.6497 16.3791 12.5331 16.4397 12.4018C16.5003 12.2704 16.5317 12.1275 16.5317 11.9829C16.5317 11.8382 16.5003 11.6953 16.4397 11.5639C16.3791 11.4326 16.2908 11.316 16.1808 11.2221L9.17491 5.22209C8.99793 5.06489 8.77093 4.97552 8.53428 4.96995V4.97018Z"
                  fill="#C1C1C1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ul class="room-gallery__previews">
        <li class="room-gallery__preview" v-for="preview in 4" :key="preview">
          <img src="https://via.placeholder.com/212x140" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppSearch from "@/components/ui/AppSearch.vue";
import AppDropdown from "@/components/ui/AppDropdown.vue";

export default {
  data() {
    return {
      roomsChar: [
        { title: "Type", icon: "bedroom", descr: "Double Bed" },
        { title: "Room Capacity", icon: "person", descr: "2-4 Person" },
        { title: "Date Booking", icon: "calendar", descr: "Thursday, February 4 2021 at 2:24 AM" }
      ],
      facilitiesList: [
        "Room Full AC",
        "Shower",
        "Bathup",
        "LED TV",
        "Game Console",
        "Coffee Set",
      ],
    };
  },
  components: { AppSearch, AppDropdown },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.guest-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}

.guest-profile {
  display: flex;
  align-items: center;
  gap: 36px;
  position: relative;
  margin-bottom: 22px;

  .button--more {
    position: absolute;
    top: 40px;
    right: 30px;
  }

  &__avatar {
    width: 80px;
    height: 80px;

    overflow: hidden;
    border-radius: 50%;

    outline: 1px solid $grey-3;
    outline-offset: 4px;
    flex-shrink: 0;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__id {
    margin-top: 10px;
  }
}

.room-info {
  display: flex;
  flex-direction: column;
  padding-bottom: 17px;

  .row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 3px 0 30px;
  }

  &__status {
    padding: 8px 14px;

    font-weight: 500;
    font-size: 14px;
    line-height: 164%;
    text-transform: uppercase;
    border-radius: 14px;
    color: #fff;

    &.booked {
      background-color: $red;
    }
  }

  &__view-more {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 27px;
    gap: 14px;
    padding: 15px;

    font-weight: 500;
    font-size: 14px;
    line-height: 164%;
    color: $grey-1;
    text-align: center;

    transition: transform 0.1s ease;

    &:hover {
      transform: translateY(2px);
    }
  }
}

.room-info-char {
  display: flex;
  gap: 30px 66px;
  flex-wrap: wrap;

  &__content {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 10px;
  }

  &__descr {
    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
  }
}

.room-info-facilities {
  margin-top: 30px;

  &__title {
    margin-bottom: 11px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px 38px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 18px;
  }
}

.room-gallery {
  &__main-photo {
    margin-bottom: 40px;
    position: relative;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
    border-radius: 24px;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 18px;

    position: absolute;
    right: 40px;
    bottom: 30px;
  }

  &__nav {
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 14px;

    background-color: rgba(#33342d, 0.72);
    border-radius: 50px;
  }

  &__btn {
    display: flex;
  }

  &__count {
    color: #fff;
  }

  &__previews {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  &__preview {
    width: 212px;
    height: 140px;

    overflow: hidden;
    border-radius: 24px;
    outline: 4px solid transparent;
    cursor: pointer;

    transition: all 0.2s ease;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover,
    &.active {
      outline-color: $tertiary;
    }

    &:hover {
      transform: scale(1.03);
    }
  }
}
</style>