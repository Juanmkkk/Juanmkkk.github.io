let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (usuarios[usuario] && usuarios[usuario] === password) {
    document.getElementById("registro").classList.add("oculto");
    document.getElementById("panel").classList.remove("oculto");
    mostrarSeccion('inicio');
  } else {
    error.textContent = "Usuario o contraseña incorrectos.";
  }
}

function registrarse() {
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (usuario === "" || password === "") {
    error.textContent = "Completa todos los campos.";
    return;
  }

  if (usuarios[usuario]) {
    error.textContent = "El usuario ya existe. Inicia sesión.";
    return;
  }

  usuarios[usuario] = password;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  error.textContent = "¡Registro exitoso! Ahora inicia sesión.";
}

function mostrarSeccion(id) {
  document.querySelectorAll(".seccion").forEach(seccion => {
    seccion.classList.add("oculto");
  });
  document.getElementById(id).classList.remove("oculto");
}

function cerrarSesion() {
  document.getElementById("panel").classList.add("oculto");
  document.getElementById("registro").classList.remove("oculto");
}

function enviarSugerencia(e) {
  e.preventDefault();
  const input = document.getElementById("sugerencia");
  const mensaje = document.getElementById("mensajeSugerencia");
  mensaje.textContent = `¡Gracias por tu mensaje: "${input.value}"!`;
  input.value = "";
}
