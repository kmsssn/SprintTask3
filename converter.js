window.onload = function () {
    let valUser = document.getElementById('val');
    let userChoice = document.getElementById('choice');
    let resultKZT = document.getElementsByClassName('convert_resultKZT')[0];
    let resultUSD = document.getElementsByClassName('convert_resultUSD')[0];
    let resultEUR = document.getElementsByClassName('convert_resultEUR')[0]; 
    function convertation() { 
        if(userChoice.value == "KZT"){ 
            resultKZT.innerText = '—'; 
            resultUSD.innerHTML=(valUser.value/431).toFixed(2);
            resultEUR.innerHTML=(valUser.value/509).toFixed(2);
        }
        if (userChoice.value== "USD") {
            resultKZT.innerHTML=(valUser.value*429).toFixed(2);
            resultUSD.innerText='—';
            resultEUR.innerHTML=((valUser.value*429)/509).toFixed(2);
        }
        if(userChoice.value== "EUR"){
            resultKZT.innerHTML=(valUser.value*507).toFixed(2);
            resultUSD.innerHTML=((valUser.value*507)/431).toFixed(2);
            resultEUR.innerText='—';
        }
    }
    valUser.oninput = function () { 
        convertation();
    };
    userChoice.onchange = function () { 
        convertation();
    };
}