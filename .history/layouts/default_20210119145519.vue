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
                <nuxt />
                <iframe
                    id="frame_id"
                    style="
                        width: 100vw !important;
                        height: 100vh !important;
                        z-index: 0;
                        position: relative;
                        top: 0;
                        left: 0;
                        overflow: hidden;
                        position: fixed;
                    "
                    src="https://api.martovariverside.com/3d/index.htm"
                    frameborder="0"
                >
                </iframe>
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
        Navbar,
    },
    data: () => ({
        startPosition: false,
        showMenu: false,
    }),
    computed: {
        getWindowWidth() {
            return window.innerWidth;
        },
        getWindowHeight() {
            return window.innerHeight;
        },
    },
    methods: {
        showLeftMenu() {
            this.showMenu = true;
            setTimeout(() => this.$bus.$emit("start"), 1000);
        },
        hideLeftMenu() {
            this.showMenu = false;
        },
    },
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
}
</style>

