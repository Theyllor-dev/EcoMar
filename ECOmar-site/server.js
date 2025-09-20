let denuncias=JSON.parse(localStorage.getItem('itens')) || [];;

function denunciar(){

let nome=document.getElementById('inNome').value
let email=document.getElementById('inEmail').value
let local=document.getElementById('inLocal').value
let denuncia=document.getElementById('inDenuncia').value
if(!nome){
    nome="Anônimo"
}
if(!email){
    email="Anônimo"
}
if (!local || !denuncia) {
    alert("Por favor, preencha os campos obrigatórios: local e denúncia.");
    return;
}

if(nome.length>500 || email.length>500 || local.length>500 || denuncia.length>500){
    alert("Os campos devem ter menos de 500 caracteres.");
    return;
}
alert("Obrigado pela Denuncia!!")
denuncias.push({nome,email,local,denuncia})

localStorage.setItem('itens', JSON.stringify(denuncias));


document.getElementById("inNome").value = "";
document.getElementById("inEmail").value = "";
document.getElementById("inLocal").value = "";
document.getElementById("inDenuncia").value = "";
}
function limparTabela(){
    localStorage.removeItem('itens');
    denuncias = [];
    tabela.innerHtml = "";
    alert('tela limpa com sucesso!!')

}

// falta colocar o local storage ok
// ajustar pra quando o usuario denunciar, limpe os campos ok
// ajustar pra quando o usuario denunciar a pagina nao recarregar 'ok
// ajustar pra quando o usuario denunciar a tabela atualize sem precisar recarregar a pagina ok
// ajustar pra quando o usuario denunciar a tabela salve no local storage ok
// ajustar pra quando o usuario entrar na pagina a tabela carregue do local storage ok  

