$('#reg-form').on('submit',function(){
	if($('#inputePass').val()!=$('#validatePass').val()){
		alert('Пароли не совпадают!!!');
		return false;
	}
	return true;
});