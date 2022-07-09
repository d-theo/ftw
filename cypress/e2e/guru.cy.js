import { guru_token } from '../support/login'
import * as page from './guru.po'

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})

const participantsObj = []

describe('#_GURU', () => {
	it('passes', () => {
		cy.setCookie('logged_user_token', guru_token)
		cy.visit('https://guruwalk.com/gurus/tour_sessions/upcomings')

		page.todaysTours()
			.its('length')
			.then((len) => {
				for (let i = 0; i < len; i++) {
					page.showTour(i)

					const tourObj = {
						lang: '',
						time: '',
						members: [],
					}

					cy.get('.tour-session-bookings')
						.get('.info-container')
						.children()
						.eq(1)
						.children()
						.eq(0)
						.children()
						.eq(1)
						.invoke('text')
						.then((lang) => (tourObj.lang = lang.trim()))
					cy.get('.tour-session-bookings')
						.get('.info-container')
						.children()
						.eq(0)
						.children()
						.eq(1)
						.children()
						.eq(1)
						.invoke('text')
						.then((time) => (tourObj.time = time.trim()))

					page.getAllParticipants().each((el, i, list) => {
						const member = { name: '', count: '' }
						cy.wrap(el).within(($el) => {
							page.getNameInCtx()
								.invoke('text')
								.then((name) => (member.name = name))

							page.getNumberInCtx()
								.invoke('text')
								.then((count) => (member.count = count.trim()))
						})
						tourObj.members.push(member)
					})

					participantsObj.push(tourObj)
					cy.go('back')
				}
			})

		cy.writeFile('results/guru.json', participantsObj)
	})
})
