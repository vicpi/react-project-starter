import './LandingPage.scss';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as GithubActions from '../../actions/GithubActions';
import {bindActionCreators} from 'redux';

class LandingPage extends Component {
  render() {
    return (
      <div className="container landing">
        <div className="inner">
          <h2 className="github-username-title">Enter your Github username</h2>
          <div className="github-username-container form-group">
            <input className="github-username form-control" type="text"
              ref="username" id="githubUsername" />
            <a className="generate-button btn btn-primary" type="button"
              onClick={this.goToProfile}>Generate</a>
        </div>
      </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.goToProfile = this.goToProfile.bind(this);
    this.generateProfileUrl = this.generateProfileUrl.bind(this);
  }

  goToProfile() {
    const username = this.refs.username.value;
    const path = this.generateProfileUrl(username);
    this.context.router.push(path);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  generateProfileUrl(username) {
    return `/profile/${username}`;
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
)(LandingPage);
