<template>
    <v-card width="100%" class="nav-content">
       <h2 class="pa-2 text-center ">Elifba öğrenme </h2>

       <div class="btn-group">
          <div class="btn-content">
            <v-btn class="categori" active-class="active" text :to='item.path' v-for="item in listData" @click="btnClikced(item)">
              {{ item.name}}
            </v-btn>
          </div>
       </div>

       <div class="sub-categori">
          <div class="sub-categori-content">
              <v-btn active-class="active" :to="item.path" class="link"  text v-for="item in subTitle">
                {{item.name}}
              </v-btn>
          </div>
       </div>

    </v-card>
</template>

<script>
import apiRouter from '@/constant/apiRouter'
export default {
  name: "nav-bar",
  data(){
    return{
     subTitle:null
    }
  },
  computed:{
    listData(){
      return apiRouter
    }
  },
  methods:{
    btnClikced(item){
     let nav= document.querySelector('.nav-content')
      nav.classList.remove('red','pink','teal','deep-orange')
      nav.classList.add(item.color)
      this.subTitle=item.subTitle
    },
  }
}
</script>

<style scoped>
.active{
background-color: grey !important;
}
.categori{
  background-color: rgba(128, 128, 128, 0.7);
}
.link{
  padding: 5px 8px;
  background-color: rgba(191, 201, 200, 0.44);
  color: white;
  border-radius: 20px;
  text-decoration: none;
}
.nav-content{
  background-color: blue;
  position: relative;
}
.sub-categori{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-self: flex-end;
  background-color: rgba(191, 201, 200, 0.35);
}
.sub-categori-content{
  width: 600px;
  gap: 5px;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
}

.btn-group{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
}
.btn-content{
  display: flex;
  overflow-y: auto;
}

@media only screen and (max-width: 600px) {
  .sub-categori-content{
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    width: 100%;
    overflow-y: auto;

  }
}

</style>
