$(document).ready(function(){
    var specialElementHandlers={
        '#editor':function(element,render){
            return true;
        }
    };
    $('#cmd').click(function(){
        var doc=new jsPDF();
        doc.fromHTML($('#target').html,15,15,{
            'width':170,
            'elementHandlers':specialElementHandlers
        });
        doc.save('sample.pdf')
    });
});