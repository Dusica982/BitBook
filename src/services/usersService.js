const registerUser = (apiDataObj) => {
    return "CAOO"
}

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