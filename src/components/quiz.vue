<template>
        <div id="qtemp" class="temp">
                <div id="quizz" v-if="!show">
                    <div id="qhead">
                        <div class="qtext"><span id="qnumber">{{questionList[item].id}}</span><br>
                            <p id="qtext">{{questionList[item].qtext}}</p>
                        </div><br>
                        <hr>
                    </div>
                    <div id="choicebox" class="clearfix">
                        <div id="A" class="choice">
                            <p class="cnumber">A-</p>
                            <p class="ctext" @click="quiz(1)">{{questionList[item].choicea}}</p>
                        </div>
                        <div id="B" class="choice" >
                            <p class="cnumber">B-</p>
                            <p class="ctext" @click="quiz(2)">{{questionList[item].choiceb}}</p>
                        </div>
                        <div id="C" class="choice">
                            <p class="cnumber">C-</p>
                            <p class="ctext" @click="quiz(3)">{{questionList[item].choicec}}</p>
                        </div>
                        <div id="D" class="choice">
                            <p class="cnumber">D-</p>
                            <p class="ctext" @click="quiz(4)">{{questionList[item].choiced}}</p>
                        </div>
                    </div>
                </div>
                <div v-if="show" class="sonuc">
                    <h1>Sonuçlar</h1>
                    <p>Doğru cevap : {{answerRight}}</p>
                     <p>Yanlış cevap : {{answerErr}}</p>
                </div>

                
            </div>
</template>

<script>
import {eventBus} from '../main'
const STORAGE_KEY='quiz-storage'

export default {
    data(){
        return{
            questionList:[],
            selectedList:null,
            item:0,
            show:false,
            answerRight:0,
            answerErr:0,
            selected:null
        }
    },
    created(){
        eventBus.$on("questionAdded",(question)=>{
                
               if(this.questionList==null){
                   alert("Soru bitti")
               }else{
                   this.questionList.push(question);
                    localStorage.setItem(STORAGE_KEY,JSON.stringify(this.questionList))
                console.log(question)
               }
               
        }),
        this.questionList=JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    
    },
    methods:{
       removeItem(index){
           this.questionList.splice(index,1);
           localStorage.setItem(STORAGE_KEY,JSON.stringify(this.questionList))
       },
       quiz(choice){
           if(this.item < this.questionList.length-1){
             this.item++;
            // console.log(this.item + ' soru')
           }else{
               this.show=true
           }
           const answer =parseInt(this.questionList[this.item].answer);
          if(choice==answer){
              this.answerRight++;
          }else{
              this.answerErr++
          }
       }
       
    }
}
</script>