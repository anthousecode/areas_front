<template>
  <section>
    <div :class="{ visible: isReady }" class="index-wrapper">
      <div class="position-relative img-container">
        <iframe
          id="frame_id_div"
          ref="frame"
          @wheel="logger"
          src="https://api.martovariverside.com/3d/index.htm"
          style="
                        width: 100vw !important;
                        height: 100vh !important;
                        z-index: 0;
                        position: relative;
                        top: 0;
                        left: 0;
                        overflow: hidden;
                    "
          frameborder="0"
        ></iframe>
        <div
          v-if="isShowControls"
          style="
                        width: 100vw !important;
                        height: 100vh !important;
                        position: relative;
                        top: 0;
                        left: 0;
                        overflow: hidden;
                        position: fixed;
                        z-index:1;
                    "
        ></div>
        <transition name="fade">
          <!-- src="../static/bar_360test-min.jpg" -->
          <img
            v-if="isShowControls && getWindowWidth <= 1160"
            src="../static/bar_360_2.jpg"
            alt="loading"
            class="preloadImage"
          />
        </transition>
        <!--you can add playClick() to img if you need-->

        <template v-if="isShowControls">
          <div @click="playClick()" class="controls">
            <div class="controls-group">
              <div
                @click="getPrevSlide"
                class="controls-arrow controls-arrow__left"
              >
                &#10092;
              </div>
              <div class="rounded-circle" style="padding-left: 0.182vw">
                360
                <sup>°</sup>
              </div>
              <div
                @click="getNextSlide"
                class="controls-arrow controls-arrow__right"
              >
                &#10093;
              </div>
            </div>
            <div class="controls-title">3D ТУР</div>
          </div>
          <div class="index-title">
            <div v-if="isRus" class="h2">
              <img src="/h2.svg" alt="h2" />
            </div>
            <div v-else class="h2">
              <img src="/надпись_укр.svg" alt="h2" />
            </div>
            <div class="h1"><img src="/h1.svg" alt="h1" /></div>
          </div>
        </template>
      </div>
    </div>
    <loading :isReady="!isReady" v-if="!isReady" />
    <!--    music-->
    <button
      v-if="isPlay && !isShowControls"
      class="stopButton"
      @click="stopClick()"
    >
      <img src="../static/speaker.jpg" alt="vol" />
    </button>
    <button
      v-if="!isPlay && !isShowControls"
      class="stopButton mute"
      @click="playClick()"
    >
      <img src="../static/mute.png" alt="mute" />
    </button>
    <audio style="visibility: hidden" muted ref="ID" loop>
      <source src="throughTheSunset.mp3" />
      <p>Ваш браузер не поддерживает аудио</p>
    </audio>
    <!--    music end-->

    <!--    POLICY-->
    <!--    <a href="https://docs.google.com/document/d/14B37a520bzwqNcu_SD7vvPGXgrVRpSvt049jxFhjjI8/edit?usp=sharing" target="_blank" class="policy">Privacy Policy</a>-->
    <!--    POLICY end-->
  </section>
</template>
<!--https://www.youtube.com/watch?v=TZmdPZGAbdU-->
<script>
import { Pano } from "vuejs-vr";
import { mapGetters } from "vuex";
import Loading from "../components/loading";

