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
	const participants = []
	for (let tour of allTours) {
		if (tour.lang == LANGS[lang] && tour.time.includes(hour)) {
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
