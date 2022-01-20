const mongoose = require('mongoose');

const { toJSON } = require('./plugins/plugins.index');

const { Schema } = mongoose;

const PostSchema = new Schema({
	userId: {
		type: String,
		required: true
	},
	description: {
		type: String
    },
    image: {
		type: String
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

PostSchema.plugin(toJSON);

PostSchema.pre('updateOne', function (next) {
	this._update.updatedDateTime = new Date();
	next();
});

const Post = mongoose.model('post', PostSchema);

exports.Post = Post;