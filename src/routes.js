import Quiz from './components/quiz.vue'
import AddQuiz from './components/AddQuiz.vue'
import QuizList from './components/QuizList.vue'
import Home from './components/Home.vue'


export const routes=[
    {path:'/',component:Home},
    {path:'/Quiz', component:Home},
    {path:'/AddQuiz',component:AddQuiz},
    {path:'/QuizList',component:QuizList}
]