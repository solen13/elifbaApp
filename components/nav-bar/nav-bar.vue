<template>
<v-card  :class="color">

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
     subTitle:null,
      color:null
    }
  },
  computed:{
    listData(){
      return apiRouter
    }
  },
  methods:{
    btnClikced(item){
      this.color=item.color
      this.subTitle=item.subTitle
    },
  },
  mounted() {
    const lesson=this.$route.params.lessons
   const subCategory= apiRouter.find(el=>el.route===lesson)
    console.log(subCategory)
    this.subTitle=subCategory.subTitle
    this.color=subCategory.color

  }
}
</script>

<style scoped>
.active{
background-color: grey !important;
}
.categori{
  background-color: rgba(128, 128, 128, 0.29);
  color: white;
}
.link{
  padding: 5px 8px;
  background-color: rgba(191, 201, 200, 0.44);
  color: white;
  border-radius: 20px;
  text-decoration: none;
}

.sub-categori{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  background-color: rgba(191, 201, 200, 0.22);
}
.sub-categori-content{
  width: 85%;
  gap: 5px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}

.btn-group{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
