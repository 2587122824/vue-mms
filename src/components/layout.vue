<template>
    <div>
        <app-header></app-header>
        <app-navbar></app-navbar>
        <app-main></app-main>
    </div>
</template>

<script>
import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';
import AppMain from './AppMain';
export default {
    components:{
        AppHeader,
        AppNavbar,
        AppMain
    }
}
</script>

<style scoped>
    .header{
        position: absolute;
        line-height: 50px;
        background-color:gainsboro;
        top: 0;
        left: 0;
        right: 0;
    }
    .navbar{
        position: absolute;
        width: 230px;
        background-color: skyblue;
        top: 50px;
        left: 0px;
        bottom: 0px;
        overflow: auto;
    }
    .main{
        position: absolute;
        top: 50px;
        left: 230px;
        right: 0px;
        bottom: 0px;
        padding: 10px;
        background-color: whitesmoke;
    }
</style>