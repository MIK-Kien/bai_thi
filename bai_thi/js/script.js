let posts = [];

// Create a new post
function createPost() {
    const content = document.getElementById("postContent").value;
    if (content.trim() === "") {
        alert("Please write something before posting!");
        return;
    }
    
    const post = {
        id: posts.length + 1,
        content: content,
        likes: 0,
        comments: []
    };

    posts.push(post);
    document.getElementById("postContent").value = "";
    displayPosts();
}

// Display all posts
function displayPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <p>${post.content}</p>
            <div class="like-comment">
                <span class="like" onclick="likePost(${post.id})">Like (${post.likes})</span>
                <span class="comment" onclick="addComment(${post.id})">Comment</span>
            </div>
            <div class="comments" id="comments-${post.id}">
                ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Like a post
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes += 1;
    displayPosts();
}

// Add a comment to a post
function addComment(postId) {
    const comment = prompt("Write a comment:");
    if (comment) {
        const post = posts.find(p => p.id === postId);
        post.comments.push(comment);
        displayPosts();
    }
}
