// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
  if (badge === "none") {
    return "";
  } else {
    return `-[Badge](#badge)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return `-[License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `#License
    This project is covered under the following license: ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  // ## Name:
  return `# ${data.title};

  // ## Author Name:
  ${data.name};

  // ## Technologies used:
  ${data.type};

  // ## Username:
  ${data.username};

  // ## Description:
  ${data.description};

  // ## License:
  ${data.license};

`;
}

module.exports = generateMarkdown;
