
//function inicial na chamada do button
function init() 
{
    document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Previne o envio padrão do formulário

    //Coleta os dados do formulário
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productDescription = document.getElementById('productDescription').value;

    //Aqui você pode enviar esses dados para o servidor ou fazer o que quiser com eles

    console.log("Nome do Produto: "+ productName);
    console.log("Preço: "+ productPrice);
    console.log("Descrição: "+ productDescription);
    alert("Cadastro efetuado com sucesso!!!")
    //Limpa o formulário
    this.reset();
});
}