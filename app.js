const text = [
  `USA Today is known for news in comment, easy-to-read-and-comprehend stories. In the main edition circulated in the United States and Canada, each edition consists of four sections: News (the "front page" section), Money, Sports, and Life. Since March 1998,
   the Friday edition of Life has been split into two 
   sections: the regular Life focusing on entertainment (subtitled Weekend; section E)
   , which features television reviews and listings, a DVD column, film reviews and trends, 
   and a travel supplement called Destinations & Diversions (section D). The international 
   edition of the paper features two sections: News and Money in one; with Sports and Life in the other.so this is the news`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.

  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
