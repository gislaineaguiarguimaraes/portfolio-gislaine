document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel')
  const items = document.querySelectorAll('.carousel_item')
  const pagination = document.querySelector('.carousel_pagination')
  const itemWidth = items[0].offsetWidth // Largura de um item

  let currentIndex = 0
  let offset = 0

  function updateCarousel() {
    const containerWidth = carousel.offsetWidth
    const lastIndex = items.length - 1

    // Se o índice for maior que o último, mantenha-o como o último
    if (currentIndex > lastIndex) {
      currentIndex = lastIndex
    }

    // Calcule o deslocamento apropriado
    offset = (containerWidth - itemWidth) / 2

    // Calcule o translateX com base no índice e no offset
    const translateX = -currentIndex * itemWidth + offset

    // Aplique o transform
    carousel.style.transform = `translateX(${translateX}px)`

    // Atualize a classe ativa
    items.forEach((item, index) => {
      item.classList.remove('active')
      if (index === currentIndex) {
        item.classList.add('active')
      }
    })

    paginationDots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active')
      } else {
        dot.classList.remove('active')
      }
    })
  }

  function goToSlide(index) {
    currentIndex = index
    updateCarousel()
  }

  const paginationDots = []

  items.forEach((_, index) => {
    const dot = document.createElement('div')
    dot.classList.add('dot')
    pagination.appendChild(dot)
    paginationDots.push(dot)

    dot.addEventListener('click', () => {
      goToSlide(index)
    })
  })

  updateCarousel()
})
