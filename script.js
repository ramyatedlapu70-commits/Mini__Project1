const billInput = document.getElementById("bill");
const tipChips = document.querySelectorAll(".chip");
const peopleDisplay = document.getElementById("people");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");
const tipAmountDisplay = document.getElementById("tip-amount");
const totalPerPersonDisplay = document.getElementById("total-per-person");
let selectedTip = 0;
let peopleCount = 1;
tipChips.forEach(chip => {
  chip.addEventListener("click", () => {
    tipChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    selectedTip = parseInt(chip.dataset.tip);
  });
});
increaseBtn.addEventListener("click", () => {
  peopleCount++;
  peopleDisplay.textContent = peopleCount;
});
decreaseBtn.addEventListener("click", () => {
  if (peopleCount > 1) {
    peopleCount--;
    peopleDisplay.textContent = peopleCount;
  }
});
calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  if (isNaN(bill) || bill <= 0) {
    alert("Please enter a valid bill amount.");
    return;
  }
  const tipAmount = (bill * selectedTip) / 100;
  const total = bill + tipAmount;
  const perPerson = total / peopleCount;
  tipAmountDisplay.textContent = `₹${tipAmount.toFixed(2)}`;
  totalPerPersonDisplay.textContent = `₹${perPerson.toFixed(2)}`;
});
resetBtn.addEventListener("click", () => {
  billInput.value = "";
  tipChips.forEach(c => c.classList.remove("active"));
  selectedTip = 0;
  peopleCount = 1;
  peopleDisplay.textContent = peopleCount;
  tipAmountDisplay.textContent = "₹0.00";
  totalPerPersonDisplay.textContent = "₹0.00";
});
