<input type="hidden" name="identificador_tracker_lahar" id="identificador_tracker_lahar" value="">
<script src="https://scripts.lahar.com.br/api_parametros.js" type="text/javascript"></script>
<script type="text/javascript">	
	jQuery(document).ready(function() {
		var integrou = false;	
		jQuery("#uf-epicoepico_capture_widget .uf-submit").bind('click', function() {  //ID/Classe do formulário + ID/Classe do botão 
		   if (!integrou) {
		   	if (document.querySelector('#uf-epicoepico_capture_widget input[name=email_lateral]').value.length < 3){
		   		return false;
		   	}
			efetua_integracao();    
			integrou=true;
			return false;
			}
		})
		jQuery("#wpcf7-f19-p21-o1 .wpcf7-form .wpcf7-submit").bind('click', function() {  //ID/Classe do formulário + ID/Classe do botão 
		   if (!integrou) {
		   	if (document.querySelector('#wpcf7-f19-p21-o1 input[name=your-email]').value.length < 3){
		   		return false;
		   	}
			efetua_integracao2();    
			integrou=true;
			return false;
			}
		})
	
	
	function efetua_integracao() {
		var campos = { // Colocar aqui campos fixos ou enviar estas infos como hidden no formulário
			token_api_lahar: 'lahardigNQan08vrIQgPgZVS8APuwDnBcZe0SeP0JIPIYWWsjB50RWKs7Md3Ieif234',
			nome_formulario: 'assinantes_blog',
			identificador_tracker_lahar: jQuery('#identificador_tracker_lahar').val(), // Remover esta linha caso não utilize o Tracking
			email_contato: jQuery('#uf-epicoepico_capture_widget input[name=email_lateral]).val(),
			'Hl3RFpi3nz': jQuery(location).attr('href'),
			url_origem: jQuery(location).attr('href') // Alterar apenas se necessário
		};
		var elementos = [];
			jQuery('.api-lahar').each(function(index,element){
			  elementos.push(element);
			});
				integracao_js(campos, 'redireciona', elementos, 'conversions');  
			}
				function redireciona() { 
   				document.querySelector('#uf-epicoepico_capture_widget .uf-submit').click;
			}	

	function efetua_integracao2() {
		var campos = { // Colocar aqui campos fixos ou enviar estas infos como hidden no formulário
			token_api_lahar: 'lahardigNQan08vrIQgPgZVS8APuwDnBcZe0SeP0JIPIYWWsjB50RWKs7Md3Ieif234',
			nome_formulario: 'contato-blog-lahar',
			identificador_tracker_lahar: jQuery('#identificador_tracker_lahar').val(), // Remover esta linha caso não utilize o Tracking
			email_contato: jQuery('#wpcf7-f19-p21-o1 input[name=your-email]').val(),
			nome_contato: jQuery('wpcf7-f19-p21-o1 input[name=your-name]').val(), 
			'Hl3RFpi3nz': jQuery(location).attr('href')
			url_origem: jQuery(location).attr('href') // Alterar apenas se necessário
		};
		var elementos = [];
			jQuery('.wpcf7-form .api-lahar').each(function(index,element){
			  elementos.push(element);
			});
				integracao_js(campos, 'redireciona2', elementos, 'conversions');  
			}
				function redireciona2() { 
   				document.querySelector('#wpcf7-f19-p21-o1 .wpcf7-form .wpcf7-submit').click;
			}
																																	
</script>
<script type="text/javascript" charset="UTF-8" async src="https://scripts.lahar.com.br/track-lahardigvMaffuuHW0A1ZDhnoqYEgEO7WWONL6DVPIK2.js"></script>