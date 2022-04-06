<template>
  <div class="rooms">
    <div class="rooms__header">
      <div class="filter-tabs">
        <AppFilterTabsButton
          :tabsFilter="tabsFilter" 
          :selectedTab="selectedTab" 
          @set-tab="setTab" 
        />
      </div>
      <div class="rooms__right">
        <AppSearch class="rooms__search" />
        <AppDropdown />
        <button class="rooms__grid-view">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M21.7908 3.01252H8.23302C7.01521 3.01252 6.02441 4.00331 6.02441 5.22263C6.02441 6.44044 7.01521 7.43123 8.23302 7.43123H21.7908C23.0086 7.43123 23.9994 6.44044 23.9994 5.22263C23.9994 4.00327 23.0086 3.01252 21.7908 3.01252Z"/>
            <path d="M2.20941 3.01252C0.991172 3.01252 0 4.00364 0 5.22188C0 6.44011 0.991172 7.43123 2.20941 7.43123C3.42764 7.43123 4.41877 6.44011 4.41877 5.22188C4.41877 4.00364 3.42764 3.01252 2.20941 3.01252Z"/>
            <path d="M2.20941 9.79064C0.991172 9.79064 0 10.7818 0 12C0 13.2182 0.991172 14.2094 2.20941 14.2094C3.42764 14.2094 4.41877 13.2182 4.41877 12C4.41877 10.7818 3.42764 9.79064 2.20941 9.79064Z"/>
            <path d="M2.20941 16.5688C0.991172 16.5688 0 17.5599 0 18.7781C0 19.9964 0.991172 20.9875 2.20941 20.9875C3.42764 20.9875 4.41877 19.9964 4.41877 18.7781C4.41877 17.5599 3.42764 16.5688 2.20941 16.5688Z"/>
            <path d="M21.7908 9.79064H8.23302C7.01521 9.79064 6.02441 10.7814 6.02441 12.0007C6.02441 13.2186 7.01521 14.2094 8.23302 14.2094H21.7908C23.0086 14.2094 23.9994 13.2186 23.9994 12.0007C23.9994 10.7814 23.0086 9.79064 21.7908 9.79064Z"/>
            <path d="M21.7908 16.5688H8.23302C7.01521 16.5688 6.02441 17.5596 6.02441 18.7789C6.02441 19.9967 7.01521 20.9875 8.23302 20.9875H21.7908C23.0086 20.9875 23.9994 19.9967 23.9994 18.7789C23.9994 17.5596 23.0086 16.5688 21.7908 16.5688Z" />
          </svg>
        </button>
        <button class="rooms__grid-view active">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M8 1H4C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H8C9.65685 11 11 9.65685 11 8V4C11 2.34315 9.65685 1 8 1Z" />
            <path d="M20 1H16C14.3431 1 13 2.34315 13 4V8C13 9.65685 14.3431 11 16 11H20C21.6569 11 23 9.65685 23 8V4C23 2.34315 21.6569 1 20 1Z" />
            <path d="M8 13H4C2.34315 13 1 14.3431 1 16V20C1 21.6569 2.34315 23 4 23H8C9.65685 23 11 21.6569 11 20V16C11 14.3431 9.65685 13 8 13Z" />
            <path d="M20 13H16C14.3431 13 13 14.3431 13 16V20C13 21.6569 14.3431 23 16 23H20C21.6569 23 23 21.6569 23 20V16C23 14.3431 21.6569 13 20 13Z" />
          </svg>
        </button>
        <AppButton text="Add New Room" type="reject" />
      </div>
    </div>
    <div class="rooms__content">
      <div class="rooms__list">
        <AppRoomsCard :roomsList="roomsList" />
      </div>
      <teleport to='main'>
        <AppPagination />
      </teleport>
    </div>
  </div>
</template>

<script>
import AppFilterTabsButton from "@/components/ui/AppFilterTabsButton.vue";
import AppSearch from "@/components/ui/AppSearch.vue";
import AppDropdown from "@/components/ui/AppDropdown.vue";
import AppButton from "@/components/ui/AppButton.vue";
import AppPagination from "@/components/ui/AppPagination.vue";
import AppRoomsCard from "@/components/ui/AppRoomsCard.vue";

