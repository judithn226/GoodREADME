// function to generate markdown for README
function generateMarkdown(data, repoInfo) {
  return `#Title
   ${data.title}
  ## Description
  ${data.description}
  ## Badge
  ${data.badge}
  ## Table Of Contents
 
  ## Installation
  ${data.install}

  ## Usage
  ${data.use}

  ## License
  ${data.license}

  ## Contributors

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Repository

  ${data.repo}

  ## Github

  ${repoInfo.name}
  ${repoInfo.profile}


`;
}

module.exports = generateMarkdown;
