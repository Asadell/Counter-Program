const countNumber = document.getElementById('countNumber');
const btnContainer = document.querySelector('.btnContainer');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
let count = 0;

increaseBtn.onclick = () => {
  count++;
  countNumber.textContent = count;
};

decreaseBtn.onclick = () => {
  count--;
  countNumber.textContent = count;
};

resetBtn.onclick = () => {
  count = 0;
  countNumber.textContent = count;
};
