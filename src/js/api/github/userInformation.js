export function generateUserInformationRequest(githubUsername) {
  return `https://api.github.com/users/${githubUsername}`;
}

export function sampleUserInformationResponse() {
  return {
    "login": "exampleGithubUsername",
    "id": 12345,
    "avatar_url": "https://avatars.githubusercontent.com/u/12345?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/exampleGithubUsername",
    "html_url": "https://github.com/exampleGithubUsername",
    "followers_url": "https://api.github.com/users/exampleGithubUsername/followers",
    "following_url": "https://api.github.com/users/exampleGithubUsername/following{/other_user}",
    "gists_url": "https://api.github.com/users/exampleGithubUsername/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/exampleGithubUsername/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/exampleGithubUsername/subscriptions",
    "organizations_url": "https://api.github.com/users/exampleGithubUsername/orgs",
    "repos_url": "https://api.github.com/users/exampleGithubUsername/repos",
    "events_url": "https://api.github.com/users/exampleGithubUsername/events{/privacy}",
    "received_events_url": "https://api.github.com/users/exampleGithubUsername/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Max Mustermann",
    "company": null,
    "blog": null,
    "location": "Some city",
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 3,
    "public_gists": 3,
    "followers": 10,
    "following": 2,
    "created_at": "2010-06-25T06:56:09Z",
    "updated_at": "2016-03-20T16:50:41Z"
  };
}

export function sampleUserInformationRequest() {
  return 'https://api.github.com/users/exampleGithubUsername';
}

export function requestPath() {
  return '/users/user';
}
