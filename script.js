const btns = document.querySelectorAll(".question-btn");
const quest = document.querySelectorAll(".question-title");

let currentIndex=0;

quest.forEach(function(faq,index){
    faq.addEventListener('click', function(event){
        if(index!==currentIndex)
        {
        checkActive();
        }
        quest[index].childNodes[1].classList.toggle("toggle-font");
        const selectParent = event.currentTarget.parentElement;
        selectParent.classList.toggle("show-text");
        currentIndex=index;


    });
});



// using buttons you can also perform the same task
function checkButtons(){
btns.forEach(function(btn,index){
    btn.addEventListener('click', function(e){
        if(index!==currentIndex)
        {
        checkActive();
        }
        
        quest[index].childNodes[1].classList.toggle("toggle-font");
        const question = e.currentTarget.parentElement.parentElement;
        console.log(question);
        question.classList.toggle("show-text");
        currentIndex=index;
        
    });
});
}


function checkActive(){
    btns.forEach(function(btn,index){
        const activeBtn=btn.parentElement.parentElement;
        if(activeBtn.classList.contains("show-text")){
         quest[index].childNodes[1].classList.toggle("toggle-font");
            activeBtn.classList.remove("show-text");
        }
        });
}