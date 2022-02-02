
let posts = [
    {postName : "Blog post 1",
    postDate : "01.01.2022" ,
    postId : 1},


    {postName : "Blog post 2",
    postDate : "02.01.2022" ,
    postId : 2},


    {postName : "Blog post 3",
    postDate : "03.01.2022" ,
    postId : 3},


    {postName : "Blog post 4",
    postDate : "04.01.2022" ,
    postId : 4},
];

const listPosts = () => {
    posts.map(post => {
        console.log(post.postName)
    })
}

const addPost = (newPost) => {
    const promisee = new Promise((resolve,reject) => {
        posts.push(newPost);
        reject('BIR HATA OLUSTU');
    })
    return(promisee);
};
async function showPosts() {
    try {
      await addPost({ postName : "Blog post 5", postDate : "05.01.2022" ,postId : 5 });
      listPosts();
    } catch (error) {
      console.log(error);
    }
  }
  
  showPosts();
  