export default {
  components: { Loading },
  data: () => ({
    urls: [
      "/about/1280About.jpg",
      "/about/1680About.jpg",
      "/about/1920About.jpg",
      "/about/2048About.jpg",
      "/gallery/1280Gallery.jpg",
      "/gallery/1680Gallery.jpg",
      "/gallery/1920Gallery.jpg",
      "/gallery/2048Gallery.jpg",
      "/gallery/4kGallery.jpg",
      "/12801.jpg",
      "/1680.jpg",
      "/16801.jpg",
      "/19201.jpg",
      "/2048.jpg",
      "/pro.jpg",
      "/3600.jpg",
      "/4k.jpg",
      "/news/1280News.png",
      "/news/1680News.png",
      "/news/1920News.jpg",
      "/news/19201News.jpg",
      "/news/2048News.png",
      "/news/4kNews.png"
      //     '/shortMainPhotos/yachtclub_360-min.jpg'
    ],
    img: "/shortMainPhotos/bar_360_проба2-min.jpg",
    index: 0,
    isReady: true,
    isPlay: false,
    isShowControls: true
  }),
  computed: {
    ...mapGetters(["language"]),
    isRus() {
      return this.language === "ru";
    },
    isUa() {
      return this.language === "ua";
    },
    getWindowWidth() {
      return window.innerWidth;
    }
  },
  methods: {
    playClick() {
      setTimeout(() => {
        this.$refs.ID.play();
        this.$refs.ID.muted = false;
        this.isPlay = true;
        this.isShowControls = false;
      }, 0);
    },
    stopClick() {
      setTimeout(() => {
        this.isPlay = false;
        // this.isShowControls = true;
        this.$refs.ID.muted = true;
      }, 0);
    },
    readyChange() {
      requestAnimationFrame(() => (this.isReady = true));
    },
    setCanvasSize() {
      let canvas = document.getElementsByClassName("panolens-canvas")[0];
      if (canvas) {
        canvas.setAttribute("width", window.innerWidth);
        canvas.setAttribute("height", window.innerHeight);
      }
    },
    startPositionSet() {
      this.isShowControls = true;
      this.stopClick();
    },
    setStartOptions(num) {
      this.isReady = false;
      this.$bus.$on("start", this.startPositionSet);
      this.$bus.$on("stopClick", this.stopClick);
      this.$bus.$on("playClick", this.playClick);
      setTimeout(() => {
        this.readyChange();
        window.readyState = true;
      }, num);
    },
    getPrevSlide() {},
    getNextSlide() {},
    getOne() {
      // await this.urls.forEach(a => {
      //      try {
      //          var imageObject = new Image();
      //          imageObject.src = `http://martovariverside.com${a}`;
      //      } catch (e) {
      //          this.$notify({
      //              group: 'top',
      //              type: 'error',
      //              title: `Ошибка`,
      //              text: e
      //          })
      //      }
      //  })
    }
  },
  beforeCreate() {
    // this.$axios
    //     .get("https://api.martovariverside.com/3d/index.htm")
    //     .then((res) => {
    //         console.log(res);
    //     });
    // this.getOne();
  },
  mounted() {
    if (process.client && this.getWindowWidth > 1160) {
      if (!window.readyState) {
        this.setStartOptions(1000);
      } else {
        this.setStartOptions(100);
      }
    }
    if (process.client && this.getWindowWidth < 1160) {
      if (!window.readyState) {
        this.setStartOptions(1800);
        window.readyState = true;
      } else {
        this.setStartOptions(800);
      }
    }
  },
  watch: {
    isPlay(newVal, oldVal) {
      if (newVal === true) {
        this.$bus.$emit("changeZIndexVisible");
        setTimeout(() => {
          var evt = document.createEvent("MouseEvents");
          evt.initEvent("wheel", true, true);
          evt.deltaY = 420;
          this.$refs.frame.dispatchEvent(evt);
          console.log("dispatch", this.$refs.frame, evt);
        }, 1000);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.preloadImage {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  @media screen and (width: 1280px) {
    transform: scale(2.5);
  }
  @media screen and (min-width: 1281px) and (max-width: 1400px) {
    transform: scale(2.5);
  }
  @media screen and (min-width: 1440px) and (max-width: 1899px) {
    transform: scale(2.75);
  }
  @media screen and (min-width: 1899px) and (max-width: 2047px) {
    transform: scale(3.05);
  }
  @media screen and (min-width: 2047px) {
    transform: scale(3.1);
  }
  @media screen and (width: 2560px) {
    transform: scale(3.1);
  }
  @media screen and (width: 2880px) {
    transform: scale(2.7);
  }
  @media screen and (min-width: 3500px) {
    transform: scale(2.8);
  }
}
.visible {
  visibility: visible;
}

.index-wrapper {
  color: white;
  height: 100vh;
  z-index: 0;
  visibility: hidden;
  position: relative;
  overflow: hidden;

  .index-title {
    position: absolute;
    bottom: 51px;
    left: 81px;
    z-index: 10;
    @media screen and (max-width: 1025px) {
      left: 20px;
      bottom: 60px;
    }
    @media only screen and (device-width: 414px) {
      bottom: 120px;
    }
    @media only screen and (device-width: 375px) {
      bottom: 120px;
    }
    @media only screen and (device-width: 411px) {
      bottom: 120px;
    }
    .h1 {
      width: 45.052vw;
      height: 3.646vw;
      @media screen and (max-width: 1025px) {
        width: 335px;
        height: 27px;
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }

    .h2 {
      width: 25.302vw;
      height: 4.063vw;
      @media screen and (max-width: 1025px) {
        width: 196px;
        height: 30px;
      }
      img {
        width: 100%;
        height: 100%;
        display: block;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }
  }
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

.controls {
  width: 9.271vw;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  @media screen and (max-width: 1025px) {
    width: 150px;
    height: 141px;
  }
  .controls-group {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .rounded-circle {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.156vw solid white;
      width: 5.729vw;
      height: 5.729vw;
      @media screen and (max-width: 1025px) {
        width: 98px;
        height: 98px;
        border: 3px solid white;
      }

      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 1.823vw;
      line-height: 3.177vw;

      @media screen and (max-width: 1025px) {
        font-size: 36px;
        line-height: 49px;
      }
    }
  }

  .controls-title {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.146vw;
    line-height: 1.563vw;
    text-align: center;
    padding-top: 0.365vw;
    @media screen and (max-width: 1025px) {
      font-size: 17px;
      line-height: 23px;
      padding-top: 20px;
    }
  }
}
.policy {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  line-height: 1.5vw;
  /* identical to box height */
  text-transform: uppercase;
  color: #ffffff;
  position: fixed;
  z-index: 100;
  right: 81px;
  bottom: 71px;
  &:hover {
    color: #44a4fc;
    transition: 0.7s ease-in-out;
  }
  @media screen and (max-width: 722px) {
    font-size: 15px;
    line-height: 20px;
    right: 20px;
    bottom: 35px;
  }
  @media screen and (min-width: 722px) and (max-width: 1180px) {
    font-size: 15px;
    line-height: 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
