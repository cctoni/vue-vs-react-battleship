<template>
  <div id="app">
    <div class="page__container">
      <single-ship v-for="(ship, key) in shipData" :ship="ship" :key="key" @ADD_TO_FLEET="handleAddToFleet(key)"></single-ship>
    </div>
  </div>
</template>

<script>
import SingleShip from './components/SingleShip'
import shipData from './shipdata'

export default {
  name: 'app',
  components: {
    SingleShip
  },
    data() {
      return {
          shipData: shipData,
          isInFleet: {}
      }
    },
    methods: {
      handleAddToFleet(key) {
          if(!this.isInFleet.hasOwnProperty(key)) {
              this.$set(this.isInFleet, key, {inFleet: false});
          }

          this.isInFleet[key].inFleet = true;
      }
    }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Oswald:300,400,700&amp;subset=latin-ext');

  #app {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: none;
    color: #2c3e50;
    font-family: 'Oswald', Helvetica, Arial, sans-serif;
    text-align: center;
  }
</style>