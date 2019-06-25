const CHARCODE_START = 97;
const CHARCODE_END = (97 + 26);

const NOT_LOWER_CASE_LETTERS_REGEX = /[^a-z]+/g;

function buildAllLetterSet() {
	const result = new Set();
	for (let i = CHARCODE_START; i < CHARCODE_END; i++) {
		result.add(String.fromCharCode(i));
	}
	return result;
}

const ALL_LETTERS = buildAllLetterSet();

exports.getMissingLetters = (...args) => {
	const line = args.join('').toLowerCase().replace(NOT_LOWER_CASE_LETTERS_REGEX, '');
	// Split the line into the token character array.
	const chars = [...line];
	// Make a quick copy of the all letter set
	const charsNotUsed = new Set(Object.assign([], Array.from(ALL_LETTERS)));
	// Now pop the letters from the input and remove them from the reference set.
	while ((chars.length > 0) && (charsNotUsed.size > 0)) {
		charsNotUsed.delete(chars.shift());
	}
	return Array.from(charsNotUsed).join('');
}
