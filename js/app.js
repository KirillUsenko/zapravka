const qrCodeModal = document.querySelector('.modal_qrcode')
const qrCodeButtons = document.querySelectorAll('.header__button')

const profitModal = document.querySelector('.modal_profit')
const profitButton = document.querySelector('.advantages-item__link_profit')

const poolModal = document.querySelector('.modal_pool')
const poolButton = document.querySelector('.advantages-item__link_pool')

const investorModal = document.querySelector('.modal_investor')
const investorButton = document.querySelector('.advantages-item__link_investor')

const burgerModal = document.querySelector('.modal_burger')
const burgerButton = document.querySelector('.nav__burger')
const burgerCross = document.querySelector('.burger-menu__cross')

const modalBacks = document.querySelectorAll('.modal__back')
const burgerLinks = document.querySelectorAll('.burger-menu__link')

const classes = {
	modalActive: 'modal_active',
	modalVisible: 'modal_visible',
}

const links = document.querySelectorAll('a[href*="#"]')

const addClass = (item, value) => item.classList.add(value)
const removeClass = (item, value) => item.classList.remove(value)

const activateModal = modal => {
	addClass(modal, classes.modalVisible)
	setTimeout(() => addClass(modal, classes.modalActive), 100)
}

const deactivateModal = modal => {
	removeClass(modal, classes.modalActive)
	setTimeout(() => removeClass(modal, classes.modalVisible), 300)
}

links.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault()

		const id = link.getAttribute('href').substr(1)

		document.getElementById(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})

modalBacks.forEach(back => {
	back.addEventListener('click', () => deactivateModal(back.parentNode))
})

burgerLinks.forEach(link => {
	link.addEventListener('click', () => deactivateModal(burgerModal))
})


qrCodeButtons.forEach(button => {
	button.addEventListener('click', () => activateModal(qrCodeModal))
})
investorButton.addEventListener('click', () => activateModal(investorModal))
profitButton.addEventListener('click', () => activateModal(profitModal))
poolButton.addEventListener('click', () => activateModal(poolModal))
burgerButton.addEventListener('click', () => activateModal(burgerModal))
burgerCross.addEventListener('click', () => deactivateModal(burgerModal))
