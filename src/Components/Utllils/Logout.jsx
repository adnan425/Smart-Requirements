import  { Component } from 'react'
import auth from '../Services/authService';
export default class Logout extends Component {
    componentDidMount() {
        auth.Logout();
        window.location = '/';
    }
  render() {
    return null;
  }
}
 