window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrolled = window.scrollY;

  if (scrolled > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar-expanded");

    // Menambahkan kelas navbar-scrolled jika belum di-scroll tapi navbar sudah di-expand
    if (!navbar.classList.contains("navbar-scrolled")) {
      navbar.classList.add("navbar-scrolled");
    }
  });
