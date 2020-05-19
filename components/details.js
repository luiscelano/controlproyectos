const projects=[
  {
    id:'4fd4v4sd5f84f',
    title:"Gestión de pago de planilla",
    content:"Plantilla en spreadsheets para llevar el control de planilla del área de empleados de comida rápida",
    creator:'Luis Celano',
    area:'Planillas',
    type:'Contabilidad',
    createdAt:'	10/03/2017 07:29:46 -0700',
    modifiedAt:'A few minutes ago',
    status:"En proceso",
    date:'07/12/2020',
    status_color:"#FFAD1D",
    collaborators:[
      {
        name:'Pedro Alvarado',
        type:'Contabilidad',
        area:'Auditoría'
      },
      {
        name:'Juan Solis',
        type:'Contabilidad',
        area:'Administrativa'
      },
      {
        name:'Carmen Salguero',
        type:'Contabilidad',
        area:'Finanzas'
      }
    ],
    files:[
      {
        filename:'Instrucciones.pdf',
        size:'1.2 MB'
      },
      {
        filename:'Formato.xslx',
        size:'5.4 MB'
      }
    ]
  },
  {
    id:'f45sdf7857sd5f7',
    title:"UX/UI para app móvil v.1.0",
    content:"Diseñar Brief de app móvil según especificaciones del proyecto en el correo, únicamente la primera parte",
    creator:'Luis Celano',
    area:'Publicidad',
    type:'Diseño',
    createdAt:'	10/03/2017 07:29:46 -0700',
    modifiedAt:'A few hours ago',
    status:"Finalizado",
    status_color:"#05D80B",
    date:'07/12/2020',
    collaborators:[
      {
        name:'Jennifer López',
        type:'Diseño',
        area:'Arte final'
      },
      {
        name:'Jorge Solorzano',
        type:'Diseño',
        area:'Diseño Gráfico'
      },
      {
        name:'Kevin Vásquez',
        type:'Diseño',
        area:'Agente de Ventas'
      }
    ],
    files:[
      {
        filename:'Introducción.pdf',
        size:'1.2 MB'
      },
      {
        filename:'assets.zip',
        size:'13.4 MB'
      },
      {
        filename:'proyecto_5-12-2020_v1.0.zip',
        size:'15.4 MB'
      }
    ]
  },
  {
    id:'jtyj784n56g4nryt',
    title:"Propuesta nuevas pc para oficina",
    content:"Iniciar con propuesta para las nuevas máquinas que se usarán en la oficina con costos definidos presentar al director general",
    creator:'Luis Celano',
    area:'IT',
    type:'Tecnología',
    createdAt:'	10/03/2017 07:29:46 -0700',
    modifiedAt:'A few minutes ago',
    status:"Nuevo",
    status_color:"#808080",
    date:'07/12/2020',
    collaborators:[
      {
        name:'Jorge Arias',
        type:'IT',
        area:'Seguridad de la información'
      },
      {
        name:'Mauricio Contreras',
        type:'IT',
        area:'Gerencia'
      },
      {
        name:'Estuardo Rojas',
        type:'IT',
        area:'Soporte Técnico'
      }
    ],
    files:[
      {
        filename:'Propuesta.pdf',
        size:'1.2 MB'
      },
    ]
  },
  {
    id:'g49k4yu8lk77w8rfew7f9w',
    title:"Desarrollo sistema de monitoreo de agentes de comida rápida",
    content:"Continuar con el desarrollo de la plataforma que se utiliza para llevar el control de monitoreo de los agentes de comida rápida, así como agilizar la logística con gráficas dinámicas y así reduciendo tiempos de entregas",
    creator:'Luis Celano',
    area:'Desarrollo de Software',
    type:'Tecnología',
    createdAt:'	10/03/2017 07:29:46 -0700',
    modifiedAt:'A few minutes ago',
    status:"En proceso",
    status_color:"#FFAD1D",
    date:'07/12/2020',
    collaborators:[
      {
        name:'Arturo Díaz',
        type:'Tecnología',
        area:'Desarrollador Backend'
      },
      {
        name:'Mauricio Contreras',
        type:'Tecnología',
        area:'Analista de Datos/ Desarrollador API'
      },
      {
        name:'Angela Dominguez',
        type:'IT',
        area:'Desarrollador Frontend'
      }
    ],
    files:[
      {
        filename:'Manual Técnico.pdf',
        size:'1.2 MB'
      },
      {
        filename:'documentación_API.pdf',
        size:'14.3 MB'
      },
      {
        filename:'sistema_logística.zip',
        size:'44.7 MB'
      },
    ]
  },
]
    var GET = {};
    var queryString = window.location.search.replace(/^\?/, '');
    queryString.split(/\&/).forEach(function(keyValuePair) {
        var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
        var paramValue = keyValuePair.replace(/^[^=]*\=/, ""); // some decoding is probably necessary
        GET[paramName] = paramValue;
    });
    function files(data,x){
      return `<div class="row">
      <div class="col">
      <div class="card border-primary mb-3" style="max-width: 40rem;">
        <div class="card-body text-primary">
          <div class="container">
            <div class="row">
              <div class="col-10">
                <div class="row">
                  <h6 class="card-title">${data.filename}</h6>
                </div>
                <div class="row">
                  <p class="card-text">${data.size}</p>
                </div>
              </div>
              <div class="col-2">
                <a href="#">
                  <svg class="bi bi-download" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M5 7.5a.5.5 0 01.707 0L8 9.793 10.293 7.5a.5.5 0 11.707.707l-2.646 2.647a.5.5 0 01-.708 0L5 8.207A.5.5 0 015 7.5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 1z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>`
    }
    function collaborators(user,x){
      return `
      <tr>
        <th scope="row">${x+1}</th>
        <td>${user.name}</td>
        <td>${user.type}</td>
        <td>${user.area}</td>
        </tr>
      `
    }
    console.log(GET["id"])
     projects.map((value,index)=>{
        if(value.id===GET["id"]){
          console.log(value.modifiedAt)
          document.getElementById("title").innerHTML = value.title;
          document.getElementById("status").innerHTML = `<p id="status" style="border-radius:5px;background-color:${value.status_color};text-align:center;font-size:12px;width:80px;color: white; font-weight: 500;">${value.status}</p>`;
          document.getElementById("content").innerHTML = value.content;
          document.getElementById("modified").innerHTML = `Modified ${value.modifiedAt}`;
          document.getElementById("area").innerHTML = `Area: ${value.area}`;
          document.getElementById("tipo").innerHTML = `Tipo: ${value.type}`;
          document.getElementById("date").innerHTML = `Fecha de entrega: ${value.date}`;
          document.getElementById("files").innerHTML=`
          <div>
          ${value.files.map(files).join("")}
          </div>`
          document.getElementById("collaborators").innerHTML=`
          <table class="table table-borderless table-hover table-sm">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Departamento</th>
                          <th scope="col">Area</th>
                        </tr>
                      </thead>
                      <tbody style="font-size: 12px;">
                        ${value.collaborators.map(collaborators).join("")}
                      </tbody>
                    </table>`
        }
    })