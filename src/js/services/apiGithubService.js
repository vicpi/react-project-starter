export function getRepositoriesUrl(githubUsername) {
  return `https://api.github.com/users/${githubUsername}/repos?per_page=100`;
}

export function getRepositoryLanguagesUrl(githubUsername, repository) {
  return `https://api.github.com/repos/${githubUsername}/${repository}/languages`;
}
