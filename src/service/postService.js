const { postRepository, userRepository ,likeRepository} = require('../repository/repository.index');
const Status = require('http-status');

/**
 * @description Create Post
 * @param post {object} Object containing all required fields to
 * create post
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean}>}
 * {success: false, error: any} or {success: true}
 */
exports.createPost = async post => {
	try {

		let user = await userRepository.getUser(post.userId);

		if (user == null) {
			return { success: false, error: Status.NOT_FOUND };
		}

		await postRepository.createPost(post);

		return { success: true };
	} catch (error) {
		throw { success: false, error: any };
	}
};


/**
 * @description Like Post
 * @param post {object} Object containing all required fields to
 * like Post
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean}>}
 * {success: false, error: any} or {success: true}
 */
 exports.likePost = async post => {
	try {

		await likeRepository.likePost(post);

		return { success: true };
	} catch (error) {
		throw { success: false, error: any };
	}
};

/**
 * @description Gets post by userId
 * @param id {property} user Id
 * @returns {Promise<{success: boolean, error: *} | {success: boolean, data: post}>}
 * {success: false, error: any} or {success: true, data: {post}}
 */
exports.getLastPost = async id => {
	try {
		const post = await postRepository.getLastPost(id);

		return { success: true, data: post };
	} catch (error) {
		throw { success: false, error: any };
	}
};



