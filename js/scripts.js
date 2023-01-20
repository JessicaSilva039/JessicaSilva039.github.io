/*Scripts*/
$(function() {
        $('#topicSelector').change(function(){
            if($(this).val()=="All"){$('.topic').show(); 
			return;}else{$('.topic').hide();}
            $('.' + $(this).val()).show();
        });
    });
