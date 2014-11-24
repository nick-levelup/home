var regForm = $("#reg-form input"),
regFormReq = $("#reg-form input[required]");

regForm.keyup(
	$.debounce(300, function() {
		var numValid = 0;
		regFormReq.each(function() {
			if (this.validity.valid) {
				numValid++;
			}
		});
		var progress = $("#inputProgress");
		switch(numValid) {
			case 0:
			progress.attr("value", "0");
			break;
			case 1:
			progress.attr("value", "25");
			break;
			case 2:
			progress.attr("value", "50");
			break;
			case 3:
			progress.attr("value", "75");
			break;
			case 4:
			progress.attr("value", "100");
			break;
		}
	})
);