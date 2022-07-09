const RESULT_PATH = '../results'
const BOKUN_FILE = 'bokun.json'
const FREETOUR_FILE = 'freetour.json'
const GURU_FILE = 'guru.json'

function createParticipant({ name, time, mail, origin, count }) {
	return {
		name,
		mail,
		count,
		origin,
	}
}

module.exports = {
	RESULT_PATH,
	BOKUN_FILE,
	FREETOUR_FILE,
	GURU_FILE,
	createParticipant,
}
