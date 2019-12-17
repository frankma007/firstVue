<template>
  <ul class="list">
    <li
      class="item"
      v-for="alpha of letters"
      :key="alpha"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="alpha"
    >
      {{ alpha }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data: function() {
    return {
      touchStatus: false,
      startY: 0,
      time: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.time) {
        clearTimeout(this.time);
      }
      this.time = setTimeout(() => {
        if (this.touchStatus) {
          // const startY = this.$refs["A"][0].offsetTop;
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          console.log(index, "111");
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }
      }, 16);
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  computed: {
    letters() {
      const lettersList = [];
      for (let i in this.cities) {
        lettersList.push(i);
      }
      return lettersList;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.list
  position: absolute
  top:1.58rem
  right:0
  bottom:0
  width:.4rem

  overflow:hidden
  display :flex
  flex-direction : column
  justify-content : center
  .item
    text-align:center
    line-height:.4rem
    color:$bgColor
</style>
