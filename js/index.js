const scenes = [
  {
    img: "./img/interação 1.gif",
    description:
      "Imerso nesse universo caótico, todo dia temos que tomar decisões, e estas nos levam para lugares completamente diferentes, ou não !",
    firstChoice: "Tomar pilula azul",
    secondChoice: "Tomar pilula vermelha",
    sound: "../sounds/people-lounge.mp3",
  },
  {
    img: "./img/interação 2.gif",
    description:
      " Tarde de chuva para variar,  preciso ir trabalhar, pleno ano 7022 e ainda temos que fazer isso, droga !!!",
    firstChoice: "Ir de posante",
    secondChoice: "Ir de busão",
    sound: "../sounds/thunders.wav",
  },
  {
    img: "./img/interação 2.1.jfif",
    description:
      " Dia doido , chuvoso, mas não da para ficar nesse cubiculo que chamam de casa, bora dar um giro ...",
    firstChoice: " Ir de busão espacial",
    secondChoice: " Ir de hawaianas",
    sound: "../sounds/thunders.wav",
  },
  {
    img: "./img/interação 3.jfif",
    description:
      "Não adianta os carros voarem se ainda existe trânsito, merda !!! mas olha só ,que gata vou ver qual é a dela",
    firstChoice: " Ir enquadrar ",
    secondChoice: "Sou feio deixa pra lá",
    sound: "../sounds/street-traffic.mp3",
  },
  {
    img: "./img/interação 3.1.jpg",
    description:
      " Busão lotado, o mundo deveria ser uma maravilha no segundo milênio com só 7 bilhões de habitantes, pots que gata vou chegar nela",
    firstChoice: "Conversar com a  garota",
    secondChoice: "Sou feio deixa pra lá",
    sound: "../sounds/bus-interior.mp3",
  },
  {
    img: "./img/interação 3.2.gif",
    description:
      "Que chuva caramba tenho que pegar o uber por conta do braço engessado, ai me sinto tão sozinho no meio de 977 bilhões de pessoas,  mas pera ai que taxista robo com curvas sensuais.",
    firstChoice: "Chegar na robo taxista",
    secondChoice: "Sou feio deixa pra lá",
    sound: "../sounds/thunders.wav",
  },
  {
    img: "./img/interação 4.gif",
    description: "Com a mina no metel , as coisas comecam a esquentar!",
    firstChoice: "Não tenho camisinha, bora assim mesmo",
    secondChoice: "Ficar só nos amasso",
    sound: "../sounds/street-alley.mp3",
  },
  {
    img: "./img/interação 4.1.gif",
    description: "Com a robo no carro, as coisas comecam a esquentar.",
    firstChoice: "Ficar só nos amasso",
    secondChoice: " Trocar fluidos.",
    sound: "../sounds/street-alley.mp3",
  },
  {
    img: "./img/interação 5.gif",
    description:
      " Essas meninas são a sua cara Dollycleide, potsss estou 17 milliseconds atrasado para o trabalho",
    firstChoice: "Se apresar para o trabalho",
    secondChoice: "Ir tranquilão para a locadora",
    sound: "../sounds/kids-playing.mp3",
  },
  {
    img: "./img/interação 5.1.gif",
    description:
      "Nossa Dollyneuza a 3XY22 é minha cara, logo vai completar 3 anos e vai poder trabalhar",
    firstChoice: "Se apresar para o trabalhar",
    secondChoice: "Ir ao bar comer cachaça",
    sound: "../sounds/kids-playing.mp3",
  },
  {
    img: "./img/interação 5.2.gif",
    description:
      "Não aguento mais essa vida vazia de bar , semana que vem vou comecar a ir para a igreja pentecostal loucuras de meu deus",
    firstChoice: " Ir para o bar comer cachaça",
    secondChoice: "To com fome vou beber alguma coisa",
    sound: "../sounds/food-court.mp3",
  },
  {
    img: "./img/interação 6.gif",
    description:
      " AAAAAAAAAAAAAAA não aguento mais chuva ! tenho que ir na locadora, vou de carro ou onibus ?! hummm , como de costume vou de carro",
    firstChoice: "Sair de primerinha",
    secondChoice: "Sair cantando pneus",
    sound: "../sounds/thunders.wav",
  },
  {
    img: "./img/interação 6.1.gif",
    description:
      "Hoje acordei bem Dollynete , não esta chovendo vou ir de ônibus trabalhar  para mudar um pouco",
    firstChoice: "Ir surfando em cima do ônibus",
    secondChoice: "Enfrentar o ônibus lotado na pandemia",
    sound: "../sounds/street-alley.mp3",
  },
  {
    img: "./img/game over.gif",
    description:
      "Houve um acidente envolvendo um ônibus, e nosso heroi se foi...",
    firstChoice: "Você Se Fud%$# !!!",
    secondChoice: "Recomeçar",
    sound: "",
  },
  {
    img: "./img/paramental img.jfif",
    description: "",
    firstChoice: "Start",
    secondChoice: "Game",
    sound: "",
  },
];

let imgElement = document.getElementById("img_1");
let descriptionElement = document.querySelector(".textDesc");
let firstChoiceElement = document.querySelector(".btn");
let secondChoiceElement = document.querySelector(".btn-2");
let soundElement = document.querySelector(".sound");

