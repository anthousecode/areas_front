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
                <iframe
                    id="frame_id"
                    style="
                        width: 100vw !important;
                        height: 100vh !important;
                        position: relative;
                        top: 0;
                        left: 0;
                        overflow: hidden;
                        position: fixed;
                    "
                    :style="{ 'z-index': zIndex, visibility: visibility }"
                    src="https://api.martovariverside.com/3d/index.htm"
                    frameborder="0"
                >
                </iframe>
                <template v-if="visibility === 'visible'">
                    <button
                        v-if="zIndex === 1 && muted"
                        class="stopButton mute"
                        style="position: fixed; z-index: 999"
                        @click="playClick"
                    >
                        <img src="mute.png" alt="mute" />
                    </button>
                    <button
                        v-if="zIndex === 1 && !muted"
                        class="stopButton"
                        @click="stopClick"
                    >
                        <img src="speaker.jpg" alt="vol" />
                    </button>
                </template>
                <!--    music-->
                <audio style="visibility: hidden" muted ref="ID" loop>
                    <source src="Purple.mp3" />
                    <p>Ваш браузер не поддерживает аудио</p>
                </audio>
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
        zIndex: -1,
        visibility: "visible",
        muted: false,
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
        zIndexAdd() {
            this.zIndex = 1;
        },
        zIndexRemove() {
            this.visibility = "hidden";
        },
        addVisibility() {
            this.visibility = "visible";
            this.zIndex = -1;
        },
        // playClick() {
        //     this.$bus.$emit("playClick");
        //     this.changeMuted();
        // },
        // stopClick() {
        //     this.$bus.$emit("stopClick");
        //     this.changeMuted();
        // },
        changeMuted() {
            this.muted = !this.muted;
        },
        showLeftMenu() {
            this.addVisibility();

            this.showMenu = true;
            this.$bus.$emit("playClick");
            setTimeout(() => this.$bus.$emit("start"), 1000);
        },
        hideLeftMenu() {
            this.showMenu = false;
        },

        playClick() {
            setTimeout(() => {
                this.$refs.ID.play();
                this.$refs.ID.muted = false;
                this.isPlay = true;
                this.zIndexAdd();
                // this.isShowControls = false;
            }, 0);
        },
        stopClick() {
            setTimeout(() => {
                console.log(this.$refs);
                this.isPlay = false;
                // this.isShowControls = true;
                this.$refs.ID.muted = true;
            }, 0);
        },
    },
    mounted() {
        this.$bus.$on("changeZIndexVisible", this.zIndexAdd);
        this.$bus.$on("removeZIndexVisible", this.zIndexRemove);
        this.$bus.$on("changeVisibility", this.addVisibility);
        this.$bus.$on("playClick", this.playClick);
        this.$bus.$on("stopClick", this.stopClick);
    },
    beforeDestroy() {
        this.$bus.$off("changeZIndexVisible", this.zIndexAdd);
        this.$bus.$off("removeZIndexVisible", this.zIndexRemove);
        this.$bus.$off("changeVisibility", this.addVisibility);
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

