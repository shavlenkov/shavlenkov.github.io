function dataTable(config, data) {

  if (data == undefined) {

    dataTable2(config)

    return;
    
  }

  let fontawesome = document.createElement("script");
  fontawesome.src = "https://kit.fontawesome.com/a92211bf3b.js";
  document.head.append(fontawesome);

  let id = "";

  for (let i = 1; i < config.parent.length; i++) {
    id += config.parent[i];
  }

  let table = document.createElement("table");

  table.id = id + "-table";

  let id_block = document.getElementById(id);

  if (Object.keys(config).includes("search")) {

    let input_search = document.createElement("input");

    input_search.id = id + "-input-search";
    input_search.setAttribute("type", "search")

    id_block.append(input_search);

    let id_input = document.getElementById(id + "-input-search");

    let block_input = document.createElement("div");

    block_input.id = id + "-block-input";

    id_block.append(block_input);

    let id_block_input = document.getElementById(id + "-block-input");

    let counter = 0;

    id_input.oninput = function() {
    
      let searchValues = [];

      for (let j = 0; j < data.length; j++) {
       
        for (let i = 0; i < config.search.fields.length; i++) {

          if(data[j][config.search.fields[i]].

            toString().

            toLowerCase().

            includes(id_input.value.toLowerCase())

            )

          searchValues[j] = data[j];

        }
  
      }

      counter = 0;
      tbody.innerHTML = "";

      render(searchValues, tbody, id, id_table);
    }

  }
  
  id_block.append(table);      

  let thead = document.createElement("thead");
  thead.id = id + "-thead";

  let id_table = document.getElementById(id + "-table");
  id_table.append(thead);

  let tr = document.createElement("tr");
  tr.id = id + "-tr";

  let id_thead = document.getElementById(id + "-thead");
  id_thead.append(tr);

  let id_tr = document.getElementById(id + "-tr");

  for (let j = 0; j < config.columns.length; j++) {

    let th = document.createElement("th");

    th.innerHTML = config.columns[j].title;

    id_tr.append(th);
          
    if (config.columns[j].sortable) {

      th.id = id + "-th-" + j;

      let icon = document.createElement("i");

      icon.setAttribute("class", "fas fa-sort");

      icon.onclick = function() {
        
        tbody.innerHTML = "";
        
        let sort_array = data.slice();

        switch (icon.getAttribute("class")) {

          case "fas fa-sort":

            icon.setAttribute("class", "fas fa-sort-down");

            sort_array.sort(function (a, b) {

              if (typeof a[config.columns[j].value] === "string") {

                return a[config.columns[j].value].localeCompare(
                  b[config.columns[j].value]
                );

              }

              return a[config.columns[j].value] - b[config.columns[j].value]
            });

            break;

          case "fas fa-sort-down":

          icon.setAttribute("class", "fas fa-sort-up");

          sort_array.sort(function (a, b) {

            if (typeof a[config.columns[j].value] === "string") {

              return b[config.columns[j].value].localeCompare(
                a[config.columns[j].value]
              );

            }

            return b[config.columns[j].value] - a[config.columns[j].value]
          });

         break;

          case "fas fa-sort-up":

            icon.setAttribute("class", "fas fa-sort");

            sort_array = data.slice();

            break;
        }
       
      render(sort_array, tbody, id, id_table);

      }
            
      let id_th = document.getElementById(id + "-th-" + j);

      id_th.append(icon);

    }

  }
 
  let tbody = document.createElement("tbody");

  render(data, tbody, id, id_table);

}

function render(data, tbody, id, id_table) {

  tbody.id = id + "-tbody";
  id_table.append(tbody);

  for (let k = 0; k < data.length; k++) {

    let tr2 = document.createElement("tr");
    let id_tbody = document.getElementById(id + "-tbody");

    tr2.id = id + "-tr-" + k;
    id_tbody.append(tr2);


    for (let i = 0; i < Object.values(data[k]).length + 1; i++) {

      let values_keys = Object.values(data[k]);
      values_keys.unshift(k + 1);


      let td = document.createElement("td");
      let id_tr = document.getElementById(id + "-tr-" + k);

      td.innerHTML = values_keys[i];   
      id_tr.append(td);

    }

  }
  
}

