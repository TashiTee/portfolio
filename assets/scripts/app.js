function makeWords() {

	var words = [
		{
			text: "HTML5",
			weight: 12.3
		}, {
			text: "CSS3",
			weight: 12.5
		}, {
			text: "JavaScript",
			weight: 13
		}, {
			text: "Sass",
			weight: 11
		}, {
			text: "Angular",
			weight: 10
		}, {
			text: "React",
			weight: 10
		}, {
			text: "Vue",
			weight: 9
		}, {
			text: "nodejs",
			weight: 11
		}, {
			text: "Java",
			weight: 9
		}, {
			text: "C#",
			weight: 8
		}, {
			text: "Python",
			weight: 8.3
		}, {
			text: "jQuery",
			weight: 8.1
		}, {
			text: "UI/UX",
			weight: 9
		}, {
			text: "MongoDB",
			weight: 8.5
		}, {
			text: "Oracle",
			weight: 9
		}, {
			text: "SQL",
			weight: 9
		}, {
			text: "TypeScript",
			weight: 8
		}, {
			text: "Express",
			weight: 9
		}, {
			text: "Front-End",
			weight: 8.9
		}, {
			text: "responsive design",
			weight: 10
		}, {
			text: "bootstrap",
			weight: 10
		},
		/* ... */
	];
	return words;
}

function makeWordCloud(words) {
	$('.teaching-domains').jQCloud(words, {delay: 120});
}

function displayWordCloud() {
	var count = 1;
	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 2700; // set to whatever you want it to be
		var words = makeWords();
		if (y_scroll_pos > scroll_pos_test && count <= 1) {
			makeWordCloud(words);
			count++;
		}
	});
}

function designForm() {
	$("#my-modal form").addClass("my-form");
}

$(document).ready(function() {
	Typed.new("#writing-text", {
		strings: [
			"am a Front End Developer.", "love everything about code.", "solve problems."
		],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 1,
		contentType: 'text',
		callback: function() {
			$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
		},
		preStringTyped: function() {},
		onStringTyped: function() {}
	});

	displayWordCloud();
})
