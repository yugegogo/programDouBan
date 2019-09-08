<template>
    <div>
        <router-linka></router-linka>
        <div id="bb">
            <pheader title="最受关注图书|虚构类" href="#"></pheader>
             <lunbo  :movieObj="objm[0]"></lunbo>
             <pheader title="最受关注图书|非虚构类" href="#"></pheader>
            <lunbo  :movieObj="objm[1]"></lunbo>
             <pheader title="豆瓣纸书" href="#"></pheader>
            <lunbo   :movieObj="objm[2]"></lunbo>
            <pheader title="发现好书" href="#"></pheader>
            <goodmovie :findgoodmovie='goodbook'></goodmovie>
            <pheader title="分类浏览" href=""></pheader>
            <liulan :objfl="objfenlei"></liulan>
            <foot></foot>
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


export default {
    data(){
        return{
            objm:[],
            goodbook:[],
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
        foot
    },
    created() {
        this.axios({
            method:"get",
            url:"/movie",
        }).then((ok)=>{
            this.objm=ok.data.movie;
             console.log(this.objm)
        },(err)=>{
           
        }),
        this.axios({
            method:"get",
            url:"/goodbook",
        }).then((ok)=>{
            console.log(ok)
            this.goodbook=ok.data;
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