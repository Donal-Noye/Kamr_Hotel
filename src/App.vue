<template>
  <div class="page" v-if="!mobile">
    <TheSidebar />
    <TheHeader :title="$router.currentRoute.value.meta.title" />
    <main class="main">
      <div class="container">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
  <div v-else class="mobile-message">
    <h2 class="heading">Sorry, this app is not supported on Mobile Devices</h2>
    <p class="paragraph">To use this app, please use a computer</p>
  </div>
</template>

<script>
import TheSidebar from "@/components/TheSidebar.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  data() {
    return {
      mobile: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1200) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
  components: { TheSidebar, TheHeader }
}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";

.main {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - $header-height);
  padding-top: 30px;
  padding-bottom: 50px;
  margin-left: $sidebar-width;
}

.container {
  max-width: 1577px;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease, transform .4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.mobile-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
