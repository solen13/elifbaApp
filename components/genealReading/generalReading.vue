<template>
  <div>
      <v-row style="display: flex; flex-direction:row-reverse">
        <v-col cols="3" md="2"  v-for="item in data.dataSource.length">
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
          this.count++
          let name=this.data.name
          const qq=document.querySelector('.color'+item)
          qq.classList.add('active')
         this.ar.push(item)
        localStorage.setItem(this.data.name,JSON.stringify(this.ar))
      const data =localStorage.getItem('ÖTRE')

    }
  },
  mounted(){







  }
}
</script>

<style scoped>
.active{
  border: 2px solid red;
}
</style>
