let express = require('express');
let apple = express();
let joke = require('one-liner-joke');

let availableTags = ['sport','IT','attitude','love'];

apple.get('/joke/:number' , (req,resp)=> {
    let num = req.params.number;
    let result = '';
    for(let i = 0; i<num;i++){
        result += `<h4>${joke.getRandomJokeWithTag(tag).body}</h4>****`;
    }
    resp.send(result);
})

apple.get('/joke/:tag/:number' , (req,resp)=> {
    let tag = req.params.tag;
    let num = req.params.number;
    let result = '';
    if(availableTags.includes(tag)){
    for(let i = 0; i<num;i++){
        result += `<h4>${joke.getRandomJoke().body}</h4>****`;
    }
} else{
    result = 'No joke for this Tag';
}
    resp.send(result);
})
apple.get('*',(req,resp)=>{
resp.send('<h1>404 - Its not funny!</h1>')
})
apple.listen(3000,  () => {
    console.log('listening 3000...');
})