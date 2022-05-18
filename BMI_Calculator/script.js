let weight, height, bmi, measure;

calculate();

function calculate() {
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;

  measure;
  height /= 100;
  height *= height;
  bmi = weight / height;
  bmi = bmi.toFixed(1);

  if (bmi <= 18.4) {
    measure = "Your BMI is " + bmi + ", You are Underweight 😢";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    measure = "Your BMI is " + bmi + ", You are Normal 🙂";
  } else if (bmi >= 25 && bmi <= 29.9) {
    measure = "Your BMI is " + bmi + ", You are Overweight 😅";
  } else if (bmi >= 30) {
    measure = "Your BMI is " + bmi + ", You are Obese 🥴";
  }

  if (weight === 0) {
    document.getElementById("results").innerHTML = "Please Enter some values";
  } else if (height === 0) {
    document.getElementById("results").innerHTML = "Please Enter some values";
  } else {
    document.getElementById("results").innerHTML = measure;
  }
  if (weight < 0) {
    document.getElementById("results").innerHTML =
      "Negative Values not Allowed";
  }
}
