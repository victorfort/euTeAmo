var ideu2=document.querySelector('div#eu2')
    var count = 0;
    var ideu = document.querySelector("div#eu");
function clicou() {
    
    ideu2.style.display = 'none';
    ideu.style.display= "block";
    for (let i=1;i <=1000 ; i++ ){
        ideu.innerHTML += `Eu te amo ${i}!<br><br>`;
    }
    
    for (let i=1001;i <=2000 ; i++ ){
        ideu.innerHTML += `Eu te amo ${i}!<br><br>`;
    }
    for (let i=2001;i <3000 ; i++ ){
        ideu.innerHTML += `Eu te amo ${i}!<br><br>`;
    }
    ideu.innerHTML += `Eu te amo três mil!`;
}
