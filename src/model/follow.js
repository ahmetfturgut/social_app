const mongoose = require('mongoose');

const { toJSON } = require('./plugins/plugins.index');

const { Schema } = mongoose;

const FollowSchema = new Schema({
	followerId: {
		type: String,
		required: true
	},
	followingId: {
		type: String,
		required: true
	}, 
	createdDateTime: {
		type: Date,
		default: Date.now
	},
	updatedDateTime: {
		type: Date,
		default: Date.now
	},

});

FollowSchema.plugin(toJSON);

FollowSchema.pre('updateOne', function (next) {
	this._update.updatedDateTime = new Date();
	next();
});

const Follow = mongoose.model('follow', FollowSchema);

exports.Follow = Follow;