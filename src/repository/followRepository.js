const { Follow } = require('../model/follow');

 
 

/**
 * @description Follow User
 * @param followDto {object} Object containing all required fields to
 * follow user
 */
 exports.followUser = async followDto => {
	try {
		const followModel = new Follow(followDto);
		return followModel.save();
	} catch (error) {
		throw error;
	}
};

/**
 * @description Unfollow User
 * @param id {property} Follow Id
 * unfollow user
 */
 exports.unFollowUser = async id => {
	try {
		await Follow.deleteOne(id);
	} catch (error) {
		throw error;
	}
};




 