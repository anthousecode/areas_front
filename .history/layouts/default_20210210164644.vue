<template>
  <main class="p-0 m-0">
    <notifications style="z-index: 9999" group="top" position="top" />
    <Navbar
      v-if="getWindowWidth > 1112 && getWindowHeight !== 1366"
      key="navbar"
    />
    <template v-else>
      <mobile-menu
        @hideLeftMenu="hideLeftMenu"
        :showMenu="showMenu"
        key="mob"
      />
      <div class="nav-brand">
        <img @click="showLeftMenu" src="/mobile-logo.svg" alt="logo" />
      </div>
    </template>

    <div style="width: 100vw" class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <nuxt style="z-index: 1" />
      </div>
    </div>
  </main>
</template>
<script>
import Navbar from "@/components/Navbar";
import MobileMenu from "../components/mobileMenu";

export default {
  components: {
    MobileMenu,
    Navbar
  },
  data: () => ({
    startPosition: false,
    showMenu: false,
    zIndex: 1,
    visibility: "visible",
    muted: false,
    componentKey: 0
  }),
  computed: {
    getWindowWidth() {
      return window.innerWidth;
    },
    getWindowHeight() {
      return window.innerHeight;
    }
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
      console.log(this.componentKey);
    },
    zIndexAdd() {
      this.zIndex = 1;
    },
    zIndexRemove() {
      this.visibility = "hidden";
    },
    addVisibility() {
      this.visibility = "visible";
      this.zIndex = -1;
      this.muted = false;
    },
    playClick() {
      this.$bus.$emit("playClick");
      this.muted = false;
    },
    stopClick() {
      this.$bus.$emit("stopClick");
      this.changeMuted();
      this.forceRerender();
    },
    changeMuted() {
      this.muted = !this.muted;
    },
    showLeftMenu() {
      this.addVisibility();
      this.showMenu = true;
      setTimeout(() => this.$bus.$emit("start"), 500);
    },
    hideLeftMenu() {
      this.showMenu = false;
    }
  },
  mounted() {
    this.muted = false;
  }
};
</script>
<style scoped lang="scss">
main {
  font-family: "Open Sans", sans-serif;

  .nav-brand {
    position: fixed;
    width: 80px;
    height: 44px;
    left: 20px;
    top: 20px;
    z-index: 999;
  }

  .stopButton {
    display: block;
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 50px;
    right: 50px;
    background-color: white;
    border-radius: 50%;
    z-index: 9000;
    cursor: pointer;
    padding: 5px;
    border: none;
    outline: none;
    @media screen and (min-width: 2049px) {
      width: 80px;
      height: 80px;
      padding: 10px;
    }
    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
    }
  }
  .mute {
    padding: 11px 9px;
    padding-top: 10px;
    @media screen and (min-width: 2049px) {
      padding: 22px 18px;
      padding-top: 20px;
    }
  }
}
</style>
