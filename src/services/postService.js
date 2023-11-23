import {postsAxiosService} from "./postsAxiosService";
import {postsUrls} from "../constants/postsUrls";

class postService  {
    getAll() {
        return postsAxiosService.get(postsUrls.posts)
    }
    commentsById (id) {
        return postsAxiosService.get(postsUrls.buId(id))
    }
}

const postsService = new postService();

export {
    postsService
}