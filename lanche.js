const tblPedido = document.getElementById('tblPedido');
const tblItens = document.getElementById('tblItens');

let itens = ['Cachorro-Quente', 'X-Salada', 'X-Bacon', 'Torrada Simples', 'Refrigerante'];
let preco = [4.00, 4.50, 5.00, 2.00, 1.50];
let total = [];

console.log(itens);
console.log(preco);

function pedido(){

    const codigo = parseInt(document.getElementById('codigo').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);

    if(isNaN(codigo) || isNaN(quantidade) || codigo < 0 || codigo >= itens.length || quantidade <= 0){
        alert('Insira um valor de codigo e quantidade válidos');
        return;
    }

    let valor = preco[codigo] * quantidade;
    total.push({ codigo, quantidade, valor });
    console.log(total);
    listPedido();
}

function listPedido(){

//* o i é para listar todos os itens adicionados 

    for(let i=0; i< total.length; i++){

    tblPedido.innerHTML += `
    <tr>
        <td>${total[i].codigo}</td>
        <td>${itens[total[i].codigo]}</td>
        <td>${total[i].quantidade}</td>
        <td>R$${preco[total[i].codigo].toFixed(2)}</td>
        <td>R$${total[i].valor.toFixed(2)}</td>
    </tr>
    `
    }
}

function limparPedido(){
    total = [];
    tblPedido.innerHTML = '';
    list();
}

function listConsulta(){
    
    for(let i=0; i< itens.length; i++){
        tblItens.innerHTML += `
        <tr>
        <th>${i}</th>
        <th>${itens[i]}</th>
        <th>R$${preco[i].toFixed(2)}</th>
        </tr>
        `
    }
}

function limparConsulta(){
    tblItens.innerHTML = '';
}