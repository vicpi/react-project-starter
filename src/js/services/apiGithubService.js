
export function getRepositoryLanguagesUrl(githubUsername, repository) {
  return `https://api.github.com/repos/${githubUsername}/${repository}/languages`;
}
