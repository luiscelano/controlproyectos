const year = new Date().getFullYear()
document.getElementById('footer').innerHTML=`
<footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>Copyright ${year}&copy; Universidad Mariano Gálvez</small>
    </div>
  </footer>`