/* eslint-disable import/named */
import path from 'path';
import { ResponseUtility } from 'appknit-backend-bundle';
import FFMPEGCommand from 'fluent-ffmpeg';
/**
 * @description Write the Service Model function description here.
 * @author gaurav
 * @since 25 August, 2019 23:45:28
*/
export default ({ id }) => new Promise(async (resolve, reject) => {
	try {
		const ffmpeg = FFMPEGCommand(path.resolve(__dirname, 'video.mp4'));
		// ffmpeg.seekInput('0:10').seek('0:10').saveToFile('converted.mp4');
		const filename = `converted-${new Date().getTime()}`;
		ffmpeg.setStartTime('0:10').setDuration(6).saveToFile(`${filename}.mp4`);
		return resolve(ResponseUtility.SUCCESS({ data: filename }));
		// write your code here.....
	} catch (err) {
		return reject(ResponseUtility.GENERIC_ERR({ message: 'Error', error: err.message }));
	}
});
