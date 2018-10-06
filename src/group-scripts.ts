/**
 * Group scripts according to the first occurence of a delimiter.
 */
export function groupScripts(scripts: object, delimiter: string = ':') {
	if (!delimiter) return scripts

	const grouped: object = {}

	for (const [fullKey, script] of Object.entries(scripts)) {
		const [firstPart] = fullKey.split(delimiter)
		const hasDelimiter = fullKey.includes(delimiter)

		// First Pass: Add script as string (no delimiter),
		// or as object property (delimiter detected)
		if (!grouped[firstPart]) {
			grouped[firstPart] = hasDelimiter ? { [fullKey]: script } : script
			continue
		}

		// Second Pass: If existing script is a string (no delimiter),
		// put it as property before adding the other
		if (typeof grouped[firstPart] === 'string') {
			grouped[firstPart] = { [firstPart]: grouped[firstPart] }
		}
		grouped[firstPart][fullKey] = script
	}

	return grouped
}
