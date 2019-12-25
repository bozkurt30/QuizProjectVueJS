<template>
  
            <div id="qadd" class="temp">
                <h3>Soru Oluştur</h3>
                <ul class="form-group">
                    <li class="element">
                        <label for="qnumberinput">Soru No: </label>
                        <input name="qnumberinput" id="qnumberinput" type="text" disabled value="#" v-model="question.id">
                    </li>
                    <li class="element">
                        <input v-model="question.qtext" id="qtextinput" type="text"  placeholder="Lütfen Sorunuzu Yazınız">
                    </li>
                    <li class="element">
                        <table class="choicetable">

                            <tr class="choicetr">
                                <td><input v-model="question.choicea" class="choices" id="choicea" name="choice" type="text"
                                        placeholder="Lütfen şıkkı doldurunuz."></td>
                                <td><input v-model="question.choiceb" class="choices" id="choiceb" name="choice" type="text"
                                        placeholder="Lütfen şıkkı doldurunuz."></td>
                                <td><input v-model="question.choicec" class="choices" id="choicec" name="choice" type="text"
                                        placeholder="Lütfen şıkkı doldurunuz."></td>
                                <td><input v-model="question.choiced" class="choices" id="choiced" name="choice" type="text"
                                        placeholder="Lütfen şıkkı doldurunuz."></td>
                            </tr>
                            <tr class="choicetr">
                                <td><input v-model="question.answer" class="radio" type="radio" name="answer" value="1"><label
                                        for="answera">A</label></td>
                                <td><input v-model="question.answer" class="radio" type="radio" name="answer" value="2"><label
                                        for="answerb">B</label></td>
                                <td><input v-model="question.answer" class="radio" type="radio" name="answer" value="3"><label
                                        for="answerc">C</label></td>
                                <td><input v-model="question.answer" class="radio" type="radio" name="answer" value="4"><label
                                        for="answerd">D</label></td>
                            </tr>
                        </table>

                    <li class="element clearfix">
                        <button id="eklebtn" type="button" class="btn eklebtn" @click.prevent="addQuestion">Ekle</button>
                    </li>
                </ul>

            </div>

</template>
<script>
import QuizList from './QuizList'
import {eventBus} from '../main'
import M from 'minimatch'
const STORAGE_KEY='quiz-storage'
export default {
    components:{
        appQuizList:QuizList
    },
   data(){
       return{
           question:{
           id:Math.floor(Math.random()*1000),
           qtext:null,
           choicea:null,
           choiceb:null,
           choicec:null,
           choiced:null,
           answer:null
           },
       }
   },
   methods:{
       addQuestion(){
           if(this.question.qtext==null || this.question.choicea==null || this.question.choiceb==null || this.question.choicec==null || this.question.choiced==null || this.question.answer==null){
               alert("Lütfen tüm alanları doldurun");
                return;
           }else{
               eventBus.$emit('questionAdded',this.question);
           this.question={
            id:Math.floor(Math.random()*10),
            qtext:null,
           choicea:null,
           choiceb:null,
           choicec:null,
           choiced:null,
           answer:null,
           }
           window.alert("Soru ekleme işlemi başarılı");
           }    
            
       },
    
   },
 
}
</script>
<style scoped>
 /* .slide-enter{}
 .slide-enter-active{}
 .slide-leave{}
 .slide-leave-active{} */

</style>