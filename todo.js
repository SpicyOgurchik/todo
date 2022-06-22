
let form = document.querySelector('#form');
let list = document.querySelector('#list');
let input = document.querySelector('#input');
let storage = JSON.parse(localStorage.getItem("list")) || [];


    list.addEventListener("click", function(e) {
      if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
      } else if(e.target.tagName === 'LI') {
        e.target.style.setProperty('text-decoration', 'line-through');
        e.target.style.color = "red";
      }
    });

    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      let li = document.createElement("li");
      li.innerText = input.value;

      storage.push({ task: li.innerText});
      localStorage.setItem("list", JSON.stringify(storage));

      input.value = '';

      let button = document.createElement("button");
      button.innerText = "Delete";
  
      list.append(li);
      li.append(button);
  
    });

    for (let i = 0; i < storage.length; i++) {
        let button = document.createElement("button");
        button.innerText = "Delete";
        
        let li = document.createElement("li");
        li.innerText = storage[i].task;
        
        list.append(li);
        li.append(button);
  
    }
    
    
