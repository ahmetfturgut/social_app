const { Like } = require('../model/like');


/**
 * @description like Post
 * @param post {object} Object containing all required fields to
 * like post
 */
 exports.likePost = async like => {
	try {
		const postModel = new Like(like);

		return postModel.save();
	} catch (error) {
		throw error;
	}
};



 