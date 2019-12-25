<template>
   
  <div id="qlist" class="temp">
                <table id="qlisttable">
                    <thead>
                        <tr>
                            <th>
                                <h3>ID</h3>
                            </th>
                            <th>
                                <h3>Soru</h3>
                            </th>
                            <th>
                                <h3>A-</h3>
                            </th>
                            <th>
                                <h3>B-</h3>
                            </th>
                            <th>
                                <h3>C-</h3>
                            </th>
                            <th>
                                <h3>D-</h3>
                            </th>
                             <th>
                                <h3>Answer</h3>
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody id="qtable">
                        <tr class="tableColor" v-for="(question,index) in questionList" :key="question.String" @click="tikla">
                            <td>{{index+1}}</td>
                            <td>{{question.qtext}}</td>
                            <td>{{question.choicea}}</td>
                            <td>{{question.choiceb}}</td>
                            <td>{{question.choicec}}</td>
                             <td>{{question.choiced}}</td>
                             <td>{{question.answer}}</td>
                            <i class="fas fa-trash-alt" @click="removeItem(index)"></i>
                        </tr>
                        
                        
                        <!-- <p>Soru</p>
                        <p class="ctext">{{question.qtext}}</p>
        <div id="A" class="choice">
                            <p class="cnumber">A-</p>
                            <p class="ctext">{{question.choicea}}</p>
                        </div>
        <div id="B" class="choice">
                            <p class="cnumber">B-</p>
                            <p class="ctext">{{question.choiceb}}</p>
                        </div>
        <div id="C" class="choice">
                            <p class="cnumber">C-</p>
                            <p class="ctext">{{question.choicec}}</p>
                        </div>
        <div id="D" class="choice">
                            <p class="cnumber">D-</p>
                            <p class="ctext">{{question.choiced}}</p>
                        </div>
                        <div class="answer">
                            <p class="cnumber">Cevap</p>
                            <p>{{question.answer}}</p>
                        </div> -->
                    </tbody>
                </table>

            </div>


</template>
<script>
import {eventBus} from '../main'
const STORAGE_KEY='quiz-storage'
export default {
    props:['quizTitle'],
    data(){
        return{
            questionList:[],
            show:false,
            selectedList:[],
            color:''
        }
    },
    created(){
        eventBus.$on("questionAdded",(question)=>{
            if(this.questionList.length<100){
                this.questionList.push(question);
                localStorage.setItem(STORAGE_KEY,JSON.stringify(this.questionList))
                
            }else{
                alert("Daha fazla soru ekleyemesiniz..")
            }
        }),
        this.questionList=JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    
    },
    methods:{
       removeItem(index){
           if(confirm("Soruyu silmek istediğinizden emin misiniz..?")){
                  this.questionList.splice(index,1);
           localStorage.setItem(STORAGE_KEY,JSON.stringify(this.questionList))
           setTimeout(()=>{
               alert("Soru başarıyla silindi...")
           },300);
           }
       },
       tikla:function(e){
        //    const item =e.target.parentElement;
        //    if(item.classList.contains('red')){
                
        //         e.target.parentElement.classList.remove('red')
               
        //    }else{
        //        e.target.parentElement.classList.add('red')
        //        this.show=true
        //    }
        //    let index=e.target.parentElement.firstChild.textContent;
        //       // console.log(index)

        //   if(this.selectedList.indexOf(index)==-1){
        //        this.selectedList.push(index);
        //   }else{
        //       this.selectedList.splice(index,1)
              
        //   }
        //   console.log(this.selectedList)
          
       },
       deleteAll(){

        //    this.selectedList.forEach((item)=>{
        //        this.questionList.splice(item,1);
        //       // localStorage.setItem(STORAGE_KEY,JSON.stringify(this.questionList))
        //       if(this.toggleRed()){
        //             setTimeout(()=>{
        //        alert("Soru başarıyla silindi...")
        //    },300);
        //       }else{
        //             setTimeout(()=>{
        //        alert("Soru başarıyla silindi...")
        //    },300);
        //       }
        //    })
           
           
        //    if(item.classList.contains('red')){
        //         e.target.parentElement.classList.remove('red')
        //    }else{
        //        e.target.parentElement.classList.add('red')
        //    }
    //     this.toggleRed();
        
    //    },
    //    toggleRed(){
    //     let renk= document.querySelectorAll('tr');
    //       renk.forEach((item)=>{
    //          if(item.classList.contains('red')){
    //             item.classList.remove('red')
    //        }
    //       })
     }
    }
}
</script>
<style scoped>
 .tableColor:hover{
     background-color:white;
     color: black
 }
 .tableColor i:hover{
     color: brown;
     font-weight: bold
 }
 .btn{
     background-color: darkred;
     color: white;
     padding: 1px 10px;
     font-size: 14px
 }
</style>