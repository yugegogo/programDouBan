<template>
    <div>
        <router-linka></router-linka>
        <div id="bb">
            <pheader title="影院热映" href="#"></pheader>
             <lunbo  :movieObj="objma"></lunbo>
             <pheader title="免费在线观影" href="#"></pheader>
            <lunbo  :movieObj="objmb"></lunbo>
             <pheader title="新片速递" href="#"></pheader>
            <lunbo   :movieObj="objmc"></lunbo>
            <pheader title="发现好电影" href="#"></pheader>
            <goodmovie :findgoodmovie='goodmovie'></goodmovie>
            <pheader title="分类浏览" href=""></pheader>
        </div>
       
    </div>
</template>
<script>
import routerLinka from"../components/routerLinka"
import lunbo from "../components/lunbo"
import pheader from "../components/pheader"
import goodmovie from "../components/goodmovie"
export default {
    data(){
        return{
            objma:[],
            objmb:[],
            objmc:[],
            goodmovie:[]
        }
    },
    components:{
        routerLinka,
        lunbo,
        pheader,
        goodmovie
    },
    created() {
        this.axios({
            method:"get",
            url:"/movie",
        }).then((ok)=>{
            this.objma=ok.data.movie[0];
            this.objmb=ok.data.movie[1];
            this.objmc=ok.data.movie[2];
        },(err)=>{
           
        }),
        this.axios({
            method:"get",
            url:"/findgoodmovie",
        }).then((ok)=>{
            console.log(ok.data);
            this.goodmovie=ok.data;
        },(err)=>{
            console.log(err) 
        })

    },
    
}
</script>
<style scoped>
#bb{
    margin-top:0.29rem;
}


</style>