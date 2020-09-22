const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const url = "https://api.kanye.rest";
btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
});

function displayData(data) {
  const randomPic = Math.floor(Math.random() * 9) + 1;
  document.getElementById("kanye-pic").src=`kanye${randomPic}.png`;  
  console.log(randomPic);
  img.classList.add("shake-img");
  const { quote } = data;
  content.textContent = `"${quote}"`;
  const randomTime = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, randomTime);
}
