const Status = require('http-status');
const { postService } = require('../service/service.index');
 


exports.createPost = async (req, res, next) => {
	try {
		const { description, image, userId } = req.body;
		const result = await postService.createPost({ description, image, userId });

		if (!result.success) {
			res.apiResponse = {
				status: Status.NOT_ACCEPTABLE,
				success: result.success,
				message: result.error
			};
		} else {
			res.apiResponse = {
				status: Status.OK,
				success: result.success,
				message: 'Succesfull'
			};
		}
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

exports.getLastPost = async (req, res, next) => {
	try {
		const result = await postService.getLastPost(req.params.id);

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


exports.likePost = async (req, res, next) => {
	try {
		const { postId, userId } = req.body;
		const result = await postService.likePost({ postId, userId });

		if (!result.success) {
			res.apiResponse = {
				status: Status.NOT_ACCEPTABLE,
				success: result.success,
				message: result.error
			};
		} else {
			res.apiResponse = {
				status: Status.OK,
				success: result.success,
				message: 'Succesfull'
			};
		}
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


