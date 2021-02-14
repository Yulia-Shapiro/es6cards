import postService from "./services/PostService.js";

const $postRow = document.getElementById("post-row");
export async function renderPosts() {
  try {
    const posts = await postService.getPosts();
    $postRow.innerHTML = "";
    posts.forEach((post) => {
      $postRow.innerHTML += postService.postItem(post);
    });
  } catch (err) {
    $postRow.innerHTML = `<div class="col-12"><i>${err}</i></div>`;
  }
}
 //postService.searchInPost("dog").then(console.log);

export async function renderSearchPosts(searchTerm) {
  try {
    const posts = await postService.searchInPost(searchTerm);
    $postRow.innerHTML = "";
    posts.forEach((post) => {
      $postRow.innerHTML += postService.postItem(post);
    });
  } catch (err) {
    $postRow.innerHTML = `<div class="col-12"><i>${err}</i></div>`;
  }
}

export async function renderPostsByCategory(searchCategory) {
  try {
    const posts = await postService.searchByCategory(searchCategory);
    $postRow.innerHTML = "";
    posts.forEach((post) => {
      $postRow.innerHTML += postService.postItem(post);
    });
  } catch (err) {
    $postRow.innerHTML = `<div class="col-12"><i>${err}</i></div>`;
  }
}
