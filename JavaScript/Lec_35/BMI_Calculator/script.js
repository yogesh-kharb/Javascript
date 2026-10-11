// Step 1: grab the elements (once, outside)
const weight = document.querySelector("#wt");
const height = document.querySelector("#hi");
const sub = document.getElementById("submit");
const res = document.querySelector("#ans");
const msg = document.querySelector("#msg");
const sugg = document.getElementById("suggestion");

// Step 3: listen for the click
sub.addEventListener("click", function () {

    // Step 4: read the values (inside, so it's fresh on every click)
    const w = Number(weight.value);
    const h = Number(height.value);

    // Step 7: validation (bad input)
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        res.innerText = "Please enter valid positive numbers";
        sugg.innerText = "";
        return; // stop here, don't calculate
    }

    // Step 5: formula (convert cm to meters first)
    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);

    // Step 5b: show the BMI, rounded to 1 decimal
    res.innerText = "Your BMI is " + bmi.toFixed(1);

    // Step 6: category logic
    if (bmi < 18.5) {
        sugg.innerText = "Underweight: consider a nutrient-rich diet.";
    } else if (bmi < 25) {
        sugg.innerText = "Normal: great, keep it up!";
    } else if (bmi < 30) {
        sugg.innerText = "Overweight: try regular exercise and a balanced diet.";
    } else {
        sugg.innerText = "Obese: consider talking to a doctor or dietitian.";
    }
});