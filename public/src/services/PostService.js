import { posts } from "../data/post.js";
import PromiseService from "./Promises.js";

class PostService extends PromiseService {
  getPosts() {
    return this.getDataAsPromise(posts, "no posts found...");
  }

  searchInPost(searchTerm) {
    const postByTitle = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(postByTitle);
    return this.getDataAsPromise(postByTitle, "No Title found");
  }

  searchByCategory(searchCategory) {
    const postByCategory = posts.filter((post) =>
      post.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
    console.log(postByCategory);
    return this.getDataAsPromise(postByCategory, "No Category found");
  }

  postItem({ writtenBy, category, title, article, imageUrl, publishDate }) {
    return `
    <div class="col-md-6 my-2">
    <div class="card post-card-wrap">   
      <img src="${imageUrl}" height="360" alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title mb-0">${title}</h5>
        <small>
          <span><i class="fa fa-tag"></i>${category}</span>
          <span class="ml-2"><i class="fa fa-calendar"></i>${publishDate}</span>
          <span class="ml-2"><i class="fa fa-tag"></i>${writtenBy}</span>
        </small>
        <p class="card-text mt-2">Article....:  ${article}</p>
      </div>
    </div>
    </div>
    `;
  }
}
export default new PostService();
