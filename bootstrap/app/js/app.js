(function() {

	'use strict';

	$("form").validate();

	$("form").submit(function(e) {
		return false;
	});

	$('#email-field').tooltip();
	$('#password-field').tooltip();

})();