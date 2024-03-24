/* Função temporal do carousel */

function initCarousel() {
  // Função para avançar para o próximo slide do carrossel
  function nextSlide() {
    $('.carousel').carousel('next');
  }

  // Defina o intervalo em milissegundos para alternar entre os slides (por exemplo, a cada 5 segundos)
  var intervalo = 5000; // 5000 milissegundos = 5 segundos

  // Inicie o intervalo para alternar entre os slides
  var slideInterval = setInterval(nextSlide, intervalo);

  // Pare o intervalo quando o mouse estiver sobre o carrossel
  $('.container-fluid').hover(
    function () {
      clearInterval(slideInterval);
    },
    function () {
      slideInterval = setInterval(nextSlide, intervalo);
    }
  );
}


// Função para selecionar o serviço no formulário
function selecionarServico(servico) {
  if (servico === 'banho') {
    document.getElementById('formServices-bath').checked = true;
  } else if (servico === 'tosa') {
    document.getElementById('formServices-tosa').checked = true;
  }
}

/* Função para carrossel de rações secas com cards */

document.addEventListener('DOMContentLoaded', function () {
  let multipleCardCarousel = document.querySelector("#carouselRacoesSecas");


  if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false, // Disable automatic sliding
      wrap: false, // Prevent wrapping at the end
    });


    let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
    let cardWidth = document.querySelector(".carousel-item").offsetWidth;
    let scrollPosition = 0;


    document.querySelector("#carouselRacoesSecas .carousel-control-next").addEventListener("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        document.querySelector("#carouselRacoesSecas .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
      }
    });


    document.querySelector("#carouselRacoesSecas .carousel-control-prev").addEventListener("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        document.querySelector("#carouselRacoesSecas .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
      }
    });
  } else {
    multipleCardCarousel.classList.add("slide");
  }
});

/* Função para carrossel de rações úmidas com cards */

document.addEventListener('DOMContentLoaded', function () {
  let multipleCardCarousel = document.querySelector("#carouselRacoesUmidas");


  if (window.matchMedia("(min-width: 768px)").matches) {
    let = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false, // Disable automatic sliding
      wrap: false, // Prevent wrapping at the end
    });


    let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
    let cardWidth = document.querySelector(".carousel-item").offsetWidth;
    let scrollPosition = 0;


    document.querySelector("#carouselRacoesUmidas .carousel-control-next").addEventListener("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        document.querySelector("#carouselRacoesUmidas .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
      }
    });


    document.querySelector("#carouselRacoesUmidas .carousel-control-prev").addEventListener("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        document.querySelector("#carouselRacoesUmidas .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
      }
    });
  } else {
    multipleCardCarousel.classList.add("slide");
  }
});