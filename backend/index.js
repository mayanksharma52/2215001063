const express= require('express');
const path = require('path');
const app=express();
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const users = Object.entries({
    "1": "John Doe",
    "10": "Helen Moore",
    "11": "Ivy Taylor",
    "12": "Jack Anderson",
    "13": "Kathy Thomas",
    "14": "Liam Jackson",
    "15": "Mona Harris",
    "16": "Nathan Clark",
    "17": "Olivia Lewis",
    "18": "Paul Walker",
    "19": "Quinn Scott",
    "2": "Jane Doe",
    "20": "Rachel Young",
    "3": "Alice Smith",
    "4": "Bob Johnson",
    "5": "Charlie Brown",
    "6": "Diana White",
    "7": "Edward Davis",
    "8": "Fiona Miller",
    "9": "George Willson"
}).map(([id, name]) => ({ id, name }));

const posts = [
    {
        "id": 246,
        "userid": 1,
        "content": "Post about ant"
    },
    {
        "id": 161,
        "userid": 1,
        "content": "Post about elephant"
    },
    {
        "id": 150,
        "userid": 1,
        "content": "Post about ocean"
    },
    {
        "id": 370,
        "userid": 1,
        "content": "Post about monkey"
    },
    {
        "id": 344,
        "userid": 1,
        "content": "Post about ocean"
    },
    {
        "id": 952,
        "userid": 1,
        "content": "Post about zebra"
    },
    {
        "id": 647,
        "userid": 1,
        "content": "Post about igloo"
    },
    {
        "id": 421,
        "userid": 1,
        "content": "Post about house"
    }
];

app.get('/', (req, res) => {
    res.render('users.ejs', { users });
});

app.get('/userId=:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).send('User not found');
    }
    const userPosts = posts.filter(post => String(post.userid) === id);
    res.render('open.ejs', { id, name: user.name, userPosts });
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
);