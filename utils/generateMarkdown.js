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
          answers.push( "## Description\n" + data[key] + "\n");
        };
        break;
      case "installation":
        if (data[key] !== "") {
          answers.push( "## Installation\n" + data[key] + "\n");
          contents+= "[Installation](#installation)<br>";
        };
        break;
      case "usage":
        if (data[key] !== "") {
          answers.push( "## Usage\n" + data[key] + "\n");
          contents+= "[Usage](#usage)<br>";
        };
        break;
      case "license":
        if (data[key] !== "") {
          answers.push( "## License\nThis app uses the following license:" + data[key] + "\n");
          contents+= "[License](#license)<br>";
        };
        break;
      case "contributing":
        if (data[key] !== "") {
          answers.push( "## Contributing\n" + data[key] + "\n");
          contents+= "[Contributing](#contributing)<br>";
        };
        break;
      case "tests":
        if (data[key] !== "") {
          answers.push( "## Tests\n" + data[key] + "\n");
          contents+= "[Tests](#tests)<br>";
        };
        break;
      case "github":
        if (data[key] !== "") {

          let string = "## Questions\nIf you have any questions or would like to get in touch, please see my contact details below.\n" 
          + `[${data[key]}](https://github.com/${data[key]}` + "\n";

          answers.push(string);

          contents+= "[Questions](#questions)<br>";

          questionsHeadingExists = true;
        };
        break;
      case "email":
        if (data[key] !== "") {
          let string = "";
          if(!questionsHeadingExists) {
            string ="## Questions\n If you have any questions or would like to get in touch, please see my contact details below.\n";
          }
          string += `[${data[key]}](mailto:${data[key]})}`
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