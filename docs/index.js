// Calculate IMC Metric

//Imputs

//Altura
const foot = document.getElementById("foot");
const inch = document.getElementById("inch");
//Peso
const stone = document.getElementById("stone");
const pound = document.getElementById("pound");

//Meters
const height = document.getElementById("height");
const weight = document.getElementById("weight");

const inputs = document.querySelectorAll("input");

//Welcome and Result
const welcome = document.getElementById("welcome");
const result = document.getElementById("result");

//Result Values
const score = document.getElementById("score");
const idealWeight = document.getElementById("idealWeight");
const typeWeight = document.getElementById("typeWeight");

let IMC = 0;

//Selecionar Texto
Array.from(inputs).forEach(function (input) {
  input.addEventListener("click", function () {
    this.select();
  });
});


function IMCCalculate() {
  IMC = calcIMC(height.value, weight.value);
  let idealWeightText = GetIdealWeight(height.value, false);
  let typeWeightText = GetClassWeight(IMC);

  console.log("result Meter");
  ShowResult(idealWeightText, typeWeightText, IMC);
}

function IMCImperialCalculate() {
  let HeightM = ConvertHeight(foot.value, inch.value);
  let weightKg = ConvertWeight(stone.value, pound.value);

  console.log(HeightM);
  console.log(weightKg);

  IMC = calcIMC(HeightM, weightKg);

  let idealWeightText = GetIdealWeight(HeightM, true);
  let typeWeightText = GetClassWeight(IMC);

  console.log("result");
  ShowResult(idealWeightText, typeWeightText, IMC);
}

//Show Result

function ShowResult(idealWeightText, typeWeightText, IMC) {
  idealWeight.innerHTML = idealWeightText;
  typeWeight.innerHTML = typeWeightText;
  score.innerHTML = IMC.toFixed(1);

  if (IMC > 0 && idealWeightText != null && typeWeightText != null) {
    console.log("Liberado");
    result.classList.remove("hidden");
    welcome.classList.add("hidden");
  }
}

//CALC IMC
function calcIMC(height, weight) {
  let calcIMC = weight / ((height / 100) * (height / 100));
  let result = Math.round(calcIMC * 10) / 10;

  if (result >= 0) {
    return result;
  } else {
    return 0;
  }
}

//Convert Imperial Values
function ConvertHeight(heightFt, heightIn) {
  return heightFt * 30.48 + heightIn * 2.54;
}

function ConvertWeight(weightSt, weightLb) {
  return weightSt * 6.35029 + weightLb * 0.453592;
}

//Check WeightType and WeightRange
function GetClassWeight(IMC) {
  let text;
  switch (true) {
    case IMC <= 18.5:
      text = "underweight";
      break;
    case IMC >= 18.6 && IMC <= 24.9:
      text = "Healthy Weight";
      break;
    case IMC >= 23.0 && IMC <= 29.9:
      text = "Overweight";
      break;
    case IMC >= 30:
      text = "Obese";
      break;
  }
  return text;
}

function GetIdealWeight(height, isImperial) {
  let idealWeightRange;
  let height2 = (height / 100) * (height / 100);
  let min;
  let max;

  min = 18.6 * height2;
  max = 24.9 * height2;

  if (!isImperial) {
    min = Math.round(min * 100) / 100;
    max = Math.round(max * 100) / 100;
    idealWeightRange = `${min.toFixed(1)}kgs - ${max.toFixed(1)}kgs`;
  } else {
    const minSt = Math.floor(min / 6.35029);
    const minLbs = Math.round(((min / 6.35029) % 1) * 14);

    const maxSt = Math.floor(max / 6.35029);
    const maxLbs = Math.round(((max / 6.35029) % 1) * 14);

    console.log();

    idealWeightRange = `${minSt.toFixed(0)}st ${minLbs.toFixed(
      0
    )}lbs - ${maxSt.toFixed(0)}st ${maxLbs.toFixed(0)}lbs`;

    console.log(minSt + "minSt ");
    console.log("minLbs " + maxLbs);
    console.log("maxSt " + maxSt);
    console.log("maxLbs " + maxLbs);
  }

  console.log(idealWeightRange);
  return idealWeightRange;
}
