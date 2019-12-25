<template>
       <div v-if="show" class="sonuc">
                    <h1>Sonuçlar</h1>
                    <p>Doğru cevap : {{answerRight}}</p>
                     <p>Yanlış cevap : {{answerErr}}</p>
        </div>

</template>
<script>
export default {
    data(){
        return{
            show:true
        }
    }
}
</script>