async function Anime() {
  const res = await fetch(
    "https://animechan.vercel.app/api/random/anime?title=naruto"
  );
  const quotes = await res.json();
  console.log(quotes);
  const header = document.querySelector(".header");
  header.innerHTML = `<p>${quotes.anime}</p>`;
  const quote = document.querySelector(".quote");
  quote.innerHTML = `<p>${quotes.quote}</p>`;
  const said_by = document.querySelector(".said_by");
  said_by.innerHTML = `<p>${quotes.character}</p>`;
}
Anime();
