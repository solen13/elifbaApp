<template>
  <div class="d-flex justify-center"  style="width: 100% ;height: 83vh;position: relative" >

    <div v-if="isWindow" style="width: 80%" >

    <div  class="d-flex justify-space-around">
      <span>puan:{{count}}</span>

      <div>
        <h4>En yükesk puan</h4>
        <p v-if="scoreColor" class="red pa-1 rounded text-center white--text">{{count}}</p>
        <p v-else class="blue pa-1 rounded text-center white--text">{{highScore}} </p>
      </div>

      <p>süre:{{time}}</p>
    </div>

    <v-btn @click="sound(data[randomNumbers])" text> dinle <v-icon class="ml-1">mdi-volume-high</v-icon></v-btn>
    <v-row class="mt-4" >
      <v-col  class="img " :class="`color${index}`" cols="6"  v-for="(item,index) in data[randomNumbers].questions" :key="index">
        <v-img @click="question(item,index)" max-width="90%" height="100%" contain :src="item.image"></v-img>
      </v-col>
    </v-row>

    <div v-if="isOver" class="game-over"  >

      <div class="mb-4">
        <v-btn @click="trying">Tekrar oyna</v-btn>
        <v-btn @click="exits">Ana Menu</v-btn>
      </div>
    </div>


  </div>

    <div  v-else  class="pa-2 arka">
      <h3 class="white pa-4 rounded">Quiz Oyununa Hoşgeldiniz</h3>
    <v-btn class="mt-2" @click="start">Başla</v-btn>

    </div>

  </div>
</template>

<script>
export default {
  name: "game",
  data(){
    return{
      count:0,
      randomNumbers:0,
      time:30,
      highScore:localStorage.getItem('highScore'),
      scoreColor:false,
      isWindow:false,
      isOver:false
    }
  },
  props:{
    data:{
      type:Object,
      default:()=>{}
    }
  },
  methods:{
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
        this.count+=10

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
        let highScore=localStorage.getItem('highScore')
        if(highScore ===null){
           localStorage.setItem('highScore',this.count)
          console.log('ilk kkayıt')
        }

        if(this.count>highScore){
          localStorage.setItem('highScore' ,this.count)
          this.scoreColor=true
        }

      }
      else{
        let bet = new Audio('/sistemSound/yanlis1.mp3')
        bet.pause()
        bet.play();
        const qq=document.querySelector('.color'+index)
        qq.classList.add('false')


      }

    },
    start(){

      this.isWindow=true
      setTimeout( ()=>{
        let sound=this.data[this.randomNumbers].sound
        let bets = new Audio(sound)
        bets.pause()
        bets.play();
      },300)
      var txt;
      setInterval(()=>{
        if( this.time>0){
          this.time--
          if(this.time===0){
             this.isOver=true
          }
        }
      },1000)

    },
    trying(){
      this.isOver=false
      window.location.reload()
    },
    exits(){
     this.$router.push('/')
    }
  },

mounted() {


},
computed:{
    score(){
    return  localStorage.getItem('highScore')
    }
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
.arka{
  width: 100%;
  height: 100%;
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/89a9d56564505.560c3757ab074.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.game-over{
  width: 80%;
  height: 90%;
  background-image: url("https://cdn.create.vista.com/api/media/small/472078824/stock-photo-game-word-red-background");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: column;
  border-radius: 5px;

}
</style>
