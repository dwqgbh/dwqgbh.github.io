 
		jQuery(function() { 
			jQuery("#wysj-switch").on('click', function(event) { 
				if ( jQuery(this).hasClass('wysj-icon-open') ) { 
					jQuery(this).removeClass('wysj-icon-open'); 
					jQuery("#wysj-waiter").removeClass('wysj-box-open'); 
				}else{ 
					jQuery("#wysj-pop").show(); 
					jQuery(this).addClass('wysj-icon-open'); 
					jQuery("#wysj-waiter").addClass('wysj-box-open'); 
				} 
			});

			jQuery("#wysj-pop").on('click touchstart touchmove', function(event) { 
				jQuery("#wysj-switch").removeClass('wysj-icon-open'); 
				jQuery("#wysj-waiter").removeClass('wysj-box-open'); 
				jQuery(this).hide(); 
			}); 
		}); 
		var arr=new Array();
		var tab="gba";
		arr=new String(window.location.pathname).split('/'); 
		if(arr.length>1&&!(''==arr[1]))
		{
			tab=arr[1]; 
		}
		jQuery("#"+tab).addClass('on'); 
		
		
		