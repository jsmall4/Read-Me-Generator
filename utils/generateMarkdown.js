// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
  if (badge === "none") return "";

  return `![License: ${badge}](https://img.shields.io/badge/License-${badge}-yellow.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") return "";
  return "- [License](#license:)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") return "";
  return `## License
  ${license}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  // ## Name:
  return `
  ${renderLicenseBadge(data.license)}
  # Project Title: ${data.title}

  ## Table of contents: 
  - [Author Name](#author-name:)
  - [Technologies used](#technologies-used:)
  - [Username](#gitHub-username:)
  - [Description](#description:)
  - [Usage](#usage:)
  ${renderLicenseLink(data.license)}
  - [Contributors](#contributors:)
  - [Contact Info](#contact-info:)

  ## Author Name:
  ${data.name}

  ## Technologies used:
  ${data.type}

  ## GitHub Username:
  ${data.username}

  ## Description:
  ${data.description}

  ## Usage:
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors:
  ${data.contributors}

  ## Contact Info: 
  For further information on this project please contact me via ${data.email}

`;
}

module.exports = generateMarkdown;
