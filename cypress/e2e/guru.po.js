export function getEmail() {
	return cy.get('#user_login_email')
}
export function getPass() {
	return cy.get('#user_login_password')
}
export function getLogin() {
	return cy.get('#login_with_password_button')
}
export function todaysTours() {
	return cy.get('.tour-session-by-date').eq(0).children().eq(1).children()
}
export function showTour(index) {
	todaysTours().eq(index).contains('Manage event').click()
}
export function getAllParticipants() {
	return cy.get('.card-body')
}
// must be in a within
export function getNameInCtx() {
	return cy.get('.manage-link')
}
// must be in a within
export function getNumberInCtx() {
	return cy.get('.info-container').children().first().children().last()
}
