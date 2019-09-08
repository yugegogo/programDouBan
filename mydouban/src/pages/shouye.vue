<template>
        <div id="box">
            <div id="header">
                <router-linka></router-linka>
            </div>
            <div id="bb">
                <router-linkc></router-linkc>
                <waiting v-if="objMovie.length==0"></waiting>
                 <movie-items v-else :itemObj="objMovie"></movie-items>
            </div>
        </div>
</template>
<script>
import routerLinkc from "../components/routerLinkc"
import routerLinka from "../components/routerLinka"
import movieItems from "../components/movieItems"
import waiting from "../components/waiting"


export default {
    data(){
        return{
            objMovie:[]
        }
    },
    components:{
        routerLinka,
        routerLinkc,
        movieItems,
        waiting
    },
    created(){
         //判断是否登录
        // this.axios({
        //         method:"get",
        //         url:"http://localhost:3000/shouye",
        //     }).then((ok)=>{
        //         if(ok.data.linkId==5){
        //             alert("欢迎您"+ok.data.email);
        //         }else if(ok.data.linkId==6){
        //             alert("此页面需要登录后浏览")
        //             location.href="http://localhost:8080/#/login";
        //         }
        //     },(err)=>{
        //          alert("请求超时，请稍后再试")
        //     })
        //请求数据渲染页面
        this.axios({
            method:"get",
            url:"/shouye",
        }).then((ok)=>{
            console.log(ok.data);
            this.objMovie=ok.data;
            
        },(err)=>{
            console.log(err)
             alert("请求超时，请稍后再试")
        })
    }


    
    
}
</script>
<style scoped>
#bb{
    margin-top:0.8rem;
}


</style>