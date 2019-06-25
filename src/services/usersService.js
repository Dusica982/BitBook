import { UserInfo } from "../entities/UserInfo";

const registerUser = (userObj) => {
  // const userData = JSON.stringify(userObj);
  let url = "https://book-api.hypetech.xyz/v1/auth/register";

  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
      "x-api-key": "B1tD3V"
    },
    body: JSON.stringify(userObj)
  })
    .then((response) => response.json())
};

export default registerUser;

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
      console.log(apiUsers);

      return apiUsers.map(oneUser => {
        return new UserInfo(oneUser.avatarUrl, oneUser.first, oneUser.last, oneUser.about);
      });
    });
};
