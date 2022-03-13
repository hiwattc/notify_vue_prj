<template>
  <div class="Menu01">
    <MsgCard msg="Cafe Comman"/>
  </div>
</template>
<script>
import MsgCard from '@/components/test01/MsgCard.vue'

export default {
  name: 'Menu01View',
  props: {
    msg: String
  },
  components: {
    MsgCard
  }
}
</script>




