<template>
  <section class="ifr">
    <template>
      <video v-if="getWindowWidth>1138" id="video" ref="myVideo" playsinline="playsinline" autoplay="autoplay"
             muted="muted" loop="loop"
             preload="metadata">
        <source src="../static/МартоваРиверсайд.mp4" type="video/mp4">
      </video>
      <img v-if="getWindowWidth===320" class="map-img" src="../static/contacts_mobile/iPhone_SE.png"
           alt="plane_martova">
      <img v-if="getWindowWidth===360" class="map-img" src="../static/contacts_mobile/Android.png" alt="plane_martova">
      <img v-if="getWindowWidth===393" class="map-img" src="../static/contacts_mobile/Android.png" alt="plane_martova">
      <img v-if="getWindowWidth===384" class="map-img" src="../static/contacts_mobile/Android.png" alt="plane_martova">
      <img v-if="getWindowWidth===375 && getWindowHeight===635" class="map-img"
           src="../static/contacts_mobile/iPhone_8.png" alt="plane_martova">
      <img v-if="getWindowWidth===375 && getWindowHeight===667" class="map-img"
           src="../static/contacts_mobile/iPhone_8.png" alt="plane_martova">
      <img v-if="getWindowWidth===375 && getWindowHeight===553" class="map-img"
           src="../static/contacts_mobile/iPhone_8.png" alt="plane_martova">
      <img v-if="getWindowWidth===414 && getWindowHeight===719" class="map-img"
           src="../static/contacts_mobile/iPhone_8_Plus.png" alt="plane_martova">
      <img v-if="getWindowWidth===414 && getWindowHeight===736" class="map-img"
           src="../static/contacts_mobile/iPhone_8_Plus.png" alt="plane_martova">
      <img v-if="getWindowWidth===412" class="map-img" src="../static/contacts_mobile/iPhone_8_Plus.png"
           alt="plane_martova">
      <img v-if="getWindowWidth===375 && getWindowHeight===812" class="map-img"
           src="../static/contacts_mobile/iPhone_X.png" alt="plane_martova">
      <img v-if="getWindowWidth===414 && getWindowHeight===896" class="map-img"
           src="../static/contacts_mobile/iPhone_11_Pro_Max.png" alt="plane_martova">
      <img v-if="getWindowWidth===768" class="map-img" src="../static/contacts_mobile/iPad_mini.png"
           alt="plane_martova">
      <img v-if="getWindowWidth===834" class="map-img" src="../static/contacts_mobile/iPad_Pro_11.png"
           alt="plane_martova">
      <img v-if="getWindowWidth===1024" class="map-img" src="../static/contacts_mobile/iPad_Pro_12.9.png"
           alt="plane_martova">
      <img v-if="getWindowWidth===1112" class="map-img" src="../static/contacts_mobile/iPad_Pro_12.9.png"
           alt="plane_martova">
      <div class="bottom-side d-flex flex-column align-items-end">
        <a v-if="getWindowWidth<1140" href="https://goo.gl/maps/Pe3Byx57J8ySuXYM6" target="_blank"
           class="go-link d-flex justify-content-center align-items-center">
          <img src="../static/contact_arrow.svg" alt="go">
          <span>В путь</span>
        </a>
        <div v-show="language==='ru'" class="text">
          <p>ОК "Мартова риверсайд резиденс"</p>
          <p>ЕГРПОУ 42700016</p>
          <p>продажа участков:
            <a class="tel" href="tel:+380503640004">
              +380503640004
            </a>
          </p>
          <div v-if="getWindowWidth<1138" class="d-flex justify-content-start soc-wrapper">
            <ul class="d-flex justify-content-end soc-group">
              <li>
                <a
                  href="https://www.facebook.com/%D0%9C%D0%B0%D1%80%D1%82%D0%BE%D0%B2%D0%B0-%D0%A0%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%B9%D0%B4-115996473285370/?modal=admin_todo_tour"
                  target="_blank" class="soc soc-fb">
                  <i class="fab fa-facebook-f">
                  </i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/martova_riverside?igshid=ryb4azq1zx9" target="_blank"
                   class="soc soc-insta">
                  <i class="fab fa-instagram">
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank" class="soc soc-youtube">
                  <i class="fab fa-youtube">
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="language==='ua'" class="text">
          <p>ОК "Мартова рiверсайд резиденс""</p>
          <p>ЕДРПОУ 42700016</p>
          <p>продаж дiлянок:
            <a class="tel" href="tel:+380503640004">
              +380503640004
            </a>
          </p>
          <div v-if="getWindowWidth<1138" class="d-flex justify-content-start soc-wrapper">
            <ul class="d-flex justify-content-end soc-group">
              <li>
                <a
                  href="https://www.facebook.com/%D0%9C%D0%B0%D1%80%D1%82%D0%BE%D0%B2%D0%B0-%D0%A0%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%B9%D0%B4-115996473285370/?modal=admin_todo_tour"
                  target="_blank" class="soc soc-fb">
                  <i class="fab fa-facebook-f">
                  </i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/martova_riverside?igshid=ryb4azq1zx9" target="_blank"
                   class="soc soc-insta">
                  <i class="fab fa-instagram">
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank" class="soc soc-youtube">
                  <i class="fab fa-youtube">
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
    <!--    IF NEED LOADER-->

    <!--    <div v-else>-->
    <!--      <div class="page-loader d-flex flex-column justify-content-center align-items-center">-->

    <!--        <div-->
    <!--          class="spinner-grow text-info"-->
    <!--          role="status"-->
    <!--        >-->
    <!--          <span class="sr-only">Loading...</span>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>
