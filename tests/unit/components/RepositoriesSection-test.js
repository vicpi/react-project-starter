import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import {RepositoriesSection} from '../../../src/js/components/RepositoriesSection/RepositoriesSection';

describe("RepositoriesSection Component", function() {
  it("expects root element to be .repositories", function () {
    const repositoriesSectionShallow = generateRepositoriesSectionComponent();
    expect(
      repositoriesSectionShallow.is('.repositories')
    ).to.equal(true);
  });

  it("expects title to be 'Repositories'", function () {
    const repositoriesSectionShallow = generateRepositoriesSectionComponent();
    expect(
      repositoriesSectionShallow
        .find('.repositories .repositories-caption p')
        .text()
    ).to.equal('Repositories');
  });

  it(`should contain 2 divs with classes repositories-caption 
  and repositories-content`, function () {
    const repositoriesSectionShallow = generateRepositoriesSectionComponent();
    expect(
      repositoriesSectionShallow.find('div.repositories-caption').length
    ).to.equal(1);
    expect(
      repositoriesSectionShallow.find('div.repositories-content').length
    ).to.equal(1);
  });

  it("should contain 2 repository divs", function () {
    const repositoriesSectionShallow = generateRepositoriesSectionComponent();
    expect(
      repositoriesSectionShallow
        .find('.repositories .repositories-content .repository')
        .length
    ).to.equal(2);
  });

  it("expects href of 1st repository to be equal 'https://github.com/githubName/repository'", function () {
    const repositoriesSectionShallow = generateRepositoriesSectionComponent();
    expect(
      repositoriesSectionShallow.find('.repositories > div').length
    ).to.equal(2);

    expect(
      repositoriesSectionShallow
        .find('.repositories > div .repository p a')
        .first()
        .props()
        .href
    ).to.equal('https://github.com/githubName/repository');
  });

  function generateRepositoriesSectionComponent () {
    return shallow(
      <RepositoriesSection
        githubName="githubName"
        repositories={[
        {
          name: 'repository',
          languages: ['l1', 'l2']
        },
        {
          name: 'repositoryName',
          languages: ['l1', 'l2']
        }
        ]} />
    );
  }
});
