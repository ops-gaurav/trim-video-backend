/* eslint-disable import/named */

import path from 'path';
import { UserModel } from '../model';
import { ModelResolver } from './resolvers';

export default {
	trim: (req, res) => ModelResolver(req, res, UserModel.UsersTrimService),
	download: (req, res) => {
		console.log(req.params.file);
		const file = path.resolve(__dirname, '..', '..', `${req.params.file}.mp4`);
		res.download(file);
	},
};
