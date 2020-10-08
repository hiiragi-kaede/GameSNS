<style>
    /* .myheader{
        background-color:powderblue;
    } */
    .headertext{
        color:white;
         text-shadow:  2px  2px 5px #777 ,
               -2px  2px 5px #777 ,
                2px -2px 5px #777 ,
               -2px -2px 5px #777;
    }

    ul.menu{
        display: table;
        table-layout: fixed;
        width: 400px;
        padding-bottom: 10px;
    }
    ul.menu li{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        background-color: powderblue;
        border-left: 2px solid white;
    }
    ul.menu li a{
        display: block;
        text-decoration: none;
        color: white;
    }
</style>

<template>
    <div class="myheader">
        <ul class="menu">
            <li><a href="#">HOME</a></li>
            <li><a href="#">USER</a></li>
            <li><a href="#">FRIEND</a></li>
            <li><a href="#">SEARCH</a></li>
            <li><a href="#">LOGOUT</a></li>
        </ul>
    </div>
</template>

