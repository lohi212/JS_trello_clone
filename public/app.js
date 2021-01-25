

// IIFE - Immediatly Invoked Function Expression
// Anonymous function - 
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  function createColumn()
  {
    var col = document.createElement('div');
    const inp_col_data = document.getElementById('ip_col_data');
    col.innerHTML = `<div class = "head">${inp_col_data.value}</div>`;
    col.classList.add('column');
    const contnr = document.querySelector("#container");
    contnr.appendChild(col);
  }

  function createCard(id)
  {
    // const place = document.getElementById('card_up');
    const contnr = document.querySelector("#container");
    const cols3 = document.querySelector(id);
    const inp_data = document.getElementById('ip_data');
    const inp_val = inp_data.value;
    var card = document.createElement('div');
    // card.innerHTML = `<div class="card" id="cd1" draggable="true" ondragstart="drag(event)"></div>`;
    card.innerHTML = inp_val;
    // 
    card.classList.add('card');
    cols3.appendChild(card);
    contnr.appendChild(cols3);
  }

// (function() {
//     const url="/test-url";
//     fetch(url)
// 	.then(response => response.json())
// 	.then(data => {
//         console.log(data);
//         const contnr = document.querySelector("#container");
//         const cols1 = document.querySelector("#column1");
//         const cols2 = document.querySelector("#column2");
//         const cols3 = document.querySelector("#column3");

//         // createCard(cols1);
//         data.tasks.forEach(element => {
//             var card=document.createElement('div');
//             card.innerHTML = element.name;
//             card.classList.add('card');
//             if(element.status === 'IN_PROGRESS'){
//                 cols2.appendChild(card);
//             } else if(element.status === 'TODO'){
//                 cols1.appendChild(card);
//             }else {
//                 cols3.appendChild(card);
//             }
            
            
//         });
//         contnr.appendChild(cols1);
//         contnr.appendChild(cols2);
//         contnr.appendChild(cols3);

//     });
    
// })();