export default {
  data() {
    return {
      tabsFilter: ['All Status', 'Available', 'Sold out'],
      selectedTab: 'All Status',
      roomsList: [
        { 
          id: '#R-001235', 
          name: '404 Brrom Str, Fl2', 
          status: 'available',
          reviews: '147',
          rating: '3',
          floor: 'G-05',
          bedType: 'Double Bed'
        },
        { 
          id: '#R-001236', 
          name: 'Neoma Path', 
          status: 'booked',
          reviews: '145',
          rating: '4',
          floor: 'G-06',
          bedType: 'Single Bed'
        },
        { 
          id: '#R-001237', 
          name: 'Godfrey Common', 
          status: 'available',
          reviews: '122',
          rating: '4',
          floor: 'F-07',
          bedType: 'Single Bed'
        },
        { 
          id: '#R-001238', 
          name: 'Homenick Cove', 
          status: 'booked',
          reviews: '184',
          rating: '3',
          floor: 'D-02',
          bedType: 'Double Bed'
        },
        { 
          id: '#R-001239', 
          name: 'Ari Extension', 
          status: 'booked',
          reviews: '129',
          rating: '4',
          floor: 'N-24',
          bedType: 'Family Bed'
        },
        { 
          id: '#R-001240', 
          name: 'Weimann Junctions', 
          status: 'booked',
          reviews: '101',
          rating: '3',
          floor: 'D-02',
          bedType: 'Double Bed'
        },
        { 
          id: '#R-001241', 
          name: 'Dino Shores', 
          status: 'available',
          reviews: '214',
          rating: '3',
          floor: 'G-05',
          bedType: 'Double Bed'
        },
        { 
          id: '#R-001242', 
          name: 'Louisa Course', 
          status: 'booked',
          reviews: '131',
          rating: '4',
          floor: 'G-05',
          bedType: 'Single Bed'
        },
        { 
          id: '#R-001243', 
          name: 'Misael Groves', 
          status: 'available',
          reviews: '87',
          rating: '4',
          floor: 'F-07',
          bedType: 'Single Bed'
        },
        { 
          id: '#R-001244', 
          name: 'Darby Place', 
          status: 'booked',
          reviews: '253',
          rating: '4',
          floor: 'N-24',
          bedType: 'Family Bed'
        },
        { 
          id: '#R-001245', 
          name: 'Robert Harbor', 
          status: 'available',
          reviews: '110',
          rating: '3',
          floor: 'G-05',
          bedType: 'Double Bed'
        },
        { 
          id: '#R-001246', 
          name: 'Trey Cape', 
          status: 'booked',
          reviews: '206',
          rating: '4',
          floor: 'G-06',
          bedType: 'Single Bed'
        },
        { 
          id: '#R-001248', 
          name: 'Anderson Isle', 
          status: 'booked',
          reviews: '98',
          rating: '3',
          floor: 'D-02',
          bedType: 'Double Bed'
        },
        { 
          id: '#R-001249', 
          name: 'Heloise Locks', 
          status: 'available',
          reviews: '122',
          rating: '4',
          floor: 'F-07',
          bedType: 'Single Bed'
        },
        { 
          id: '#R-001250', 
          name: 'Marcella Court', 
          status: 'booked',
          reviews: '122',
          rating: '4',
          floor: 'N-24',
          bedType: 'Family Bed'
        }
      ]
    }
  },
  methods: {
    setTab(tab) {
      this.selectedTab = tab
    }
  },
  components: { AppFilterTabsButton, AppSearch, AppDropdown, AppButton, AppPagination, AppRoomsCard }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_vars.scss";

.rooms {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  &__right {
    display: flex;
    gap: 28px;
  }

  &__search {
    width: 433px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
    margin-bottom: 40px;
  }

  &__grid-view {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    width: 54px;

    background-color: $grey-4;
    border-radius: 14px;

    svg {
      fill: $grey-2;
    }

    &.active {
      background-color: rgba($tertiary, .15);

      svg {
        fill: $tertiary;
      }
    }
  }
}
</style>