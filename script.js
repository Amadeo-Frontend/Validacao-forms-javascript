function validaCampo(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();

    if (this.value == "") {
      document.querySelector(".mensagem").innerHTML =
        "verifique o preenchimento dos campos em vermelho";
      this.classList.add("erro");
      this.parentNode.classList.add("erro");
      return false;
    } else {
      document.querySelector(".mensagem").innerHTML = "";
      this.classList.remove("erro");
      this.parentNode.classList.remove("erro");
    }
  });
}

function validaCampoNumerico(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();

    let numero = this.value.match(/^[/d]5-[\d]3/)
      ? this.value.replace(/-/, "")
      : this.value;
    if (numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
      document.querySelector(".mensagem").innerHTML = "";
      this.parentNode.classList.remove("erro");
    } else {
      document.querySelector(".mensagem").innerHTML =
        "verifique o preenchimento dos campos em destaque";
      this.classList.add("erro");
      this.parentNode.classList.add("erro");
      return false;
    }
  });
}

function validaEmail(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();

    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
    if (this.value.match(emailValido)) {
      document.querySelector(".mensagem").innerHTML = "";
      this.classList.remove("erro");
      this.parentNode.classList.remove("erro");
    } else {
      document.querySelector(".mensagem").innerHTML =
        "verifique o preenchimento dos campos em destaque";
      this.classList.add("erro");
      this.parentNode.classList.add("erro");
      return false;
    }
  });
}

let camposObrigatorios = document.querySelectorAll("input.obrigatorio");
let camposNumericos = document.querySelectorAll("input.numero");
let camposEmail = document.querySelectorAll("input.email");

for (let emFoco of camposObrigatorios) {
  validaCampo(emFoco);
}

for (let emFoco of camposNumericos) {
  validaCampoNumerico(emFoco);
}

for (let emFoco of camposEmail) {
  validaEmail(emFoco);
}
let textUf = document.querySelectorAll("input.uf");
let caracterMax = textUf.maxLength;

let calcularBtn = document.getElementById("calcular");
let calcular = false;

calcularBtn.addEventListener("click", () => {
  if (calcular) {
    calcularBtn.innerText = "Enviado";
    calcularBtn.style = "background-color:aqua;";
    calcular = false;
  } else {
    calcularBtn.innerText = "Enviar";
    calcularBtn.style = "background-color:darkblue;";
    calcular = true;
  }
});
