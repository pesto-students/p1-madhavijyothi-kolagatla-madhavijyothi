# FUNCTION TO ADD

var Teacher = function() {
    this.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
    }
}