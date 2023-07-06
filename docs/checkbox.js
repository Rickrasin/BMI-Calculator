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
