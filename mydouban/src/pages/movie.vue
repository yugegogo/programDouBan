<template>
    <div>
        <router-linka></router-linka>
        <div id="bb">
             <waiting v-if="objm.length<=0"></waiting>
            <div v-else>
                <pheader title="影院热映" href="#"></pheader>
                <lunbo  :movieObj="objm[0]"></lunbo>
                <pheader title="免费在线观影" href="#"></pheader>
                <lunbo  :movieObj="objm[1]"></lunbo>
                <pheader title="新片速递" href="#"></pheader>
                <lunbo   :movieObj="objm[2]"></lunbo>
                <pheader title="发现好电影" href="#"></pheader>
                <goodmovie :findgoodmovie='goodmovie'></goodmovie>
                <pheader title="分类浏览" href=""></pheader>
                <liulan :objfl="objfenlei"></liulan>
                <foot></foot>
            </div>
        </div>
       
    </div>
</template>
<script>
import routerLinka from"../components/routerLinka"
import lunbo from "../components/lunbo"
import pheader from "../components/pheader"
import goodmovie from "../components/goodmovie"
import liulan from "../components/liulan"
import foot from "../components/foot"
import waiting from "../components/waiting"


export default {
    data(){
        return{
            objm:[],
            goodmovie:[],
            objfenlei:[
                {wz:"经典"},
                {wz:"冷门佳片"},
                {wz:"豆瓣高分"},
                {wz:"动作"},
                {wz:"喜剧"},
                {wz:"爱情"},
                {wz:"悬疑"},
                 {wz:"恐怖"},
                 {wz:"科幻"},
                 {wz:"治愈"}, 
                 {wz:"文艺"},
                {wz:"成长"}, 
                 {wz:"动画"}, 
                  {wz:"华语"}, 
                 {wz:"欧美"},  
                 {wz:"韩国"},
                 {wz:"日本"}
            ]

        }
    },
    components:{
        routerLinka,
        lunbo,
        pheader,
        goodmovie,
        liulan,
        foot,
        waiting
    },
    created() {
        this.axios({
            method:"get",
            url:"/movie",
        }).then((ok)=>{
            this.objm=ok.data.movie;
        },(err)=>{
           
        }),
        this.axios({
            method:"get",
            url:"/findgoodmovie",
        }).then((ok)=>{
            this.goodmovie=ok.data;
        },(err)=>{
            console.log(err) 
        })

    },
    
}
</script>
<style scoped>
#bb{
    margin-top:0.58rem;
}


</style>