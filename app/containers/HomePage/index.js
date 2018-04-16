import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { getAuthToken } from '../../services/localStorage';
import { Creators as GlobalActions } from '../../global/reducer';
import { makeSelectUser, makeSelectEveryUser } from '../../global/selectors';
import {
  UpperBarWrapper,
  Background,
  LoginForm,
  Input,
  LoginButton,
  LoginText,
  UsernameText,
  LogoutButton,
  MainWrapper,
  DatePickerWrapper,
  DateText,
  CreateButton,
  BottomWrapper,
  User2Input,
} from './index.style';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      sinceWhen: '',
      tilWhen: '',
      user2: '',
      sinceWhenMoment: moment(),
      tilWhenMoment: moment(),
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (getAuthToken()) {
      this.props.getEveryUser();
      this.props.getUser();
    }
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.sinceWhen || !this.state.tilWhen || !this.state.user2) {
      alert('You should enter all the entries');
      return;
    }
    this.props.createPromise(this.state);
  }

  render() {
    const {
      user,
      everyUser,
    } = this.props;

    if (user) {
      return (
        <Background>
          <UpperBarWrapper>
            <UsernameText>
              {user.get('username')} 님
          </UsernameText>
            <LogoutButton onClick={this.props.logout}>
              로그아웃
          </LogoutButton>
          </UpperBarWrapper>
          <MainWrapper>
            <DatePickerWrapper>
              <DateText>
                sinceWhen
              </DateText>
              <DatePicker
                selected={this.state.sinceWhenMoment}
                onChange={(date) => this.setState({ sinceWhenMoment: date, sinceWhen: date.format() })}
                dateFormat="LLL"
              />
            </DatePickerWrapper>
            <DatePickerWrapper>
              <DateText>
                tilWhen
              </DateText>
              <DatePicker
                selected={this.state.tilWhenMoment}
                onChange={(date) => this.setState({ tilWhenMoment: date, tilWhen: date.format() })}
                dateFormat="LLL"
              />
            </DatePickerWrapper>
            <UsernameText>
              User2
            </UsernameText>
            <User2Input
              value={this.state.user2}
              onChange={({ target }) => this.setState({ user2: target.value })}
            >
              {!!everyUser &&
                everyUser.map((eachUser) => (
                  <option value={eachUser.get('id')} key={eachUser.get('id')}>
                    {eachUser.get('username')}
                  </option>
                ))
              }
            </User2Input>
            <CreateButton onClick={this.handleSubmit}>
              새 일정 추가
            </CreateButton>
          </MainWrapper>
          <BottomWrapper>
            promises_as_inviter : 
            {user.get('promises_as_inviter').map((promise) =>
              ` ${promise}`
            )
            }
          </BottomWrapper>
          <BottomWrapper>
            promises_as_invitee : 
            {user.get('promises_as_invitee').map((promise) =>
              ` ${promise}`
            )
            }
          </BottomWrapper>
        </Background>
      );
    }
    return (
      <Background>
        <LoginForm onSubmit={this.handleLogin}>
          <Input
            type="text"
            value={this.state.username}
            onChange={({ target }) => this.setState({ username: target.value })}
            placeholder="아이디"
          />
          <Input
            type="password"
            value={this.state.password}
            onChange={({ target }) => this.setState({ password: target.value })}
            placeholder="비밀번호"
          />
          <LoginButton type="submit">
            <LoginText>
              로그인
            </LoginText>
          </LoginButton>
        </LoginForm>
      </Background>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  everyUser: makeSelectEveryUser(),
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials: { username: string, password: string }) => dispatch(GlobalActions.loginRequest(credentials)),
  logout: () => dispatch(GlobalActions.logout()),
  getUser: () => dispatch(GlobalActions.getUserRequest()),
  createPromise: (credentials: { sinceWhen: string, tilWhen: string, user2: string }) => dispatch(GlobalActions.createPromiseRequest(credentials)),
  getEveryUser: () => dispatch(GlobalActions.getUsersRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
