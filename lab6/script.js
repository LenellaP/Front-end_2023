function fetchRandomUser() {
    return fetch('https://randomuser.me/api/')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            return json.results[0];
        });
}

document.getElementById('loadUser').addEventListener('click', function() {
    const output = document.getElementById('output');

    Promise.all([
        fetchRandomUser(),
        fetchRandomUser(),
        fetchRandomUser(),
        fetchRandomUser(),
        fetchRandomUser()
    ]).then(function(users) {
        let result = '';

        users.forEach(function(user) {
            result += `<div class="user-container">
                <img src="${user.picture.large}" alt="picture" class="user-picture">
                <p class="user-cell">${'Phone: '+ user.cell}</p>
                <p class="user-city">${'City: ' + user.location.city}</p>
                <p class="user-postcode">${'Postcode: ' + user.location.postcode}</p>
                <p class="user-email">${'E-mail: ' + user.email}</p>
            </div>`;
        });

        

        output.innerHTML = result;
    });
});

