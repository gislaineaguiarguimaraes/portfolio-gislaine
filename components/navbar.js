// Função para criar a Navbar
function Navbar({ containerId }) {
  const container = document.getElementById(containerId)

  if (!container) {
    console.error(`Container element with id '${containerId}' not found.`)
    return
  }
  const icons = [
    { name: 'index', icon: ' fa-house', text: 'Home', route: '/index.html' },
    {
      name: 'about',
      icon: 'fa-user',
      text: 'About',
      route: '../pages/about.html',
    },
    {
      name: 'experience',
      icon: 'fa-suitcase',
      text: 'Experience',
      route: '../pages/experience.html',
    },
    {
      name: 'portfolio',
      icon: 'fa-desktop',
      text: 'Portfolio',
      route: '../pages/portfolio.html',
    },
    {
      name: 'contact',
      icon: 'fa-paper-plane',
      text: 'Contact',
      route: '../pages/contact.html',
    },
  ]
  const navbar = document.createElement('nav')
  navbar.className = 'navbar'

  const hamburgerContainer = document.createElement('div') //mexi aqui
  hamburgerContainer.className = 'hamburgerContainer'
  const hamburgerButton = document.createElement('button')
  hamburgerButton.className = 'hamburger-icon'
  hamburgerButton.innerHTML =
    '<span class="bar"></span><span class="bar"></span><span class="bar"></span>'
  hamburgerContainer.appendChild(hamburgerButton)

  const navList = document.createElement('ul')
  navList.className = 'nav-list'

  icons.forEach(({ name, icon, text, route }, index) => {
    const listItem = document.createElement('li')

    const link = document.createElement('a')
    link.className = 'link'
    link.href = route
    link.innerHTML = `<i class="fa-solid ${icon}"></i>`

    link.innerHTML += `<span class="icon-text">${text}</span>`

    if (index !== icons.length - 1) {
      console.log(icons.length)
      const points = document.createElement('span')
      points.className = 'vertical-dots'
      points.innerHTML = '...'
      link.appendChild(points)
    }

    listItem.appendChild(link)
    navList.appendChild(listItem)
  })

  navbar.appendChild(navList)
  container.appendChild(navbar)
  container.appendChild(hamburgerContainer)

  const navLinks = document.querySelectorAll('.link')
  const currentPath = window.location.pathname

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute('href')

    if (currentPath === linkPath) {
      link.classList.add('active') // Aplica a classe 'active' ao link atual
    }
    link.addEventListener('click', (event) => {
      event.preventDefault()

      navLinks.forEach((link) => link.classList.remove('active'))
      link.classList.add('active')

      const targetPage = link.getAttribute('href')

      setTimeout(() => {
        window.location.href = targetPage
      }, 300)
    })
  })

  hamburgerButton.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar')
    hamburgerButton.classList.toggle('cross')
    navbar.classList.toggle('menu-open')
  })
}
