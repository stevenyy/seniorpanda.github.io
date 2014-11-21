// Siyang Note: this part controls the question of "would you like to switch". The X and Y coordinate corresponds to the YES or NO answer

var question = function(utils, imageList) {
	var questionImage = image(utils.context, imageList.switchquestion, {
		x: utils.WIDTH / 2 - imageList.switchquestion.width / 2,
		y: 72
	}),
	noAnswerImage = image(utils.context, imageList.noanswer, {
		x: 353,
		y: 72
	}),
	yesAnswerImage = image(utils.context, imageList.yesanswer, {
		x: 353,
		y: 72
	}),
	// 没有搞懂这个 0*1 的数字究竟代表了什么

	imageStates = {
		question: 0x1,
		no: 0x2,
		yes: 0x4
	},
	whatToDisplay = 0;

	return {
		show: function() {
			whatToDisplay |= imageStates.question;
		},
		hide: function() {
			whatToDisplay &= ~imageStates.question;
		},
		update: function() {

		},
		draw: function() {
			if (whatToDisplay & imageStates.question) {
				questionImage.draw();
			}

			if (whatToDisplay & imageStates.no) {
				noAnswerImage.draw();
			} else if (whatToDisplay & imageStates.yes) {
				yesAnswerImage.draw();
			}
		},
		showNoAnswer: function() {
			whatToDisplay |= imageStates.no;
			whatToDisplay &= ~imageStates.yes;
		},
		showYesAnswer: function() {
			whatToDisplay |= imageStates.yes;
			whatToDisplay &= ~imageStates.no;
		},
		hideAnswers: function() {
			whatToDisplay &= ~imageStates.yes;
			whatToDisplay &= ~imageStates.no;
		}
	};
};

