//JS do carrossel de icones
if (window.innerWidth > 992) {
  $(document).ready(function () {
    $('.containerIcons').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false, // Ativa o modo central para criar um carrossel circular

      centerPadding: '5px', // Espaçamento entre os ícones
      initialSlide: 1,
      prevArrow: '<button type="button" class="slick-prev"></button>', // Adicione a seta de "Anterior"
      nextArrow: '<button type="button" class="slick-next"></button>', // Adicione a seta de "Próximo"
    })
  })
}
