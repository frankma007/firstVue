<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :letter="letter" :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet v-on:change="handleLetterChange" :cities="cities">
    </city-alphabet>
  </div>
</template>
<script>
import axios from "axios";
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data: function() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.headerGetCityInfoSucc);
    },
    headerGetCityInfoSucc(res) {
      console.log(res);
      const result = res.data;
      if (result.ret && result.data) {
        const data = result.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>
<style scoped></style>
