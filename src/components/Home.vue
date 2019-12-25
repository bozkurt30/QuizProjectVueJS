<template>
<div class="header">
<button id="start" class="btn startbtn" @click="showQuiz" v-show="!show">Start Quiz</button>
<app-quiz v-show="show"></app-quiz>
</div>
</template>
<script>
import Quiz from './quiz'
export default {
    components:{
        appQuiz:Quiz
    },
    data(){
        return{
            show:false
        }
    },
    methods:{
        showQuiz(){
            this.show=true
        }
    }
}
</script>
<style scoped>
.header{
    text-align: center
}
</style>