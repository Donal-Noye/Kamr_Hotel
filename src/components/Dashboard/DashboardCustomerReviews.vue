<template>
  <div class="custom-reviews card">
    <div class="card__header">
      <h2 class="heading">Customer Reviews</h2>
      <div class="custom-reviews__actions">
        <AppDropdown />
        <AppButton text="View more" type="dashboard" />
      </div>
    </div>
    <div class="custom-reviews__wrapper">
      <nav class="custom-reviews__nav">
        <ul class="custom-reviews__list">
          <li 
            class="custom-review-profile"
            v-for="(review, idx) in customReviews" 
            :key="idx"
            @click="setSelected(review)"
            :class="{ active: review.id === selected }"
          >
            <div class="custom-review-profile__avatar">
              <img src="https://via.placeholder.com/53" alt="">
            </div>
            <div class="custom-review-profile__content">
              <h4 class="custom-review-profile__name heading" :class="{ sm: review.name.length >= 13 }">{{ review.name }}</h4>
              <p class="custom-review-profile__time-ago paragraph">{{ review.timeAgo }} min ago</p>
            </div>
          </li>
        </ul>
      </nav>
      <div 
        class="custom-reviews__content" 
        v-show="selected === review.id"
        v-for="(review, idx) in customReviews" 
        :key="idx"
      >
        <h3 class="heading">{{ review.title }}</h3>
        <div class="custom-reviews__rating">
          <div class="custom-reviews__stars" v-if="review.rating === '4'">
            <img src="@/assets/img/icon/star-filled.svg" alt="">
            <img src="@/assets/img/icon/star-filled.svg" alt="">
            <img src="@/assets/img/icon/star-filled.svg" alt="">
            <img src="@/assets/img/icon/star-filled.svg" alt="">
          </div>
          <div class="custom-reviews__stars" v-else-if="review.rating === '3'">
            <img src="@/assets/img/icon/star-filled.svg" alt="">
            <img src="@/assets/img/icon/star-filled.svg" alt="">
            <img src="@/assets/img/icon/star-filled.svg" alt="">
            <img src="@/assets/img/icon/star.svg" alt="">
          </div>
          <div class="custom-reviews__stars" v-else-if="review.rating === '2'">
            <img src="@/assets/img/icon/star-filled.svg" alt="">
            <img src="@/assets/img/icon/star-filled.svg" alt="">
            <img src="@/assets/img/icon/star.svg" alt="">
            <img src="@/assets/img/icon/star.svg" alt="">
          </div>
          <div class="custom-reviews__stars" v-else-if="review.rating === '1'">
            <img src="@/assets/img/icon/star-filled.svg" alt="">
            <img src="@/assets/img/icon/star.svg" alt="">
            <img src="@/assets/img/icon/star.svg" alt="">
            <img src="@/assets/img/icon/star.svg" alt="">
          </div>
        </div>
        <p class="custom-reviews__text paragraph">
          {{ review.text }}
        </p>
        <ul class="custom-reviews-shortcuts">
          <li class="custom-reviews-shortcuts__card" v-for="(shortcut, idx) in review.shortcuts" :key="idx">
            <p class="paragraph">{{ shortcut }}</p>
          </li>
        </ul>
        <div class="custom-reviews__bottom">
          <div class="custom-review-profile">
            <div class="custom-review-profile__avatar">
              <img src="https://via.placeholder.com/53" alt="">
            </div>
            <div class="custom-review-profile__content">
              <h4 class="custom-review-profile__name heading">{{ review.name }}</h4>
              <p class="custom-review-profile__time-ago paragraph">{{ review.timeAgo }} min ago</p>
            </div>
          </div>
          <div class="custom-reviews__actions">
            <AppButton text="Accept" type="accept">
              <template #icon>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M10 0.5C4.50742 0.5 0 5.00742 0 10.5C0 15.9926 4.50742 20.5 10 20.5C15.4926 20.5 20 15.9926 20 10.5C20 5.00742 15.4926 0.5 10 0.5ZM8.7898 15.0484L4.4107 10.6694L6.06781 9.01227L8.86648 11.8109L14.485 6.70344L16.062 8.43723L8.7898 15.0484Z" fill="white"/>
                </svg>
              </template>
            </AppButton>
            <AppButton text="Reject" type="reject">
              <template #icon>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M10 0.5C4.50742 0.5 0 5.00742 0 10.5C0 15.9926 4.50742 20.5 10 20.5C15.4926 20.5 20 15.9926 20 10.5C20 5.00742 15.4926 0.5 10 0.5ZM14.9719 13.8148L13.3148 15.4719L10 12.1571L6.68523 15.4719L5.02812 13.8148L8.34289 10.5L5.02812 7.18523L6.68523 5.52812L10 8.84289L13.3148 5.52812L14.9719 7.18523L11.6571 10.5L14.9719 13.8148Z" fill="white"/>
                </svg>
              </template>
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../ui/AppButton.vue";
import AppDropdown from "../ui/AppDropdown.vue";

