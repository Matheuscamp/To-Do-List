function adicionarTarefa() {
  let input = document.getElementById("toDo-input");
  let tarefa = input.value;

  if (tarefa.trim() !== "") {
    let itemLista = document.createElement("li");
    itemLista.className = "toDo-item";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-lista";
    itemLista.appendChild(checkbox);

    let label = document.createElement("label");
    label.textContent = tarefa;
    label.className = "label-lista";
    itemLista.appendChild(label);

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "❌";
    botaoRemover.className = "botaoRemover-lista";
    itemLista.appendChild(botaoRemover);

    document.getElementById("listaTarefas").appendChild(itemLista);

    input.value = "";

    botaoRemover.addEventListener("click", function () {
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
