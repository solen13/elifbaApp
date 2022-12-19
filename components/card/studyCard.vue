<template>

<div class="mt-4 card-content">
   <h2 v-if="data.name" class="text-center pa-3">{{data.name}}</h2>
    <general-reading  :data="data"/>

  <v-card v-if="isBox && data.bilgiKutusu"  width="100%" height="100%" class="d-flex justify-center align-center cards ">
    <v-btn style="z-index: 99" @click="exit" class="exit">Cık</v-btn>
    <v-img :src="data.bilgiKutusu" contain></v-img>
  </v-card>

  <v-btn @click="btn" class="btn">bilgi</v-btn>

</div>
</template>

<script>
import GeneralReading from "@/components/genealReading/generalReading";
export default {
  name: "card",
  components: {GeneralReading},
  data(){
    return{
      isBox:false
    }
  },
  props:{
    data:{
      type:Object,
      default:()=>{}
    }
  },
  methods:{
    btn(){
      this.isBox=true
    },
    exit(){
      this.isBox=false
    }
  }
}
</script>

<style scoped>
.card-content{
  position:relative;


}
.btn{
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 180px;
  margin-right: 15px;

}
.cards{
  position: fixed;
  top:0;
 background-color: rgba(128, 128, 128, 0.9);
  z-index: 99;
}
.exit{
  position: absolute;
  top: 0;
  right: 0;
}
</style>
