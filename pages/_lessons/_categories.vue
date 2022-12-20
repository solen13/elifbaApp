<template>
<div style="width: 100%">
  <div  v-if="page">
    <study-card :data="getData"/>
  </div>

</div>
</template>

<script>
import studyCard from "@/components/card/studyCard";
import api from'@/constant/allApi'
export default {
  name: "_categories",
  components:{studyCard},
  data(){

    return{
      page:null,

    }
  },
  mounted() {
    this.page= this.$route.params.categories
  },
  computed:{
    getData(){
      if(this.page){
        return api[this.page]
      }

    }
  }
}
</script>

<style scoped>

</style>
