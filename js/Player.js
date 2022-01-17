class Player {
  constructor() {
    //salvar o nome do jogador
    this.name = null;
    //dar um id unico para o jogador
    this.index = null;
    //posições de cada jogador
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  //atualizar o campo no banco de dados: ler e salvar
  getCount() {
    var playerCountRef = database.ref("playerCount");
    //on() - para continuar ouvindo as mudanças
    playerCountRef.on("value", data => {
      //val() - para copiar o valor do banco de dados para a variável global do código.
      playerCount = data.val();
    });
  }

    //atualizar o campo no banco de dados: ler e salvar
  updateCount(count) {
    //.update para armazenar no bd
    database.ref("/").update({
      playerCount: count
    });
  }

  //obter todas as informações dos jogadores
  //funções estaticas são chamadas pelas propria classe, em vez de pelos objetos dela. Static tambem é para já dizer que ela vai ficar paradinha :)
  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }
}
