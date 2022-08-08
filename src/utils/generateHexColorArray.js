import hexColor from './hexColor';

export default function generateHexColorArray(n) {
	return [...Array(n)].map(() => hexColor());
}
