import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import { userInformationRequest } from '../api/github/userInformation';
import { repositoriesRequest } from '../api/github/repositories';
import { repositoryLanguageRequest } from '../api/github/languages';

export function refreshUserInformationRequest() {
  return {
    type: types.REFRESH_USER_INFORMATION_REQUEST,
    userInformation: {loading: true}
  };
}

export function refreshUserInformationSuccess(userInformation) {
  return {
    type: types.REFRESH_USER_INFORMATION_SUCCESS,
    userInformation
  };
}

export function refreshUserInformationError(error) {
  return {
    type: types.REFRESH_USER_INFORMATION_ERROR,
    userInformation: {error: true}
  };
}

export function refreshRepositories(repositories) {
  return {
    type: types.REFRESH_REPOSITORIES,
    repositories
  };
}

export function refreshLanguages(languages) {
  return {
    type: types.REFRESH_LANGUAGES,
    languages
  };
}

export function fetchRepositories(githubUsername) {
  return function (dispatch) {
    return repositoriesRequest(githubUsername)
      .then((repositories) => {
        let allRepositories = repositories;
        let promises = repositories.map((repository) => {
          return repositoryLanguageRequest(githubUsername, repository.name) ;
        });

        Promise.all(promises).then((responses) => {
          let allLanguages = {};
          responses.forEach((languageObject, index) => {
            allRepositories[index].languages = Object.keys(languageObject);
            Object.keys(languageObject).forEach((language) => {
              allLanguages[language] = 1;
            });
          });
          allLanguages = Object.keys(allLanguages);
          dispatch(refreshRepositories(allRepositories));
          dispatch(refreshLanguages(allLanguages));
        });
      });
  };
}

export function fetchUserInformation(githubUsername) {
  return function (dispatch) {
    dispatch(refreshUserInformationRequest());
    return userInformationRequest(githubUsername)
      .then((response) => response.json())
      .then((userInformation) => {
        dispatch(refreshUserInformationSuccess(userInformation));
      })
      .catch((e) => refreshUserInformationError(e));
  };
}
