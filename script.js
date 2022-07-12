function validaCampo(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();
    let divMsg = document.querySelector("#msgm");
    divMsg.textContent = "";
    if (this.value == "") {
      document.querySelector(".mensagem").innerHTML =
        "verifique o preenchimento dos campos em vermelho";
      this.classList.add("erro");
      this.parentNode.classList.add("erro");
      let msg = document.createElement("div");
      msg.classList.add("alert");
      msg.classList.add("alert-danger");
      msg.textContent = "Por favor, preencha os campos em vermelho!!!";
      let msgm = document.querySelector("#msgm");
      msgm.appendChild(msg);
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
        "Por favor, preencha os campos em vermelho!!!";
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
        "Por favor, preencha os campos em vermelho!!!";
      this.classList.add("erro");
      this.parentNode.classList.add("erro");
      return false;
    }
  });
}

let camposObrigatorios = document.querySelectorAll("input.obrigatorio");
let camposNumericos = document.querySelectorAll("input.numero");
let camposEmail = document.querySelectorAll("input.email");

let camposTelefone = document.querySelectorAll("input.telefone");
for (let emFoco of camposObrigatorios) {
  validaCampo(emFoco);
}

for (let emFoco of camposNumericos) {
  validaCampoNumerico(emFoco);
}

for (let emFoco of camposEmail) {
  validaEmail(emFoco);

  for (let emFoco of camposTelefone) {
    validaEmail(emFoco);
  }
  let textUf = document.querySelectorAll("input.uf");
  let caracterMax = textUf.maxLength;

  let numFone = document.querySelectorAll("input.telefone");
  let caractMax = numFone.maxLength;

  let calcularBtn = document.getElementById("calcular");
  let calcular = false;
}
