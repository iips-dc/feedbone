$(document).ready(function(){
		$('#createUserButton').click(function() {
			$('#showUser').css('display', 'none');
			$('#generateReport').css('display', 'none');
			$('#showStatus').css('display', 'none');
			$('#allocate').css('display', 'none');
			$('#createUser').css('display', 'block');
		});
		
		
		$('#showUserButton').click(function() {
			
			$('#showStatus').css('display', 'none');
			$('#generateReport').css('display', 'none');
			$('#showUser').css('display', 'block');	
			$('#allocate').css('display', 'none');	
			$('#createUser').css('display', 'none');			
		});
		
		$('#showStatusButton').click(function() {
			$('#showUser').css('display', 'none');
			$('#generateReport').css('display', 'none');
			$('#showStatus').css('display', 'block');
			$('#allocate').css('display', 'none');
			$('#createUser').css('display', 'none');
		});
		
		$('#generateReportButton').click(function() {
			$('#showUser').css('display', 'none');
			$('#generateReport').css('display', 'block');
			$('#showStatus').css('display', 'none');
			$('#allocate').css('display', 'none');
			$('#createUser').css('display', 'none');
			
		});
		
		$('#allocateButton').click(function() {
			$('#showUser').css('display', 'none');
			$('#generateReport').css('display', 'none');
			$('#showStatus').css('display', 'none');
			$('#allocate').css('display', 'block');
			$('#createUser').css('display', 'none');
		});
		
		
		
});


