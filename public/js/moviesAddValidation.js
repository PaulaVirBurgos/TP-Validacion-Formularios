window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//

  let qs = (selector) => document.querySelector(selector);
  let inputTitle = qs("#title");
  let error = false;
  inputTitle.focus();
  let form = qs("form");
  let elements = form.elements;
  let inputRating = qs("#rating");
  let inputAwards = qs("#awards");
  let inputReleaseDate = qs("#release_date");
  let length = qs("#length");
  let genre = qs("#genre_id");
  let errores = qs(".errores");


  inputTitle.addEventListener("blur", (e) => {
    if (!e.target.value) {
      qs("#errorTitle").innerHTML = "El campo no titulo puede estar vacio";
      e.target.classList.add('is-invalid')
    } else {
      qs("#errorTitle").innerHTML = null;
      e.target.classList.remove('is-invalid')
    }
  });
  inputRating.addEventListener("blur", (e) => {
    switch (true) {
        case !e.target.value:
          qs("#errorRating").innerHTML = "El campo rating puede estar vacio";
          e.target.classList.add('is-invalid')
          break;
        case e.target.value < 0:
          qs("#errorRating").innerHTML = "El rating no puede ser menor a 0";
          e.target.add('is-invalid')
          break;
          case e.target.value > 10:
          qs("#errorRating").innerHTML = "El rating no puede ser mayor a 10";
          e.target.classList.add('is-invalid')
          break;
        default:
          qs("#errorRating").innerHTML = null;
          e.target.classList.remove('is-invalid')
          break;
      }
  });

  inputAwards.addEventListener("blur", (e) => {
    switch (true) {
        case !e.target.value:
          qs("#errorAwards").innerHTML = "El campo awards puede estar vacio";
          e.target.classList.add('is-invalid')
          break;
        case e.target.value < 0:
          qs("#errorAwards").innerHTML = "El campo awards no puede ser menor a 0";
          e.target.classList.add('is-invalid')
          break;
          case e.target.value > 10:
          qs("#errorAwards").innerHTML = "El campo awards no puede ser mayor a 10";
          e.target.classList.add('is-invalid')
          break;
        default:
          qs("#errorAwards").innerHTML = null;
          e.target.classList.remove('is-invalid')
          break;
      }
  });

  inputReleaseDate.addEventListener("blur", (e) => {
    if (!e.target.value) {
      qs("#errorRelease").innerHTML = "El campo no titulo puede estar vacio";
      e.target.classList.add('is-invalid')
    } else {
      qs("#errorRelease").innerHTML = null;
      e.target.classList.remove('is-invalid')
    }
  });

  length.addEventListener("blur", (e) => {
    switch (true) {
      case !e.target.value:
        qs("#errorLength").innerHTML = "El campo duracion puede estar vacio";
        e.target.classList.add('is-invalid')
        break;
      case e.target.value < 60:
        qs("#errorLength").innerHTML = "La duracion no puede ser menor a 60";
        e.target.classList.add('is-invalid')
        break;
        case e.target.value > 360:
        qs("#errorLength").innerHTML = "La duracion no puede ser mayor a 360";
        e.target.classList.add('is-invalid')
        break;
      default:
        qs("#errorLength").innerHTML = null;
        e.target.classList.remove('is-invalid')
        break;
    }
  });

  genre.addEventListener("blur", (e) => {
    if (!e.target.value) {
      qs("#errorGenre").innerHTML = "El campo no titulo puede estar vacio";
      e.target.classList.add('is-invalid')
    } else {
      qs("#errorGenre").innerHTML = null;
      e.target.classList.remove('is-invalid')
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (let i = 0; i < elements.length - 1; i++) {
      if(elements[i].classList.contains('is-invalid')|| !elements[i].value){
        error= true
      }
    }
    if (!error) {
      e.target.submit();
    } else {
    errores.innerHTML = `<li class="alert-warning">Tiene errores pendientes</li>`
    }
  });
};
