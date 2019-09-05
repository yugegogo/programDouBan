<template>
    <div>
        <a id="box" class="container" href="#" v-for="(v,i) in itemObj" :key='i'>
            <div id="innerbox">
                <div id="itema">
                    <h4>{{v.title}}</h4>
                    <p v-html='v.content'></p>
                </div>
                <div id="itemb">
                    <img :src="v.image" :alt="v.alt">
                </div>
            </div>
        <div id="blow">
            <span id="label">{{v.category_name}}</span>
            <span id="from" v-if="v.subcategory_name">本活动来自栏目&nbsp;<span>{{v.subcategory_name}}</span></span>
        </div>
        </a>
    </div>
</template>
<script>
export default {
    props:{
        itemObj:{
            type:Array,
            required:true
        }
    },
    methods:{
        
    }
}
</script>
<style  scoped>
#box{
    margin:0 auto;
    text-decoration: none;
    display: block;
    padding:0.25rem 0.1rem;
    border-bottom:1px solid #e3e3e3;
    cursor:pointer;
}
#innerbox{
    display:flex;
    margin-bottom:0.25rem;
}
#itema{
    float:left;
    width:3.05rem;
    margin-right:0.1rem;
   
}
#itemb{
    width:1.18rem;
    height:1.05rem;
    float:right;
    width:1.16rem;
}
#itema h4{
    width:2.3rem;
    height:0.5rem;
    line-height:0.2rem;
    font-size:0.16rem;
    color:#494949;
}
#itema p{
    width:2.3rem;
    height:0.36rem;
    line-height:0.18rem;
    font-size:0.12rem;
    color:#aaaaaa;
    margin-top:0.2rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}

#blow{
    width:100%;
    height:0.12rem;
    line-height: 0.12rem;
    font-size:0.12rem;
    color:#cccccc;
}
#label{
    float:left;
    width:2.04rem;
}
#from{
    float:right;
    width:1.5rem;
}


#itema span{
    line-height:0.14rem;
    font-size:0.14rem;
    color:#aaaaaa;
    
}
#itemb img{
    width:1.16rem;
    height:1.05rem;
}
#itemb span{
    line-height:0;
    font-size:0.14rem;
    color:#aaaaaa;

}
</style>