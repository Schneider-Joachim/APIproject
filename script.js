// Using async 

const makeAPICall = async () => {
   const response = await fetch("https://owen-wilson-wow-api.onrender.com/wows/random"
   );
  const data = await response.json(); 
  const movieTitle = data[0].movie;
  const videoLink = ((data[0].video["1080p"]));

  let generatedHTML = "";

  generatedHTML += `<h1>${movieTitle}</h1>`;
  generatedHTML += `<video controls width="480" height="320">
    <source src="${videoLink} type="video/mp4"
  </video>`


  document.getElementById("movieInfo").innerHTML = generatedHTML;
};


makeAPICall();

















