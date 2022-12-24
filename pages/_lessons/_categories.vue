<template>
<div style="width: 100%">
  <template v-if="page !='quiz'">
    <div  v-if="page">
      <study-card :data="getData"/>
    </div>

  </template>

  <div v-else class="d-flex justify-center align-center " >

   <game :data="getGameApi" />

  </div>


</div>
</template>

<script>
import studyCard from "@/components/card/studyCard";
import api from'@/constant/allApi'
import Game from "@/components/game/game";
import gameApi from "@/constant/gameApi";
export default {
  name: "_categories",
  components:{Game, studyCard},
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
    },
    getGameApi(){
      return gameApi
    }
  }
}
</script>

<style scoped>

</style>
