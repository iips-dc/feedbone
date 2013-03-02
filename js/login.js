$(document).ready(function(){
		$("#date").dateinput();
		$('#adminButton').click(function(){
			$('#userForm').css('display','none');
			$('#adminForm').css('display','block');	
		});
		
		$('#signInAsAnotherUser').click(function(){
			$('#adminForm').css('display','none');
			$('#userForm').css('display','block');
		
		});
});
