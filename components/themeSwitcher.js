// themeswitcher.js

class ThemeSwitcher {
  constructor(targetElement) {
    this.themeSwitcherElement = document.createElement('div')
    this.themeSwitcherElement.classList.add('theme-switcher')
    this.themeSwitcherElement.innerHTML = `
      <button class="colorIcon"><i class="fa-solid fa-gear"></i></button>
      <div class="containerButtons">
        <button class="colorButton" data-color="var(--color1)"></button>
        <button class="colorButton" data-color="var(--color2)"></button>
        <button class="colorButton" data-color="var(--color3)"></button>
        <button class="colorButton" data-color="var(--color4)"></button>
      </div>
    `
    targetElement.appendChild(this.themeSwitcherElement)

    this.setupEventListeners()
  }

  setupEventListeners() {
    const colorIcon = this.themeSwitcherElement.querySelector('.colorIcon')
    const containerButtons =
      this.themeSwitcherElement.querySelector('.containerButtons')
    const colorButtons =
      this.themeSwitcherElement.querySelectorAll('.colorButton')

    colorIcon.addEventListener('click', () => {
      containerButtons.classList.toggle('active')
    })

    colorButtons.forEach((button) => {
      const colorValue = button.getAttribute('data-color')
      button.style.backgroundColor = colorValue

      button.addEventListener('click', () => {
        document.body.style.setProperty('--currentColor', colorValue)
        containerButtons.classList.remove('active')
      })
    })
  }
}

// Usage
document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcherContainer = document.querySelector('.themeSwitcher')
  const themeSwitcher = new ThemeSwitcher(themeSwitcherContainer)
})
