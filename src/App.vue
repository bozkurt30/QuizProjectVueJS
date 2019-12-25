<template>
    <div class="container">
        <app-header></app-header>
       <transition name="slideContainer" mode="out-in" appear>
            <router-view></router-view>
         </transition>
    </div>
</template>
<script>
import Header from './components/Header' 
export default {
    components:{
        appHeader:Header
    }
}
</script>
<style>

/*.slideContainer-enter{}*/
.slideContainer-enter-active{
    animation: slide-in .7s ease-out forwards
}
/*.slideContainer-leave{}*/
.slideContainer-leave-active{
    animation: slide-out .5s ease-out forwards
}

@keyframes slide-in{
    from{
        transform: translateY(-1000px)
    }
    to{
transform: translateX(0px)
    }
}
@keyframes slide-out{
    from{
        transform: translateY(0px)
    }
    to{
transform: translateX(1000px)
    }
}


/*
:root {
    --baslikFont: font-family: 'Josefin Sans', sans-serif;
    --icerikFont: 'Indie Flower', cursive;
    --bcolor: #f9f9f9;
    --akrem: #f0decb;
    --apembe: #ffb5b5;
    --kpembe: #ce2e6c;
    --gri: #504658;
}
*/
* {
    /*font-family: 'Dosis', sans-serif;
      font-family: 'Josefin Sans', sans-serif;*/
    margin: 0;
    padding: 0;
    box-sizing: border-box;


}
.arkaplan{
    background-color: #ffb5b5;
    height: auto
}
body {
    font-family: 'Indie Flower', cursive;;
    font-size: 22px;
    background-color:#f9f9f9;
    letter-spacing: 1px;
    color: #504658;
}

h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    color: #f0decb;
    padding: 10px;
}

h3 {
    font-family: 'Josefin Sans', sans-serif;;
    font-size: 18px;
    color: #504658;
    padding: 2px;
}

p {

    font-weight: 400;
}

li {
    list-style: none;
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}
/**responsşve */
@media (min-width:768px) {
    .appbox {
        max-width: 720px;

    }

    html {
        font-size: 8px;
    }
}

@media (min-width:992px) {
    .appbox {
        max-width: 960px;
    }

    html {
        font-size: 10px;
    }
}

@media (min-width:1200px) {
    .appbox {

        max-width: 1140px;
    }

    html {
        font-size: 12px;
    }
}

th {
    font-size: 18px;

}

i {
    padding-right: 2px;
}

input {
    background-color: #f0decb;
    padding: 4px 12px;
    border: 2px solid #504658;
    border-radius: 4px;
    resize: none;
    text-align: left;
    outline: #ce2e6c;
    transition: 0.4s;
}

input:focus {
    border: 2px solid #ce2e6c;
}

label {
    font-size: 14px;
    font-weight: 600;
    padding: 5px;
}

hr {
    border: 1px dotted #f0decb
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.hide {
    display: none;
}

.green {
    /* background-color: greenyellow;*/
    text-decoration: underline wavy greenyellow;
}

.red {

    color: #f0decb;
    background-color: #ce2e6c;
}

/*Alert*/
#alert {
    text-align: center;
    width: 60%;
    left:20%;
    padding: 20px;
    border: 2px solid #ce2e6c;
    box-shadow: 10px 8px 6px #504658;
    background-color: #f9f9f9;
    border-radius: 5px;
    font-size: 17px;
    letter-spacing: 2px;
    position: fixed;
}


.danger {

    text-decoration: double line-through #ce2e6c;
    border: 2px solid #504658;
}

.success {
    text-decoration: double underline yellowgreen;
    border: 2px solid greenyellow;
}

.warning {
    color: red;
    text-decoration: double overline #f0decb;
    border: 2px solid #f0decb;
}

/*Aplication Box-Content&Tabs*/
.appbox {
    text-align: center;
    background-color: #ce2e6c;
    width: 60%;
    margin: 20px auto;
    padding: 20px;
    border: 2px solid #ce2e6c;
    box-shadow: 10px 8px 6px #504658;
}

/* BUTTONS*/
.btn {
    font-size: 22px;
    border-radius: 1px;
    transition: 0.4s;
    cursor: pointer;
    outline: 0;
}

.btndelete {
    float: right;
    background-color: #ce2e6c;
    border: 2px solid #ce2e6c;
    color: #f0decb;
    padding: 2px 4px;
    font-size: 18px;
}

.btndelete:hover {

    color: #504658;


}

.eklebtn {
    float: right;
    background-color: #ffb5b5;
    border: 2px solid #ffb5b5;
    color: #504658;
    padding: 2px 4px;
    font-size: 18px;
}

.eklebtn:hover {
    background-color: #ffb5b5;
    border: 2px solid #504658;
    color: #f0decb;


}
/**responsive2 */
@media (max-width:992px) {

    .startbtn,
    .finishbtn {
        width: 20%;
        padding: .2rem .4rem;
        font-size: 1.5rem;
        transition: 0.4s;
    }

    .eklebtn {
        padding: .1rem .2rem;
        font-size: 1.5rem;
    }

}

