class Personagem{
  constructor(imagem){    
  this.imagem = imagem;
  this.matriz = []
    
    this.frameAtual = 0;
  }
  exibe(){
  image(this.imagem, 0, height - 135, 110, 135, this.matriz[this.frameAtual][0], this.matrix[this.frameAtual][1], 0, 220, 270);
    this.anima();
  }
  anima(){
    this.frameAtual++;
    if(this.frameAtual >= this.matriz.length - 1){
    this.frameAtual = 0;
  }
  
}
  
}