<template>
  <div class="guest-list">
    <table class="table">
      <thead class="table__header">
        <tr>
          <th>
            <div class="table__custom-checkbox">
              <input type="checkbox">
              <span></span>
            </div>
          </th>
          <th>Guest</th>
          <th>Date Order</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Request</th>
          <th>Room Type</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr v-for="item in 7" :key="item">
          <th>
            <div class="table__custom-checkbox">
              <input type="checkbox">
              <span></span>
            </div>
          </th>
          <th>
            <div class="profile table__item">
              <div class="profile__avatar">
                <img src="https://via.placeholder.com/58" alt="">
              </div>
              <div class="profile__content">
                <div class="profile__id">#GS-2234</div>
                <h5 class="heading">Kierra Geidt</h5>
              </div>
            </div>
          </th>
          <th>
            <div class="date-order table__item">
              <h5 class="heading">Sunday, Oct 24th, 2020</h5>
              <p class="paragraph">08:29 AM</p>
            </div>
          </th>
          <th>
            <div class="check-in table__item">
              <h5 class="heading">Oct 29th, 2020</h5>
              <p class="paragraph">08:29 AM</p>
            </div>
          </th>
          <th>
            <div class="check-out table__item">
              <h5 class="heading">Oct 31th, 2020</h5>
              <p class="paragraph">08:29 AM</p>
            </div>
          </th>
          <th>
            <div class="request table__item">
              <h5 class="heading active">View Notes</h5>
            </div>
          </th>
          <th>
            <div class="room-type table__item">
              <h5 class="heading">Queen A-2345</h5>
              <p class="paragraph">Room No. 0024</p>
            </div>
          </th>
          <th>
            <div class="status table__item">
              <div class="pending">Pending</div>
            </div>
          </th>
          <th>
            <router-link class="more table__item" :to="{ name: 'GuestDetails' }">
              <img src="@/assets/img/icon/more.svg" alt="">
              <span>Guest Details</span>
            </router-link>
          </th>
        </tr>
      </tbody>
    </table>
    <teleport to='main'>
      <AppPagination />
    </teleport>
  </div>
</template>

<script>
import AppPagination from "@/components/ui/AppPagination.vue";

export default {
  components: { AppPagination }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.table {
  width: 100%;

  &__header {
    tr {
      background-color: #fff;
    }
  }

  &__body {
    tr {
      border-bottom: 1px solid $grey-4;

      &:nth-child(even) {
        background-color: #fff;
      }
    }
  }

  th {
    padding: 22px 0;

    font-size: 18px;
    line-height: 27px;

    &:first-child {
      padding-left: 30px;
    }

    &:last-child {
      padding-right: 30px;
    }
  }

  &__custom-checkbox {
    width: 21px;
    height: 21px;
    position: relative;

    input {
      width: 100%;
      height: 100%;

      opacity: 0;

      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;

      &:checked {
        + span {
          border-color: $tertiary;

          &:after {
            background-color: $tertiary;
            transform: scale(1);
          }
        }
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      user-select: none;
      border: 1px solid $grey-2;
      border-radius: 3px;

      position: absolute;
      left: 0;
      top: 0;

      transition: border-color .2s ease;

      &:after {
        content: '';
        display: block;
        width: 11px;
        height: 11px;

        background-color: transparent;
        border-radius: 2px;

        transform: scale(.7);
        transition: all .2s ease .1s;
      }
    }
  }

  .heading {
    margin-bottom: 4px;
  }

  .request {
    .active {
      color: $tertiary;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
    
    div {
      padding: 13px 23px;
      border-radius: 14px;
    }
    .pending {
      color: #FFAF16;
      background-color: rgba(#FFD482, .15);
    }
  }

  .more {
    display: flex;
    position: relative;
    top: 8px;

    &:hover {
      span {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);
      }
    }

    span {
      padding: 3px 5px;
      display: block;
      
      font-weight: 500;
      font-size: 14px;
      white-space: nowrap;
      background-color: rgba($grey-2, .3);
      border-radius: 4px;
      opacity: 0;
      visibility: hidden;

      position: absolute;
      bottom: -35px;
      left: 27%;
      z-index: 1;

      transform: translateX(-50%) translateY(-5px);
      transition: all .3s ease;
    }
  }
}

.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  &__avatar {
    width: 58px;
    height: 58px;

    border-radius: 50%;
    overflow: hidden;
  }

  &__id {
    color: $tertiary;
  }
}
</style>