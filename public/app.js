

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
  // function createColumn()
  // {
  //   var col = document.createElement('div');
  //   const inp_col_data = document.getElementById('ip_col_data');
  //   col.innerHTML = `<div class = "head">${inp_col_data.value}</div>`;
  //   col.classList.add('column');
  //   const contnr = document.querySelector("#container");
  //   contnr.appendChild(col);
  // }
  function createColumn()
  {
    const contnr = document.querySelector("#container");
    var col = document.getElementById('columns-creation');
    const inp_col_data = document.getElementById('ip_col_data');
    var card=document.createElement('div');
    card.innerHTML=`<input type="text" id="ip_data_${+new Date}">
    <div id="cards-container-${+new Date}"></div>
    <button type = "button" onclick="createCard('${+new Date}');">Add card</button>`;
    var header = document.createElement('div');
    header.className="head";
    header.innerHTML =`${inp_col_data.value}`;
    inp_col_data.value='';
    console.log(header);
    var cols = document.createElement('div');
    cols.className="column";
    cols.id = `column${+new Date}`;
    cols.ondrop="drop(event)";
    cols.ondragover="allowDrop(event)";    
    cols.appendChild(header);
    cols.appendChild(card);
    // cols.setAttribute("style","height:auto;")
    contnr.appendChild(cols); 
  }
  
  

  function createCard(id)
  {
    // const place = document.getElementById('card_up');
    const contnr = document.querySelector("#container");
    const cols = document.getElementById(`cards-container-${id}`);
    const inp_data = document.getElementById(`ip_data_${id}`);
    const inp_val = inp_data.value;
    var card = document.createElement('div');
    card.setAttribute('draggable', true);
    card.addEventListener('dragstart', (evt) => {
      drag(evt);
    });
    card.innerHTML = inp_val;
    inp_data.value = '';
    card.id = +new Date;
    card.classList.add('card');
    cols.appendChild(card);
    // contnr.appendChild(cols);
  }

  (function() {
    localStorage.setItem(`${id}`,document.getElementById(`${id}`).value);

    document.getElementById(`${id}`).value = localStorage.getItem(`${id}`);
  });

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