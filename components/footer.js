const year = new Date().getFullYear()
document.getElementById('footer').innerHTML=`
<footer class="site-footer">
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h6>Sobre nosotros</h6>
      <p class="text-justify">Somos un grupo de jóvenes con la iniciativa de innovar en el mundo de la tecnología aportando nuestro grano de
      arena en este increíble mundo de la informática.</p>
    </div>

    <div class="col-xs-6 col-md-3">
      <h6>Desarroladores</h6>
      <ul class="footer-links">
        <li><a href="#">Luis Celano</a></li>
        <li><a href="#">Ramón Contreras</a></li>
        <li><a href="#">Isis Odina</a></li>
        <li><a href="#">Henry Pérez</a></li>
      </ul>
    </div>

    <div class="col-xs-6 col-md-3">
      <h6>Categoría</h6>
      <ul class="footer-links">
        <li><a href="http://scanfcode.com/about/">Ingeniería en Sistemas</a></li>
      </ul>
    </div>
  </div>
  <hr>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-8 col-sm-6 col-xs-12">
      <p class="copyright-text">Copyright &copy; ${year} Todos los derechos reservados por
   <a href="#">Savepro</a>.
      </p>
    </div>

    <div class="col-md-4 col-sm-6 col-xs-12">
      <ul class="social-icons">
        <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
        <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
      </ul>
    </div>
  </div>
</div>
</footer>`