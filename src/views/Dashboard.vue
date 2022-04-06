<template>
  <div class="dashboard">
    <DashboardFeatured />
    <section class="section">
      <DashboardPopularRooms />
    </section>
    <section class="section">
      <DashboardGuestActivity />
      <DashboardRoomsAvailability />
      <DashboardVisitor />
    </section>
    <section class="section">
      <DashboardGuestList />
      <DashboardCustomerReviews />
    </section>
  </div>
</template>

<script>
import DashboardFeatured from "@/components/Dashboard/DashboardFeatured.vue"
import DashboardPopularRooms from "@/components/Dashboard/DashboardPopularRooms.vue"
import DashboardGuestActivity from "@/components/Dashboard/DashboardGuestActivity.vue"
import DashboardRoomsAvailability from "@/components/Dashboard/DashboardRoomsAvailability.vue"
import DashboardVisitor from "@/components/Dashboard/DashboardVisitor.vue"
import DashboardGuestList from "@/components/Dashboard/DashboardGuestList.vue"
import DashboardCustomerReviews from "@/components/Dashboard/DashboardCustomerReviews.vue"

export default {
  components: {
    DashboardFeatured,
    DashboardPopularRooms,
    DashboardGuestActivity,
    DashboardRoomsAvailability,
    DashboardVisitor,
    DashboardGuestList,
    DashboardCustomerReviews
  }
}
</script>

<style lang="scss">
.section {
  display: flex;
  gap: 40px;
  margin-top: 40px;
}
</style>