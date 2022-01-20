const Status = require('http-status');
const { userService } = require('../service/service.index');
 
 

exports.register = async (req, res, next) => {
	try {
		const { userName, email, password } = req.body;
		const result = await userService.registerUser({ userName, email, password });

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
