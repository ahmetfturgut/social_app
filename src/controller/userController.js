const Status = require('http-status');
const { userService } = require('../service/service.index');


exports.updateUser = async (req, res, next) => {
	try {
		const { userName, fullName, email, profilePicture, bio } = req.body;
		const result = await userService.updateUser({ userName, fullName, email, profilePicture, bio });

		res.apiResponse = {
			status: Status.OK,
			success: result.success,
			error: result.error,
			data: result.data,
			message: 'Succesfull'
		};
	} catch (error) {
		res.apiResponse = {
			status: Status.BAD_REQUEST,
			success: false,
			error: error.message,
			data: null,
			message: 'Error'
		};
	}

	next();
};



exports.followUser = async (req, res, next) => {
	try {
		const { followingId } = req.body;
		const followerId = req.userData._id.toString();
		const result = await userService.followUser({ followingId,followerId });

		res.apiResponse = {
			status: Status.OK,
			success: result.success,
			error: result.error,
			data: result.data,
			message: 'Succesfull'
		};
	} catch (error) {
		res.apiResponse = {
			status: Status.BAD_REQUEST,
			success: false,
			error: error.message,
			data: null,
			message: 'Error'
		};
	}

	next();
};
