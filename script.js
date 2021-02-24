const quizDB=
[
{
    question:"What is full form of HTML",
    a:"Hello To My Land",
    b:"Hai To My Land",
    c:"Hai To My Land",
    d:"Hypertest Markup Language",
    ans:"ans4"
},
{
    question:"What is full form of CSS",
    a:"Class Sana sand ",
    b:"Cascading Style Sheet",
    c:"Class Sana sand ",
    d:"Class Sana sand ",
    ans:"ans2"

},
{
    question:"What is full form of HTTP",
    a:"Hypertext Transfer To Prod",
    b:"Hypertext Transfer To Prod-b",
    c:"Hypertext Transfer Protocol",
    d:"Hypertext Transfer To Prod-d",
    ans:"ans3"
}

]
const  question=document.querySelector('#question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCnt=0;
let score=0;
const loadQuestion=() =>
{
    const questionList=quizDB[questionCnt];
question.innerText=questionList.question;
option1.innerText=questionList.a;
option2.innerText=questionList.b;
option3.innerText=questionList.c;
option4.innerText=questionList.d;

}

loadQuestion();

const getCheckAnswer=() =>
{
  let answer;

  answers.forEach( (curAnsElm)=>  {
     if(curAnsElm.checked) {
        answer=curAnsElm.id;
     }
     

  });
  return answer;

};
submit.addEventListener('click',()=>{
    const chekedAnswer=getCheckAnswer();
    console.log(chekedAnswer);
    if (chekedAnswer==quizDB[questionCnt].ans)
    {
        score++;
    };
    questionCnt++;
    if (questionCnt < quizDB.length)
    {

    loadQuestion();
    }
    else
    {
    var result=""
    showScore.innerHTML=`<h3> Your Score is ${score}/${quizDB.length} </h3> 
     `;

            
    showScore.classList.remove('scoreArea');
    }
});