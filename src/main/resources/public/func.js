$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": {
            "url": "http://localhost:4567/users",
            "dataSrc": ""
        },
        "columns": [
            { "data": "fname" },
            { "data": "lname" },
            { "data": "uid" },
            { "data": "manager" },
            { "data": "country" },
            { "data": "Record_status" },
            { "data": "Record_entered" }
        ]
    } );

    $('#example').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "http://localhost:4567/users",
            "type": "POST"
        },
        "columns": [
            { "data": "fname" },
            { "data": "lname" },
            { "data": "uid" },
            { "data": "manager" },
            { "data": "country" },
            { "data": "Record_status" },
            { "data": "Record_entered" }
        ]
    } );

} );