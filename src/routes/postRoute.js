const { postController } = require('../controller/controller.index');
const { requestUtil } = require('../utils/utils.index');
const { apiResponse, validate } = require('../middlewares/middlewares.index');
const { postValidation } = require('../validations/validations.index');

exports.assignRoutes = app => {


	/**
	 * Create Post
	 */
	app.post(
		requestUtil.getUrlPrefix('post/createPost'),
		validate(postValidation.createPost),
		// authorizer.checkAuth,
		postController.createPost,
		apiResponse.send
	);

	/**
	 * Like Post
	 */
	app.post(
		requestUtil.getUrlPrefix('post/likePost'),
		validate(postValidation.likePost),
		// authorizer.checkAuth,
		postController.likePost,
		apiResponse.send
	);
	/**
    * Get Post
    */
	app.get(
		requestUtil.getUrlPrefix('post/getLastPost/:id'),
		validate(postValidation.getLastPost),
		// authorizer.checkAuth,
		postController.getLastPost,
		apiResponse.send
	);

};
