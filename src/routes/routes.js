const { userRoute, authRoute ,postRoute} = require('./routes.index'); 

exports.assignRoutes = app => {
	userRoute.assignRoutes(app);
	authRoute.assignRoutes(app);
	postRoute.assignRoutes(app);
};