class Step {
  constructor(
    img,
    description,
    firstChoice,
    secondChoice,
    sound,
    firstChoiceAction,
    secondChoiceAction
  ) {
    this.img = img;
    this.description = description;
    this.firstChoice = firstChoice;
    this.secondChoice = secondChoice;
    this.sound = sound;
    this.firstChoiceAction = firstChoiceAction;
    this.secondChoiceAction = secondChoiceAction;
  }

  populate() {
    imgElement.src = this.img;
    descriptionElement.innerHTML = this.description;
    firstChoiceElement.innerHTML = this.firstChoice;
    secondChoiceElement.innerHTML = this.secondChoice;
    soundElement.src = this.sound;

    firstChoiceElement.addEventListener("click", () => {
      this.firstChoiceAction();
    });
    secondChoiceElement.addEventListener("click", () => {
      this.secondChoiceAction();
    });
  }
}

let startStep = new Step(
  scenes[14].img,
  scenes[14].description,
  scenes[14].firstChoice,
  scenes[14].secondChoice,
  scenes[14].sound,
  () => {
    InitialStep.populate();
  },
  () => {
    InitialStep.populate();
  }
);

let InitialStep = new Step(
  scenes[0].img,
  scenes[0].description,
  scenes[0].firstChoice,
  scenes[0].secondChoice,
  scenes[0].sound,
  () => {
    FirstStep.populate();
  },
  () => {
    SecondStep.populate();
  }
);
let FirstStep = new Step(
  scenes[1].img,
  scenes[1].description,
  scenes[1].firstChoice,
  scenes[1].secondChoice,
  scenes[1].sound,
  () => {
    ThirdStep.populate();
  },
  () => {
    FourthStep.populate();
  }
);
let SecondStep = new Step(
  scenes[2].img,
  scenes[2].description,
  scenes[2].firstChoice,
  scenes[2].secondChoice,
  scenes[2].sound,
  () => {
    FourthStep.populate();
  },
  () => {
    FifthStep.populate();
  }
);
let ThirdStep = new Step(
  scenes[3].img,
  scenes[3].description,
  scenes[3].firstChoice,
  scenes[3].secondChoice,
  scenes[3].sound,
  () => {
    SixthStep.populate();
  },
  () => {
    SixthStep.populate();
  }
);
let FourthStep = new Step(
  scenes[4].img,
  scenes[4].description,
  scenes[4].firstChoice,
  scenes[4].secondChoice,
  scenes[4].sound,
  () => {
    SixthStep.populate();
  },
  () => {
    SeventhStep.populate();
  }
);
let FifthStep = new Step(
  scenes[5].img,
  scenes[5].description,
  scenes[5].firstChoice,
  scenes[5].secondChoice,
  scenes[5].sound,
  () => {
    SeventhStep.populate();
  },
  () => {
    SeventhStep.populate();
  }
);
let SixthStep = new Step(
  scenes[6].img,
  scenes[6].description,
  scenes[6].firstChoice,
  scenes[6].secondChoice,
  scenes[6].sound,
  () => {
    EighthStep.populate();
  },
  () => {
    NinthStep.populate();
  }
);
let SeventhStep = new Step(
  scenes[7].img,
  scenes[7].description,
  scenes[7].firstChoice,
  scenes[7].secondChoice,
  scenes[7].sound,
  () => {
    NinthStep.populate();
  },
  () => {
    TenthStep.populate();
  }
);
let EighthStep = new Step(
  scenes[8].img,
  scenes[8].description,
  scenes[8].firstChoice,
  scenes[8].secondChoice,
  scenes[8].sound,
  () => {
    EleventhStep.populate();
  },
  () => {
    EleventhStep.populate();
  }
);
let NinthStep = new Step(
  scenes[9].img,
  scenes[9].description,
  scenes[9].firstChoice,
  scenes[9].secondChoice,
  scenes[9].sound,
  () => {
    EleventhStep.populate();
  },
  () => {
    TwelfthStep.populate();
  }
);
let TenthStep = new Step(
  scenes[10].img,
  scenes[10].description,
  scenes[10].firstChoice,
  scenes[10].secondChoice,
  scenes[10].sound,
  () => {
    TwelfthStep.populate();
  },
  () => {
    TwelfthStep.populate();
  }
);
let EleventhStep = new Step(
  scenes[11].img,
  scenes[11].description,
  scenes[11].firstChoice,
  scenes[11].secondChoice,
  scenes[11].sound,
  () => {
    ThirteenthStep.populate();
  },
  () => {
    ThirteenthStep.populate();
  }
);
let TwelfthStep = new Step(
  scenes[12].img,
  scenes[12].description,
  scenes[12].firstChoice,
  scenes[12].secondChoice,
  scenes[12].sound,
  () => {
    ThirteenthStep.populate();
  },
  () => {
    ThirteenthStep.populate();
  }
);
let ThirteenthStep = new Step(
  scenes[13].img,
  scenes[13].description,
  scenes[13].firstChoice,
  scenes[13].secondChoice,
  scenes[13].sound,
  () => {
    InitialStep.populate();
  },
  () => {
    InitialStep.populate();
  }
);

startStep.populate();
