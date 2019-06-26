
import UserSearch from "../../pages/";


const compareUsersInfo = () => {
    const url = "https://book-api.hypetech.xyz/v1/users";

    return fetch(url)
        .then(response => response.data)
        .then(data => {
            const apiUsers = data.results;

            const users = apiUsers.map(user => {
                return new UserSearch(user.name.first, user.name.last);
            });
            return users;
        });
};

export default compareUsersInfo;


