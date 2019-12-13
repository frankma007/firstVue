<template>
  <div class="hello">
    <h1>{{ msg }} </h1>
    <h2>在下马壮，请多指教</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
         张晶晶
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          马睿宸
        </a>
      </li>
     
      
    </ul>
 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '马壮不是废柴，马壮一样可以自己在vue上做的很棒'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
