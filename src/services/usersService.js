import { UserInfo } from "../entities/UserInfo";
import { ListOfAuthorsInfo } from "../entities/ListOfAuthorsInfo";

export const registerUserAuthentication = userObj => {
  let url = "https://book-api.hypetech.xyz/v1/auth/register";

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    },
    body: JSON.stringify(userObj)
  }).then(response => response.json());
};

export const getUsers = () => {
  let url = "https://book-api.hypetech.xyz/v1/users";

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    }
  })
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

export const getUser = id => {
  let url = `https://book-api.hypetech.xyz/v1/users/${id}`;

  const userWithPosts = fetch(`${url}?_embed=posts`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    }
  }).then(response => {
    if (response.ok) return response.json();
    throw new Error(response.message);
  });

  const userWithComments = fetch(`${url}?_embed=comments`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    }
  }).then(response => {
    if (response.ok) return response.json();
    throw new Error(response.message);
  });

  return Promise.all([userWithPosts, userWithComments]).then(([withPosts, withComments]) => ({
    ...withPosts,
    comments: withComments.comments
  }));
};

// export const getUserId = id => {
//   let url = `https://book-api.hypetech.xyz/v1/users/+${id}`;
//   return fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       "x-api-key": "B1tD3V"
//     }
//   })
//     .then(response => response.json())
//     .then();
// };

export const getAllUsersInfo = () => {
  let url = "https://book-api.hypetech.xyz/v1/users";

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    }
  })
    .then(response => response.json())
    .then(apiUsers => {
      return apiUsers.map(user => {
        const dateObject = new Date(user.createdAt);
        const dateString = `${dateObject.getDate()}-${dateObject.getMonth() + 1}-${dateObject.getFullYear()}`;
        return new ListOfAuthorsInfo(
          user.id,
          user.avatarUrl,
          user.about.bio,
          user.name.first,
          user.name.last,
          dateString
        );
      });
    });
};

export const logInUserAuthentication = (email, password) => {
  let url = "https://book-api.hypetech.xyz/v1/auth/login";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
  // console.log(body.email, body.password);
};
