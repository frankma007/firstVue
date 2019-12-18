export default {
  changeCity (state, city) {
    //mutations用来改变state

    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}