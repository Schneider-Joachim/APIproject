// Using async because .then is a headache and I don't want to get caught in a promise hell

const makeAPICall = async () => {
  const response = await fetch(
    "https://owen-wilson-wow-api.onrender.com/wows/random?results=5"
  );

  // parsing the data with .json and setting it equal to a variable to use globally
  const data = await response.json();

  //using bracket and dot notation to dig up the info i want
  const movieTitle = data[0].movie;
  const videoLink = data[0].video["1080p"];

  // setting html equal to an empty string
  let generatedHTML = "";

  //using string interpolation and template literals to feed statements set above into the html so it can populate for end user
  generatedHTML += `<h1>${movieTitle}</h1>`;
  generatedHTML += `<video controls width="480" height="320">
    <source src="${videoLink} type="video/mp4"
  </video>`;

  // generates content for end user
  document.getElementById("movieInfo").innerHTML = generatedHTML;
};

// calling the function
makeAPICall();
