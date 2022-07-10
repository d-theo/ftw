const R = require('./shared')
const allTours = require(`${R.RESULT_PATH}/${R.GURU_FILE}`)

const LANGS = {
	ES: 'Spanish',
	EN: 'English',
}

/*
INPUT
{
    "lang": "Spanish",
    "time": "10:00",
    "members": [
      {
        "name": "",
        "count": ""
      },
      {
        "name": "",
        "count": "3 people"
      }
    ]
  }[]*/
function getGuruParticipants(hour, lang) {
	const offset = new Date().getTimezoneOffset()
	const yourDate = new Date(new Date().getTime() - offset * 60 * 1000)
	const isodate = yourDate.toISOString().split('T')[0]

	const participants = []
	for (let tour of allTours) {
		if (tour.lang == LANGS[lang] && tour.time.includes(hour) && tour.date.includes(isodate)) {
			for (let member of tour.members) {
				participants.push(
					R.createParticipant({
						name: member.name,
						mail: '',
						count: member.count.split(' ')[0],
						origin: 'guru',
					})
				)
			}
		}
	}
	return participants
}

module.exports = getGuruParticipants
