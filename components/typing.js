//funçao para o texto simulando digitaçao
function typeText(element, texts, typeSpeed, backSpeed, delay) {
  let currentTextIndex = 0
  let isDeleting = false
  let text = ''

  function type() {
    const currentText = texts[currentTextIndex]
    if (isDeleting) {
      text = currentText.substring(0, text.length - 1)
    } else {
      text = currentText.substring(0, text.length + 1)
    }

    element.innerHTML = text

    if (!isDeleting && text === currentText) {
      isDeleting = true
      setTimeout(() => {
        type()
      }, delay) // Adicione um atraso antes de começar a apagar
    } else if (isDeleting && text === '') {
      isDeleting = false
      currentTextIndex = (currentTextIndex + 1) % texts.length
      setTimeout(type, typeSpeed)
    } else {
      setTimeout(type, isDeleting ? backSpeed : typeSpeed)
    }
  }

  type()
}

const element = document.querySelector('.typing')
const texts = [
  'Développeuse Front-end',
  'Disponible',
  'Curieuse',
  'Passionnée',
  'Moi...',
]
const typeSpeed = 100 // velocidade de digitação
const backSpeed = 50 // velocidade de apagar
const delay = 1000 // atraso antes de começar a apagar

typeText(element, texts, typeSpeed, backSpeed, delay)

const options = []
typeText(typingElement, options, 150, 150)
