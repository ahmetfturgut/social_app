const Joi = require('joi');

const createPost = {
	body: Joi.object().keys({
		description: Joi.string()
			.required(),
		userId: Joi.string()
			.required(),
		image: Joi.string().required()
	})
};

const likePost = {
	body: Joi.object().keys({
		userId: Joi.string()
			.required(),
		postId: Joi.string()
			.required(),
	})
};

const getLastPost = {
	params: Joi.object().keys({
		id: Joi.string()
			.required() 
	}),
};


module.exports = {
	createPost,
	likePost,
	getLastPost
};
