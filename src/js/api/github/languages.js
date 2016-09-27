import {config} from '../../config/config';
import fetch from 'isomorphic-fetch';

/**
 * Make repository language request
 * @param githubUsername
 * @returns {Promise}
 */
export function repositoryLanguageRequest(githubUsername, repository) {
  if (config.useFixtures === true) {
    return Promise.resolve(sampleRepositoryLanguageResponse());
  } else {
    return fetch(getRepositoryLanguageUrl(githubUsername, repository))
      .then((res) => res.json());
  }
}

export function getRepositoryLanguageUrl(githubUsername, repository) {
  return `https://api.github.com/repos/${githubUsername}/${repository}/languages`;
}

export function sampleRepositoryLanguageResponse() {
  return {
    "Makefile": 217,
    "Javascript": 217,
    "Go": 217
  };
}
