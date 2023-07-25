$ (document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
    })    
})

const button = document.querySelector("#button");

button.addEventListener("click", function () {
    adicionarTarefa();
})

function adicionarTarefa() {
    var tarefa = $("#tarefa").val();

    var lista = document.getElementById("listaTarefas");

    if (tarefa !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(tarefa));
        lista.appendChild(li);
        document.getElementById("tarefa").value = "";
        $('li').on('click', function () {
            $(li).addClass("risco")
        });
}
}
