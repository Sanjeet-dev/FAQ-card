const btns = document.querySelectorAll(".question-btn");
const quest = document.querySelectorAll(".question-title");

btns.forEach(function(btn,index){
    btn.addEventListener('click', function(e){
        checkActive();
        quest[index].childNodes[1].classList.toggle("toggle-font");
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
        
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