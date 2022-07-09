export function getEmail() {
	return cy.get('.modal-form').get("[type='email']").eq(0)
}
export function getPass() {
	return cy.get('.modal-form').get("[type='password']").eq(0)
}
export function getLogin() {
	return cy.get('.modal-form').get("[type='submit']").eq(0)
}
export function showTourPanel(when = 'Today', lang = 'SPAN') {
	const tourName = {
		SPAN: 'FREE TOUR POR BURDEOS',
	}[lang]
	return cy
		.get('#ExtranetFrontend')
		.contains(when)
		.parent()
		.parent()
		.children()
		.last()
		.contains(tourName)
		.click()
}
export function getViewBookings() {
	return cy.get(`[data-testid=button-view-bookings]`)
}

export function getParticipants() {
	return cy.get('.booking-cards.js-tours').get('.booking-card')
}

export function getUserTime() {
	return cy.get('.booking-card__time').last().invoke('text')
}
export function getUserName() {
	return cy.get('.booking-card__name').eq(0).invoke('text')
}
export function getUserLang() {
	return cy.get('.booking-card__info').children().eq(1).last().invoke('text')
}
export function getUserNb() {
	return cy.get('.booking-card__info').children().eq(0).last().invoke('text')
}
export function getUserMail() {
	return cy.get('.booking-card__user').children().eq(0).invoke('text')
}
