const btns = document.querySelectorAll(".question-btn");
const quest = document.querySelectorAll(".question-title");
btns.forEach(function(btn,index){
    btn.addEventListener('click', function(e){
         quest[index].childNodes[1].classList.toggle("toggle-font");
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
        // document.body.quest.fontWeight="bold";
    });
});

