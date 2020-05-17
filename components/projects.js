const petsData = [
    {
      id:'4fd4v4sd5f84f',
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      id:'f45sdf7857sd5f7',
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      id:'jtyj784n56g4nryt',
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
    {
      id:'4fd4v4sd5f84f',
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      id:'f45sdf7857sd5f7',
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      id:'jtyj784n56g4nryt',
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
    ];
    const projects=[
      {
        id:'4fd4v4sd5f84f',
        title:"Gestión de pago de planilla",
        content:"Plantilla en spreadsheets para llevar el control de planilla del área de empleados de comida rápida",
        from:'Alex Vasquez',
        area:'Planillas',
        type:'Finanzas',
        to:'Carlos Sagastume',
        createdAt:'	10/03/2017 07:29:46 -0700',
        modifiedAt:'A few minutes ago'
      },
      {
        id:'f45sdf7857sd5f7',
        title:"UX/UI para app móvil v.1.0",
        content:"Diseñar Brief de app móvil según especificaciones del proyecto en el correo, únicamente la primera parte",
        from:'Alex Vasquez',
        area:'Publicidad',
        type:'Diseño',
        to:'Andrea Duarte',
        createdAt:'	10/03/2017 07:29:46 -0700',
        modifiedAt:'A few hours ago'
      },
      {
        id:'jtyj784n56g4nryt',
        title:"Propuesta nuevas pc para oficina",
        content:"Iniciar con propuesta para las nuevas máquinas que se usarán en la oficina con costos definidos presentar al director general",
        from:'Alex Vasquez',
        area:'IT',
        type:'Tecnología',
        to:'Jorge Sierra',
        createdAt:'	10/03/2017 07:29:46 -0700',
        modifiedAt:'A few minutes ago'
      },
      
    ]
    
    function age(birthYear) {
      let calculatedAge = new Date().getFullYear() - birthYear;
      if (calculatedAge == 1) {
        return "1 year old";
      } else if (calculatedAge == 0) {
        return "Baby";
      } else {
        return `${calculatedAge} years old`;
      }
    }
    
    function foods(foods) {
      return `
    <h4>Favorite Foods</h4>
    <ul class="foods-list">
    ${foods.map(food => `<li>${food}</li>`).join("")}
    </ul>
    `;
    }
    function getData(x){
      document.getElementById(`${x}`).innerHTML=`
      <div class="d-flex align-items-center">
    <strong>Cargando</strong>
    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
  </div>`
    
      let index = Number(x)
      let data = projects[index]
      console.log(data)
      setTimeout(function(){
        window.location = `./details.html?id=${data.id}`;
    }, 500);
    }
    function petTemplate(pet,x) {
      return `
        <div class="animal" id="animal" onClick="doSomething(${x})">
        <img class="pet-photo" src="${pet.photo}">
        <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
        <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
        ${pet.favFoods ? foods(pet.favFoods) : ""}
        </div>
      `;
    }
    function template(info,x){
      return `
      <div class="col-col-sm-6 col-md-4">
                        <div class="card text-white bg-dark mb-3" style="max-width: 20rem; height:225px;">
                          <div class="card-header">${info.type}</div>
                          <div class="card-body">
                            <h5 class="card-title">${info.title}</h5>
                            <p class="card-text">modified ${info.modifiedAt}</p>
                            <div id="${x}"><a class="btn btn-primary" onClick="getData(${x})">Accept</a></div>
                          </div>
                        </div>
                      </div>     
      `
    }
    document.getElementById("app").innerHTML = `${petsData.length!==0
    ?`<div class="container gallery-container">
    <div class="cards">
        <div class="row">
                ${projects.map(template).join("")}
        </div>                    
    </div>
  </div>`:`<div class="container my-3 py-5 text-center">      
  <img src="building2.png" width="400" height="300">
  <p class="mt-3">Por el momento no has creado ningún proyecto, presiona el botón de Nuevo Proyecto para empezar</p>
  </div>`}`;
  