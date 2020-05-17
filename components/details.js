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
  
    var GET = {};
    var queryString = window.location.search.replace(/^\?/, '');
    queryString.split(/\&/).forEach(function(keyValuePair) {
        var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
        var paramValue = keyValuePair.replace(/^[^=]*\=/, ""); // some decoding is probably necessary
        GET[paramName] = paramValue;
    });
    console.log(GET["id"])
     projects.map((value,index)=>{
        if(value.id===GET["id"]){
          console.log(value.modifiedAt)
          document.getElementById("title").innerHTML = value.title;
          document.getElementById("content").innerHTML = value.content;
          document.getElementById("modified").innerHTML = value.modifiedAt;
        }
    })
    