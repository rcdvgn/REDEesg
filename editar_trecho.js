var data = new Date(); 
var ano = data.getFullYear();
document.getElementById("data").innerHTML = ano;


if ((localStorage.getItem("id")) == null || JSON.parse(localStorage.getItem("users")) == null)
{
    window.location.href = "menu.html";
}
else
{
    var id = localStorage.getItem("id");
    var users = JSON.parse(localStorage.getItem("users"));
}

var main = users[id].main;
var extra = users[id].extra;

var main_new;
var extra_new;

var is_main;

var existe;

var edit = JSON.parse(sessionStorage.getItem("edit"));

edit = edit.toString();

if (edit == "0")
{
    document.getElementById("title").innerHTML = "Adicionar Trecho";
    document.getElementById("button").innerHTML = `<button onclick="add_trecho()">Adicionar Trecho</button>`;
}
else
{
    document.getElementById("title").innerHTML = "Editar Trecho";
    document.getElementById("button").innerHTML = `<button onclick="edit_trecho()">Salvar Alteracoes</button>`;

    if (edit.substring(0, edit.indexOf(".")) == 1)
    {
        existe = false;
        for (var i = 0; i < main.length; i++)
        {
            if (main[i].nome == edit)
            {
                existe = true;
                break;
            }
        }
        if (existe == false)
        {
            alert("Nao foi encontrado nenhum trecho com esse nome");
        }
        else
        {
            is_main = true;

            document.getElementById("nome").value = main[i].nome;
            document.getElementById("l").value = main[i].l;
            document.getElementById("d").value = main[i].d;
            document.getElementById("ctm").value = main[i].ctm;
            document.getElementById("ctj").value = main[i].ctj;
            document.getElementById("ip").value = main[i].ip.toFixed(4);
            document.getElementById("rcm").value = main[i].rcm.toFixed(4);
            if (main[i].foz != 0)
            {
                document.getElementById("foz").value = main[i].foz;
            }
        }
        
    }
    else
    {
        existe = false;
        for (var i = 0; i < extra.length; i++)
        {
            if (extra[i].nome == edit)
            {
                existe = true;
                break;
            }
        }
        if (existe == false)
        {
            alert("Nao foi encontrado nenhum trecho com esse nome");
        }
        else
        {
            is_main = false;

            document.getElementById("nome").value = extra[i].nome;
            document.getElementById("l").value = extra[i].l;
            document.getElementById("d").value = extra[i].d;
            document.getElementById("ctm").value = extra[i].ctm;
            document.getElementById("ctj").value = extra[i].ctj;
            document.getElementById("ip").value = extra[i].ip; 
            document.getElementById("rcm").value = extra[i].rcm;
            if (extra[i].foz != 0)
            {
                document.getElementById("foz").value = extra[i].foz;
            }
        }
    }
    
}

