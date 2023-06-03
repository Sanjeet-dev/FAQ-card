const btns = document.querySelectorAll(".question-btn");
const quest = document.querySelectorAll(".question-title");
const articles = document.querySelectorAll(".questions");
let currentIndex=0;

btns.forEach(function(btn,index){
    btn.addEventListener('click', function(e){
        if(index!==currentIndex)
        {
        checkActive();
        }
        
        quest[index].childNodes[1].classList.toggle("toggle-font");
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
        currentIndex=index;
        
    });
});

function checkActive(){
    btns.forEach(function(btn,index){
        const activeBtn=btn.parentElement.parentElement;
        if(activeBtn.classList.contains("show-text")){
         quest[index].childNodes[1].classList.toggle("toggle-font");
            activeBtn.classList.remove("show-text");
        }
        });
}