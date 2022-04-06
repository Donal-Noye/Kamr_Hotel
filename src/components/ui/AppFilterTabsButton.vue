<template>
  <button
    class="filter-tab"
    v-for="tab in tabsFilter"
    :key="tab"
    :class="{ active: tab === selectedTab }"
    @click="$emit('setTab', tab)"
  >
    {{ tab }}
  </button>
</template>

<script>
export default {
  emits: ['setTab'],
  props: {
    tabsFilter: Array,
    selectedTab: String
  },
};
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.filter-tabs {
  display: flex;
  gap: 14px;
}

.filter-tab {
  padding: 15px 24px;

  font-weight: 500;
  font-size: 14px;
  line-height: 164%;
  color: $grey-1;

  border: 1px solid transparent;
  border-radius: 14px;

  transition: color 0.3s ease, border-color 0.1s ease 0.1s;

  &.active {
    color: inherit;
    border-color: $grey-3;
  }
}
</style>