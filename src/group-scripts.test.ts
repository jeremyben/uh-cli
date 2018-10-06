import { groupScripts } from './group-scripts'

test('Group scripts together with ":" delimiter', () => {
	const scripts = {
		a: 'a',
		'a:b': 'ab',
		'a:b:c': 'abc',
		'a:d': 'ad',
		'm:n': 'mn',
		'm:o': 'mo'
	}

	const grouped = groupScripts(scripts)

	expect(grouped).toEqual({
		a: {
			a: 'a',
			'a:b': 'ab',
			'a:b:c': 'abc',
			'a:d': 'ad'
		},
		m: {
			'm:n': 'mn',
			'm:o': 'mo'
		}
	})
})
