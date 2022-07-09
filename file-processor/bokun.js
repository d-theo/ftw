const R = require('./shared')
const allTours = require(`${R.RESULT_PATH}/${R.BOKUN_FILE}`)

const LANGS = {
	ES: 'FREE TOUR POR BURDEOS',
	EN: 'Free Walking Tour Bordeaux',
}

/*
INPUT
{
    "time": "10:00 - 12:00",
    "title": "Free Walking Tour Bordeaux",
    "obj": {
      "1": {
        "name": "",
        "count": ""
      }
    }
  }
*/
function getBokunParticipants(hour, lang) {
	const participants = []
	for (let tour of allTours) {
		if (tour.title == LANGS[lang] && tour.time.includes(hour)) {
			const obj = tour.obj
			for (let index in obj) {
				const member = obj[index]
				participants.push(
					R.createParticipant({
						name: member.name,
						mail: '',
						count: member.count,
						origin: 'bokun',
					})
				)
			}
		}
	}
	return participants
}

module.exports = getBokunParticipants
