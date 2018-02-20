<template>
  <transition appear mode="in-out" name="shipcard" stagger="250" :duration="1000">
      <div class="singleship animated" :class="shipkey">
          <div class="singleship__header"></div>

          <div class="singleship__content" :style="styles">
              <div class="singleship__image">
                  <img :src="this.ship.image" alt="">
              </div>

              <h2 class="singleship__headline">
                  {{this.ship.fraction}}'s <br>{{this.ship.name}}
              </h2>

              <span class="singleship__price">
                  $ {{this.ship.price}}
              </span>

              <div class="singleship__details">
                  <div class="singleship__details--left">
                      <span class="singleship__label">{{this.ship.additional.label1}}</span>
                      <span class="singleship__value">{{this.ship.additional.value1}}</span>
                      <span class="singleship__label">{{this.ship.additional.label2}}</span>
                      <span class="singleship__value">{{this.ship.additional.value2}}</span>
                  </div>

                  <div class="singleship__details--right">
                      <div class="singleship__durability">
                          <!--@vue-circle-progress="progress", @vue-circle-end="progress_end"-->
                          <vue-circle
                            :progress="this.ship.durability"
                            :size="100"
                            :reverse="false"
                            line-cap="round"
                            :fill="fill"
                            empty-fill="rgba(255, 255, 255, .5)"
                            :animation-start-value="0.0"
                            :start-angle="0"
                            insert-mode="append"
                            :thickness="5"
                            :show-percent="true"
                          >
                          </vue-circle>
                      </div>
                  </div>
              </div>


              <button @click="addToFleet">
                  <span v-if="!isInFleet">Add to fleet</span>
                  <span v-else>Remove from fleet</span>
                  <mark v-if="isInFleet">{{this.mark}}</mark>
              </button>
          </div>
      </div>
  </transition>
</template>

<script>
import VueCircle from 'vue2-circle-progress'

export default {
    name: 'single-ship',
    components: {
        VueCircle
    },
    props: ['ship'],
    data() {
      return {
          styles: {
            'background-image': 'linear-gradient(-180deg, rgba(15, 34, 49, .8) 0%, rgba(16, 28, 44, .8) 50%, rgba(49, 29, 40, .9) 100%), url(' + this.ship.background + ')',
          },
          mark: '🚀',
          isInFleet: false,
          fill: { gradient:['rgba(203, 48, 66, 1)' , 'rgba(203, 48, 66, .2)']}
      }
    },
    methods: {
        addToFleet() {
            this.isInFleet = !this.isInFleet;
            this.$emit('ADD_TO_FLEET')
        },
        // progress(event, progress, stepValue) {
        //     //console.log(stepValue)
        // },
        // progress_end(event) {
        //     //console.log(`Circle progress end ${event}`)
        // }
    }
}
</script>

<style lang="scss">
    $primary: #CB3042;

    .singleship {
        display: flex;
        margin-bottom: 60px;
        transition: all .25s;
    }

    .singleship__header {
        background-color: $primary;
        background-image: url(/assets/sourcewars_bg.svg);
        background-position: 20px 140px;
        background-size: 40%;
        border-radius: 20px;
        flex-shrink: 0;
        width: 400px;
        z-index: 400;
    }

    .singleship__image {
        left: -100px;
        overflow: hidden;
        position: absolute;

        img {
            height: 250px;
        }
    }

    .singleship__content {
        background-image: linear-gradient(-180deg, rgba(#0F2231, .8) 0%, rgba(#101C2C, .8) 59%, rgba(#311D28, .9) 100%), url("/assets/death_star_bg.png");
        background-size: cover;
        border-radius: 20px;
        box-shadow: 0 20px 60px 20px rgba(black, .8);
        color: white;
        display: flex;
        flex-direction: column;
        margin: 50px 0 50px -250px;
        min-height: 350px;
        padding: 30px 30px 30px 250px;
        position: relative;
        width: 100%;
        z-index: 500;
    }

    .singleship__headline {
        font-size: 22px;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 10px;
        text-align: left;
        text-transform: uppercase;
    }

    .singleship__price {
        font-size: 42px;
        font-weight: 100;
        margin-bottom: 20px;
        text-align: left;
    }

    .singleship__label {
        color: rgba(255, 255, 255, .5);
        filter: blur(.8px);
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    .singleship__value {
        border-radius: 20px;
        border: 1px solid $primary;
        flex-grow: 0;
        font-weight: 100;
        margin-bottom: 20px;
        padding: 5px 30px;;
    }
    
    .singleship__details {
        display: flex;
        margin-bottom: 20px;

        &--left {
            align-items: flex-start;
            border-right: 2px solid rgba(white, .2);
            display: flex;
            flex-basis: 50%;
            flex-direction: column;
            flex-grow: 0;
            margin-right: 20px;
            text-align: left;
        }
        
        &--right {
            align-items: center;
            display: flex;
            margin: auto;
        }
    }

    mark {
        background-color: rgba(white, .8);
        border-radius: 50%;
        border: 2px solid $primary;
        display: block;
        font-size: 14px;
        height: 30px;
        padding: 2.5px;
        position: absolute;
        right: 0;
        top: -10px;
        width: 30px;
    }

    .shipcard-enter-active {
        animation-duration: 2s;
        animation-fill-mode: both;
        animation-name: zoomIn;
    }

    .shipcard-leave-active {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: fadeOutLeft;
    }
</style>