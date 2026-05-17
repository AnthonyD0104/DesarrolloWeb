function cambiarLuz(color) {
    const luces = ["rojo", "amarillo", "verde"];
    luces.forEach(luz => {
        const elemento = document.getElementById(luz);
        elemento.classList.remove(
            "bg-danger",
            "bg-warning",
            "bg-success"
        );
        elemento.classList.add("bg-secondary");
    });
    const activo = document.getElementById(color);
    activo.classList.remove("bg-secondary");
    if (color === "rojo") activo.classList.add("bg-danger");
    if (color === "amarillo") activo.classList.add("bg-warning");
    if (color === "verde") activo.classList.add("bg-success");
}