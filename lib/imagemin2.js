const through = require('through2');
const execPhp = require('exec-php');
const path = require('path');

const builderImage = (file, args) => {
	let nameFile = path.basename(file.path);
	execPhp('./index.php', (error, php, outprint) => {
		php.compress_image(file.path, args.dist + nameFile, args.quality)
	});
} 

module.exports = (args) => {
	return through.obj((file, encoding, callback) => {
	  callback(null, builderImage(file, args));
	});
}