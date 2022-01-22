const { Post } = require('../model/post');

 
/**
 * @description Create Post
 * @param post {object} Object containing all required fields to
 * create post
 */
exports.createPost = async post => {
	try {
		const postModel = new Post(post);
		return postModel.save();
	} catch (error) {
		throw error;
	}
};

 
/**
 * @description Gets the last post
 * @param id {property} User Id
 * @returns {Promise<[{post}]>}
 * user object array
 */
exports.getLastPost = async userId => {
	try {
		return Post.findOne({ userId: userId }).sort({"createdDateTime": 1}) 
	} catch (error) {
		throw error;
	}
};




 