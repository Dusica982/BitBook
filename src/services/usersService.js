import { UserInfo } from "../entities/UserInfo";
import { ListOfAuthorsInfo } from '../entities/ListOfAuthorsInfo';

const registerUser = apiDataObj => {
  return "CAOO";
};

export default registerUser;

// export const registerUser = (apiDataObj) => {
//     const userData = JSON.stringify(apiDataObj);
//     let url = "https://book-api.hypetech.xyz/v1/auth/register";

//     return fetch(url, {
//         method: 'POST',
//         body: userData
//     })
// }

// export const sendValidatedData = (data) => {
//     const apiData = JSON.stringify(data)
//     let url = "https://jsonplaceholder.typicode.com/users/";

//     return fetch(url, {
//         method: "POST",
//         body: apiData
//     })
// }

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

