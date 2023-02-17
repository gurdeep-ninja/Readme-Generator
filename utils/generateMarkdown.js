// function to generate markdown for README
function generateMarkdown(data) {

  let answers = [];
  let contents = "### Table of Contents\n";
  let questionsHeadingExists = false;


  for (const key in data) {

    switch (key) {
      case "title":
        if (data[key] !== "") {
          answers.push(`# ${data[key]}\n`);
        }
        break;
      case "description":
        if (data[key] !== "") {

          let string = "";
          string += `## Description\n${data[key]}`
          string += ``
          answers.push(string);
        };
        break;
      case "installation":
        if (data[key] !== "") {

          let string = "";
          string += `## Installation`
          string += `${data[key]}`
          answers.push(string);

          contents+= "[Installation](#installation)<br>";
        };
        break;
      case "usage":
        if (data[key] !== "") {

          let string = "";
          string += `## Usage`
          string += `${data[key]}`
          answers.push(string);

          contents+= "[Usage](#usage)<br>";
        };
        break;
      case "license":
        if (data[key] !== "") {

          let string = "";
          string += `## License`
          string += `This app uses the following license: ${data[key]}`
          answers.push(string);          
      
          contents+= "[License](#license)<br>";
        };
        break;
      case "contributing":
        if (data[key] !== "") {

          let string = "";
          string += `## Contributing`
          string += `${data[key]}`
          answers.push(string);

          contents+= "[Contributing](#contributing)<br>";
        };
        break;
      case "tests":
        if (data[key] !== "") {

          let string = "";
          string += `## Tests`
          string += `${data[key]}`
          answers.push(string);

          contents+= "[Tests](#tests)<br>";
        };
        break;
      case "github":
        if (data[key] !== "") {

          let string = "";
          string += `## Questions`
          string += `If you have any questions or would like to get in touch, please see my contact details below.`
          string += `GitHub: [${data[key]}](https://github.com/${data[key]})`
          answers.push(string);


          contents+= "[Questions](#questions)<br>";

          questionsHeadingExists = true;
        };
        break;
      case "email":
        if (data[key] !== "") {
          let string = "";
          if(!questionsHeadingExists) {
            string += `## Questions`
            string += `If you have any questions or would like to get in touch, please see my contact details below.`
          }
          string += `Email: [${data[key]}](mailto:${data[key]})`
          answers.push(string);
          contents+= "[Questions](#questions)<br>";
        };
        break;
    }
  }

  console.log(answers.join(""))

  // console.log(data)
  //   const {
  //     title,
  //     description,
  //     installation,
  //     usage,
  //     license,
  //     contributing,
  //     tests,
  //     github,
  //     email
  //   } = data;

  //   return `

  // # ${title} ${getLicenseBadge(license)}

  // ## Description
  // ${description}

  // ### Table of Contents
  // [Installation](#installation)<br>
  // [Usage](#usage)<br>
  // [License](#license)<br>
  // [Contributing](#contributing)<br>
  // [Tests](#tests)<br>
  // [Questions](#questions)<br>

  // ## Installation
  // ${installation}

  // ## Usage
  // ${usage}

  // ## License
  // This app uses the following license: ${license}

  // ## Contributing
  // ${contributing}

  // ## Tests
  // ${tests}

  // ## Questions

  // If you have any questions or would like to get in touch, please see my contact details below.

  // Github profile: [${github}](https://github.com/${github})

  // Email address: [${email}](mailto:${email})
  // `;
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