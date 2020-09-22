const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const url = "https://api.kanye.rest";
btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    displayData({quote: `Oops, we have a connection problem. Please come back later for some Kanye knowledge... ${error}`});
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
