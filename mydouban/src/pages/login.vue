<template>
    <div class="loginbox">
        <h5>
            <span @click="beback()">取消</span>
            登录豆瓣
        </h5>
        <div class="formaa">
                <div>
                    <input class="xy" type="text" placeholder="邮箱" v-model="email">
                </div>
                <div>
                    <input class="mima" v-model="psw" type="password"  placeholder="Token" v-if="!pswshow">
                    <input class="mima" v-model="psw" type="text" placeholder="Token" v-else>
                    <span class="see" @click="change()" :class="pswshow?'show2':'show1'">see</span>
                </div>
                <div>
                    <button @click="login()">登录</button>
                </div>
            
            <div class="footer">
                <p>使用其他方式登录&找回密码</p>
                <p>
                    <a href="http://localhost:8080/#/zhuce">注册豆瓣账号</a> 
                    <a href="#">下载豆瓣App</a>
                </p>
                <p class="thshi">{{timetxt}}</p>
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            psw:"",
            pswshow:false,
            email:'',
            timetxt:""
        }
    },
    methods:{
        beback(){
            this.$router.go(-1);
        },
        change(){
            this.pswshow=!this.pswshow;
        },
        login(){
            var params=new URLSearchParams();
            params.append("psw",this.psw);
            params.append("email",this.email);
            this.axios({
                method:"post",
                url:"http://localhost:3000/login",
                data:params
            }).then((ok)=>{
                console.log(ok);
                 if(ok.data.linkId==3){
                    var i=5;
                    setInterval(()=>{
                        i--;
                        if(i==0){
                            window.location.href="http://localhost:8080/#/shouye";
                        }
                       this.timetxt='登录成功，'+i+'秒后自动跳转到首页'

                    },1000)
                }else if(ok.data.linkId==2){
                    this.timetxt='登录失败，账号密码不匹配'
                }
            },(err)=>{
                this.timetxt='请求超时，请稍后再试'
            })
        }
        
    },
    

    
}
</script>
<style scoped>
h5{
    width:100%;
    height:0.3rem;
    font-size:0.16rem;
    line-height:0.3rem;
    text-align:center;
    position:relative;
    border-bottom:1px solid #eeeeee; 

}
h5 span{
    float:left;
    font-size:0.14rem;
    font-weight:100;
    color:#42bd56;
    position:absolute;
    left:0.11rem;
    cursor:pointer;
}
.loginbox{
    font-size:0;
}
.loginbox input{
    font-size: 0.14rem;
}
.formaa{
    width:2.3rem;
    height:0.84rem;
    margin:0 auto;
    padding-top: 0.18rem;
}
.form div{
    width:2.3rem;
    height:0.25rem;
    font-size:0;
}
.xy{
    width:2.3rem;
    height:0.25rem;
    box-sizing: border-box;
    outline: none;
    border:1px solid #cccccc;
    text-indent:0.05rem;
}
.mima{
    width:2.06rem;
    height:0.25rem;
    box-sizing: border-box;
    outline: none;
    border:1px solid #cccccc;
    border-right:none;
    border-top:none;
     text-indent:0.05rem;
}
.see{
   float:right;
    width:0.24rem;
    height:0.25rem;
    box-sizing: border-box;
    outline: none;
    border:1px solid #cccccc;
    border-left:none;
     border-top:none;
    font-size:0.1rem;
    color:#e5e5e5;
    line-height:0.25rem;
    text-align:center;
    cursor:pointer;
}
.show1{
     color:#e5e5e5;
}
.show2{
     color:#17aa52;
}
button{
    width:2.3rem;
    height:0.25rem;
    background:#17aa52;
   border-radius:4px;
    color:white;
    font-size:0.12rem;
    border:none;
    margin-top:0.06rem;
    cursor:pointer;
}
.footer{
     width:2.3rem;
    margin:0 auto;
    height:2.2rem;
    font-size:0.12rem;
    
}
 .footer p:nth-of-type(1){
     color:#aaaaaa;
     text-align:center;
     line-height:0.4rem;
 }
 .footer p:nth-of-type(2){
     display:flex;
     justify-content: space-between;
    padding-left:0.3rem;
     padding-right:0.3rem;
 }
 .footer p:nth-of-type(2) a{
     color:#42bd56;
 }
 .thshi{
        color:red;
        font-size:0.14rem;
        margin-top:0.2rem;
        text-align: center;
    
 }
 


</style>