export function getEmail() {
	return cy.get('#email')
}
export function getPass() {
	return cy.get('#password')
}
export function getLogin() {
	return cy.get('.signInButton')
}

export function getAllTours(when = 'Today') {
	return cy
		.get('#ExtranetFrontend')
		.contains(when)
		.parent()
		.parent()
		.children()
}

export function showTourPanel(when = 'Today', lang = 'ES') {
	const tourName = {
		ES: 'FREE TOUR POR BURDEOS',
		EN: 'Free Walking Tour Bordeaux',
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

export function getParticipantsPanel() {
	return cy
		.get('#bokun-modal-wrapper')
		.contains('Bookings')
		.parent()
		.parent()
		.children()
		.last()
		.children()
}

export function getParticipantName(element) {
	return element.children().first().children().first().invoke('text')
}

export function getParticipantCount(element) {
	return element
		.children()
		.first()
		.children()
		.last()
		.children()
		.invoke('text')
}
