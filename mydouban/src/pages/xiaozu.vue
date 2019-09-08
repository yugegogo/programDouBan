<template>
    <div >
            <div id="header">
                <router-linka></router-linka>
            </div>
            <div id="bb">
                <loginplease></loginplease>
                <group-item title="租房找室友" more="更多相关小组" :houseobj="itemobja"></group-item>
                <group-item title="来聊五块钱" more="来聊五块钱" :houseobj="itemobjb"></group-item>
                <group-item title="买买买" more="更多相关小组" :houseobj="itemobjc"></group-item>
                <foot></foot>
            </div>
    </div>
</template>
<script>
import routerLinka from "../components/routerLinka"
import loginplease from "../components/loginplease"
import groupItem from "../components/groupItem"
import foot from "../components/foot"
export default {
    components:{
        routerLinka,
        loginplease,
        groupItem,
        foot
    },
    data(){
        return{
            itemobja:[],
            itemobjb:[],
            itemobjc:[],
        }
    },
    created(){
       this.axios({
            method:"get",
            url:"/xiaozua",
        }).then((ok)=>{
            console.log(ok.data);
            this.itemobja=ok.data;
        },(err)=>{
            console.log(err)
             alert("请求超时，请稍后再试")
        }),
         this.axios({
            method:"get",
            url:"/xiaozub",
        }).then((ok)=>{
            console.log(ok.data);
            this.itemobjb=ok.data;
        },(err)=>{
            console.log(err)
             alert("请求超时，请稍后再试")
        }),
         this.axios({
            method:"get",
            url:"/xiaozuc",
        }).then((ok)=>{
            console.log(ok.data);
            this.itemobjc=ok.data;
        },(err)=>{
            console.log(err)
             alert("请求超时，请稍后再试")
        })
    }
    
}
</script>
<style  scoped>
#bb{
    margin-top:0.58rem;
}


</style>