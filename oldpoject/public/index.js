const navbar = document.getElementById("navbar");
let scrolled = false;
const kanyeQuote = document.getElementById("kanye-quote");
const authorQuote = document.getElementById("author-quote");

window.addEventListener("load", () => {
  fetch("http://localhost:3000/quote")
    .then((response) => response.json())
    .then((data) => {
      kanyeQuote.innerHTML = data.quote;
      authorQuote.innerHTML = "- Mr. West";
    })
    .catch((err) => {
      kanyeQuote.innerHTML = `${err}`;
      authorQuote.innerHTML = "- NOT Mr. West";
    });
});

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
