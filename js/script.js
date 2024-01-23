const endpoint = "https://api.adviceslip.com/advice";

function getAdvice(){
    fetch(endpoint)
    .then(res => res.json())
    .then(dados =>{
        document.getElementById("advice").innerHTML = dados.slip.advice;
        document.getElementById("id").innerHTML = dados.slip.id;

    });
}

getAdvice()