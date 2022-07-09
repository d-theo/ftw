import { freetour_login, freetour_pass } from '../support/login'
import * as page from './freetour.po'

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})

const participantsObj = {}

describe('#_FREETOUR', () => {
	const offset = new Date().getTimezoneOffset()
	const yourDate = new Date(new Date().getTime() - offset * 60 * 1000)
	const isodate = yourDate.toISOString().split('T')[0]
	it('passes', () => {
		cy.visit('https://admin.freetour.com/backoffice/bookings')
		page.getEmail().type(freetour_login)
		page.getPass().type(freetour_pass)
		page.getLogin().click()
		cy.visit(
			`https://admin.freetour.com/backoffice/bookings?date=${isodate}`
		)

		page.getParticipants().each((_el, index, _list) => {
			cy.wrap(_el).within(($el) => {
				const obj = {
					name: '',
					nb: '',
					lang: '',
					user: '',
					time: '',
				}
				participantsObj[index] = obj

				page.getUserTime().then((time) => (obj.time = time.trim()))
				page.getUserName().then((name) => (obj.name = name.trim()))
				page.getUserNb().then((nb) => (obj.nb = nb.trim()))
				page.getUserLang().then((lang) => (obj.lang = lang.trim()))
				page.getUserMail().then((user) => (obj.user = user.trim()))
			})
		})
		cy.writeFile('results/freetour.json', participantsObj)
	})
})
