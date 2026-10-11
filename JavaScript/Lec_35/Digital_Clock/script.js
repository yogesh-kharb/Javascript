// Step 1: grab the elements (once, outside)
const time = document.getElementById("time");
const ampm = document.getElementById("ampm");
const date = document.getElementById("date");
const half = document.getElementById("half");
const full = document.getElementById("full");
const displaydate = document.getElementById("displaydate");

// State: these live outside functions so they survive between ticks
let is12Hour = true;      // default mode is 12 hr
let dateVisible = false;  // date is hidden at the start

// Helper: turn a number into a 2-digit string (5 -> "05")
function pad(num) {
    return String(num).padStart(2, "0");
}

// The main function: runs every second
function updateClock() {
    // Fresh snapshot on every tick
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    if (is12Hour) {
        // Number work first: decide AM/PM, then convert the hour
        ampm.innerText = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;   // 0 -> 12, 13 -> 1, 12 stays 12
    } else {
        ampm.innerText = "";        // no AM/PM in 24 hr mode
    }

    // Formatting last: pad and join
    time.innerText = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);

    // Date line
    date.innerText = now.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

// Mode buttons: set the mode, move the active class, update instantly
half.addEventListener("click", function () {
    is12Hour = true;
    half.classList.add("active");
    full.classList.remove("active");
    updateClock();
});

full.addEventListener("click", function () {
    is12Hour = false;
    full.classList.add("active");
    half.classList.remove("active");
    updateClock();
});

// Date button: flip the state, then match the page to it
displaydate.addEventListener("click", function () {
    dateVisible = !dateVisible;

    if (dateVisible) {
        date.style.display = "block";
        displaydate.innerText = "Hide date";
    } else {
        date.style.display = "none";
        displaydate.innerText = "Show date";
    }
});

// Start: default mode looks selected, run once now, then every second
half.classList.add("active");
updateClock();
setInterval(updateClock, 1000);