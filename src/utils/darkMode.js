// si existe el modo oscuro en el localStorage
// o si el sistema operativo tiene el modo oscuro activado pero no se ha guardado en el localStorage
if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    // agregamos la clase dark al elemento html
    document.documentElement.classList.add("dark");
    // guardamos el modo oscuro en el localStorage
    localStorage.theme = "dark";
} else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light"
}