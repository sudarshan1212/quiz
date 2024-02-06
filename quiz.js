let questions=[{
    question:"What programming language is known for its simplicity and readability?",
    answer:[
        {text:"python",correct:"false"},
        {text:"java",correct:"false"},
        {text:"Rust",correct:"false"},
        {text:"C++",correct:"true"}  
          
    ]
},{
    question:"What does CSS stand for in web development?",
    answer:[
        {text:"Counter Style Sheet",correct:"false"},
        {text:"Cascading Style Sheet",correct:"true"},
        {text:"Computer Style Sheet",correct:"false"},
        {text:"Creative Style Sheet",correct:"false"}  
          
    ]
},{
    question:"Wich version control system is known for its distributed architecture?",
    answer:[
        {text:"SVN",correct:"false"},
        {text:"Git",correct:"true"},
        {text:"Metcurial",correct:"false"},
        {text:"CVS",correct:"false"}  
          
    ]
},{
    question:"In JavaScript, what is the purpose of the console.log statement?",
    answer:[
        {text:"Input ",correct:"false"},
        {text:"Output",correct:"true"},
        {text:"Looping",correct:"false"},
        {text:"Styling",correct:"false"}  
          
    ]
},{
    question:"WWhich keyword is used in Python to define a function?",
    answer:[
        {text:" func",correct:"false"},
        {text:"define",correct:"false"},
        {text:"def",correct:"true"},
        {text:"function",correct:"false"}  
          
    ]
}
]
// // console.log(questions[0].answer[0].correct);
const Question=document.querySelector('#question')
const ansewers=document.querySelector('#ansewer-buttons')
const next=document.querySelector('#next-button')

let currentIndex=0
let score=0
init()
function init(){
    currentIndex=0
    score=0
    next.innerHTML="N E X T"
    startgame()
    Question.style.fontSize='20px'
    Question.style.textAlign ='left'
}
function startgame(){
    reset()
    let ques=questions[currentIndex]
    let number=currentIndex+1
    Question.innerHTML=number+". "+ques.question
    ques.answer.forEach(answer=>{
        let ans=document.createElement('button')
        ansewers.appendChild(ans)
        ans.classList.add('btn')
        ans.innerHTML=answer.text
        if(answer.correct){
            ans.dataset.correct=answer.correct            
        }
        ans.addEventListener('click',run)
    })
    
}
function run(e){
 
let k=e.target 
let correction=k.dataset.correct

if(correction=="true"){
score++
    k.classList.add('correct')
}else{
    k.classList.add('wrong')
}
Array.from(ansewers.children).forEach(buttons=>{
    if(buttons.dataset.correct=="true"){      
        buttons.classList.add('correct')
        
    }
    next.style.display='block'
    buttons.style.pointerEvents='none' 
    buttons.disabled="true"
})
   

// console.log(ansewers.children);
}
next.addEventListener('click',()=>{
    if(currentIndex<questions.length){
        ji()
        }else{
         init()
        }
})

function ji(){
    currentIndex++
    if(currentIndex<questions.length){
        startgame()
    }else{
    final()
    }
}
function final(){
    reset()
    next.innerHTML="play again"
    next.style.display="block"
    Question.style.fontSize='50px'
    Question.style.textAlign ='center'
    Question.innerHTML=`your score ${score}`
}
function reset(){
    next.style.display="none"
    while(ansewers.firstChild){
        ansewers.removeChild(ansewers.firstChild)
    }
}





















// let currentIndex=0
// let score=0
// init()
// function  init(){      
//      currentIndex=0;
//     score=0; 
//     next.innerHTML='N E X T'
//     showquestion() 

// }

// function showquestion() { 
// let  currentQuestion=questions[currentIndex]  
// reset()
// let score=0


// let questionNo=1+currentIndex;
// Question.innerHTML=questionNo+". "+currentQuestion.question

// currentQuestion.answer.forEach(answer => {
//         let  ansBtn=document.createElement('button')
//         ansBtn.innerHTML=answer.text
//         ansBtn.classList.add('btn')
//         ansewers.appendChild(ansBtn)  
//         if(answer.correct){
//             ansBtn.dataset.correct=answer.correct
//         }
//             ansBtn.addEventListener('click',correction
//         ) 

// });

   
// }
// function correction(e){
//      const selectedBtn=e.target
//     //  console.log(selectedBtn);
//     const correct=selectedBtn.dataset.correct
//   if(correct=="true"){
//     // console.log('true');   
//      selectedBtn.classList.add('correct')
//     score++
//   }else{
//     selectedBtn.classList.add('wrong')
//   }
//   Array.from(ansewers.children).forEach(button=>{
//     if(button.dataset.correct=="true"){
//         button.classList.add('correct')
//         next.style.display='block'
//     }
//     button.disabled=true
//     button.style.pointerEvents= "none";
//   })


// }
// next.addEventListener('click',()=>{
//     if(currentIndex<questions.length){
//         showNext()         
//     }else{
//         init()
//     }
// })

// function showNext(){
//     currentIndex+=1
//     if(currentIndex<questions.length){
//         showquestion() 
      
//     }else{
//      showscore()
//     }
 

// }
// function showscore(){
//     Question.innerHTML=`your score is ${score}`
//     next.innerHTML="PLAY AGAIN"
//     reset()
//     next.style.display='block'
    
// }
// function reset(){
//     next.style.display='none'
//     // console.log(ansewers.firstChild);
//     while(ansewers.firstChild){  
//         console.log(ansewers.firstChild);     
//         ansewers.removeChild(ansewers.firstChild)
       
//     }

// }
// // console.log(ansewers.firstChild);
