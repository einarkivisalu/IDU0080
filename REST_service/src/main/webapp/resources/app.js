
function Car()
{
	this.author;
	this.title;
	this.publisher;
	this.booktype;
	this.pages;
	this.isbn;
}

function get_books()
{
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/books' ,
    type: "GET",
    dataType: 'json',
    success: function(data) {
    	display_books(data);
        console.log(JSON.stringify(data));
    }
  });
}

function display_books(data)
{
	var out_data="";
	 out_data = out_data + "<table bgcolor=eeeeee><tr><td colspan=6>Raamatuid kokku: <b>" + data.length + "</b></td></tr>";
	 for(var  i in data) {
   	  var book = data[i];
		out_data = out_data + "<tr><td>ID:</td><td bgcolor=ffffff>" + book.id+ "</td><td>Pealkiri:</td><td bgcolor=ffffff>" + book.title + "</td><td>autor:</td><td bgcolor=ffffff>" + book.author + "</td><td>Kirjastus::</td><td bgcolor=ffffff>" + book.publisher+ "</td>";
		}
	 out_data = out_data + "</table>";
	
	 $("#books_table").html(out_data);
}



function show_message(message)
{
	
	 $("#msg_text").html(message);
}
