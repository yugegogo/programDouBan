// 1.创建服务器
var express=require("express");
var app=express();
var crypto=require("crypto");
var mongoose=require("mongoose");

var bodyParser=require("body-parser");//要下载
var uE=bodyParser.urlencoded({extended:false});
var session=require("express-session");//要下载
var path=require("path");
var jwt=require("jsonwebtoken");

// 2.解决跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
})
app.use(session({
    secret: '666666',//设置签名密钥 内容可以任意填写
    cookie: {maxAge: 80*1000 },//设置cookie的过期时间 例：80s后session和相应的cookie失效过期
    resave: true,//强制保存  如果session没有被修改也要重新保存
    saveUninitialized: false//如果原先没有session那么就设置 否则不设置
}));
// 5.定义类
var dbCollection=mongoose.model("usermsgs",{
    uname:String,
    psw:String,
    email:String
})
app.get("/zhuce",function(req,res){
    // 3.获取前端数据
    var uname=req.query.uname;
    var psw=req.query.psw;
    var newpsw=crypto.createHash('md5').update(psw).digest('hex');
    var email=req.query.email;
    // 4.建立连接
    mongoose.connect("mongodb://localhost:27017/mydoubans",{useNewUrlParser:true},function(err){
        if(err){
            console.log("连接失败")
        }else{
            // 6.创建实例
            console.log("连接成功");
            var doc1=new dbCollection({
                uname:uname,
                psw:newpsw,
                email:email
            })
            //7.验证用户名是否已经存在+注册
            dbCollection.find({ email:email}).then((ok)=>{
                if(ok.length>0){
                    res.send({mes:"注册失败，该邮箱已被使用",status:500,linkId:5});
                }else if(ok.length==0){
                    doc1.save().then((ok)=>{
                        res.send({mes:"注册成功",status:200,linkId:1});
                    },(err)=>{
                        res.send({mes:"注册失败",status:200,linkId:0});
                    })
                }
                },(err)=>{
                    res.send({mes:"请求超时，请稍后再试",status:500,linkId:4});
                })
        }
    })
});
//8.登录验证
app.post("/login",uE,function(req,res){
    var email=req.body.email;
    var psw=req.body.psw;
    var newpsw=crypto.createHash('md5').update(psw).digest('hex');
    mongoose.connect("mongodb://localhost:27017/mydoubans",{useNewUrlParser:true},function(err){
       if(err){
           console.log("数据库连接失败")
       }else{
        dbCollection.find({email:email,psw:newpsw}).then((ok)=>{
            if(ok.length>0){
                //存储用户信息
                req.session.email=email;
                req.session.loginok=true;
                res.send({mes:"登录成功",status:200,linkId:3,session:req.session});
            }else if(ok.length==0){
                res.send({mes:"登录失败",status:200,linkId:2});
            }
            },(err)=>{
                res.send({mes:"请求超时，请稍后再试",status:500,linkId:4});
            })
        }
    })

       
})

//首页
app.get("/shouye",function(req,res){
    console.log(req.session);
    if(req.session.loginok=true){
        res.send({mes:"用户已登录",status:200,linkId:5,uname:req.session.uname})
    }else{
        res.send({mes:"用户未登录",status:500,linkId:6})
    }
})
app.listen(3000)