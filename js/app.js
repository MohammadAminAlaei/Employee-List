_getUsers(1).then(users_1 => {
    _getUsers(2).then(users_2 => {
        let users = [...users_1, ...users_2]
        users.map(users => {
            addCard({
                firstName: users.first_name,
                lastName: users.last_name,
                email: users.email,
                avatar: users.avatar,
            });
        })

    })
})

