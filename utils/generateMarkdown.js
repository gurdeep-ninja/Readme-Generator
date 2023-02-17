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

# ${title}

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
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
Github profile: [${github}](https://github.com/${github})

Email address: [${email}](mailto:${email})
`;
}
module.exports = generateMarkdown;