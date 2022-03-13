<template>
  <div class="MsgCard" >
    <h1 v-for="n in 3" v-bind:key="n">Your message is {{msg}}</h1>
    <span v-for="n in 10" v-bind:key="n">{{n}}&nbsp; </span>
  <div>
</div>
  </div>
</template>
<script>
export default {
  name: 'MsgCard',
  props: {
    msg: String
  }
}
</script>




