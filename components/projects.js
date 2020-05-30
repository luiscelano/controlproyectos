/**
 * Objecto que representa la simulación de los proyectos agregados a la base de datos
 */
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
    function template(info,x){
      return `
      <div class="col-col-sm-12 col-md-3">
                        <div class="card text-white bg-dark mb-3" style="max-width: 40rem; height:340px;">
                          <div class="card-header">${info.type}</div>
                          <div class="card-body">
                            <h5 class="card-title max-lines-title">${info.title}</h5>
                            <div class="card-text" style="border-radius:5px;background-color:${info.status_color};text-align:center;font-size:12px;width:80px">${info.status}</div>
                            <br>
                            <p class="card-text max-lines">${info.content}</p>
                            <p class="card-text" style="font-size:11px;">modified ${info.modifiedAt}</p>
                            <div id="${x}"><a class="btn btn-primary" onClick="getData(${x})">Ver proyecto</a></div>
                          </div>
                        </div>
                      </div>     
      `
    }
    document.getElementById("app").innerHTML = `${projects.length!==0
    ?`<div>
    <div class="container">
    <div class="row">
             <div class="col">
              <h4>Elige un proyecto</h4>
              <hr class="my-4">
             </div>
           </div>
    </div>
    <div class="cards">
        <div class="row">
                ${projects.map(template).join("")}
        </div>                    
    </div>
  </div>`:`<div class="container my-3 py-5 text-center">      
  <img src="../assets/building2.png" width="400" height="300">
  <p class="mt-3">Por el momento no has creado ningún proyecto, presiona el botón de Nuevo Proyecto para empezar</p>
  </div>`}`;
  