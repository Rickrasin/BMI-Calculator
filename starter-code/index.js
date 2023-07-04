//Check Box
const checkboxMetric = document.getElementById("checkMetric");
const checkboxImperial = document.getElementById("checkImperial");
const formMetric = document.getElementById("metric");
const formImperial = document.getElementById("imperial");

checkboxMetric.onclick = function () {
  if (checkboxMetric.checked) {
    checkboxImperial.checked = false;
    formMetric.classList.remove("hidden");
    formImperial.classList.add("hidden");
  } else {
    checkboxMetric.checked = true;
  }
};

checkboxImperial.onclick = function () {
  if (checkboxImperial.checked) {
    checkboxMetric.checked = false;
    formImperial.classList.remove("hidden");
    formMetric.classList.add("hidden");
  } else {
    checkboxImperial.checked = true;
  }
};

// Calculate BMI Metric
const height = document.getElementById("height");
const weight = document.getElementById("weight");

const welcome = document.getElementById("welcome");
const result = document.getElementById("result");

const score = document.getElementById("score");
const idealWeight = document.getElementById("idealWeight");
const typeWeight = document.getElementById("typeWeight");

let BMI = 0;

function BMICalculate() {
  BMI = calcBMI(height.value, weight.value);
  let idealWeightText = GetIdealWeight(height.value);
  let classWeightText = GetClassWeight(weight.value);

  idealWeight.innerHTML = idealWeightText;
  typeWeight.innerHTML = classWeightText;
  score.innerHTML = BMI;

  console.log(
    typeof BMI && idealWeightText != undefined && classWeightText != undefined
  );
  if (BMI > 0) {
    console.log("Liberado");
    result.classList.remove("hidden");
    welcome.classList.add("hidden");
  }
}

function calcBMI(height, weight) {
  let calcBMI = weight / ((height / 100) * (height / 100));
  let result = Math.round(calcBMI * 10) / 10;
  console.log(result);

  if (result >= 0) {
    return result;
  } else {
    return 0;
  }
}

function GetClassWeight(weight) {
  let text;
  if (BMI < 18.5) {
    text = "underweight";
  } else if (BMI <= 24.9) {
    text = "healthy weight";
  } else if (BMI <= 29.9) {
    text = "overweight";
  } else if (BMI <= 34.9) {
    text = "class I obese";
  } else if (BMI <= 39.9) {
    text = "class II obese";
  } else if (BMI >= 40) {
    text = "class III obese";
  }

  return text;
}

function GetIdealWeight(height) {
  // Ideal Height
  let idealWeightText;
  switch (true) {
    case height >= 150 && height <= 154:
      idealWeightText = "41.6kgs - 56kgs";
      break;
    case height >= 155 && height <= 159:
      idealWeightText = "44.4kgs - 60kgs";
      break;
    case height >= 160 && height <= 164:
      idealWeightText = "47.3kgs - 63.7kgs";
      break;
    case height >= 165 && height <= 169:
      idealWeightText = "50.3kgs - 67.8kgs";
      break;
    case height >= 170 && height <= 174:
      idealWeightText = "53.5kgs - 71.9kgs";
      break;
    case height >= 175 && height <= 179:
      idealWeightText = "56.65kgs - 76.25kgs";
      break;
    case height >= 180 && height <= 184:
      idealWeightText = "60kgs - 80kgs";
      break;
    case height >= 185 && height <= 189:
      idealWeightText = "63.3kgs - 85kgs";
      break;
    case height >= 190 && height <= 194:
      idealWeightText = "70.3kgs - 95kgs";
      break;
  }

  return idealWeightText;
}
