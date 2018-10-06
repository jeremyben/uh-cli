import * as inquirer from 'inquirer'

/**
 * Recursively prompt for script selection.
 */
export async function promptSelect(scripts: object, manager: 'npm' | 'yarn'): Promise<string> {
	const choices = toChoices(scripts, manager)

	const { script } = await inquirer.prompt<{ script: string | object }>({
		type: 'list',
		name: 'script',
		message: 'Choose a script',
		choices
	})

	if (typeof script !== 'string') {
		return await promptSelect(script, manager)
	}

	return script
}

/**
 * Transform scripts to choice objects for inquirer.js.
 * Remove 'uh' key if any.
 */
function toChoices(scripts: object, manager: 'npm' | 'yarn') {
	return Object.entries(scripts)
		.filter(([key]) => key !== 'uh')
		.map(([key, script]) => {
			let value: { [name: string]: any } | string
			let more: string

			if (typeof script === 'string') {
				value = `${manager} run ${key}`
				more = ''
			} else {
				value = script
				more = `(${Object.keys(script).length} scripts)`
			}

			return <inquirer.objects.ChoiceOption>{
				name: `${key} ${more}`,
				short: key,
				value
			}
		})
}
