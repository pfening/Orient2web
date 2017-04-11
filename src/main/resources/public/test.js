
            
            $(document).ready(function(){        
        $.getJSON("http://localhost:4567/users", function(result){
            $.each(result, function(i,field){
                $("table").append("<tr><td>"+field.fname+"</td><td>"+field.lname+"</td><td>"+field.uid+"</td><td>"+field.manager+"</td><td>"+field.country+"</td><td>"+field.Record_status+"</td><td>"+field.Record_entered+"</td></tr>");
            });
            $("tr").click(function(){
            var line = $(this).html();
            var fname=$(this).find(":nth-child(1)").html();
            var lname=$(this).find(":nth-child(2)").html();
            var uid=$(this).find(":nth-child(3)").html();
            var manager=$(this).find(":nth-child(4)").html();
            var country=$(this).find(":nth-child(5)").html();
            var status=$(this).find(":nth-child(6)").html();
            var entered=$(this).find(":nth-child(7)").html();
            alert(fname+" "+lname+" "+uid+" "+manager+" "+country+" "+status+" "+entered);
            });
        });

});
