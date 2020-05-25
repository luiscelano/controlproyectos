document.getElementById('navbar').innerHTML=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom fixed-top">
            <a class="navbar-brand" href="../homepage.html" >
            <img src="../assets/my-large-icon.png" width="180" alt="" loading="lazy">
          </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Mis proyectos <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="addProject.html">Nuevo Proyecto</a>
                </li>
              </ul>
            </div>
          </nav>
`