<?php
function compress_image($source_url, $destination_url, $quality) {

	$info = getimagesize($source_url);

	if ($info['mime'] == 'image/jpeg')
		$image = imagecreatefromjpeg($source_url);
	
	ob_start();
	imagejpeg($image, $destination_url, $quality);
	$ImageData = ob_get_contents();
	ob_end_clean();
	return $ImageData;
}
?>