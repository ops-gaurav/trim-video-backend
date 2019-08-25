import {
	UserControllers,
} from '../controllers';

const prefix = '/api/users/';
/**
 * @description
 * This is the route handler for the instructors
 * @author {{app_author}}
 * @since {{app_date}}
 */
export default (app) => {
	app.post(`${prefix}trim`, UserControllers.trim);
	app.get(`${prefix}download/:file`, UserControllers.download);
};
