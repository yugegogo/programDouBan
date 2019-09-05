<template>
    <div>
        <div id="ss" class="container">
            <span  id='close' @click="close()">关闭</span>
            <input v-if="inputstate" autofocus @blur="transb()" type="text" v-model="inputvalue">
            <p @click="transa()" v-else><span>放大镜</span></p>
        </div>
       <ul>
           <li v-for="(v,i) in routerLista" :key='i'>
               <router-link :to="v.for">
                   <b :style="{color:v.color}">{{v.item}}</b>
                   <span>{{v.describe}}</span>
                </router-link>
           </li>
       </ul>
       <div id="ff">
           <p> 
               <router-link to="/zhuce">注册账号</router-link>
               <router-link to="/login">登录豆瓣</router-link>
           </p>
           <p>
               <router-link to="/pc">使用桌面版</router-link>
               <router-link to="/app">使用豆瓣App</router-link>
            </p>
       </div>

    </div>
    
</template>
<script>
export default {
    data(){
        return{
           inputstate:false,
           inputvalue:'',
           routerLista:[
               {item:"电影",describe:"影院热映",for:"/movie",color:"#2384e8"},
               {item:"电视",describe:"正在热播",for:"/dianshi",color:"#8e6add"},
               {item:"图书",describe:"畅销排行",for:"/books",color:"#9f7860"},
               {item:"同城",describe:"周末活动",for:"/city",color:"#e6467e"},
               {item:"小组",describe:"志趣相投",for:"/team",color:"#2ab8cc"},
               {item:"音乐",describe:"新碟榜",for:"/music",color:"#f48f2e"},
               {item:"阅读",describe:"电子书",for:"/read",color:"#9f7860"},
               {item:"游戏",describe:"虚拟世界",for:"/games",color:"#5774c5"},
               {item:"应用",describe:"玩手机",for:"/app",color:"#596cdd"},
               {item:"东西",describe:"心爱之物",for:"/hobby",color:"#e5644d"},
               {item:"FM",describe:"红心歌单",for:"/audio",color:"#40cfa9"},
               {item:"市集",describe:"购买原创",for:"/shopping",color:"#42bd56"}
               ]
        }
    },
    methods:{
        close(){
            this.$router.go(-1);
        },
        transa(){
            this.inputstate=true;
        },
        transb(){
           if(this.inputvalue==''){
               this.inputstate=false;
           }else{
               this.inputstate=true;
           }
        }
    }

    
}
</script>
<style scoped>
#ss{
    width:100%;
    height:0.49rem;
    line-height:0.49rem;
    border-bottom:1px solid #e3e3e3;
    display:flex;
}
#close{
    font-size:0.16rem;
    color:#42bd56;
}
#ss p,input{
    width:2.97rem;
    height:0.32rem;
    line-height:0.32rem;
    background: #f3f3f3;
    margin-top:0.08rem;
    color:#aeaeae;
    font-size:0.16rem;
    text-align:center;
    margin-left:0.1rem;
    border:none;
    border-radius: 0.03rem;
}
input{
    color:black;
    font-size:0.14rem;
}
ul{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    text-align:center;
    margin:0.1rem auto;
}
li{
    flex:33.3%;
}
li a{
    display: block;
    cursor:pointer;
    width:0.6rem;
    height:0.45rem;
    margin:0.15rem auto;
    text-decoration: none;
}
li b{
    font-size:0.24rem;
    line-height: 0;
    font-weight:100;
}
li span{
    display:block;
    font-size:0.12rem;
    color:#999999;
}
#ff{
    width:100%;
}
#ff p{
    display: flex;
    border-top:1px solid #f3f3f3;
    border-bottom:1px solid #f3f3f3;
    text-align:center;
}
#ff p:nth-of-type(2){
    border-top:none;
}
#ff p a{
    text-decoration: none;
    cursor:pointer;
    flex:1;
    color:#42bd56;
    font-size:0.14rem;
    display: inline-block;
    margin:0.1rem 0;
    border-right: 1px solid #e5e5e5;
}
#ff p a:nth-of-type(2){
    border-right:0;
}
</style>