
$( function(){
	$( "#cmd_send" ).click(function() {
  		var link_val = $("#cmd_value").val();
  		$.post('./play',  { link: link_val} 
            ).done(function(response){
            }).fail(function(res){
            }); 
});
	});
