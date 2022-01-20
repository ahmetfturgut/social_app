const { userController } = require('../controller/controller.index');
const { requestUtil } = require('../utils/utils.index');
const { apiResponse, authorizer, validate } = require('../middlewares/middlewares.index');
const { userValidation } = require('../validations/validations.index');

exports.assignRoutes = app => {

	/**
	 * Update User
	 */
	app.put(
		requestUtil.getUrlPrefix('user/:id'),
		validate(userValidation.updateUser),
		authorizer.checkAuth,
		userController.updateUser,
		apiResponse.send
	);

	/**
	 * Follow User
	 */
	app.post(
		requestUtil.getUrlPrefix('followUser'),
		validate(userValidation.followUser),
		authorizer.checkAuth,
		userController.followUser,
		apiResponse.send
	);

	/**
    * Un Follow User
    */
	// app.post(
	// 	requestUtil.getUrlPrefix('unFollowUser'),
	// 	validate(userValidation.unFollowUser),
	// 	authorizer.checkAuth,
	// 	userController.unFollowUser,
	// 	apiResponse.send
	// );


};