function dataTable2(config) {
  
  config.title = "";

  let id = "";

  for (let i = 1; i < config.parent.length; i++) {
    id += config.parent[i];
  }

  let table = document.createElement("table");

  table.id = id + "-table";

  let id_block = document.getElementById(id);

  let button_create = document.createElement("button")

  button_create.className = "button-gradient-success modal-trigger";
  button_create.innerHTML = "Создать";
  
  let modal_create = document.getElementsByClassName("modal")[0];
  let id_modal_create = modal_create.getAttribute("id");
  
  button_create.setAttribute("modal-toggle", id_modal_create);

  let modal_body_create = document.querySelector(".modal-body");
  
  for (let i = 0; i < config.columns.length - 1; i++) {

    let input_create = document.createElement("input");
    input_create.id = id + "-input-create-" + i;
    
    modal_body_create.append(input_create);
    
  }
  
  let button_save = document.createElement("button")
  button_save.className = "button-gradient-success";
  button_save.innerHTML = "Сохранить"

  modal_body_create.append(button_save);
  
  id_block.append(button_create);

  id_block.append(table);      

  let thead = document.createElement("thead");
  thead.id = id + "-thead";

  let id_table = document.getElementById(id + "-table");
  id_table.append(thead);

  let tr = document.createElement("tr");
  tr.id = id + "-tr";

  let id_thead = document.getElementById(id + "-thead");
  id_thead.append(tr);

  let id_tr = document.getElementById(id + "-tr");

 
  for (let j = 0; j < config.columns.length; j++) {

    let th = document.createElement("th");

    th.innerHTML = config.columns[j].title;

    id_tr.append(th);

   }

         
  let tbody = document.createElement("tbody");

  tbody.id = id + "-tbody";
  id_table.append(tbody);

  fetch(config.apiUrl)

  .then((response) => {
    return response.json()
  })

  .then((data, url=config.apiUrl) => {
    
    let data_create= {};
    let array_values_inputs_create = [];

    button_save.onclick = function() {
 
      for (let j = 0; j < config.columns.length - 1; j++) {

        let input_value = document.getElementById(id + "-input-create-" + j).value;

        array_values_inputs_create[j] = input_value;
      
      }

      let keys1 = Object.keys(data[0])
    
      for (let k = 0; k < config.columns.length - 1; k++) {
               
        data_create[keys1[k + 1]] = array_values_inputs_create[k];
      
      }
   
      function postData(url, data) {

        const response = fetch(url, {
        
          method: 'POST',
    
          headers: {
          
          'Content-Type': 'application/json'

          },
    
          body: JSON.stringify(data)
        });
  
        return  response.json();
      }

      postData(url, data_create)
   
    }

    for (let k = 0; k < data.length; k++) {

      let id_tbody = document.getElementById(id + "-tbody")
      let tr2 = document.createElement("tr");
   
      let button_delete = document.createElement("button");
      button_delete.className =  "button-gradient-error";
      
      button_delete.setAttribute("id-button-delete", data[k].id)
      button_delete.innerHTML = "Удалить";

      let button_edit = document.createElement("button");
      button_edit.className =  "button-gradient-warning modal-trigger";
      button_edit.id = data[k].id;
      
      let modal_edit = document.getElementsByClassName("modal")[1];
      let id_modal_edit = modal_edit.getAttribute("id");
      
      button_edit.setAttribute("modal-toggle", id_modal_edit);
      button_edit.innerHTML = "Редактировать";

      button_edit.onclick = function() {
  
        showModal(this);

        let id_edit = this.getAttribute("id");

        let modal_body_edit = document.querySelectorAll(".modal-body")[1];

        for (let j = 0; j < config.columns.length - 1; j++) {               

          let input_edit = document.createElement("input");

          input_edit.id = id + "-input-edit-" + j;

          modal_body_edit.append(input_edit);
      
      }
     
      let button_save_edit = document.createElement("button");
      button_save_edit.className = "button-gradient-success";
      button_save_edit.innerHTML = "Сохранить"
      
      modal_body_edit.append(button_save_edit)

      let array_values_inputs_edit = [];
      let data_edit = {};

      button_save_edit.onclick = function() {

        for (let i = 0; i < config.columns.length - 1; i++) {

          let id_input_edit = document.getElementById(id + "-input-edit-" + i).value;

          array_values_inputs_edit[i] = id_input_edit;      

        }

        let keys2 = Object.keys(data[0])

        for (let k = 0; k < config.columns.length - 1; k++) {
       
          data_edit[keys2[k + 1]] = array_values_inputs_edit[k]
        
        }

     
        let url3 = config.apiUrl + id_edit;

        function putData(url, data) {

          const response =  fetch(url, {
    
          method: 'PUT',
   
          headers: {
      
            'Content-Type': 'application/json'

          },
  
          body: JSON.stringify(data) 

          });

          return  response.json(); 
        }

        putData(url3, data_edit);

      }

    }
      

   document.querySelectorAll("button.button-gradient-error").forEach( function(a) {

    a.onclick = function() {

      let delete_tr = this.closest("tr");

      delete_tr.parentElement.removeChild(delete_tr);

      deleteData(this, url);

    }

  })
   
  tr2.id = id + "-tr-" + k;
  id_tbody.append(tr2);


  for (let i = 0; i < Object.values(data[k]).length; i++) {

    let values_keys = Object.values(data[k]);

    let td = document.createElement("td");

    let id_tr = document.getElementById(id + "-tr-" + k);

    if (values_keys[i].indexOf("jpg") >= 0) {
          
      td.innerHTML = "<img src='" + values_keys[i] + "'/>";
          
    } else {
          
      td.innerHTML = values_keys[i];
    }
               
    id_tr.append(td);
      
    id_tr.append(button_delete);

    id_tr.append(button_edit)

  }

 };
  
});


}

function deleteData(button_delete, url) {

  let id_button_delete = button_delete.getAttribute("id-button-delete");

  let url2 = url + id_button_delete;

  function deleteData2(url2) {

  const response =  fetch(url2, {
    
    method: 'DELETE', 
  
    headers: {
      
      'Content-Type': 'application/json'

    }
  
  });

  }

  deleteData2(url2);

}