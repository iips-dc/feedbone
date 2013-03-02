$(document).ready(function(){
	
		$('#showUserButton').click(function(){
			$('#showUser').css('display','block');
			$('#showStatus').css('display','none');
			$('#generateReport').css('display','none');	
		});
		
		
		$('#showStatusButton').click(function(){
			$('#showStatus').css('display','block');
			$('#showUser').css('display','none');
			$('#generateReport').css('display','none');	
		});
		
		
		$('#generateReportButton').click(function(){
			$('#generateReport').css('display','block');
			$('#showStatus').css('display','none');
			$('#showUser').css('display','none');	
		});
		
		
		});
});
