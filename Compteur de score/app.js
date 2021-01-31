// Définit le compteur 
let count = 0; 


// selectionne les valeurs et boutons 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns)

btns.forEach(btn => {
btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if (styles.contains('MOINS')){
        count --;
    }
    else if (styles.contains('PLUS')) {
        count ++;
    }
    
    else if (styles.contains('RESET')) {
        count = 0;
    }

    if (count > 0 ){
        value.style.color = "rgb(0, 255, 34)";
    }


    if (count < 0 ){
        value.style.color = "red";
    }

    if (count === 0) 
    value.style.color = "black";

    
    value.textContent = count;
    }) 
});