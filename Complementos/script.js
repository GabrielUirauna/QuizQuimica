var Icone = $(".IconSvg");

var Ovelha = $("#Ovelha");

var StartBtn = $("#StartButton");

var Cont = 0;

var PerguntaAtual = 0;

var Perguntas = [
  {
    Pergunta: "Qual a função oxigenada que possui o grupo funcional -OH?",
    Opções: ["Álcool", "Cetona", "Ácido carboxílico", "Aldeído"],
    Resposta: 0,
  },
  {
    Pergunta: "Qual a função nitrogenada que possui o grupo funcional -NH2?",
    Opções: ["Amida", "Amina", "Nitrila", "Nitrocomposto"],
    Resposta: 1,
  },
  {
    Pergunta: "Qual a função oxigenada que possui o grupo funcional -COOH?",
    Opções: ["Cetona", "Ácido carboxílico", "Éster", "Anidrido"],
    Resposta: 1,
  },
  {
    Pergunta:
      "Qual a função nitrogenada que possui o grupo funcional -NH-CO-R?",
    Opções: ["Nitrila", "Amina", "Amida", "Nitrocomposto"],
    Resposta: 2,
  },
  {
    Pergunta: "Qual a função oxigenada que possui o grupo funcional -C=O?",
    Opções: ["Álcool", "Ácido carboxílico", "Aldeído", "Cetona"],
    Resposta: 3,
  },
];

Icone.click(() => {
  if (Cont == 0) {
    Ovelha.css("top", "0px");
    $("#IconSvg").attr("fill", "#0d0229");

    Cont = 1;
  } else {
    Ovelha.css("top", "-100%");
    $("#IconSvg").attr("fill", "#d1d1d1");

    Cont = 0;
  }
});

StartBtn.click(() => {
  window.location.href = "Perguntas.html";
});

document.onload = ConfigPergunta();

function ConfigPergunta() {
  $(".Opções").unbind();
  $("#Pergunta").text(Perguntas[PerguntaAtual].Pergunta);
  $(".Opções").each(function (In) {
    $(this).text(Perguntas[PerguntaAtual].Opções[In]);
    console.log("AAA");
  });
  $(".Opções").click(function () {
    if ($(this).index() - 1 == Perguntas[PerguntaAtual].Resposta) {
      PerguntaAtual++;
      alert("Resposta certa");
      ConfigPergunta();
    } else {
      showErrorPopup("Resposta errada");
    }
  });
}

function showErrorPopup(message) {
  const popup = document.createElement("div");
  popup.classList.add("error-popup");
  popup.innerText = message;
  document.body.appendChild(popup);

  setTimeout(() => { 
    popup.remove();
  }, 3000);
}


