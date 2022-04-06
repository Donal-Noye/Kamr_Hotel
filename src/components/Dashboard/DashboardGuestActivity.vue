<template>
  <div class="guest-activity card">
    <div class="card__header">
      <h2 class="heading">Guest Activity</h2>
      <div class="filter-tabs">
        <AppFilterTabsButton 
          :tabsFilter="tabsFilter" 
          :selectedTab="selectedTab" 
          @set-tab="setTab" 
        />
      </div>
    </div>
    <div class="guest-activity-check">
      <div class="guest-activity-check__item check-in">
        <span class="guest-activity-check__icon"></span>
        <p class="guest-activity-check__title paragraph">Check In</p>
        <h4 class="heading">245 Guest</h4>
      </div>
      <div class="guest-activity-check__item check-out">
        <span class="guest-activity-check__icon"></span>
        <p class="guest-activity-check__title paragraph">Check Out</p>
        <h4 class="heading">157 Guest</h4>
      </div>
    </div>
    <div class="guest-activity-graph">
      <div class="guest-activity-graph__top">
        <div class="guest-activity-graph__value">
          <p class="paragraph">250</p>
          <p class="paragraph">200</p>
          <p class="paragraph">150</p>
          <p class="paragraph">100</p>
          <p class="paragraph">50</p>
        </div>
        <div class="guest-activity-graph__main">
          <div class="guest-activity-graph__content">
            <img class="guest-activity-graph__A" src="@/assets/img/graph/guest-activity_graphA.svg" alt="">
            <img class="guest-activity-graph__B" src="@/assets/img/graph/guest-activity_graphB.svg" alt="">
            <div class="guest-activity-graph__lines">
              <span class="guest-activity-graph__line"></span>
              <span class="guest-activity-graph__line"></span>
              <span class="guest-activity-graph__line"></span>
              <span class="guest-activity-graph__line"></span>
              <span class="guest-activity-graph__line"></span>
              <span class="guest-activity-graph__line"></span>
            </div>
          </div>
          <div class="guest-activity-graph__months">
            <p class="paragraph">Sunday</p>
            <p class="paragraph">Monday</p>
            <p class="paragraph">Tuesday</p>
            <p class="paragraph active">Wednesday</p>
            <p class="paragraph">Thursday</p>
            <p class="paragraph">Friday</p>
            <p class="paragraph">Saturday</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppFilterTabsButton from "../ui/AppFilterTabsButton.vue"
export default {
  data() {
    return {
      tabsFilter: ["Month", "Weekly", "Day"],
      selectedTab: "Weekly",
    };
  },
  methods: {
    setTab(tab) {
      this.selectedTab = tab
    }
  },
  components: { AppFilterTabsButton }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.guest-activity {
  width: 50%;
}

.guest-activity-check {
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 80px;

  &__item {
    display: flex;
    align-items: center;

    &.check-in {
      .guest-activity-check__icon {
        background-color: $blue;
      }
    }

    &.check-out {
      .guest-activity-check__icon {
        background-color: $pink;
      }
    }
  }

  &__icon {
    display: block;
    margin-right: 8px;

    width: 12px;
    height: 12px;

    border-radius: 4px;
  }

  &__title {
    margin-right: 23px;
    color: $grey-1;
  }
}

.guest-activity-graph {
  &__top {
    display: flex;
    align-items: flex-end;
  }

  &__value {
    display: flex;
    flex-direction: column;
    gap: 29px;
    margin-right: 33px;
    margin-bottom: 47px;

    text-align: right;
    color: $grey-6;
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__content {
    position: relative;

    width: 563px;
    height: 284px;
  }

  &__A,
  &__B {
    width: 528px;

    position: absolute;
    top: 0;
    left: 50%;
    z-index: 1;

    transform: translateX(-50%);
  }

  &__A {
    z-index: 2;
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

    &:first-child {
      visibility: hidden;
    }
  }

  &__months {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    width: 100%;

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