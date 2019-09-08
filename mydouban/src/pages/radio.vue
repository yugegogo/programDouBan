<template>
    <div class="box">
        <div id="header">
            <router-linka></router-linka>
        </div>
        <div id="bb">
            <openapp></openapp>
            <loginplease></loginplease>
            <diary></diary>
            <diary></diary>
            <diary></diary>
                <foot></foot>


        </div>

    </div>
</template>
<script>
import routerLinka from "../components/routerLinka"
import openapp from "../components/openapp"
import loginplease from "../components/loginplease"
import diary from "../components/diary"
import foot from "../components/foot"



export default {
    components:{
        routerLinka,
        openapp,
        loginplease,
        diary,
        foot
    }
    
}
</script>
<style  scoped>
#bb{
    margin-top:0.58rem;
}

</style>