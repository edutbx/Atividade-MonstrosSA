function banco() {
    if (!localStorage.getItem("bd")) {
        const bd = [
            { id: 1, nome: "Snoopy", login: "snoopy", senha: "1234", email: "snoopy@gmail.com" },
            { id: 2, nome: "Charle", login: "charle", senha: "12345", email: "charle@gmail.com" },
            { id: 3, nome: "Lucy", login: "lucy", senha: "123456", email: "lucy@gmail.com" }
        ];
        let json = JSON.stringify(bd);
        localStorage.setItem("bd", json);
    }
}

function login() {
    let bd = JSON.parse(localStorage.getItem("bd"));

    let lg = document.querySelector("#login").value;
    let sn = document.querySelector("#senha").value;

    for (let i = 0; i < bd.length; i++) {
        if (lg == bd[i].login && sn == bd[i].senha) {
            window.location.href = "sobre.html";
        }
    }
}

function adicionar() {
    let bd = JSON.parse(localStorage.getItem("bd"));

    let nm = document.querySelector("#nome").value;
    let lg = document.querySelector("#login").value;
    let sn = document.querySelector("#senha").value;
    let mail = document.querySelector("#email").value;

    let cd = { id: Date.now(), nome: nm, login: lg, senha: sn, email: mail };

    bd.push(cd);

    localStorage.setItem("bd", JSON.stringify(bd));
    alert("Registro adicionado.");
}

function buscar() {
    let bd = JSON.parse(localStorage.getItem("bd"));
    let busca = document.querySelector("#buscar").value.trim();

    if (busca === "") {
        alert("Por favor, insira um nome ou login para buscar.");
        return;
    }

    let resultado = bd.filter(user => user.nome.toLowerCase().includes(busca.toLowerCase()) || user.login.toLowerCase().includes(busca.toLowerCase()));

    if (resultado.length > 0) {
        let mensagem = "Usuários encontrados:\n";
        resultado.forEach(user => {
            mensagem += `Nome: ${user.nome}\nLogin: ${user.login}\nEmail: ${user.email}\n\n`;
        });
        alert(mensagem);
    } else {
        alert("Nenhum usuário encontrado.");
    }
}



function atualizar() {
    let bd = JSON.parse(localStorage.getItem("bd"));
    let login = document.querySelector("#login").value;
    let nm = document.querySelector("#nome").value;
    let sn = document.querySelector("#senha").value;
    let mail = document.querySelector("#email").value;

    let usuario = bd.find(user => user.login === login);

    if (usuario) {
        usuario.nome = nm || usuario.nome;
        usuario.senha = sn || usuario.senha;
        usuario.email = mail || usuario.email;

        localStorage.setItem("bd", JSON.stringify(bd));
        alert("Usuário atualizado.");
    } else {
        alert("Usuário não encontrado.");
    }
}

function apagar() {
    let bd = JSON.parse(localStorage.getItem("bd"));
    let login = document.querySelector("#login").value; 

    let usuarioIndex = bd.findIndex(user => user.login === login);

    if (usuarioIndex !== -1) {
        bd.splice(usuarioIndex, 1);
        localStorage.setItem("bd", JSON.stringify(bd));
        alert("Usuário apagado.");
    } else {
        alert("Usuário não encontrado.");
    }
}

