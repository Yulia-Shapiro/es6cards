// import postService from "./services/PostService.js";
import {
  renderPosts,
  renderSearchPosts,
  renderPostsByCategory,
} from "./asyncPosts.js";

const $searchPostField = document.getElementById("search-posts-field");
const $categoryPicker = document.getElementById("category-picker");

renderPosts();

$searchPostField.addEventListener("input", (event) => {
  // console.log(event.target.value.trim());
  const searchTerm = event.target.value.trim();
  if (searchTerm.length > 0) {
    return renderSearchPosts(searchTerm);
  }
  renderPosts();
});

$categoryPicker.onchange = (e) => {
  const searchCategory = e.target.value;
  if (searchCategory.length > 0) {
    return renderPostsByCategory(searchCategory);
  }
  console.log(e.target.value);
  renderPosts();
};

// postService.getPosts().then(console.log).catch("err");
// postService.searchInPost(searchTerm).then(console.log).catch("err");

// postService.searchByCategory(searchCategory).then(console.log);
