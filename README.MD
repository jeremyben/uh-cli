# UH :thinking:

> What's that script again ? npm run uh...

- You have a lot of npm scripts in your package.json ?
- Don't you love sometimes an interactive CLI instead of a regular one with every other flag to remember ?

In every project you have multiple CLI tools and even your own nodejs scripts, and you don't want to bother remembering or typing them every time. :confused:

So you hardcode those binaries, flags and paths into npm scripts and give them nice and short names. :grinning:

It's all right at the beginning, but at some point, you end up with a lot of them. :worried:

Now, you and your team struggle typing the right one without looking into the package.json file. :triumph:

**How about `npm run uh` and simply choose your script from a neat and organised list ? :sweat_smile:**

## Features

#### Choice list

The **uh** command will parse your npm scripts and launch an interactive CLI list, from which you can choose the script you want to run.

#### Grouping

**uh** will also group your scripts that start identically and have a colon `:` delimiter.

###### Example

`"build"`, `"build:staging"`, `"build:prod"`, `"build:prod:frontend"`
will all be grouped under the `build` list item.

#### All managers

Detects and works both with NPM and Yarn.

## Usage

**Install** locally with :

- **NPM**: `npm install -D uh-cli`
- **Yarn**: `yarn add -D uh-cli`

**Run** locally with :

- **NPM**: `npx uh`
- **Yarn**: `yarn uh`

_To use `npm run uh`, you need to put `"uh": "uh"` in your package.json scripts (it will be stripped from the choice list)._

##### Global installation

You can also install the package globally and simply run `uh` in your terminal.
