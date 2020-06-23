// $("#btn").click(function (e) { 
//     e.preventDefault();
//     alert("clicked")
//     //$(this).parent.remove()
// });

// const btns = document.querySelectorAll("#btn")

function rm(btn){
    
    btn.parentElement.remove()
}

function check(btn){
    $(btn).parent().toggleClass("tick");
}



// btns.forEach(el => {
//     //el.addEventListener('click', rm(el))
//     alert(el.parentElement.textContent)
// });
