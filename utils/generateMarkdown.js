// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    github,
    email
  } = data;

  return `

# ${title} ${getLicenseBadge(license)}

## Description
${description}

### Table of Contents
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)<br>

## Installation
${installation}

## Usage
${usage}

## License
This app uses the following license: ${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions

If you have any questions or would like to get in touch, please see my contact details below.

Github profile: [${github}](https://github.com/${github})

Email address: [${email}](mailto:${email})
`;
}

// a function to get a license badge
function getLicenseBadge(license) {

  let badge = "";

  switch (license) {
    case "Apache License 2.0":
      badge = "![license](https://img.shields.io/badge/license-Apache%202.0-blue)";
      break;

    case "MIT License":
      badge = "![license](https://img.shields.io/badge/license-MIT-blue)";
      break;

    case "GNU General Public License v3.0":
      badge = "![license](https://img.shields.io/badge/license-GNU%203.0-blue)";
      break;

    case "Mozilla Public License 2.0":
      badge = "![license](https://img.shields.io/badge/license-Mozilla%202.0-blue)";
      break;

    default:
      badge = "";
  }

  // Return the badge markdown code
  return badge;
}

module.exports = generateMarkdown;