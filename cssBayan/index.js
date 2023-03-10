const accordionBlock = document.querySelectorAll('.accordion__block')
const icons = document.querySelectorAll('.accordion__icon')

accordionBlock.forEach((block) => {
  block.addEventListener('mouseenter', () => {

    //transform cross by hover
    const blockItem = block.querySelector('.fa-solid')
    const blockTitle = document.querySelectorAll('.accordion__title')
    blockItem.style.cssText = "transform: rotate(45deg); transition: all 0.4s ease-in-out;"
    blockTitle.forEach((title) => {
      title.style.cssText = "transition: all 0.4s ease-in-out; color: #000"
    })

    //cross on
    icons.forEach((icon) => {
      icon.classList.add('visibl')
    })

    //appear img
    const img = block.querySelector('.accordion__img img')
    img.style.cssText = "height: 30rem; width: 50%; transition: all 0.4s ease"
    
  })
  block.addEventListener('mouseleave', () => {

    //transform cross by hover
    const blockItem = block.querySelector('.fa-solid')
    const blockTitle = document.querySelectorAll('.accordion__title')
    blockItem.style.cssText = "transform: rotate(-90deg); transition: all 0.1s ease;"
    blockTitle.forEach((title) => {
      title.style.cssText = "transition: all 0.4s ease-in-out; color: #1b1ba8ea"
    })

    //cross off
    icons.forEach((icon) => {
      icon.classList.remove('visibl')
    })

    //disappear img
    const img = block.querySelector('.accordion__img img')
    img.style.cssText = "height: 0; width: 0; transition: all 0.7s ease-in-out;"
  })
})


document.addEventListener('click', (event) => {
  const visibleImg = document.querySelector('.visiblImg')

  //set stable choose img
  const block =  event.target.closest('.accordion__block')
  const img = block.querySelector('.accordion__img img')

  //find all another img & set it unVisible
  img && img.classList.toggle('visiblImg')
  visibleImg !== img && visibleImg && visibleImg.classList.remove('visiblImg')
})
