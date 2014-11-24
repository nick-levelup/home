$("#reg-form input").keyup(function() {
	var numValid = 0;
	$("#reg-form input[required]").each(function() {
		if (this.validity.valid) {
			numValid++;
		}
	});
	var progress = $("#inputProgress");
	if (numValid == 0) {
		progress.attr("value", "0");
	}
	if (numValid == 1) {
		progress.attr("value", "25");								  
	}
	if (numValid == 2) {
		progress.attr("value", "50");								    
	}
	if (numValid == 3) {
		progress.attr("value", "75");								    
	}
	if (numValid == 4) {
		progress.attr("value", "100");								    
	}
});