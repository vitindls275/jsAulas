class Produto{
    constructor(valorId,valorNome,valorMarca,valorPreco,valorQtEstoque,valorVendida){
    this.id = valorId;
    this.nome = valorNome;
    this.marca = valorMarca;
    this.preco = valorPreco;
    this.qtEstoque = valorQtEstoque;
    this.qtVendida = valorVendida;
    }
    venda(quantidade){
        this.qtEstoque = this.qtEstoque - quantidade;
        this.qtVendida = this.qtVendida + quantidade;
    }
}

var Produto1 = new Produto(1,"Chocolate","Nestle",10,200);
var Produto2 = new Produto(2,"refri","CocaCola",4,180);
var Produto2 = new Produto();