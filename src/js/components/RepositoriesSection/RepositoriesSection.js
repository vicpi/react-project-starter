import React, {Component, PropTypes} from 'react';

export class RepositoriesSection extends Component {
  static propTypes = {
    repositories: PropTypes.array.isRequired,
    githubName: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.renderRepositories = this.renderRepositories.bind(this);
    this.generateLinkToRepository = this.generateLinkToRepository.bind(this);
  }

  render() {
    return (
      <section className="repositories">
        <div className="repositories-caption">
          <p>Repositories</p>
        </div>
        <div className="repositories-content">
          {this.renderRepositories()}
        </div>
      </section>
    );
  }

  renderRepositories() {
    return this.props.repositories.map((repository) => {
      return (
        <div className="repository" key={repository.name}>
          <p className="repository-name">
            <a href={this.generateLinkToRepository(
              this.props.githubName, repository.name)}>{repository.name}</a>
          </p>
          <p className="repository-languages">
            {repository.languages.join(', ')}
          </p>
        </div>
      );
    });
  }

  generateLinkToRepository(githubUsername, repositoryName) {
    return `https://github.com/${githubUsername}/${repositoryName}`;
  }
}
