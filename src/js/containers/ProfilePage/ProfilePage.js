import './ProfilePage.less';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as GithubActions from '../../actions/GithubActions';
import {bindActionCreators} from 'redux';
import {LanguagesSection} from '../../components/LanguagesSection/LanguagesSection';
import {RepositoriesSection} from '../../components/RepositoriesSection/RepositoriesSection';

class ProfilePage extends Component {
  componentDidMount() {
    this.githubUsername = this.props.params.username;
    this.props.actions.fetchUserInformation(this.githubUsername);
    this.props.actions.fetchRepositories(this.githubUsername);
  }

  render () {
    return (
      <div className="container">
        <header>
          <h1>
            {this.props.userInformation.name}
          </h1>
        </header>
        <div className="main">
          <LanguagesSection languages={this.props.languages} />
          <RepositoriesSection repositories={this.props.repositories}
                               githubName={this.props.userInformation.login} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state.profile === undefined) {
    return {};
  }
  return {
    repositories: state.profile.repositories,
    languages: state.profile.languages,
    userInformation: state.profile.userInformation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GithubActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
