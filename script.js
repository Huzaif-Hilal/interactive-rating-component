let buttons = Array.from(document.getElementsByClassName('button'))
let submitBtn = document.getElementById('submit')
let main1 = document.getElementById("select")
let main2 = document.getElementById("thanks")
let rating_chosen = document.getElementById("rating-choosen")
let rating = 0;

buttons.forEach((button)=>{
   button.addEventListener("click", ()=>{
    try{
    let previous_selected = document.getElementsByClassName("selected");
    previous_selected[0].classList.remove("selected")
     } catch(err) {

     }
    button.classList.add('selected')
    rating = button.value;
    rating_chosen.innerText = `You Selected ${rating} out of 5`;
   })
})

submitBtn.addEventListener("click", ()=>{
    if(rating!==0){
        main1.hidden = true;
        main2.hidden = false;

    } else {
        alert('Please choose rating first!')
    }
})