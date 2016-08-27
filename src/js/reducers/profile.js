import * as types from '../constants/ActionTypes';

const initialState = {
  repositories: [],
  languages: [],
  userInformation: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REFRESH_REPOSITORIES:
      return {
        ...state,
        // repositories: GithubRepositoryInterface[]
        repositories: action.repositories
      };

    case types.REFRESH_LANGUAGES:
      return {
        ...state,
        languages: action.languages
      };

    case types.REFRESH_USER_INFORMATION_SUCCESS:
      return {
        ...state,
        userInformation: action.userInformation
      };

    default:
      return state;
  }
}

/**
 * GithubRepositoryInterface
 *
 * {
    "id": 6892125,
    "name": "configs",
    "full_name": "user/configs",
    "owner": {
      "login": "user",
      "id": 14959,
      "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/user",
      "html_url": "https://github.com/user",
      "followers_url": "https://api.github.com/users/user/followers",
      "following_url": "https://api.github.com/users/user/following{/other_user}",
      "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/user/subscriptions",
      "organizations_url": "https://api.github.com/users/user/orgs",
      "repos_url": "https://api.github.com/users/user/repos",
      "events_url": "https://api.github.com/users/user/events{/privacy}",
      "received_events_url": "https://api.github.com/users/user/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/user/configs",
    "description": ":wrench: My stuff",
    "fork": false,
    "url": "https://api.github.com/repos/user/configs",
    "forks_url": "https://api.github.com/repos/user/configs/forks",
    "keys_url": "https://api.github.com/repos/user/configs/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/user/configs/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/user/configs/teams",
    "hooks_url": "https://api.github.com/repos/user/configs/hooks",
    "issue_events_url": "https://api.github.com/repos/user/configs/issues/events{/number}",
    "events_url": "https://api.github.com/repos/user/configs/events",
    "assignees_url": "https://api.github.com/repos/user/configs/assignees{/user}",
    "branches_url": "https://api.github.com/repos/user/configs/branches{/branch}",
    "tags_url": "https://api.github.com/repos/user/configs/tags",
    "blobs_url": "https://api.github.com/repos/user/configs/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/user/configs/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/user/configs/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/user/configs/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/user/configs/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/user/configs/languages",
    "stargazers_url": "https://api.github.com/repos/user/configs/stargazers",
    "contributors_url": "https://api.github.com/repos/user/configs/contributors",
    "subscribers_url": "https://api.github.com/repos/user/configs/subscribers",
    "subscription_url": "https://api.github.com/repos/user/configs/subscription",
    "commits_url": "https://api.github.com/repos/user/configs/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/user/configs/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/user/configs/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/user/configs/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/user/configs/contents/{+path}",
    "compare_url": "https://api.github.com/repos/user/configs/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/user/configs/merges",
    "archive_url": "https://api.github.com/repos/user/configs/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/user/configs/downloads",
    "issues_url": "https://api.github.com/repos/user/configs/issues{/number}",
    "pulls_url": "https://api.github.com/repos/user/configs/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/user/configs/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/user/configs/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/user/configs/labels{/name}",
    "releases_url": "https://api.github.com/repos/user/configs/releases{/id}",
    "deployments_url": "https://api.github.com/repos/user/configs/deployments",
    "created_at": "2012-11-27T22:27:12Z",
    "updated_at": "2016-02-04T23:31:26Z",
    "pushed_at": "2016-06-07T21:39:30Z",
    "git_url": "git://github.com/user/configs.git",
    "ssh_url": "git@github.com:user/configs.git",
    "clone_url": "https://github.com/user/configs.git",
    "svn_url": "https://github.com/user/configs",
    "homepage": "",
    "size": 153,
    "stargazers_count": 2,
    "watchers_count": 2,
    "language": "Shell",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 2,
    "default_branch": "master"
  }
 */
