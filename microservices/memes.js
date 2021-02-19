const fetch = require("node-fetch");
module.exports = async function () {
  let meme = await fetch(
    "https://meme-api.herokuapp.com/gimme"
  ).then((response) => response.json());
  let finalMeme = `${meme.url}`;
  return finalMeme;
};
