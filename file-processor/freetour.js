const R = require('./shared')
const obj = require(`${R.RESULT_PATH}/${R.FREETOUR_FILE}`)

const LANGS = {
	ES: 'es',
	EN: 'en',
}

/*
INPUT
{
    "name": "",
    "nb": "2",
    "lang": "en",
    "user": "",
    "time": "10:00 AM"
}*/
function getFreetourParticipants(hour, lang) {
	const participants = []
	for (let index in obj) {
		const participant = obj[index]
		if (
			participant.lang == LANGS[lang] &&
			participant.time.includes(hour)
		) {
			participants.push(
				R.createParticipant({
					name: participant.name,
					mail: participant.user,
					count: participant.nb,
					origin: 'freetour',
				})
			)
		}
	}
	return participants
}

module.exports = getFreetourParticipants
