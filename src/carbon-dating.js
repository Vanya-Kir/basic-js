import { NotImplementedError } from '../extensions/index.js';

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
	/* sampleActivity = sampleActivity.trim(); */
	const MODERN_ACTIVITY = 15;
	const HALF_LIFE_PERIOD = 5730;
	if (
		!(
			typeof sampleActivity == 'string' &&
			isFinite(sampleActivity) &&
			sampleActivity.length > 0 &&
			sampleActivity.trim() &&
			Number(sampleActivity) > 0
		)
	) {
		return false;
	}
	let result = Math.ceil(
		Math.log(MODERN_ACTIVITY / sampleActivity) /
			(Math.log(2) / HALF_LIFE_PERIOD)
	);
	if (result < 0 || result == 'Infinity') {
		return false;
	} else {
		return result;
	}
}
