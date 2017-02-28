var book_from_server;

function Book()
{
this.author;
this.title;
this.publisher;
this.book_type;
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

function get_book(id)
{
 
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/book/' + id ,
    type: "GET",
    dataType: 'json',
    success: function(data) {
    	book_from_server = data;
    	display_book(data);
        console.log(JSON.stringify(data));
    }
  });
}


function save_book()
{	
	book_from_server.author=document.forms[0].author.value;
	book_from_server.title=document.forms[0].title.value;
	book_from_server.publisher=document.forms[0].publisher.value;
	book_from_server.book_type=document.forms[0].book.value;	
	book_from_server.pages=document.forms[0].server.value;
	book_from_server.isbn=document.forms[0].isbn.value;
		
var jsonData = JSON.stringify(book_from_server); 
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/book/' + book_from_server.id ,
    type: "POST",
    data: jsonData,
    dataType: 'json',
    contentType : 'application/json',
    success: function(data) {
    	show_message("Salvestatud");
        console.log(JSON.stringify(data));
    }
  });
}

function display_book(book)
{
	 var out_data="";
	 out_data = out_data + "<table bgcolor=eeeeee><tr><td>Muutmine. Raamatu id: <b>" + book.id + "</b></td></tr>";

		out_data = out_data + "<tr><td>Autor:</td><td><input type=text name=make value='" + book.author + "'></td></tr>";
		out_data = out_data + "<tr><td>Pealkiri:</td><td><input type=text name=model value='" + book.title + "'></td></tr>";
		out_data = out_data + "<tr><td>Kirjastus:</td><td><input type=text name=series value='" + book.publisher + "'></td></tr>";
		out_data = out_data + "<tr><td>Köide:</td><td><input type=text name=series value='" + book.book_type + "'></td></tr>";
		out_data = out_data + "<tr><td>Lehekülgi:</td><td><input type=text name=year value='" + book.pages + "'></td></tr>";
		out_data = out_data + "<tr><td>ISBN:</td><td><input type=text name=series value='" + book.isbn + "'></td></tr>";
		out_data = out_data + "<td><button type='button' class='btn'  onClick='javascript:save_book()'>Salvesta</button></td>";
		out_data = out_data + "</table>";
	
	 $("#one_book").html(out_data);
}

function display_books(data)
{
	var out_data="";
	 out_data = out_data + "<table bgcolor=eeeeee><tr><td colspan=6>Raamatuid kokku: <b>" + data.length + "</b></td></tr>";
	 for(var  i in data) {
   	  var book = data[i];
		out_data = out_data + "<tr><td>ID:</td><td bgcolor=ffffff>" + book.id+ "</td><td>Pealkiri:</td><td bgcolor=ffffff>" + book.title + "</td><td>autor:</td><td bgcolor=ffffff>" + book.author + "</td>";
		out_data = out_data + "<td><button type='button' class='btn'  onClick='javascript:get_book(" + book.id + ")'>Vali</button></td>";
		}
	 out_data = out_data + "</table>";
	
	 $("#books_table").html(out_data);
}

function show_message(message)
{	
	 $("#msg_text").html(message);
}