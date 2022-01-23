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



/**
 * @description get Following And Follower User
 * @param id {property} User Id
 * getFollowAndFollowerUser
 */
exports.getFollowAndFollowerUser = async id => {
	return new Promise((resolve, reject) => {
		Follow.aggregate([
			{
				$match: {

					"$or": [{
						"followerId": id
					}, {
						"followingId": id
					}]
				}
			},
			 
			{ 
				$group:
				{
					_id: {}, 
					followings: { $addToSet: { followingId: "$followingId"} }, 
					followers: { $addToSet: { followerId: "$followerId"} }, 
				}
			}

		])
			.then(result => {

				resolve(result);
			})
			.catch(err => {
				reject(err);
			})
	})
};