<script>
    import {mapGetters} from 'vuex';
    import Loading from "../components/loading";

    export default {
        name: "Contacts",
        components: {Loading},
        data: () => ({
            // isLoader: false
        }),
        computed: {
            getWindowWidth() {
                return window.innerWidth;
            },
            getWindowHeight() {
                return window.innerHeight;
            },
            ...mapGetters([
                'language'
            ])
        },
        created() {
            console.log(this.getWindowWidth, this.getWindowHeight)
            // this.isLoader = true;
            // setTimeout(()=>{
            //     this.isLoader = false;
            // }, 2300)
        }
    }
</script>

<style scoped lang="scss">
  .ifr {
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .bottom-side {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 2000;
      color: black;

      .go-link {
        display: block;
        margin-bottom: 10px;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 32px;
        padding: 12px 13px;

        img {
          display: block;
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }

        span {
          font-family: 'Open Sans', sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 20px;
          color: #000000;
        }
      }

      @media screen and (max-width: 767px) {
        right: 50%;
        margin-right: -154px;
      }
    }

    .text {
      background-color: #ffffff90;
      font-family: 'Open Sans', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 23px;
      padding: 10px;

      .soc-wrapper {
        margin-top: 10px;

        ul {
          list-style: none;
          margin-bottom: 0;
          height: 31px;

          .nav-item {
            color: rgba(255, 255, 255, 1);
            position: relative;
            display: block;
            padding: 10px;

            &:last-child {
              padding-right: 0 !important;
            }

            &:first-child {
              border-right: 1px solid white;
            }

            .nav-link {
              padding: 10px;
              font-size: 14px;
              text-transform: uppercase;
              border-bottom: 0.104vw solid transparent;
              transition: .7s ease-in-out;

              &:hover {
                border-bottom: 1px solid white;
                transition: .7s ease-in-out;
              }
            }
          }

          li {
            text-transform: uppercase;
            line-height: 10px;

            .soc {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 11px;
              width: 34px;
              height: 34px;
              border-radius: 50%;
              text-decoration: none;
              color: white;
              margin-right: 20px;

              i {
                font-size: 17px;
              }
            }

            .soc-fb {
              background-color: #226ACE;
            }

            .soc-insta {
              background-color: #26915B;
            }

            .soc-youtube {
              background-color: #E05251;
            }
          }
        }

        .soc-group {
          li {
            display: flex;
            align-items: center;

            a {
              &:hover {
                transform: rotateZ(720deg);
                transition: 1s ease-in-out;
              }
            }
          }
        }

        .tel-wrap {
          font-family: "Open Sans", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          text-transform: uppercase;
          color: #FFFFFF;
          display: flex;
          height: 31px;
          align-items: center;
          padding-left: 15px;

          .tel {
            color: #FFFFFF;

            i {
              font-size: 15px;
              margin-right: 9px;
            }

            &:hover {
              color: #226ACE;
              transition: 1s ease-in-out;
            }
          }

        }
      }

      .tel {
        color: black;
      }

      p {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 23px;
      }
    }

    video {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: 0;
      -ms-transform: translateX(-50%) translateY(-50%);
      -moz-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
    }

    .gif {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: 100%;
      height: 100%;
      z-index: 0;
      -ms-transform: translateX(-50%) translateY(-50%);
      -moz-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
      /*уа*/
    }
  }

  @media screen and (max-width: 1150px) {
    img {
      object-fit: cover;
      width: 100vw;
      height: 100vh;
    }
  }
</style>
