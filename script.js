function adicionarTarefa() {
  let input = document.getElementById("toDo-input");
  let tarefa = input.value;

  if (tarefa.trim() !== "") {
    let itemLista = document.createElement("li");
    itemLista.className = "toDo-item";

    let label = document.createElement("label");
    label.textContent = tarefa;
    label.className = "label-lista";
    itemLista.appendChild(label);

    let botaoConcluido = document.createElement("button");
    botaoConcluido.textContent = "✔";
    botaoConcluido.className = "botaoConcluido-lista";
    itemLista.appendChild(botaoConcluido);

    document.getElementById("listaTarefas").appendChild(itemLista);

    input.value = "";

    botaoConcluido.addEventListener("click", function () {
      itemLista.remove();
    });
  }
}

document
  .getElementById("botaoAdicionar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    adicionarTarefa();
  });
