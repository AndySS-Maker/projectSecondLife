const scenes = [
    {img: './img/interação 1.gif', description: 'Imerso nesse universo caotico, todo dia temos que tomar decisoes, e estas nos levam para lugares completamente diferentes, ou não !' , firstChoice: 'Tomar pirula azul', secondChoice: 'Tomar pirula vermelha'},
    {img: './img/interação 2.gif', description: ' Tarde de chuva para variar como sempre,  preciso ir trabalhar, pleno ano 7022 e ainda temos que fazer isso ! droga !!!', firstChoice: 'Ir de posante', secondChoice: 'Ir de busão'},
    {img: './img/interação 2.1.jfif', description: ' dia doido , chuvoso, mas não da para ficar nesse cubiculo que chamam de casa, bora dar um giro ...', firstChoice: ' ir de busão espacial', secondChoice: ' ir de hawaianas'},
    {img: './img/interação 3.jfif', description: 'Não adianta os carros voarem se ainda existe transito, merda !!! mas olha ,só que gata vou ver qual é a dela', firstChoice: ' ir enquadrar '},
    {img: './img/interação 3.1.jpg', description: ' Busão cheio da porra, o mundo deveria ser uma maravilha no segundo milenio com so 7 bilhoes de habitantes, puta que pariu que gata vou chegar nela', firstChoice: 'ir conversar com a  garota', secondChoice: 'Sou feio deixa pra lá'},
    {img: './img/interação 3.2.gif', description: 'Que chuva ducaraiii tenho que pegar o uber por conta do gesso no braço , me sinto tão sozinho no meio de 977 bilhões de pessoas,  mas pera ai que taxista robo gata', firstChoice: 'chegar na taxista robo'},
    {img: './img/interação 4.gif', description: ': Com a mina no metel , as coisas comecam a esquentar', firstChoice: 'Não tenho camisinha, bora assim mesmo', secondChoice: 'Ficar só nos amasso'},
    {img: './img/interação 4.1.gif', description: 'Com a robo no carro, as coisas comecam a esquentar.', firstChoice: 'Ficar só nos amasso', secondChoice: ' trocar engrenagens e fluidos.'},
    {img: './img/interação 5.gif', description: ' Esse Jacksosvaldo é minha cara , potsss estou 17 milliseconds atrasado para o trabalho', firstChoice: 'Se apresar para o trabalhar'},
    {img: './img/interação 5.1.gif', description: 'Nossa dollyneuza o 3XY22 é sua cara, logo vai completar 3 anos e vai poder trabalhar', firstChoice: 'Se apresar para o trabalhar', secondChoice: 'ir para o bar tomar comer cachaça'},
    {img: './img/interação 5.2.gif', description: 'Não aguento mais essa vida vazia de bar , semana que vem vou comecar a ir para a igreja', firstChoice: ' ir para o bar tomar comer cachaça'},
    {img: './img/interação 6', description: ' AAAAAAAAAAAAAAA não aguento mais chuva ! tenho que ir trabajar, vou de carro ou de onibus ?! hummm , como de costume de carro', firstChoice: 'morreu em um car crash com um onibus'},
    {img: './img/interação 6.1.gif', description: 'Hoje acordei bem Maria , não esta chovendo vou ir de onibus trabalhar  para mudar um pouco', firstChoice: 'morreu tropecando na saida do busao'}
];

let imgElement = document.getElementById('img_1');
let descriptionElement = document.querySelector('.textDesc');
let firstChoiceElement = document.querySelector('.btn');
let secondChoiceElement = document.querySelector('.btn-2');

class Step {
    constructor(img, description, firstChoice, secondChoice, firstChoiceAction, secondChoiceAction){
    this.img = img;
    this.description = description;
    this.firstChoice = firstChoice;
    this.secondChoice = secondChoice;
    this.firstChoiceAction = firstChoiceAction;
    this.secondChoiceAction = secondChoiceAction;
    }

    populate (){
        imgElement.src = this.img;
        descriptionElement.innerHTML = this.description;
        firstChoiceElement.innerHTML = this.firstChoice;
        secondChoiceElement.innerHTML = this.secondChoice;
        
        firstChoiceElement.addEventListener('click', () => {this.firstChoiceAction()});
        secondChoiceElement.addEventListener('click', () => {this.secondChoiceAction()});
    }

}

let FirstStep = new Step(scenes[0].img, scenes[0].description, scenes[0].firstChoice, scenes[0].secondChoice, firstChoiceAction(SecondStep), secondChoiceAction(ThirdStep));
let SecondStep = new Step(scenes[1].img, scenes[1].description, scenes[1].firstChoice, scenes[1].secondChoice, firstChoiceAction(), secondChoiceAction());
let ThirdStep = new Step(scenes[2].img, scenes[2].description, scenes[2].firstChoice, scenes[2].secondChoice, firstChoiceAction(), secondChoiceAction());
//let FourthStep = new Step(scenes[3].img, scenes[3].description, scenes[3].firstChoice, scenes[3].secondChoice, firstChoiceAction(), secondChoiceAction());
//let FifthStep = new Step(scenes[4].img, scenes[4].description, scenes[4].firstChoice, scenes[4].secondChoice, firstChoiceAction(), secondChoiceAction());
//let SixthStep = new Step(scenes[5].img, scenes[5].description, scenes[5].firstChoice, scenes[5].secondChoice, firstChoiceAction(), secondChoiceAction());
//let SeventhStep = new Step(scenes[6].img, scenes[6].description, scenes[6].firstChoice, scenes[6].secondChoice, firstChoiceAction(), secondChoiceAction();)
//let EighthStep = new Step(scenes[7].img, scenes[7].description, scenes[7].firstChoice, scenes[7].secondChoice, firstChoiceAction(), secondChoiceAction());
//let NinthStep = new Step(scenes[8].img, scenes[8].description, scenes[8].firstChoice, scenes[8].secondChoice, firstChoiceAction(), secondChoiceAction());
//let TenthStep = new Step(scenes[9].img, scenes[9].description, scenes[9].firstChoice, scenes[9].secondChoice, firstChoiceAction(), secondChoiceAction());
//let EleventhStep = new Step(scenes[10].img, scenes[10].description, scenes[10].firstChoice, scenes[10].secondChoice, firstChoiceAction(), secondChoiceAction());
//let TwelfthStep = new Step(scenes[11].img, scenes[1]1.description, scenes[1].1firstChoice, scenes[1].s1econdChoice, firstChoiceAction(), secondChoiceAction());
//let ThirteenthStep = new Step(scenes[12].img, scenes[1].2description, scenes[1].fi2rstChoice, scenes[1].seco2ndChoice, firstChoiceAction(), secondChoiceAction());

FirstStep.populate();
//SecondStepStep.populate();
//ThirdStepStep.populate();
//FourthStepStep.populate();
//FifthStepStep.populate();
//SixthStep.populate();
//SeventhStepStep.populate();
//EighthStepStep.populate();
//NinthStepStep.populate();
//TenthStepStep.populate();
//EleventhStepStep.populate();
//TwelfthStepStep.populate();
//ThirteenthStepStep.populate();
