//function to create the license badge
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

//generate markdown
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributing}

## Testing

${data.test}

## License

This application is covered under ${data.license}

## Questions

Contact me with any questions at ${data.email} or through github at [${data.github}](https://github.com/${data.github})

`;
}

//export the markdown so it can be pulled in index.js
module.exports = generateMarkdown;
