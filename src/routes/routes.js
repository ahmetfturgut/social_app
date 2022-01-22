const { userRoute, authRoute ,postRoute} = require('./routes.index');
// const { authenticator } = require('../middlewares/middlewares.index');

exports.assignRoutes = app => {
	// app.use(authenticator.checkLang);

	userRoute.assignRoutes(app);
	authRoute.assignRoutes(app);
	postRoute.assignRoutes(app);
};
