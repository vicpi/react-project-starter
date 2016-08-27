import { expect } from 'chai';
import { shallow, mount, render} from 'enzyme';
import profile from '../../../src/js/reducers/profile';
import * as types from '../../../src/js/constants/ActionTypes';
import * as actions from '../../../src/js/actions/GithubActions';

describe('profile Reducer', function () {
  const previousStateFixture = () => {
    return {
      repositories: [],
      languages: [],
      userInformation: {}
    };
  };

  const getRepositoriesFixture = () => {
    return [
      {
        name: 'repositoryNameA',
        url: 'https://api.github.com/repos/githubUser/repositoryNameA'
      },
      {
        name: 'repositoryNameB',
        url: 'https://api.github.com/repos/githubUser/repositoryNameB'
      }
    ];
  };

  const getLanguagesFixture = () => {
    return {
      'Javascript': 1000,
      'Elm': 300
    };
  };

  const userInformationFixture = () => {
    return {
      name: 'sampleName',
      login: 'sampleLogin'
    };
  };

  it('should refresh repositories on REFRESH_REPOSITORIES action', function () {
    const previousState = previousStateFixture();
    const action = actions.refreshRepositories(getRepositoriesFixture());
    const nextState = {
      ...previousState,
      repositories: getRepositoriesFixture()
    };

    expect(
      profile(previousState, action)
    ).to.deep.equal(nextState);
  });

  it('should refresh languages on REFRESH_LANGUAGES action', function () {
    const previousState = previousStateFixture();
    const action = actions.refreshLanguages(getLanguagesFixture());
    const nextState = {
      ...previousState,
      languages: getLanguagesFixture()
    };

    expect(
      profile(previousState, action)
    ).to.deep.equal(nextState);
  });

  it('should refresh user information on REFRESH_USER_INFORMATION_SUCCESS action', function () {
    const previousState = previousStateFixture();
    const action = actions.refreshUserInformationSuccess(userInformationFixture());
    const nextState = {
      ...previousState,
      userInformation: userInformationFixture()
    };

    expect(
      profile(previousState, action)
    ).to.deep.equal(nextState);
  });

  it('should return the same state on unknown action', function () {
    const previousState = previousStateFixture();
    const action = {
      type: 'UNKNOWN_ACTION',
      payload: 'unknown payload'
    };
    const nextState = previousStateFixture();

    expect(
      profile(previousState, action)
    ).to.deep.equal(nextState);
  });
});
