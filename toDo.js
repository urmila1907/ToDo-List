let outerBox = document.createElement("div");
outerBox.className = "outerBox";

document.body.getElementsByClassName("maintask")[0].append(outerBox);

document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
      taskValue = task2.value;
  if (taskValue != "") {

    let mainBox = document.createElement("div");
    mainBox.className = "mainBox";

    let outBox = document.createElement("div");
    outBox.className = "outBox";

    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "check";

    let task = document.createElement("input");
    task.type = "text";
    task.value = taskValue;
    task.className = "notes";
    task.setAttribute("readonly", "readonly");

    let del = document.createElement("button");
    del.innerHTML = "Delete";
    del.className = "delete";

    let edit = document.createElement("button");
    edit.innerHTML = "Edit";
    edit.className = "editing";

    outerBox.append(mainBox);
    mainBox.append(outBox);

    document.body.getElementsByClassName("noTask")[0].style.display = "none";
    outBox.appendChild(check);
    outBox.appendChild(task);
    outBox.appendChild(edit);
    outBox.appendChild(del);

    task2.value = "";

    edit.addEventListener("click", () => {
      task.removeAttribute("readonly");
    });
    
    check.addEventListener("click",()=>{
      if(check.checked){
    task.style.textDecoration = "line-through";
    
      }
      else{
        task.style.textDecoration = "none";
      }
    });
    
    del.addEventListener("click", () => {
      mainBox.remove();
      if (!document.body.getElementsByClassName("outBox")[0]) {
        document.body.getElementsByClassName("noTask")[0].style.display = "";
      }
    });

  }
});

document.getElementsByTagName("button")[1].addEventListener("click", () => {
  localStorage.clear();
  outerBox.innerHTML = "";
  document.body.getElementsByClassName("noTask")[0].style.display = "";
});
