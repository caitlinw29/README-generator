// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function to generate markdown for README
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

Contact me with any questions at ${data.email} or through github at github.com/${data.github}

`;
}

module.exports = generateMarkdown;
