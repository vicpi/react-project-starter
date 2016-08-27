import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { LanguagesSection } from '../../../src/js/components/LanguagesSection/LanguagesSection';

describe('LanguagesSection Component', function () {
  it('should render a component itself as a section dom element with class "languages"', function () {
    let component = shallowRenderComponent();
    expect(
      component.is('.languages')
    ).to.equal(true);
  });

  it('should have 2 divs with classes languages-caption and languages-content', function () {
    let component = shallowRenderComponent();
    expect(
      component.find('.languages').children().at(0).is('.languages-caption')
    ).to.equal(true);
    expect(
      component.find('.languages').children().at(1).is('.languages-content')
    ).to.equal(true);
  });

  it('should render a list of 3 languages in specific order', function () {
    let component = shallowRenderComponent();
    let listItems = component.find('.languages-content ul > li');
    expect(
      listItems
    ).to.have.length(3);
    expect(
      listItems.at(0).text()
    ).to.equal(languagesFixture()[0]);
    expect(
      listItems.at(1).text()
    ).to.equal(languagesFixture()[1]);
    expect(
      listItems.at(2).text()
    ).to.equal(languagesFixture()[2]);
  });

  it('expects each language list item to have key', function () {
    let component = shallowRenderComponent();
    let listItems = component.find('.languages-content ul > li');
    listItems.forEach(item => {
      expect(
        item.key()
      ).to.be.not.empty;
    });
    expect(
      listItems.at(0).key()
    ).to.equal(languagesFixture()[0]);
    expect(
      listItems.at(1).key()
    ).to.equal(languagesFixture()[1]);
    expect(
      listItems.at(2).key()
    ).to.equal(languagesFixture()[2]);
  });

  function shallowRenderComponent() {
    return shallow(
      <LanguagesSection
        languages={languagesFixture()} />
    );
  }

  /**
   * Mock data for list of languages
   * @returns {string[]}
   */
  function languagesFixture() {
    return ['Javascript', 'Typescript', 'Elm'];
  }
});
