'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Experience Chan! It's not a lot of questions. \nToo many questions is the Chan disease.\nThe best way is just to observe the noise of the world.\nThe answer to your questions?\nAsk your own heart.");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");

	//});

	$(".project").click(projectClick);
	$("#testjs").click(buttonClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	});
}

function projectClick(e) {
	e.preventDefault();
	console.log("Clicked");
	// var containingProject = $(this).closest(".project");
  //   containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");

	var containingProject = $(this).closest(".project");
	    var description = $(containingProject).find(".project-description");
	    if (description.length == 0) {
	       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	    } else {
	      //  description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
				$(".project-description").fadeOut();
	    }
}

function buttonClick(e) {
	e.preventDefault();
	console.log("Clicked");


}
