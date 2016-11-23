import React from 'react';
import {LanguagesSection} from './LanguagesSection';

var module = (
  <LanguagesSection languages={languagesFixture()}/>
);

function languagesFixture() {
  return ['Javascript', 'Typescript', 'Elm'];
}

export {module};
