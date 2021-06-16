const scenes = [
  {
    img: "./img/interação 1.gif",
    description:
      "Imerso nesse universo caótico, todo dia temos que tomar decisões, e estas nos levam para lugares completamente diferentes, ou não !",
    firstChoice: "Tomar pilula azul",
    secondChoice: "Tomar pilula vermelha",
  },
  {
    img: "./img/interação 2.gif",
    description:
      " Tarde de chuva para variar como sempre,  preciso ir trabalhar, pleno ano 7022 e ainda temos que fazer isso ! droga !!!",
    firstChoice: "Ir de posante",
    secondChoice: "Ir de busão",
  },
  {
    img: "./img/interação 2.1.jfif",
    description:
      " Dia doido , chuvoso, mas não da para ficar nesse cubiculo que chamam de casa, bora dar um giro ...",
    firstChoice: " Ir de busão espacial",
    secondChoice: " Ir de hawaianas",
  },
  {
    img: "./img/interação 3.jfif",
    description:
      "Não adianta os carros voarem se ainda existe trânsito, merda !!! mas olha só ,que gata vou ver qual é a dela",
    firstChoice: " Ir enquadrar ",
    secondChoice: "Sou feio deixa pra lá",
  },
  {
    img: "./img/interação 3.1.jpg",
    description:
      " Busão cheio da porra, o mundo deveria ser uma maravilha no segundo milênio com só 7 bilhões de habitantes, puta que pariu que gata vou chegar nela",
    firstChoice: "Conversar com a  garota",
    secondChoice: "Sou feio deixa pra lá",
  },
  {
    img: "./img/interação 3.2.gif",
    description:
      "Que chuva ducaraiii tenho que pegar o uber por conta do gesso no braço , me sinto tão sozinho no meio de 977 bilhões de pessoas,  mas pera ai que taxista robo gata",
    firstChoice: "Chegar na taxista robo",
    secondChoice: "Sou feio deixa pra lá",
  },
  {
    img: "./img/interação 4.gif",
    description: "Com a mina no metel , as coisas comecam a esquentar!",
    firstChoice: "Não tenho camisinha, bora assim mesmo",
    secondChoice: "Ficar só nos amasso",
  },
  {
    img: "./img/interação 4.1.gif",
    description: "Com a robo no carro, as coisas comecam a esquentar.",
    firstChoice: "Ficar só nos amasso",
    secondChoice: " Trocar fluidos.",
  },
  {
    img: "./img/interação 5.gif",
    description:
      " Esse Jacksosvaldo é minha cara , potsss estou 17 milliseconds atrasado para o trabalho",
    firstChoice: "Se apresar para o trabalho",
    secondChoice: "Ir tranquilão para a locadora",
  },
  {
    img: "./img/interação 5.1.gif",
    description:
      "Nossa dollyneuza o 3XY22 é sua cara, logo vai completar 3 anos e vai poder trabalhar",
    firstChoice: "Se apresar para o trabalhar",
    secondChoice: "Ir ao bar comer cachaça",
  },
  {
    img: "./img/interação 5.2.gif",
    description:
      "Não aguento mais essa vida vazia de bar , semana que vem vou comecar a ir para a igreja pentecostal loucuras de meu deus",
    firstChoice: " Ir para o bar comer cachaça",
    secondChoice: "To com fome vou beber alguma coisa",
  },
  {
    img: "./img/interação 6",
    description:
      " AAAAAAAAAAAAAAA não aguento mais chuva ! tenho que ir na locadora, vou de carro ou onibus ?! hummm , como de costume vou de carro",
    firstChoice: "morreu em um car crash com um onibus",
  },
  {
    img: "./img/interação 6.1.gif",
    description:
      "Hoje acordei bem Maria , não esta chovendo vou ir de onibus trabalhar  para mudar um pouco",
    firstChoice: "morreu tropecando na saida do busao",
  },
];

