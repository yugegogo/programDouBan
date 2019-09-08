<template>
<ul>
    <li>
        <div id="box1">
            <img src="../../static/img/logo.png">
            <div>
                <p><b>豆瓣</b>写了日记</p>
                <p>2017-03-01 19:30:41</p>
            </div>
        </div>
        <div id="box2">
            <h4>c豆瓣App 4.12.0 主要更新</h4>
            <p> - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
        </div>
        <div id="box3">
            <p>
                <span class="el-icon-thumb" @click="add(1)">{{sum1}}</span>
                <span class="el-icon-chat-square"  @click="add(2)">{{sum2}}</span>
                <span class="el-icon-position"  @click="add(3)">{{sum3}}</span>
            </p>
            <span class="el-icon-more"></span>
        </div>
    </li>

</ul>
        
</template>
<script>
export default {
    data(){
        return{
            sum1:0,
            sum2:0,
            sum3:0
        }
    },
    methods:{
        add(i){
            if(i==1){
                this.sum1=this.sum1+1
            }else if(i==2){
                this.sum2=this.sum2+1
            }else if(i==3){
                this.sum3=this.sum3+1
            }

        }
    }
    
    
}
</script>
<style  scoped>
 ul li{
    width:100%;
    text-decoration: none;
    /* margin:0.1rem; */
    border-bottom: 1px solid #d8d8d8;
}
img{
    width:0.4rem;
    height:0.4rem;
    border-radius: 50%;
}
#box1{
   overflow: hidden;
}
#box1 img{
    float:left;
}
#box1 div{
    margin-left:0.1rem;
    float:left;
    line-height: 0.2rem;
    font-size:0.16rem;
    color:#aaaaaa;
}
#box1 b{
    color:#494949;
}
#box2{
    margin:0.1rem 0  0;
    padding: 0.1rem;
    border-radius: 0.03rem;
    border: 1px solid #d8d8d8;
}

#box2 h4{
    font-size:0.16rem;
    margin-bottom:0.1rem;
}
#box2 p{
    font-size:0.12rem;
    color:#aaaaaa;
}
#box3{
    font-size:0.12rem;
    color:#000000;
    display: flex;
    justify-content: space-between;
}
#box3 p{
    display:flex;
}
#box3 p span{
    margin:0.1rem;
}

</style>