<template>
  <div>
      <v-row style="display: flex; flex-direction:row-reverse">
        <v-col cols="3" md="2"  v-for="item in data.dataSource.length">
          <v-card  width="120"  height="80" @click="sound(data.dataSource.sound+`${item}.mp3`)">
            <v-img :src= "data.dataSource.image+`${item}.png`"   height="100%" width="100%" contain />
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "generalReading",
   props:{
     data:{
       type:Object,
       default:()=>{}

     },
   },
  methods:{
    sound(soun){
      let bet = new Audio(soun)
      bet.pause()

      bet.play();

    }
  }
}
</script>

<style scoped>

</style>
