const { userRepository, followRepository } = require('../repository/repository.index');
const { cryptUtil } = require('../utils/utils.index');
const { stateEnums } = require('../model/enums/enums.index'); 

 

/**
 * @description Gets user by id
 * @param id {property} User Id
 * @returns {Promise<{success: boolean, error: *} | {success: boolean, data: user}>}
 * {success: false, error: any} or {success: true, data: {user}}
 */
exports.getUser = async id => {
	try {
		const user = await userRepository.getUser(id);

		return { success: true, data: user };
	} catch (error) {
		throw { success: false, error: any };
	}
}; 


/**
 * @description UpdateUser User
 * @param user {object} Object containing all required fields to
 * update user
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean}>}
 * {success: false, error: any} or {success: true}
 */
exports.updateUser = async user => {
	try {
		await userRepository.updateUser(user);

		return { success: true };
	} catch (error) {
		throw { success: false, error: any };
	}
};
 

/**
 * @description Register User and send a verification mail
 * @param user {object} Object containing all required fields to create user
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean}>}
 * {success: false, error: any} or {success: true}
 */
exports.registerUser = async user => {
	try {
		const existUser = await userRepository.getUserByEmail(user.email);

		if (existUser) return { success: false, error: 'This email is in use' };

		user.verificationCode = cryptUtil.encode(user.email + Date.now());
		const newUser = await userRepository.createUser(user);

		const token = cryptUtil.createToken({
			userId: newUser.id,
			isLoggedIn: false
		});

	 

		return { success: true };
	} catch (error) {
		throw { success: false, error: any };
	}
};


/**
 * @description Follow User
 * @param user {object} Object containing all required fields to
 * update user
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean}>}
 * {success: false, error: any} or {success: true}
 */
 exports.followUser = async followDto => {
	try {
		await followRepository.followUser(followDto);

		return { success: true };
	} catch (error) {
		throw { success: false, error: any };
	}
 };

 /**
 * @description Unfollow User
 * @param user {object} Object containing all required fields to
 * update user
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean}>}
 * {success: false, error: any} or {success: true}
 */
  exports.unFollowUser = async followDto => {
	try {
		await followRepository.unFollowUser(followDto);

		return { success: true };
	} catch (error) {
		throw { success: false, error: any };
	}
};
 

