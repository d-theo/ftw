import { bokun_login, bokun_pass } from '../support/login'
import * as page from './bokun.po'

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})

const participantsObj = []

describe('#_BOKUN', () => {
	it('passes', () => {
		cy.visit('https://freewalkingtoursbordeaux1.bokun.io/v2/dashboard')
		page.getEmail().type(bokun_login)
		page.getPass().type(bokun_pass)
		page.getLogin().click()
		cy.wait(7000)
		page.getAllTours('Tomorrow')
			.its('length')
			.then((len) => {
				for (let i = 2; i < len; i++) {
					const element = page.getAllTours('Tomorrow').eq(i)
					element.children().eq(1).click()

					page.getViewBookings().click()

					cy.wait(2000)

					const tour = {
						time: '',
						title: '',
						obj: {},
					}

					cy.get('.activity-title')
						.invoke('text')
						.then((title) => (tour.title = title))
					cy.get("[data-testid='start-end-time-paragraph']")
						.invoke('text')
						.then((time) => (tour.time = time))

					const elements = page.getParticipantsPanel()
					extractParticipantFromPanel(elements, tour)

					cy.go('back')
				}
			})

		cy.writeFile('results/bokun.json', participantsObj)
	})
})

function extractParticipantFromPanel(elements, tour) {
	elements.each((element, index, list) => {
		if (index === 0) return
		if (index === list.length - 1) return
		const obj = { name: '', count: '' }
		tour.obj[index] = obj
		page.getParticipantName(cy.wrap(element)).then(
			(name) => (obj.name = name)
		)
		page.getParticipantCount(cy.wrap(element)).then(
			(count) => (obj.count = count)
		)
	})
	participantsObj.push(tour)
}
