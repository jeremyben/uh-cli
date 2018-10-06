#!/usr/bin/env node

import { spawnSync } from 'child_process'
import { existsSync } from 'fs'
import { dirname, resolve } from 'path'
import * as readPkgUp from 'read-pkg-up'
import { promptSelect } from './prompt'
import { groupScripts } from './group-scripts'

main()

/**
 * Entry point
 */
async function main() {
	const { pkg, path } = await readPkgUp()
	if (!pkg.scripts) return

	const cwd = dirname(path)
	const manager = existsSync(resolve(cwd, 'yarn.lock')) ? 'yarn' : 'npm'

	const scriptsGrouped = groupScripts(pkg.scripts)
	const scriptSelected = await promptSelect(scriptsGrouped, manager)

	spawnSync(scriptSelected, { shell: true, cwd, stdio: 'inherit' })
}