function edit_trecho()
{
    if (is_main == true)
    {
        if (document.getElementById("l").value.length != 0)
        {
            if (isNaN(document.getElementById("l").value))
            {
                alert("O comprimento do seu trecho deve ser um numero valido!");
            }
            else
            {
                main[i].l = parseFloat(document.getElementById("l").value);
            }
        }
        if (document.getElementById("d").value.length != 0)
        {
            main[i].d = parseFloat(document.getElementById("d").value);
        }
        if (document.getElementById("ctm").value.length != 0)
        {
            main[i].ctm = parseFloat(document.getElementById("ctm").value);
        }
        if (document.getElementById("ctj").value.length != 0)
        {
            main[i].ctj = parseFloat(document.getElementById("ctj").value);
        }
        if (document.getElementById("rcm").value.length != 0)
        {
            if ((document.getElementById("rcm").value.length == 0 || isNaN(document.getElementById("rcm").value)) && document.getElementById("nome").value.substring(document.getElementById("nome").value.indexOf(".") + 1, document.getElementById("nome").value.length) == 1)
            {
                alert("Preencha o campo referente ao recobrimento coletor de montante");
            }
            else
            {
                main[i].rcm = parseFloat(document.getElementById("rcm").value);
            }
        }
        if (document.getElementById("ip").value.length != 0)
        {
            main[i].ip = parseFloat(document.getElementById("ip").value);
        }
        if (document.getElementById("foz").value.length != 0)
        {
            main[i].foz = document.getElementById("foz").value;
        }
    }
    else
    {
        if (document.getElementById("l").value.length != 0)
        {
            if (isNaN(document.getElementById("l").value))
            {
                alert("O comprimento do seu trecho deve ser um numero valido!");
            }
            else
            {
                extra[i].l = parseFloat(document.getElementById("l").value);
            }
        }
        if (document.getElementById("d").value.length != 0)
        {
            extra[i].d = parseFloat(document.getElementById("d").value);
        }
        if (document.getElementById("ctm").value.length != 0)
        {
            extra[i].ctm = parseFloat(document.getElementById("ctm").value);
        }
        if (document.getElementById("ctj").value.length != 0)
        {
            extra[i].ctj = parseFloat(document.getElementById("ctj").value);
        }
        if (document.getElementById("rcm").value.length != 0)
        {
            if ((document.getElementById("rcm").value.length == 0 || isNaN(document.getElementById("rcm").value)) && document.getElementById("nome").value.substring(document.getElementById("nome").value.indexOf(".") + 1, document.getElementById("nome").value.length) == 1)
            {
                alert("Preencha o campo referente ao recobrimento coletor de montante");
            }
            else
            {
                
                extra[i].rcm = parseFloat(document.getElementById("rcm").value);
            }
            
        }
        if (document.getElementById("ip").value.length != 0)
        {
            extra[i].ip = parseFloat(document.getElementById("ip").value);
        }
        if (document.getElementById("foz").value.length != 0)
        {
            extra[i].foz = document.getElementById("foz").value;
        }
    }

    window.localStorage.setItem('users', JSON.stringify(users));

    window.location.href = "main.html";
}

