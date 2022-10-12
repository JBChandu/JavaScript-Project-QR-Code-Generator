const inputData = document.querySelector("#input");
const generateBtn = document.querySelector("#submit");
const imgCanvas = document.querySelector("#img");
const mainPage = document.querySelector("#main");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputData.value}`;
  fetchQR(api);
});

function fetchQR(api) {
  try {
    fetch(api).then((data) => {
      imgCanvas.style.display = "block";
      imgCanvas.style.textAlign = "center";
      imgCanvas.src = data.url;
      mainPage.insertAdjacentElement("afterend", imgCanvas);
      inputData.value = " ";
    });
  } catch (err) {
    alert("Try Again!");
  }
}
