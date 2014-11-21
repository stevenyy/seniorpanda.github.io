// Don't quite understand why the height is minused...

var goat = function(ctx, position, goatImage) {
	var im = image(ctx, goatImage, position),
	isPeeking,
	lValue = 0;

	return {
		update: function() {
			if (isPeeking) {
				var y = mathStuff.smoothstep(im.initialPosition().y - 30, im.initialPosition().y - 98, lValue);
				// why change smoothstep's first in take variable no affect?
				// from the main js script, we assume util is the brown frame itself
				lValue += 0.1;
				// why the lValue is += ?? initially it is 0.05, and I have changed that to 0.1
				if (lValue > 1) {
					lValue = 0;
					isPeeking = false;
				}
				im.setPosition(im.position().x, y);
			}
		},
		draw: function() {
			im.draw();
		},
		peek: function() {
			isPeeking = true;
		}
	};
};

