const blogPost = [
    {
        id: 1,
        title: 'Angular2 Tutorial',
        discription: 'If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you',
        link: 'http://thatjsdude.com/angular/beginner.html',
    },
    {
        id: 2,
        title: '50 Dev tool Tips',
        discription: 'If you have some idea about dev tool and want to become a master..this is the right video for your ',
        link: 'http://thatjsdude.com/tools/devtool.html',
    },
    {
        id: 3,
        title: 'scope & closure',
        discription: 'Understand scope, scope chain, hoisting, closure in JavaScript in the most easiest and funniest way. This is so easy even your grandma can understand.',
        link: 'http://thatjsdude.com/jsConcepts/concepts/scope.html',
    },
    {
        id: 4,
        title: 'Interview Questions',
        discription: 'If you want to upgrade the person shouting at you in every evening at 5.00pm, you have to be competent and pretty sharp with latest technology. The world is competitive. but dont worry, that js dude will compile the questions for you. this will make your life easier to win the next big thing.',
        link: 'https://github.com/khan4019/front-end-Interview-Questions',
    },
    {
        id: 5,
        title: 'Angular Interview Question',
        discription: 'A complete guideline to prepare for angular interviews. Also, you can use these questions to verify your expertise in angular.',
        link: 'https://github.com/khan4019/angular-interview-questions',
    },
    {
        id: 6,
        title: 'this',
        discription: 'Value of this in Javascript is very confusing and very important. If you are not sure you are a master of this, you have to watch this video... ',
        link: 'http://thatjsdude.com/jsConcepts/concepts/this.html',
    },
    {
        id: 7,
        title: 'array',
        discription: 'Array is the mostly used Data stucture. And in Javascript it is at least 3 one of the key data structure that you have to use to master. This video will tell you 15 hidden features that witll make u expert in JavaScript array. ',
        link: 'http://thatjsdude.com/jsConcepts/concepts/array.html',
    },
    {
        id: 8,
        title: 'React Workshop for beginners',
        discription: 'This is once in a year opportunity for beginners. You will have the opportunity to learn React from the industry expert. You will learn React Fundamentals, React Router and everything else needed to build a professional React App all by yourself with our help.',
        link: 'http://thatjsdude.com/workshops/react/',
    },
    {
        id: 9,
        title: 'console',
        discription: 'To be a decent web developer you have to know developer tool. If you want to be a better JavaScript developer, you have to master in the console tab of dev tool. there is no exception. no hanky panky...',
        link: 'http://thatjsdude.com/jsConcepts/concepts/console.html',
    },
]

// data manipulate here...
const loadBlog = (blogPost) => {
    let loadBlogHtml = '';
    blogPost.map((data) => {
        const { id, title, discription, link} = data;
        loadBlogHtml += allBlogPost(id, title, discription, link);
    });
    const post = document.getElementById('blog_post')
    post.innerHTML = loadBlogHtml;
}

const allBlogPost = (id, title, discription, link) => {
    return (
        `
        <div class="post">
            <h1>${id}</h1>
            <h1>${title} </h1>
            <article>${discription.slice(0, 150)}...</article>
            <button class="button2" onclick="window.location.href='${link}'">Read more>></button>
        </div>
        `
    );
}
loadBlog(blogPost)
