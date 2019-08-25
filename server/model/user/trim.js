/* eslint-disable import/named */
import path from 'path';
import { ResponseUtility } from 'appknit-backend-bundle';
import FFMPEGCommand from 'fluent-ffmpeg';
/**
 * @description Write the Service Model function description here.
 * @author gaurav
 * @since 25 August, 2019 23:45:28
*/
export default ({ id, xPoint, yPoint, timeDiff }) => new Promise(async (resolve, reject) => {
	try {
		console.log(xPoint, yPoint, timeDiff);
		if (xPoint && timeDiff) {
			const ffmpeg = FFMPEGCommand(path.resolve(__dirname, 'video.mp4'));
			// ffmpeg.seekInput('0:10').seek('0:10').saveToFile('converted.mp4');
			const filename = `converted-${new Date().getTime()}`;
			ffmpeg.setStartTime(xPoint).setDuration(timeDiff).saveToFile(`${filename}.mp4`);
			return resolve(ResponseUtility.SUCCESS({ data: filename }));
		} 
		return reject(ResponseUtility.GENERIC_ERR({ message: 'Missing required properties.' }));
	} catch (err) {
		return reject(ResponseUtility.GENERIC_ERR({ message: 'Error', error: err.message }));
	}
});
