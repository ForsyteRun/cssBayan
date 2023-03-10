const accordionBlock = document.querySelectorAll('.accordion__block')
const icons = document.querySelectorAll('.accordion__icon')

accordionBlock.forEach((block) => {
  block.addEventListener('mouseenter', () => {

    //transform cross by hover
    const blockItem = block.querySelector('.fa-solid')
    const blockTitle = block.querySelector('.accordion__title')
    blockItem.style.cssText = "transform: rotate(45deg); transition: all 0.4s ease-in-out;"
    blockTitle.style.cssText = "transition: all 0.4s ease-in-out; color: #000"
    //cross on
    icons.forEach((icon) => {
      icon.classList.add('visibl')
    })
  })
  block.addEventListener('mouseleave', () => {

    //transform cross by hover
    const blockItem = block.querySelector('.fa-solid')
    const blockTitle = block.querySelector('.accordion__title')
    blockItem.style.cssText = "transform: rotate(-90deg); transition: all 0.4s ease-in-out;"
    blockTitle.style.cssText = "transition: all 0.4s ease-in-out; color: #1b1ba8ea"

    //cross off
    icons.forEach((icon) => {
      icon.classList.remove('visibl')
    })
  })
})