@media (max-width:660px) {

    .startbtn,
    .finishbtn {
        width: 20%;
        padding: .1rem .2rem;
        font-size: 1rem;
        transition: 0.4s;
    }

    .eklebtn {
        padding: .1rem .1rem;
        font-size: 1.2rem;
    }


    table tr {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: 1rem;
    }

    table thead {
        display: none;
        border: none;
    }

    .data {
        font-size: 1.4rem;
        word-wrap: break-word
    }

    table td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 2rem;
        text-align: center;
    }

    table td::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
    }

    table td:last-child {
        border-bottom: 0;
    }

    .tr-hidden:not(:first-child) {
        display: none;

    }

}

.startbtn, .finishbtn {
    width: 20%;
    margin-top: 30px;
    background-color: darkcyan;
    border: 2px solid white;
    color: #504658;
    padding: 15px;
    transition: 0.4s;
}

.startbtn:hover,.finishbtn:hover {
    background-color:rgb(76, 92, 126);
    border: 2px solid #504658;
    color: greenyellow;


}


.btntab {
    background-color: #ce2e6c;
    padding-left: 5px;
    border: none;
    border-left: 1px solid #f0decb;
    color: #f0decb;
}
.hidden {
    display: none;
}

#menu-hidden {
    display: none;
}


/**respo3 */
@media (max-width:992px) {
    .btntab {
        width: 100%;
        border-left: none;
        display: none;
    }

    #menu-hidden {
        display: flex;
        
        border-left: none;
    }


    .btntab.responsive:not(#menu-hidden) {
        display: block;
        font-size: 1.6rem;
        float: none;
        padding: .5rem;
        letter-spacing: 2px;
        background-color: var(--bcolor);
        border: 1px solid black;
        color: var(--gri);
    }
    .menu:not(#menu-hidden){
        position: absolute;
        width: 20%;
        text-align: left;
    }

}

@media (max-width:660px) {
   
    .btntab.responsive:not(#menu-hidden) {
        display: block;
        font-size: 1.2rem;
        float: none;
        padding: .5rem;
        letter-spacing: 1px;
    }
}

.btntab:hover {

    border-left: 1px solid #504658;
    color: #504658;
}

#delete {
    float: right;
    padding-right: 5px;

}

#trash {

    padding-left: 5px;

}

/*TABS - TABS-CONTENT*/
#tabs {
    width: 100%;
    text-align: left;
}

#tabscontent {
    width: 100%
}


/*QTEMP*/

.temp {
    background-color: lightseagreen;
    border: 1px dotted #f0decb;
    padding: 10px;
    text-align: left;
}
#qtemp{
    text-align: center;
}
#qhead {
    padding: 5px;
}


.qtext {
    color: #504658
}
.qtext {
  
        text-align: left;
   
}
#choicebox {
    margin-top: 10px;
    width: 100%;
}

.choice {
    border: solid 2px #ffb5b5;
    cursor: pointer;
    float: left;
    width: 24%;
    margin-right: 1%;
    transition: 0.2s;
}
/**respo4 */
@media (max-width:992px) {
    .choice {
        width: 49%;

    }

    .choicetr:not(:last-child) {
        width: 85%;
    }

    .choicetr:not(:first-child) {
        width: 13%;
    }

    .td-item {
        display: flex;
        padding: 1.5rem;
    }

    .radio {
        margin-top: .5rem;
    }

    #choicebox p {
        font-size: 1.8rem;
    }

    #qtext {
        font-size: 1.8rem;
    }

    .hidden {
        display: none;
    }
}

@media (max-width:660px) {
    .choice {
        width: 100%;
        margin-right: 0rem;
    }

    .choicetr {
        width: 100%;
        float: right;
    }

    .td-item {
        display: flex;
        padding: .6rem;
        width: 100%;
        float: right;
    }

    .ans {
        display: none;
    }

    .radio {
        margin-top: .3rem;
    }

    #choicebox p {
        font-size: 1.4rem;
    }

    #qtext {
        font-size: 1.4rem;
    }

    label {
        font-size: 1rem;
    }

    .choicetr {
        border: none;
    }
}


.choice:hover {

    color: #ce2e6c;
    border: solid 2px #ce2e6c;


}

.choice:active {
    color: greenyellow;
}

.choice p {

    font-size: 22px;
}

.cnumber {
    font-weight: 800;

    float: left;
    margin-right: 5px;
}




/*QLIST*/

#qlisttable,
#qlisttable tr,
#qlisttable th,
#qlisttable td {
    border: 1px solid #504658;
    padding: 2px;
}

#qtable {
    font-size: medium;
    cursor: pointer;
    width: 100%;

}
/**respo5 */


.listitem:hover {

    background-color: #f0decb;
    color: #ce2e6c;
}

.listitem td:last-child {
    text-align: center;
}

.listtable td {
    padding: 5px;
}



/*QADD*/
.element {
    width: 100%;
    padding: 8px 2px;


}

.choicetable {
    width: 100%;
    text-align: center;
}

.choicetr td {
    padding-right: 2px;
    border: none;
    font-size: 14px;
    font-weight: 600;
}

.choices {
    width: 100%;
    font-size: 12px;
    color: #504658;
    margin: 5.2px;
}


#qnumberinput {
    width: 20%;
}

#qtextinput {

    width: 100%;
    height: 75px;
}



</style>