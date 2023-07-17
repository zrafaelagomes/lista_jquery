function adicionarTarefa() {
    var tarefa = document.getElementById("tarefa").value;
    var lista = document.getElementById("listaTarefas");

if (tarefa !== "") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(tarefa));
    lista.appendChild(li);
    document.getElementById("tarefa").value = "";
    $('ul').on('click','li',function(){
        alert($(this).text());
    })
}
}
