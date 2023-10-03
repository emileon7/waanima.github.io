const navbar = document.querySelector('#menu');
navbar.innerHTML=  `



<nav id="navbar" class="navbar navbar-expand-lg" style="font-family:Cocogoose Pro; background-color: rgba(255, 255, 255, 0.88);  font-size:20px;">
<a class="logo"  href="Inicio.html">
<img class="logo" style="position: relative;left: 0;width: 250px;height: 250px;"  src="imagenes/logo_waanimaofi.png" alt=""></a>
<button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse  " id="navbarSupportedContent" >

    <ul class="navbar-nav ">
   
    <li class="nav-item">
    <a class="nav-link" href="introduccion.html" style="color:#FF3131">Vocabulario</a>
    </li>


    <li class="nav-item dropdown" >
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true" style="color:#FF3131 ">
        Cultura
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="cultura.html">Maya K'iche'</a></li>
        
      </ul>
    </li>
    
    
   
    <li class="nav-item dropdown" >
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true" style="color:#FF3131 ">
      Aprende jugando
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="JuegoParejas.html">Práctica los números</a></li>
      <li><a class="dropdown-item" href="Sopa.html">Sopa de letras</a></li>
      <li><a class="dropdown-item" href="memorama.html">Memorama</a></li>
    </ul>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="introduccion.html" style="color:#FF3131">Acerca de</a>
    </li>
  </div>
</nav>`;