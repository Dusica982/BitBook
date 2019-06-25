import { UserInfo } from "../entities/UserInfo";
import { ListOfAuthorsInfo } from '../entities/ListOfAuthorsInfo';

export const registerUserAuthentication = (userObj) => {
  let url = "https://book-api.hypetech.xyz/v1/auth/register";

  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    },
    body: JSON.stringify(userObj)
  })
    .then((response) => response.json())
};

export const getUsers = id => {
  let url = "https://book-api.hypetech.xyz/v1/users/" + id;

  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.message);
    })
    .then(apiUsers => {

      return apiUsers.map(oneUser => {
        return new UserInfo(oneUser.avatarUrl, oneUser.first, oneUser.last, oneUser.about);
      });
    });
};

export const getAllUsersInfo = () => {
  let url = "https://book-api.hypetech.xyz/v1/users";

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    }
  })
    .then(response => response.json())
    .then((apiUsers) => {
      return apiUsers.map(user => {
        const dateObject = new Date(user.createdAt);
        const dateString = `${dateObject.getDate()}-${dateObject.getMonth() + 1}-${dateObject.getFullYear()}`;
        return new ListOfAuthorsInfo(user.avatarUrl, user.about.bio, user.name.first, user.name.last, dateString);
      })
    })
};

export const logInUserAuthentication = (email, password) => {

  let url = "https://book-api.hypetech.xyz/v1/auth/login";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'x-api-key': 'B1tD3V'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(response => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        console.log(response);
        return (
          this.setState({ errorMsg: "Error with a Fetch request, user already exist" })
        )
      }
      return response.json()
    })
  // console.log(body.email, body.password);
}