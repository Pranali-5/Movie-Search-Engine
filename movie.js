//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=47334bc8
var errorImg = document.getElementById("errorImg");
var movieData = document.getElementById("movieData");
var movieData1 = document.getElementById("movieData1");
async function getMovie() {
  let movie = document.getElementById("movie").value;
  try {
    let res = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=47334bc8`);
    let data = await res.json();
    if (data.Response == "False") {
      movieData.innerHTML = "";
      errorImg.innerHTML = `<img id="errImg" src="https://cdn.dribbble.com/users/1529800/screenshots/5025294/ae-404_2_____.gif">`;
    }
    if (Number(data.imdbRating) > 8.5) {
      movieData1.innerHTML = `<div id="recommended">Recommended</div>`;
    } else {
      movieData1.innerHTML = "";
    }
    if (data.Response == "True") {
      errorImg.innerHTML = "";
      console.log("data:", data);
      let t = data.Runtime.split(" ");
      let t1 = Math.floor(+t[0] / 60);
      let t12 = +t[0] / 60 - Math.floor(+t[0] / 60);
      let t2 = Math.round(t12 * 60);
      console.log(Number(data.imdbRating) > 8.5);
      movieData.innerHTML = `<img id="poster" src='${data.Poster}'>
                                        <div id="title">${data.Title}</div>
                                        <div id="info"><ul>
                                            <li>${t1} hr ${t2} min.</li>
                                            <li>${data.Released}</li>
                                            <li>IMDb Rating: ${data.imdbRating}</li>
                                            <li>Language: ${data.Language}</li>
                                        </ul></div>
                                        <p>${data.Plot}</p>
                                        `;
    }
  } catch (err) {
    console.log("err:", err);
  }
}
