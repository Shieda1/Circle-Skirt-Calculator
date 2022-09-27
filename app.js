// https://www.omnicalculator.com/everyday-life/circle-skirt

// febric length is kinda wrong

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fabriclengthRadio = document.getElementById('fabriclengthRadio');
const waistRadio = document.getElementById('waistRadio');
const skirtlengthRadio = document.getElementById('skirtlengthRadio');

let fabriclength;
const PI = Math.PI;
let waist = v1;
let skirtlength = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

fabriclengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Waist';
  variable2.textContent = 'Skirt length';
  waist = v1;
  skirtlength = v2;
  result.textContent = '';
});

waistRadio.addEventListener('click', function() {
  variable1.textContent = 'Fabric length';
  variable2.textContent = 'Skirt length';
  fabriclength = v1;
  skirtlength = v2;
  result.textContent = '';
});

skirtlengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Fabric length';
  variable2.textContent = 'Waist';
  fabriclength = v1;
  waist = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fabriclengthRadio.checked)
    result.textContent = `Fabric length = ${computefabriclength().toFixed(2)}`;

  else if(waistRadio.checked)
    result.textContent = `Waist = ${computewaist().toFixed(2)}`;

  else if(skirtlengthRadio.checked)
    result.textContent = `Skirt length = ${computeskirtlength().toFixed(2)}`;
})

// calculation

// fabric length = skirtlength + (waist / 2π - 2) + 2

function computefabriclength() {
  return Number(skirtlength.value) + (Number(waist.value) / (2 * PI - 2)) + 2;
}

function computewaist() {
  return (Number(fabriclength.value) - Number(skirtlength.value) - 2) * (2 * PI - 2);
}

function computeskirtlength() {
  return Number(fabriclength.value) - ((Number(waist.value) / (2 * PI - 2)) + 2);
}