const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1'); 
const input2 = document.querySelector('#calculo2'); 
const btn = document.querySelector('#btnCalcular'); 
const pResult = document.querySelector('#result');
 /*h1.innerHTML = "Patito"
 input.value = "456"
  */
/* const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png')
console.log(img);

pid.appendChild(img); */

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