let imgElement = document.getElementById("img_1");
let descriptionElement = document.querySelector(".textDesc");
let firstChoiceElement = document.querySelector(".btn");
let secondChoiceElement = document.querySelector(".btn-2");

class Step {
  constructor(
    img,
    description,
    firstChoice,
    secondChoice,
    firstChoiceAction,
    secondChoiceAction
  ) {
    this.img = img;
    this.description = description;
    this.firstChoice = firstChoice;
    this.secondChoice = secondChoice;
    this.firstChoiceAction = firstChoiceAction;
    this.secondChoiceAction = secondChoiceAction;
  }

  populate() {
    imgElement.src = this.img;
    descriptionElement.innerHTML = this.description;
    firstChoiceElement.innerHTML = this.firstChoice;
    secondChoiceElement.innerHTML = this.secondChoice;

    firstChoiceElement.addEventListener("click", () => {
      this.firstChoiceAction();
    });
    secondChoiceElement.addEventListener("click", () => {
      this.secondChoiceAction();
    });
  }
}

function action() {
  FirstStep.populate();
}

function action1() {
    SecondStep.populate();
  }

function action2() {
    ThirdStep.populate();
}

function action3() {
    FourthStep.populate();
  }

  function action4() {
    FifthStep.populate();
  }
  
  function action5() {
    SixthStep.populate();
  }

  function action6() {
    SeventhStep.populate();
  }

  function action7() {
    EighthStep.populate();
  }

  function action8() {
    NinthStep.populate();
  }

  function action9() {
    TenthStep.populate();
  }

  function action10() {
    EleventhStep.populate();
  }

  function action11() {
    TwelfthStep.populate();
  }

  function action12() {
    ThirteenStep.populate();
  }

  
let InitialStep = new Step(
  scenes[0].img,
  scenes[0].description,
  scenes[0].firstChoice,
  scenes[0].secondChoice,
  action,
  action1
);
let FirstStep = new Step(
  scenes[1].img,
  scenes[1].description,
  scenes[1].firstChoice,
  scenes[1].secondChoice,
  action2,
  action3
);
let SecondStep = new Step(
  scenes[2].img,
  scenes[2].description,
  scenes[2].firstChoice,
  scenes[2].secondChoice,
  action3,
  action4
);
let ThirdStep = new Step(
  scenes[3].img,
  scenes[3].description,
  scenes[3].firstChoice,
  scenes[3].secondChoice,
  action5,
  action5
);
let FourthStep = new Step(
    scenes[4].img,
    scenes[4].description,
    scenes[4].firstChoice,
    scenes[4].secondChoice,
    action5,
    action6
  );
let FifthStep = new Step(
  scenes[5].img,
  scenes[5].description,
  scenes[5].firstChoice,
  scenes[5].secondChoice,
  action6,
  action6
);
let SixthStep = new Step(
  scenes[6].img,
  scenes[6].description,
  scenes[6].firstChoice,
  scenes[6].secondChoice,
  action7,
  action8
);
let SeventhStep = new Step(
  scenes[7].img,
  scenes[7].description,
  scenes[7].firstChoice,
  scenes[7].secondChoice,
  action8,
  action9
);
let EighthStep = new Step(
  scenes[8].img,
  scenes[8].description,
  scenes[8].firstChoice,
  scenes[8].secondChoice,
  action10,
  action10
);
let NinthStep = new Step(
  scenes[9].img,
  scenes[9].description,
  scenes[9].firstChoice,
  scenes[9].secondChoice,
  action10,
  action11
);
let TenthStep = new Step(
  scenes[10].img,
  scenes[10].description,
  scenes[10].firstChoice,
  scenes[10].secondChoice,
  action11,
  action11
);
let EleventhStep = new Step(
  scenes[11].img,
  scenes[11].description,
  scenes[11].firstChoice,
  scenes[11].secondChoice,
  action12,
  action12
);
let TwelfthStep = new Step(
  scenes[12].img,
  scenes[12].description,
  scenes[12].firstChoice,
  scenes[12].secondChoice,
  action12,
  action12
);

InitialStep.populate();
