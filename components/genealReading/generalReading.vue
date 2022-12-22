<template>
  <div>
      <v-row style="display: flex; flex-direction:row-reverse">
        <v-col cols="3" md="2"  v-for="(item,index) in data.dataSource.length" :key="index">
          <v-card  width="120" :class="`color${item}`"  height="80" @click="sound(data.dataSource.sound+`${item}.mp3`,item)">
            <v-img :src= "data.dataSource.image+`${item}.png`"   height="100%" width="100%" contain />
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "generalnullReading",
  data(){
    return{
    count:0,
      ar:[]
    }
  },
   props:{
     data:{
       type:Object,
       default:()=>{}

     },

   },
  methods:{
    sound(soun,item){
      let bet = new Audio(soun)
      bet.pause()
      bet.play();
      const qq=document.querySelector('.color'+item)
      qq.classList.add('active')
      this.ar.push(item)

    }
  },
}
</script>

<style scoped>
.active{
  border: 2px solid red;
}
</style>
