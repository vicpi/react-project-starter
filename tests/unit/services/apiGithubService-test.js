import { expect } from 'chai';
import { getUserInformationUri } from '../../../src/js/api/github/userInformation';
import * as actions from '../../../src/js/services/apiGithubService';

describe('apiGithubService', function () {
  it('should generate repositories url for Github', function () {
    const githubUsername = 'sampleGithubUsername';
    const expectedUrl = 'https://api.github.com/users/sampleGithubUsername/repos?per_page=100';

    expect(
      actions.getRepositoriesUrl(githubUsername)
    ).to.be.equal(expectedUrl);
  });

  it('should generate repository languages url for Github', function () {
    const githubUsername = 'sampleGithubUsername';
    const repository = 'sampleGithubRepository';

    expect(
      actions.getRepositoryLanguagesUrl(githubUsername, repository)
    ).to.equal('https://api.github.com/repos/sampleGithubUsername/sampleGithubRepository/languages')
  });

  it('should generate Github user information url', function () {
    const githubUsername = 'sampleGithubUsername';

    expect(
      getUserInformationUri(githubUsername)
    ).to.equal('https://api.github.com/users/sampleGithubUsername');
  });
});
