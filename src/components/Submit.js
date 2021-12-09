import React, { Component } from "react";

export default class Submit extends Component {
  render() {
    return (
      <>
        <p>You have to be logged in to submit</p>
        <br />
        <br />
        <b>Login</b>
        <br />
        <br />
        <form method="post" action="submit">
          <table border="0">
            <tbody>
              <tr>username:</tr>
              <td>
                <input type="text"></input>
              </td>
              <tr>password:</tr>
              <td>
                <input type="text"></input>
              </td>
            </tbody>
          </table>
          <br />
          <input type="submit" value="login"></input>
        </form>
        <a href="/forgot">Forgot your password?</a>
        <br />
        <br />
        <b>Create Account</b>
        <br />
        <br />
        <form method="post" action="submit">
          <table border="0">
            <tbody>
              <tr>username:</tr>
              <td>
                <input type="text"></input>
              </td>
              <tr>password:</tr>
              <td>
                <input type="text"></input>
              </td>
            </tbody>
          </table>
          <br />
          <input type="submit" value="create account"></input>
        </form>
      </>
    );
  }
}
