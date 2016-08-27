import React, {Component, PropTypes} from 'react';

export class LanguagesSection extends Component {
  static propTypes = {
    languages: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.renderLanguages = this.renderLanguages.bind(this);
  }

  render() {
    return (
      <section className="languages">
        <div className="languages-caption">
          <p>Languages</p>
        </div>
        <div className="languages-content">
          <ul>
            {this.renderLanguages()}
          </ul>
        </div>
      </section>
    );
  }

  renderLanguages() {
    return this.props.languages.map((language) => {
      return <li key={language}>{language}</li>;
    });
  }
}
