<template>
    <div class="zhuces">
        <h1>欢迎加入豆瓣</h1>
        <input type="text" v-model="email" placeholder="邮箱" class="kuang">
        <br>
        <input type="password" v-model="psw" placeholder="密码" class="kuang">
        <br>
        <input type="text" v-model="uname" placeholder="用户名" class="kuang">
        <br>
        <input type="submit" @click="tijiao()" value="立即注册">
        <br>
        <span>点击「注册」代表你已阅读并同意用户使用协议</span>
        <br>
        <a href="#">下载豆瓣App</a>
        <p >{{ timetxt}}</p>
    </div>
</template>
<script>
export default {
    data(){
       return{
            email:'',
            psw:"",
            uname:"",
            timetxt:''
       }
    },
    methods:{
        tijiao(){
            this.axios({
                method:"get",
                url:"http://localhost:3000/zhuce",
                params:{
                    email:this.email,
                    psw:this.psw,
                    uname:this.uname
                },
                // before(request){
                //     alert("hhh")
                //     this.timetxt=<img src="../../static/img/waiting.gif"/>;
                // }
            }).then((ok)=>{
                console.log(ok.data)
                if(ok.data.linkId==1){
                     this.timetxt='注册成功'
                        var i=5;
                    setInterval(()=>{
                        i--;
                        if(i==0){
                           window.location.href="http://localhost:8080/#/login";
                        }
                        this.timetxt=i+'秒后自动跳转到登录页'
                    },1000) 
                }else if(ok.data.linkId==0){
                    this.timetxt='注册失败'
                }else if(ok.data.linkId==5){
                    this.timetxt='注册失败，该邮箱已被使用，请登录或重新注册'
                }
            },(err)=>{
                this.timetxt='请求超时，请稍后再试'
            })
        }
    }
    
}
</script>
<style scoped>
    .zhuces{
        text-align:center;
    }
    .zhuces h1{
        color:green;
        margin-bottom:0.4rem;
        padding-top:0.5rem;
        font-weight:100;
    }
    .kuang{
        width:3.45rem;
        height:44px;
        text-indent:10px;
    }
    input:nth-of-type(4){
        width:3.48rem;
        height:45px;
        margin-left:-5px;
        margin-top:0.3rem;
        color:white;
        background:#17aa52;
        border:none;
        border-radius:3px;
        cursor:pointer;
    }
    span{
        color:gray;
        font-size:0.14rem;
    }
    a{
        color:green;
        font-size:0.16rem;
    }
    p{
        color:red;
        font-size:0.14rem;
        margin-top:0.2rem;
    }
</style>
