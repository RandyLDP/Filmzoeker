const radiobuttons = document.querySelectorAll("input[type='radio']");
const searchBar = document.getElementById("searchBar");
const list = document.getElementById("allFilms");

const addMoviesToDom = (movies) => {
  list.innerHTML = "";

      movies.forEach((movie) => {
          const newLi = document.createElement("li");
          const imdbID = movie.imdbID;

          const newA = document.createElement("a");
          newA.href = "https://www.imdb.com/title/" + imdbID + "/";
          newA.target = "_blank";

          const newImg = document.createElement("img");
          newImg.src = movie.Poster;

          list.appendChild(newLi);
          newLi.appendChild(newA);
          newA.appendChild(newImg);
      });
  };
 addMoviesToDom(movies);


const filterLatestMovies = () => {
  const lastMovies = movies.filter((movie) => movie.Year >= 2014)
  list.innerHTML = "";
  addMoviesToDom(lastMovies);
};

const filterMovies = (forWord) => {
  const filterResult = movies.filter((movie) =>  movie.Title.indexOf(forWord) !== -1);
 list.innerHTML = "";
  addMoviesToDom(filterResult);
};



const searchTitle = (searched) => {
  const searchedMovies = movies.filter((movie) => 
      movie.Title.toLowerCase().indexOf(searched.toLowerCase()) !== -1);
 list.innerHTML = "";
  addMoviesToDom(searchedMovies);
};

searchBar.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    console.log("Enter works");

    console.log(searchBar.value);
    searchTitle(searchBar.value);
    
  }
});

const addEventListeners = (radiobuttons) => {
  radiobuttons.forEach((radiobutton) => {
    const handleOnChangeEvent = (e) => {
      
      const filter = e.target.value;
     
      switch (filter) {
        case "nieuwsteFilms":
         filterLatestMovies('nieuwsteFilms');
         break;

        case "avengers":
         filterMovies("Avengers");
          break;
        case "X-Men":
         filterMovies("X-Men");
          break;
        case "princess":
         filterMovies("Princess");
          break;
        case "batman":
         filterMovies("Batman");
          break;
        default:
          alert("fout");
      }
    };
    radiobutton.addEventListener("change", handleOnChangeEvent);
  });
};

addEventListeners(radiobuttons);