export default {
  data() {
    return {
      filterOptionsList: ['Sort by Newest', 'Sort by Oldest'],
      customReviews: [
        { 
          id: '2243',
          name: 'Bella Morgan', 
          timeAgo: '24', 
          rating: '4',
          title: 'I love that room service',
          text: 'We were totally refreshed and rejuvenated for the whole of next year and it was due to the relaxing stay at the hotel. The hotel is absolutely marvelous! We liked absolutely everything, starting from the breakfast through to the perfect room service including the cleanliness and extra services such as dry cleaning and laundry. In general all the staff at the hotel were professional, friendly and provided excellent service. We will return for sure',
          shortcuts: ['Great Service', 'Recommended', 'Best Price']
        },
        { 
          id: '2244',
          name: 'Hans Takeshi', 
          timeAgo: '24', 
          rating: '3',
          title: 'Lorem, ipsum dolor sit amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam modi omnis impedit dolorum, odio beatae, ex necessitatibus dignissimos laboriosam saepe, possimus architecto quisquam temporibus culpa deleniti voluptatum sit facere?',
          shortcuts: ['Great Service', 'Recommended', 'Best Price']
        },
        { 
          id: '2245',
          name: 'Demian Sarumaha', 
          timeAgo: '24', 
          rating: '3',
          title: 'Lorem, ipsum dolor sit amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam modi omnis impedit dolorum, odio beatae, ex necessitatibus dignissimos laboriosam saepe, possimus architecto quisquam temporibus culpa deleniti voluptatum sit facere?',
          shortcuts: ['Great Service', 'Recommended', 'Best Price']
        },
        { 
          id: '2246',
          name: 'Bella Morgan', 
          timeAgo: '24', 
          rating: '4',
          title: 'I love that room service',
          text: 'We were totally refreshed and rejuvenated for the whole of next year and it was due to the relaxing stay at the hotel. The hotel is absolutely marvelous! We liked absolutely everything, starting from the breakfast through to the perfect room service including the cleanliness and extra services such as dry cleaning and laundry. In general all the staff at the hotel were professional, friendly and provided excellent service. We will return for sure',
          shortcuts: ['Great Service', 'Recommended', 'Best Price']
        },
        { 
          id: '2247',
          name: 'Hans Takeshi', 
          timeAgo: '24', 
          rating: '3',
          title: 'Lorem, ipsum dolor sit amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam modi omnis impedit dolorum, odio beatae, ex necessitatibus dignissimos laboriosam saepe, possimus architecto quisquam temporibus culpa deleniti voluptatum sit facere?',
          shortcuts: ['Great Service', 'Recommended', 'Best Price']
        },
        { 
          id: '2248',
          name: 'Demian Sarumaha', 
          timeAgo: '24', 
          rating: '3',
          title: 'Lorem, ipsum dolor sit amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam modi omnis impedit dolorum, odio beatae, ex necessitatibus dignissimos laboriosam saepe, possimus architecto quisquam temporibus culpa deleniti voluptatum sit facere?',
          shortcuts: ['Great Service', 'Recommended', 'Best Price']
        },
        { 
          id: '2249',
          name: 'Demian Sarumaha', 
          timeAgo: '24', 
          rating: '3',
          title: 'Lorem, ipsum dolor sit amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam modi omnis impedit dolorum, odio beatae, ex necessitatibus dignissimos laboriosam saepe, possimus architecto quisquam temporibus culpa deleniti voluptatum sit facere?',
          shortcuts: ['Great Service', 'Recommended', 'Best Price']
        },
        { 
          id: '2250',
          name: 'Demian Sarumaha', 
          timeAgo: '24', 
          rating: '3',
          title: 'Lorem, ipsum dolor sit amet.',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam modi omnis impedit dolorum, odio beatae, ex necessitatibus dignissimos laboriosam saepe, possimus architecto quisquam temporibus culpa deleniti voluptatum sit facere?',
          shortcuts: ['Great Service', 'Recommended', 'Best Price']
        },
      ],
      selected: '2243',
    }
  },
  methods: {
    setSelected(item) {
      this.selected = item.id
    }
  },
  components: { AppButton, AppDropdown }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.custom-reviews {
  width: 75%;
  height: 547px;

  &__wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    margin-top: 30px;
  }

  &__nav {
    padding-right: 40px;

    max-height: 400px;
    overflow: auto;
  }

  &__content {
    padding-left: 55px;
  }

  &__rating {
    margin-top: 24px;
  }

  &__stars {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  &__text {
    padding: 22px 0 10px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 28px;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}

.custom-review-profile {
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 18px;

  cursor: pointer;
  border-radius: 14px;

  transition: background-color .2s ease;

  &.active {
    background-color: $grey-4;
  }

  &__avatar {
    width: 53px;
    height: 53px;

    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    &.sm {
      font-size: 15px;
    }
  }
}

.custom-reviews-shortcuts {
  display: flex;
  gap: 14px;

  &__card {
    padding: 10px 16px;

    color: $grey-1;
    background-color: $grey-4;
    border-radius: 14px;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background-color: $grey-4;
}

::-webkit-scrollbar-thumb {
  background: $grey-6;
}
</style>