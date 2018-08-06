function contactStore() {
    var inputName = document.getElementById("name");
    localStorage.setItem("name", inputName.value);
    var inputEmail = document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
    var inputPhone = document.getElementById("phone");
    localStorage.setItem("phone", inputPhone.value);
}

function contactLoadData() {
    $(input[name=name]).val(localStorage.getItem("name"));
    $(input[name=email]).val(localStorage.getItem("email"));
    $(input[name=phone]).val(localStorage.getItem("phone"));
});

function addMovie() {
    var inputTitle = document.getElementById("title");
    localStorage.setItem("title", inputTitle.value);
    var inputYear = document.getElementById("year");
    localStorage.setItem("year", inputYear.value);
    var inputLength = document.getElementById("length");
    localStorage.setItem("length", inputLength.value);
    var inputRating = document.getElementById("rating");
    localStorage.setItem("rating", inputRating.value);
    alert("Information stored in local storage.");
}

function loadMovies() {
    document.getElementById('title1').innerHTML = "Manual Title";
}
