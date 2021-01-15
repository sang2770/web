function validation () {
	this.kiemtrarong= function  (value) {
		// body... 
		if(value.trim()=="")
		{
			return true;

		}
		return false;
	}
	// body... 
	this.kiemtraemail=function  (email) {

    let  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}
		// body... 
	}
