function chatBot() {
	
	// current user input
	this.input;
	
	
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(cordial|buenas|hola|buen|hello|buenos|hi|saludo)(\\s|!|\\.|$)'))
			return "Hola estimado usuario..!!! en que le puedo ayudar";
		
		if(this.match('aplicaciones') || this.match('(web)+(W|$)'))
			return ["Para mayor informacion sobre desarrollos web comuniquese al correo", "rubengiraldomurcia@gmail.com"];
		
		if(this.match('capacitaciones') || this.match('(ofimatica)+(W|$)'))
			return ["Para mayor informacion sobre capacitaciones comuniquese al correo", "rubengiraldomurcia@gmail.com"];

		if(this.match('bases') || this.match('(datos)+(W|$)'))
			return ["Puede ingresar a la pagina para mayor informacion", "https://www.youtube.com/channel/UCFiN06CbDx0OxLGOTNaO-dg" ];
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "fue un placer ayudarle";
		
		if(this.match('(gracias|bye|hasta luego)'))
			return ["Con todo gusto!!!!", "feliz dia!"];
		
		
		
		
		if(this.input == 'noop')
			return;
		
		return input + " no tengo informacion pero se puede comunicar al correo rubengiraldomurcia@gmail.com";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
