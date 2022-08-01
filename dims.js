var data = new Date(); 
var ano = data.getFullYear();
document.getElementById("data").innerHTML = ano;

window.localStorage.setItem('id', 0);

var users;

var rename_n = -1;

function excluir() 
{
    users.splice(arguments[0], 1);
    window.localStorage.setItem('users', JSON.stringify(users));
}

function show()
{
    users = JSON.parse(localStorage.getItem("users")); 


    var table = document.getElementById("table");
    var content = "";


    for (var i = users.length - 1; i > -1; i--)
    {
        if (rename_n == i)
        {
            content += `<tr><td><form onsubmit = "change_name('${rename_n}'); return false;" spellcheck = "false" autocomplete = "off" ><input onfocusout = "change_name('${rename_n}')" id = 'rename_n'/></form></td><td><a href = "dims.html" onclick="excluir(${i})">Excluir</a></td></tr>`;
        }
        else
        {
            content += `<tr><td><a href = "main.html" onclick = "go(${i})" oncontextmenu = "re_name(${i}); return false;">${users[i].nome}</a></td><td><a href = "dims.html" onclick="excluir(${i})">Excluir</a></td></tr>`;
        }
    }

    table.innerHTML = content;

    if (rename_n != -1)
    {
        document.getElementById(`rename_n`).value = users[rename_n].nome;
        document.getElementById('rename_n').select();
    }
}

if (JSON.parse(localStorage.getItem("users")) == null || JSON.parse(localStorage.getItem("users")).length == 0)
{
    users = [];
    window.localStorage.setItem('users', JSON.stringify(users));
}
else
{
    show();
}


function go()
{
    window.localStorage.setItem("id", arguments[0]);
}

function re_name()
{
    rename_n = arguments[0];
    show();
}

function change_name()
{
    if (document.getElementById("rename_n").value.length > 0)
    {
        users[rename_n].nome = document.getElementById("rename_n").value;
        window.localStorage.setItem('users', JSON.stringify(users));
    }
    
    rename_n = -1;

    location.reload();
}

function add()
{
    var nome = prompt("Nome do seu Dimensionamento");
    if (isNaN(nome))
    {
        var new_dim = {};
        new_dim.nome = nome;
        new_dim.tci = 0;
        new_dim.tcf = 0;
        new_dim.main = [];
        new_dim.extra = [];
        new_dim.obs = [[]];
        
        users.push(new_dim);
        window.localStorage.setItem('id', users.length - 1);

        window.localStorage.setItem('users', JSON.stringify(users));
        window.location.href = "main.html";
    }
}