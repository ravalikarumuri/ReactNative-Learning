import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
   this.props.emailChanged(text);
 }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text></View>
      );
    }
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
      }
      return (<Button onPress={this.onButtonPress.bind(this)}>
       Login
      </Button>);
  }
  render() {
    return (
      <Card>
      <CardSection>
        <Input
        label="Email"
        placeholder="someone@gmail.com"
        onChangeText={this.onEmailChange.bind(this)}
        value={this.props.email}
        />
      </CardSection>
      <CardSection>
        <Input
        secureTextEntry
          label="Password"
          placeholder="somepassword"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
      </CardSection>
      { this.renderError() }
      <CardSection>
      {this.renderButton()}

      </CardSection>
      </Card>
    );
  }
}
const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};
const mapStateToProps = state => {
return {
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
};
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
