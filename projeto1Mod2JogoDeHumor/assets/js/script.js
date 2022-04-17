const elementoTipo = document.querySelector('#tipo')
const elementoImagem = document.querySelector('#imagem');
let elementoButton = document.querySelector('#change');

elementoButton.addEventListener('click', () =>{
    if (elementoButton.value === 'Disappointed'){
        elementoImagem.src = "./assets/img/shadowProud.gif";
        elementoTipo.innerText = 'Proud';
        elementoButton.value = 'Proud';
        console.log('Shadow está feliz')
    } else if (elementoButton.value === 'Proud'){
        elementoImagem.src = './assets/img/shadowChallenged.gif';
        elementoTipo.innerText = 'Challenged';
        elementoButton.value = 'Challenged';
    } else if (elementoButton.value === 'Challenged'){
        elementoImagem.src = './assets/img/shadowBored.gif';
        elementoTipo.innerText = 'Bored';
        elementoButton.value = 'Bored';
        console.log('Shadow está feliz')
    }
    else if (elementoButton.value === 'Bored'){
    elementoImagem.src = './assets/img/shadowAngry.gif';
    elementoTipo.innerText = 'Angry';
    elementoButton.value = 'Angry';
    console.log('Shadow está feliz')
    }
    else if (elementoButton.value === 'Angry'){
    elementoImagem.src = "./assets/img/shadowHappy.gif";
    elementoTipo.innerText = 'Happy';
    elementoButton.value = 'Happy';
    console.log('Shadow está feliz')
    }
    else if (elementoButton.value === 'Happy'){
    elementoImagem.src = "./assets/img/shadowSuper.gif";
    elementoTipo.innerText = 'Super Shadow';
    elementoButton.value = 'Super Shadow';
    console.log('Shadow está feliz')
    }
    else if (elementoButton.value === 'Super Shadow'){
    elementoImagem.src = "./assets/img/shadowBadAss.gif";
    elementoTipo.innerText = 'Bad-Ass';
    elementoButton.value = 'Bad-Ass';
    console.log('Shadow está feliz')
    }
    else {
        elementoImagem.src = './assets/img/shadowDisappointed.gif';
        elementoTipo.innerText = 'Disappointed';
        elementoButton.value = 'Disappointed';
        console.log('Shadow está feliz')
    }
})
console.log(addEventListener)


// const div_id = document.querySelector('#text')
// const div__className = document.querySelector('.container')
// const div__selectorAll = document.querySelectorAll('.container')
// const img = document.querySelector('img')
// console.dir(img.attributes[0].nodeValue)


// const imgList = ["./assets/img/shadowDisappointed.gif", "./assets/img/shadowProud.gif", "./assets/img/shadowChallenged.gif", "./assets/img/shadowBored.gif","./assets/img/shadowAngry.gif", "./assets/img/shadowHappy.gif", "./assets/img/shadowSuper.gif", "./assets/img/shadowBadAss.gif"]

// function handleChangeImg(){
//     if(img.attributes.src.nodeValue == imgList[0]){
//         img.setAttribute("src", `${imgList[1]}`)
        
//     }
//     else if(img.attributes.src.nodeValue == imgList[1]){
//             img.setAttribute("src", `${imgList[2]}`)
            
//     }
//     else if(img.attributes.src.nodeValue == imgList[2]){
//         img.setAttribute("src", `${imgList[3]}`)
        
// }
//     else if(img.attributes.src.nodeValue == imgList[3]){
//     img.setAttribute("src", `${imgList[4]}`)
    
// }
//     else if(img.attributes.src.nodeValue == imgList[4]){
//     img.setAttribute("src", `${imgList[5]}`)
    
// }
//     else if(img.attributes.src.nodeValue == imgList[5]){
//     img.setAttribute("src", `${imgList[6]}`)
   
// }
//     else if(img.attributes.src.nodeValue == imgList[6]){
//     img.setAttribute("src", `${imgList[7]}`)
    
// }
//     else if(img.attributes.src.nodeValue == imgList[7]){
//     img.setAttribute("src", `${imgList[8]}`)
    
// }
// else {
//         img.setAttribute("src", `${imgList[0]}`) 
//     }
// }

// let buttom = document.querySelector("img");

// buttom.onclick = function(){
//     let myScr =buttom.getAttribute("src");
//     if (myScr === "./assets/img/shadowDisappointed.gif")
//         {buttom.setAttribute("src", "./assets/img/shadowProud.gif")
//     }
//     else if (myScr === "./assets/img/shadowProud.gif")
//     {buttom.setAttribute("src", "./assets/img/shadowChallenged.gif")
//     }
//     else if (myScr === "./assets/img/shadowChallenged.gif")
//     {buttom.setAttribute("src", "./assets/img/shadowBored.gif")
//     }
//     else if (myScr === "./assets/img/shadowBored.gif")
//     {buttom.setAttribute("src", "/assets/img/shadowAngry.gif")
//     }
//     else if (myScr === "./assets/img/shadowAngry.gif")
//     {buttom.setAttribute("src", "./assets/img/shadowHappy.gif")
//     }
//     else if (myScr === "./assets/img/shadowHappy.gif")
//     {buttom.setAttribute("src", "./assets/img/shadowSuper.gif")
//     }
//     else if (myScr === "./assets/img/shadowSuper.gif")
//     {buttom.setAttribute("src", "./assets/img/shadowBadAss.gif")
//     }
//     else
//     {
//         buttom.setAttribute('src' , './assets/img/shadowDisappointed.gif')
//     }

// }

