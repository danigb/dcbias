(function() {
	
	function DCBias(context) {
		
		var output = context.createGain();
		var buffer = context.createBuffer(1, 1, context.sampleRate);
		buffer.getChannelData(0)[0] = 1.0;

		output.start = function(when) {
			bufferSource = context.createBufferSource();
			bufferSource.buffer = buffer;
			bufferSource.loop = true;
			bufferSource.connect(output);
			bufferSource.start(when);
		};

		output.stop = function(when) {
			bufferSource.stop(when);
			bufferSource.disconnect();
		};
		
		return output;

	}

	//
	
	if(typeof module !== 'undefined' && module.exports) {
		module.exports = DCBias;
	} else {
		this.DCBias = DCBias;
	}

}).call(this);
