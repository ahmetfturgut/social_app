const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

 

const updateUser = {
	params: Joi.object().keys({
		id: Joi.string()
			.required()
			.custom(objectId)
	}),
	body: Joi.object().keys({
		email: Joi.string()
			.required()
			.email(),
	 
		userName: Joi.string().required(),
		fullName: Joi.string(),
		profilePicture: Joi.string(),
		bio: Joi.string(),
	})
};

const followUser = {
 
	body: Joi.object().keys({ 
		followingId: Joi.string().required(),
		followerId: Joi.string().required(),
		 
	})
}; 
const unFollowUser = {
	params: Joi.object().keys({
		id: Joi.string()
			.required()
			.custom(objectId)
	}),
 
}; 

const getFollowAndFollowerUser = {
	params: Joi.object().keys({
		id: Joi.string()
			.required()
			.custom(objectId)
	}),
 
}; 

module.exports = {
 
	updateUser,
	followUser,
	unFollowUser,
	getFollowAndFollowerUser
};
