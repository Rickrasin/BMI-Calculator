// Cálculo do BMI
const height = document.getElementById("height");
const weight = document.getElementById("weight");

const score = document.getElementById("score");
const idealWeight = document.getElementById("idealWeight");
const typeWeight = document.getElementById("typeWeight");

console.log(height);
console.log(weight);

weight.onchange = function () {
  let heightValue = height.value;
  let weightValue = weight.value;

  let calcBMI = weightValue / ((heightValue / 100) * (heightValue / 100));

  let BMI = Math.round(calcBMI * 10) / 10;

  let idealText;

  if (BMI < 18.5) {
    idealText = "very low weight";
  } else if (BMI <= 24.9) {
    idealText = "very low weight";
  } else if (BMI <= 29.9) {
    idealText = "very low weight";
  } else if (BMI <= 34.9) {
    idealText = "very low weight";
  } else if (BMI <= 39.9) {
    idealText = "very low weight";
  } else if (BMI >= 40) {
    idealText = "very low weight";
  }

  score.innerHTML = BMI;
};
