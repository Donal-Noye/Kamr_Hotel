<template>
  <div class="concierge">
    <div class="concierge__header">
      <div class="filter-tabs">
        <AppFilterTabsButton 
          :tabsFilter="tabsFilter" 
          :selectedTab="selectedTab" 
          @set-tab="setTab" 
        />
      </div>
      <div class="concierge__right">
        <AppSearch class="concierge__search" />
        <AppDropdown />
        <!-- <button class="concierge__grid-view">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M21.7908 3.01252H8.23302C7.01521 3.01252 6.02441 4.00331 6.02441 5.22263C6.02441 6.44044 7.01521 7.43123 8.23302 7.43123H21.7908C23.0086 7.43123 23.9994 6.44044 23.9994 5.22263C23.9994 4.00327 23.0086 3.01252 21.7908 3.01252Z"/>
            <path d="M2.20941 3.01252C0.991172 3.01252 0 4.00364 0 5.22188C0 6.44011 0.991172 7.43123 2.20941 7.43123C3.42764 7.43123 4.41877 6.44011 4.41877 5.22188C4.41877 4.00364 3.42764 3.01252 2.20941 3.01252Z"/>
            <path d="M2.20941 9.79064C0.991172 9.79064 0 10.7818 0 12C0 13.2182 0.991172 14.2094 2.20941 14.2094C3.42764 14.2094 4.41877 13.2182 4.41877 12C4.41877 10.7818 3.42764 9.79064 2.20941 9.79064Z"/>
            <path d="M2.20941 16.5688C0.991172 16.5688 0 17.5599 0 18.7781C0 19.9964 0.991172 20.9875 2.20941 20.9875C3.42764 20.9875 4.41877 19.9964 4.41877 18.7781C4.41877 17.5599 3.42764 16.5688 2.20941 16.5688Z"/>
            <path d="M21.7908 9.79064H8.23302C7.01521 9.79064 6.02441 10.7814 6.02441 12.0007C6.02441 13.2186 7.01521 14.2094 8.23302 14.2094H21.7908C23.0086 14.2094 23.9994 13.2186 23.9994 12.0007C23.9994 10.7814 23.0086 9.79064 21.7908 9.79064Z"/>
            <path d="M21.7908 16.5688H8.23302C7.01521 16.5688 6.02441 17.5596 6.02441 18.7789C6.02441 19.9967 7.01521 20.9875 8.23302 20.9875H21.7908C23.0086 20.9875 23.9994 19.9967 23.9994 18.7789C23.9994 17.5596 23.0086 16.5688 21.7908 16.5688Z" />
          </svg>
        </button>
        <button class="concierge__grid-view active">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M8 1H4C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H8C9.65685 11 11 9.65685 11 8V4C11 2.34315 9.65685 1 8 1Z" />
            <path d="M20 1H16C14.3431 1 13 2.34315 13 4V8C13 9.65685 14.3431 11 16 11H20C21.6569 11 23 9.65685 23 8V4C23 2.34315 21.6569 1 20 1Z" />
            <path d="M8 13H4C2.34315 13 1 14.3431 1 16V20C1 21.6569 2.34315 23 4 23H8C9.65685 23 11 21.6569 11 20V16C11 14.3431 9.65685 13 8 13Z" />
            <path d="M20 13H16C14.3431 13 13 14.3431 13 16V20C13 21.6569 14.3431 23 16 23H20C21.6569 23 23 21.6569 23 20V16C23 14.3431 21.6569 13 20 13Z" />
          </svg>
        </button> -->
        <AppButton text="Add New Concierge" type="reject" />
      </div>
    </div>
    <div class="concierge__content">
      <div class="concierge__list">
        <AppConciergeCard :conciergeList="conciergeList" />
      </div>
      <teleport to='main'>
        <AppPagination />
      </teleport>
    </div>
  </div>
</template>

<script>
import AppFilterTabsButton from "@/components/ui/AppFilterTabsButton";
import AppSearch from "@/components/ui/AppSearch.vue";
import AppDropdown from "@/components/ui/AppDropdown.vue";
import AppButton from "@/components/ui/AppButton.vue";
import AppPagination from "@/components/ui/AppPagination.vue";
import AppConciergeCard from "@/components/ui/AppConciergeCard.vue";

export default {
  data() {
    return {
      tabsFilter: ['All Status', 'Available', 'Sold out'],
      selectedTab: 'All Status',
      conciergeList: [
        { 
          id: '#EMP-00025', 
          name: 'Alfonso Franci', 
          status: 'active', 
          descr: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.' 
        },
        { 
          id: '#EMP-00026', 
          name: 'Andy Lee', 
          status: 'active', 
          descr: 'Offer restaurant and activity recommendations and assist guests in arranging transportation' 
        },
        { 
          id: '#EMP-00027', 
          name: 'Craig Schleifer',
          status: 'active', 
          descr: 'Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc' 
        },
        { 
          id: '#EMP-00028', 
          name: 'Davis Lubin',
          status: 'active', 
          descr: 'Maintain inventory of supplies and order new stock as needed' 
        },
        { 
          id: '#EMP-00029', 
          name: 'Davis Stanton',
          status: 'active', 
          descr: 'Anticipate guests needs in order to accommodate them and provide an exceptional guest experience' 
        },
        { 
          id: '#EMP-00030', 
          name: 'Giana Ekstrom Bothman',
          status: 'active', 
          descr: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.' 
        },
        { 
          id: '#EMP-00031', 
          name: 'Gretchen Botosh',
          status: 'active', 
          descr: 'Maintain inventory of supplies and order new stock as needed' 
        },
        { 
          id: '#EMP-00032', 
          name: 'Jaxson Saris',
          status: 'active', 
          descr: 'Offer restaurant and activity recommendations and assist guests in arranging transportation' 
        },
        { 
          id: '#EMP-00033', 
          name: 'Kadin Vetrovs',
          status: 'active', 
          descr: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.' 
        },
        { 
          id: '#EMP-00034', 
          name: 'Kaiya Culhane',
          status: 'active', 
          descr: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.' 
        },
        { 
          id: '#EMP-00035', 
          name: 'Marilyn Kenter',
          status: 'active', 
          descr: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.' 
        },
        { 
          id: '#EMP-00036', 
          name: 'Roger Levin',
          status: 'active', 
          descr: 'Answering guest inquiries, directing phone calls, coordinating travel plans, and more.' 
        },
      ]
    }
  },
  methods: {
    setTab(tab) {
      this.selectedTab = tab
    }
  },
  components: { AppFilterTabsButton, AppSearch, AppDropdown, AppButton, AppPagination, AppConciergeCard }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.concierge {
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
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-bottom: 40px;
  }
}
</style>