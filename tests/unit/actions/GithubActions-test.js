import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/js/actions/GithubActions';
import * as types from '../../../src/js/constants/ActionTypes';
import {
  generateUserInformationRequest, sampleUserInformationResponse, requestPath
} from '../../../src/js/api/github/userInformation';
import nock from 'nock';
import { expect } from 'chai';
import { requestHost } from '../../../src/js/api/github/github';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('GithubActions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches REFRESH_USER_INFORMATION_SUCCESS when fetching user information has been done', () => {
    nock(requestHost())
      .get(requestPath())
      .reply(200, { body: sampleUserInformationResponse()});

    const expectedActions = [
      {
        "type": types.REFRESH_USER_INFORMATION_REQUEST,
        "userInformation": {
          loading: true
        }
      },
      {
        type: types.REFRESH_USER_INFORMATION_SUCCESS,
        userInformation: {
          body: sampleUserInformationResponse()
        }
      }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(actions.fetchUserInformation('user'))
      .then(() => {
        expect(
          store.getActions()
        ).to.deep.equal(expectedActions);
      });
  });
});
