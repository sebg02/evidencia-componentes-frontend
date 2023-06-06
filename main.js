btnTheme = document.getElementById("btnTheme");

btnTheme.addEventListener("click", () => {
  btnTheme.innerHTML == "🌞"
    ? (btnTheme.innerHTML = "🌒")
    : (btnTheme.innerHTML = "🌞");
  document.body.classList.toggle("dark-theme");
});
