const mongoose = require('mongoose');

const { toJSON } = require('./plugins/plugins.index');

const { Schema } = mongoose;

const LikeSchema = new Schema({
	userId: {
		type: String,
		required: true
	},
	postId: {
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

LikeSchema.plugin(toJSON);

LikeSchema.pre('updateOne', function (next) {
	this._update.updatedDateTime = new Date();
	next();
});

const Like = mongoose.model('like', LikeSchema);

exports.Like = Like;