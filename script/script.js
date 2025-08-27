// heaart button
let heart = 0;
document.querySelectorAll("#love-btn").forEach((lovebtn) => {
  lovebtn.addEventListener("click", (e) => {
    e.preventDefault();
    heart = heart + 1;
    document.getElementById("total-life").innerText = heart;
  });
});

// copy button
let copyCount = 0;
copyBtn = document.getElementsByClassName("copy-btn");
for (const btn of copyBtn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const parentdiv = btn.parentNode.parentNode;
    const number = parentdiv.querySelector("h1").innerText;
    navigator.clipboard.writeText(number);
    alert("নম্বর কপি হয়েছেঃ " + number);
    copyCount = copyCount + 1;
    document.getElementById("total-copy").innerText = copyCount;
  });
}

// call button
const callsBtn = document.querySelectorAll("#call-btn");

for (const callBtn of callsBtn) {
  callBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const parentdiv = callBtn.parentNode.parentNode;
    const title = parentdiv.querySelector("h2").innerText;
    const number = parentdiv.querySelector("h1").innerText;
    const totalCoin = document.getElementById("coin");
    let totalCoinConverted = parseInt(totalCoin.innerText);
    if (totalCoinConverted < 20) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    }
    // alert(`📞 Calling ${title}: ${number}`);
    const accept = confirm(`📞 Calling ${title}: ${number}`);
    if (accept !== true) {
      return;
    }
    const newCoin = totalCoinConverted - 20;
    totalCoin.innerText = newCoin;
    const time = new Date().toLocaleTimeString();
    const callLists = document.getElementById("call-list-container");
    const childDiv = document.createElement("div");
    childDiv.innerHTML = `<div class="h-[83px] w-full rounded-xl mt-4 flex justify-between items-center p-5 bg-gray-100">
              <div>
                <h1 class="font-bold">${title}</h1>
                <p>${number}</p>
              </div>
              <h3>${time}</h3>
            </div>`;
    callLists.appendChild(childDiv);
  });
}

// clear-btn
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("call-list-container").innerHTML = "";
});
