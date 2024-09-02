function salvarUsuario(event) {
    // parar o comportamento padrão do form
    event.preventDefault();
    // obtém o input id_usuario
    let inputIDUsuario = document.getElementsByName("id_usuario")[0];
    // pega o valor do input id_usuario
    let id_usuario = inputIDUsuario.value;

    let inputNome = document.getElementsByName("nome")[0];
    let nome = inputNome.value;
    let inputEmail = document.getElementsByName("email")[0];
    let email = inputEmail.value;
    let inputSenha = document.getElementsByName("senha")[0];
    let senha = inputSenha.value;

    fetch('inserir.php',
        {
            method: 'POST',
            body: JSON.stringify({
                id_usuario: id_usuario,
                nome: nome,
                email: email,
                senha: senha
            }),
            headers: { 'Content-Type': "application/json; charset=UTF-8" }
        }
    );
}

/*function salvarPessoa(event) {
    event.preventDefault();
    let form = document.getElementById("form");
    // converte os dados do formulário em um objeto pessoa
    let pessoa = Object.fromEntries(new FormData(form).entries());

    // inserir uma nova pessoa
    if (pessoa.id == "") {
        fetch("salvar.php", {
            method: "POST", // verbo de envio
            body: JSON.stringify(pessoa), // informações a serem enviadas
            headers: { 'Content-Type': "application/json; charset=UTF-8" } // informações do cabeçalho
        })
            // converte a resposta em JSON
            .then(response => response.json())
            .then(pessoa => inserirPessoa(pessoa))
            .catch(error => console.log(error));

    } else { // editar uma pessoa
        fetch("salvar.php", {
            method: "PUT", // verbo de envio
            body: JSON.stringify(pessoa), // informações a serem enviadas
            headers: { 'Content-Type': "application/json; charset=UTF-8" } // informações do cabeçalho
        })
            // converte a resposta em JSON
            .then(response => response.json())
            .then(pessoa => alterarPessoa(pessoa))
            .catch(error => console.log(error));
    }
    form.reset();
    return false;
}*/