function add_trecho()
{
    if (document.getElementById("nome").value.length == 0)
    {
        alert("Preencha todos os campos antes de continuar!");
    }
    else if (document.getElementById("l").value.length == 0)
    {
        alert("Preencha todos os campos antes de continuar!");
    }
    else if (!(document.getElementById("nome").value.includes(".")))
    {
        alert("O nome do seu trecho nao esta corretamente formatado (exemplo: 2.1).");
    }
    else if (isNaN(document.getElementById("l").value))
    {
        alert("O comprimento do seu trecho deve ser um numero valido!");
    }
    else if ((document.getElementById("rcm").value.length == 0 || isNaN(document.getElementById("rcm").value)) && document.getElementById("nome").value.substring(document.getElementById("nome").value.indexOf(".") + 1, document.getElementById("nome").value.length) == 1)
    {
        alert("Preencha o campo referente ao recobrimento coletor de montante");
    }
    else
    {
        var new_trecho = {};

        is_main = false;

        new_trecho.nome = (document.getElementById("nome").value).toString();

        if (new_trecho.nome.substring(0, new_trecho.nome.indexOf(".")) == 1)
        {
            is_main = true;
        }

        main_new = true;
        extra_new = true;

        if (is_main == true)
        {
            for (var i = 0; i < main.length; i++)
            {
                if (new_trecho.nome == main[i].nome)
                {
                    main_new = false;
                    subs_main = true;
                    break;
                }
            }
            if (main_new == false)
            {
                for (var j = 0; j < main.length; j++) 
                {
                    y = main[j];

                    if (parseInt(y.nome.substring((y.nome.indexOf(".") + 1), y.nome.length)) > parseInt(new_trecho.nome.substring((new_trecho.nome.indexOf(".") + 1), new_trecho.nome.length)))
                    {
                        main[j].nome = y.nome.substring(0, (y.nome.indexOf(".") + 1));
                        main[j].nome += (parseInt(y.nome.substring((y.nome.indexOf(".") + 1), y.nome.length)) - 1).toString();
                    }
                }
            }
        }
        else
        {
            for (var i = 0; i < extra.length; i++)
            {
                if (new_trecho.nome == extra[i].nome)
                {
                    extra_new = false;
                    subs_extra = true;
                    extra.splice(i, 1);
                    break;
                }
            } 
            if (extra_new == false)
            {
                for (var j = 0; j < extra.length; j++) 
                {
                    y = extra[j];

                    if (y.nome.substring(0, y.nome.indexOf(".")) == new_trecho.nome.substring(0, new_trecho.nome.indexOf(".")))
                    {
                        if (parseInt(y.nome.substring((y.nome.indexOf(".") + 1), y.nome.length)) > parseInt(new_trecho.nome.substring((new_trecho.nome.indexOf(".") + 1), new_trecho.nome.length)))
                        {
                            extra[j].nome = y.nome.substring(0, (y.nome.indexOf(".") + 1));
                            extra[j].nome += (parseInt(y.nome.substring((y.nome.indexOf(".") + 1), y.nome.length)) - 1).toString();
                        }
                    }
                }
            }
        }

        new_trecho.l = parseFloat(document.getElementById("l").value);
        new_trecho.d = parseFloat(document.getElementById("d").value);

        if (document.getElementById("ctm").value.length == 0)
        {
            new_trecho.ctm = 0;
        }
        else
        {
            new_trecho.ctm = parseFloat(document.getElementById("ctm").value);
        }
        
        if (document.getElementById("ctj").value.length == 0)
        {
            new_trecho.ctj = 0;
        }
        else
        {
            new_trecho.ctj = parseFloat(document.getElementById("ctj").value);
        }
        

        new_trecho.qmoni = 0;
        new_trecho.qmonf = 0;

        new_trecho.qtreci = 0;
        new_trecho.qtrecf = 0;

        new_trecho.qjusi = 0;
        new_trecho.qjusf = 0;

        new_trecho.qproji = 0;
        new_trecho.qprojf = 0;

        new_trecho.it = 0;

        new_trecho.im = 0;

        new_trecho.calci = 0;
        new_trecho.calcf = 0;

        new_trecho.adoti = 0;
        new_trecho.adotf = 0;

        new_trecho.veloci = 0;
        new_trecho.velocf = 0;

        new_trecho.ydi = 0;
        new_trecho.ydf = 0;

        new_trecho.vmsi = 0;
        new_trecho.vmsf = 0;

        new_trecho.bi = 0;
        new_trecho.bf = 0;
        
        new_trecho.rhi = 0;
        new_trecho.rhf = 0;

        new_trecho.vci = 0;
        new_trecho.vcf = 0;

        new_trecho.ttki = 0;
        new_trecho.ttkf = 0;
        
        new_trecho.ttpi = 0;
        new_trecho.ttpf = 0;

        new_trecho.ccm = 0;
        new_trecho.ccj = 0;

        new_trecho.pcm = 0;
        new_trecho.pcj = 0;

        if (document.getElementById("rcm").value.length > 0 && isNaN(document.getElementById("rcm").value) == false)
        {
            new_trecho.rcm = parseFloat(document.getElementById("rcm").value);
        }
        else
        {
            new_trecho.rcm = 0;
        }
        
        new_trecho.rcj = 0;

        new_trecho.ps = 0;

        if (document.getElementById("ip").value.length == 0)
        {
            new_trecho.ip = "0";
        }
        else
        {
            new_trecho.ip = parseFloat(document.getElementById("ip").value);
        }
        
        if (document.getElementById("foz").value.length == 0)
        {
            new_trecho.foz = "0";
        }
        else
        {
            new_trecho.foz = document.getElementById("foz").value;
        }
        
        
        
        if (is_main == true)
        {
            main.push(new_trecho);
        }
        else
        {
            extra.push(new_trecho);
        }

        window.localStorage.setItem('users', JSON.stringify(users));

        window.location.href = "main.html";
    }
}

function remove()
{
    is_main = false;

    edit.nome = (document.getElementById("nome").value).toString();

    if (new_trecho.nome.substring(0, new_trecho.nome.indexOf(".")) == 1)
    {
        is_main = true;
    }
}