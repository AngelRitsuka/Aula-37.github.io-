class Game {
  constructor() {}

//ler o gameState apenas com getState , aula c37
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  //para o aluno fazer na c37
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  //depois de criar as variaveis e a matriz de carros, crie um método start
  start() {
    //carregar os players
    player = new Player();
    playerCount = player.getCount();

    //formulario aparecer antes do jogo
    form = new Form();
    form.display();

    //criar os sprites dos carros
    //o sprite deve ficar próximo ao centro da tela na direção x
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;


    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }


  //Escrever um método PLAY para exibir os terrenos depois que receber as informações
  play() {
    this.handleElements();

    //obter informações do banco de dados
    Player.getPlayersInfo();

    //Mostrar a pista conforme o carro vai se movendo
    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      drawSprites();
    }
  }
}
