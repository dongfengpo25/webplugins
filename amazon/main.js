$(function(){
	debugger;
	var cookie_x_main = $.cookie("x-main");
	var cookie_at_main = $.cookie("at-main");
	var cookie_sess_at_main = $.cookie("sess-at-main");
	
	//already logined
	if (cookie_x_main != null || cookie_at_main != null || cookie_sess_at_main != null){
		//ok
		window.location.href = "https://www.amazon.com/s/&field-keywords=toilet light &field-brandtextbin=Proslth";
	}else {
		//unlogin
		if (window.location.href.indexOf("signin") > 0){
			autoSign();
		}else{
			if ($("#nav-link-accountList").length && $("#nav-link-accountList").length > 0)
			     $("#nav-link-accountList")[0].click();
			if ($("a[class='nav-action-button']"))
			     $("a[class='nav-action-button']").click();
		}
	}
	
	
	function autoSign(){
		$("#ap_email").val('dongfengpo25@163.com');
		$("#ap_password").val('123456');
		$("form[name='signIn']").submit();
	}
})