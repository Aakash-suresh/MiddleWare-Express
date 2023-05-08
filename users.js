const express = require('express');
const userRouter = express.Router();

const listOfUsers = [
    {
        'id': 1,
        'name': 'jeeva'
    },
    {
        'id': 2,
        'name': 'aakash'
    },
    {
        'id': 3,
        'name': 'adsdsdh'
    },
    {
        'id': 4,
        'name': 'sdsfsfsh'
    },
    {
        'id': 5,
        'name': 'sdafgadfgdgrgregw'
    }
];

userRouter.get('/', (request, response) => {
    response.send('This is the user page');
});

userRouter.get('/:id([0-9]{1})', (request, response) => {
    const pageId = Number(request.params.id);
    const userId = listOfUsers.find((user) => {
        return user.id === pageId;
    });

    if (!userId) {
        response.send('Page Not Found...');
    } else {
        response.json(userId.name);
    }
});

module.exports = userRouter;
