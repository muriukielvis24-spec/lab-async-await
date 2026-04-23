 // write your code here
   function displayPosts(posts) {
    const ul = document.getElementById("post-list");

    posts.forEach(post => {
        //Creating elements
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        //Adding content to the elements
        h1.textContent = post.title;
        p.textContent = post.body;

        //Appending elements to the list item
        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li);
    });
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        displayPosts(data);
    })
    .catch(error => console.error("Error fetching posts:", error));

    async function fetchPosts() {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            displayPosts(data);//Calling the functon to display the posts
        }catch(error){
            console.error("Error:",error);
        }
    }
    //Calling the function to fetch and display posts
    fetchPosts();