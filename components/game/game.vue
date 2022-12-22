<template>
  <div style="width: 80%" >
    <v-btn @click="sound(data[randomNumbers])" text> dinle <v-icon class="ml-1">mdi-volume-high</v-icon></v-btn>
    <v-row class="mt-4" >
      <v-col  class="img " :class="`color${index}`" cols="6"  v-for="(item,index) in data[randomNumbers].questions" :key="index">
        <v-img @click="question(item,index)" max-width="90%" height="100%" contain :src="item.image"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "game",
  data(){
    return{
      count:0,
      randomNumbers:0,

    }
  },
  props:{
    data:{
      type:Object,
      default:()=>{}
    }
  },
  methods:{
    next(){
        this.randomNumbers= Math.floor(Math.random() * this.data.length) ;
    },
    prev(){
     if(this.count>0){

       this.count--
     }

    },
    sound(soun){
      let bet = new Audio(soun.sound)
      bet.pause()
      bet.play();

    },
    question(questions,index){
      if(questions.correct){

        let bet = new Audio('/sistemSound/dogru.wav')
        bet.pause()
        bet.play();
        const tt=document.querySelector('.color'+index)
        tt.classList.add('true')

        const qq=document.querySelectorAll('.false')
        qq.forEach(el=>{
          el.classList.remove('false')
        })



        setTimeout( ()=>{
          this.randomNumbers= Math.floor(Math.random() * this.data.length)
          tt.classList.remove('true')
        },300)
        setTimeout( ()=>{
          let sound=this.data[this.randomNumbers].sound
          let bets = new Audio(sound)
          bets.pause()
          bets.play();
        },500)


      }
      else{
        let bet = new Audio('/sistemSound/yanlis1.mp3')
        bet.pause()
        bet.play();
        const qq=document.querySelector('.color'+index)
        qq.classList.add('false')


      }
    },
  },
mounted() {

  setTimeout( ()=>{
    let sound=this.data[this.randomNumbers].sound
    let bets = new Audio(sound)
    bets.pause()
    bets.play();
  },300)

},
watch:{
}
}
</script>

<style scoped>
.true{
  border: 2px solid green !important;
}
.false{
  border: 2px solid red !important;
}
.img{
  box-sizing: border-box;
  border: 2px solid blue;
  height: 100px;
  border-radius: 50px;
  margin-top: 5px;


}
</style>
