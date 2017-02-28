var book_from_server;
// ;

function Book()
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

function delete_book(id)
{
<<<<<<< HEAD
show_message("Kustutama");
=======
>>>>>>> 7b84f96c77d136137aca2f39481b011799f920be
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/book/' + id ,
    type: "DELETE",
    dataType: 'json',
<<<<<<< HEAD
//    contentType : 'application/json',
    success: function(data) {
    	show_message("Kustutatud");
//        console.log(JSON.stringify(data));
=======
    contentType : 'application/json',
    success: function(data) {
    	show_message("Kustutatud");
        console.log(JSON.stringify(data));
>>>>>>> 7b84f96c77d136137aca2f39481b011799f920be
    }
  });
}

function update_book()
{	
	book_from_server.author=document.forms[0].author.value;
	book_from_server.title=document.forms[0].title.value;
	book_from_server.publisher=document.forms[0].publisher.value;
	book_from_server.booktype=document.forms[0].booktype.value;	
	book_from_server.pages=document.forms[0].pages.value;
	book_from_server.isbn=document.forms[0].isbn.value;
		
var jsonData = JSON.stringify(book_from_server); 
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/book/' + book_from_server.id,
<<<<<<< HEAD
    type: "PUT",
=======
    type: "POST",
>>>>>>> 7b84f96c77d136137aca2f39481b011799f920be
    data: jsonData,
    dataType: 'json',
    contentType : 'application/json',
    success: function(data) {
    	show_message("Salvestatud");
        console.log(JSON.stringify(data));
    }
  });
}

function add_book()
{	
	var book_to_server = {}; 
	book_to_server.author=document.forms[0].newbook_author.value;
	book_to_server.title=document.forms[0].newbook_title.value;
	book_to_server.publisher=document.forms[0].newbook_publisher.value;
	book_to_server.booktype=document.forms[0].newbook_booktype.value;	
	book_to_server.pages=document.forms[0].newbook_pages.value;
	book_to_server.isbn=document.forms[0].newbook_isbn.value;
		
var jsonData = JSON.stringify(book_to_server); 
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/books',
    type: "POST",
    data: jsonData,
    dataType: 'json',
    contentType : 'application/json',
    success: function(data) {
    	show_message("Lisatud");
<<<<<<< HEAD
        console.log(JSON.stringify(data));
    }
  });
}

function service_books()
{
	$.ajaxSetup({ cache: false });
	$.ajax({

	    url: 'service/external/books' ,
	    type: "GET",
	    dataType: 'json',
	    success: function(data) {
	    	display_external_books(data);
	        console.log(JSON.stringify(data));
	    }
	  });

}

function search_book()
{	
	var search_title =  document.forms[0].searchbook_title.value;
		
$.ajaxSetup({ cache: false });
$.ajax({

    url: 'service/books/' + search_title,
    type: "GET",
    data: search_title,
    success: function(data) {
    	show_message("Otsitud");
    	display_search(data);
=======
>>>>>>> 7b84f96c77d136137aca2f39481b011799f920be
        console.log(JSON.stringify(data));
    }
  });
}


function display_book(book)
{
	 var out_data="";
	 out_data = out_data + "<table bgcolor=eeeeee><tr><td>Muutmine. Raamatu id: <b>" + book.id + "</b></td></tr>";

		out_data = out_data + "<tr><td>Autor:</td><td><input type=text name=author value='" + book.author + "'></td></tr>";
		out_data = out_data + "<tr><td>Pealkiri:</td><td><input type=text name=title value='" + book.title + "'></td></tr>";
		out_data = out_data + "<tr><td>Kirjastus:</td><td><input type=text name=publisher value='" + book.publisher + "'></td></tr>";
		out_data = out_data + "<tr><td>Köide:</td><td><input type=text name=booktype value='" + book.booktype + "'></td></tr>";
		out_data = out_data + "<tr><td>Lehekülgi:</td><td><input type=int name=pages value='" + book.pages + "'></td></tr>";
		out_data = out_data + "<tr><td>ISBN:</td><td><input type=text name=isbn value='" + book.isbn + "'></td></tr>";
		out_data = out_data + "<td><button type='button' class='btn'  onClick='javascript:update_book()'>Salvesta</button></td>";
		out_data = out_data + "</table>";
	
	 $("#one_book").html(out_data);
}

function display_books(data)
{
	var out_data="";
	 out_data = out_data + "<table bgcolor=eeeeee><tr><td colspan=6>Raamatuid kokku: <b>" + data.length + "</b></td></tr>";
	 for(var  i in data) {
   	  var book = data[i];
		out_data = out_data + "<tr><td>ID:</td><td bgcolor=ffffff>" + book.id+ "</td><td>Pealkiri:</td><td bgcolor=ffffff>" + book.title + "</td><td>autor:</td><td bgcolor=ffffff>" + book.author + "</td><td>Kirjastus::</td><td bgcolor=ffffff>" + book.publisher+ "</td>";
		out_data = out_data + "<td><button type='button' class='btn'  onClick='javascript:get_book(" + book.id + ")'>Vali</button></td>";
		out_data = out_data + "<td><button type='button' class='btn'  onClick='javascript:delete_book(" + book.id + ")'>Kustuta</button></td></tr>";
		}
	 out_data = out_data + "</table>";
	
	 $("#books_table").html(out_data);
}

function display_external_books(data)
{
	var out_data="";
	 out_data = out_data + "<table bgcolor=eeeeee><tr><td colspan=6>Raamatuid kokku: <b>" + data.length + "</b></td></tr>";
	 for(var  i in data) {
   	  var book = data[i];
		out_data = out_data + "<tr><td>ID:</td><td bgcolor=ffffff>" + book.id+ "</td><td>Pealkiri:</td><td bgcolor=ffffff>" + book.title + "</td><td>autor:</td><td bgcolor=ffffff>" + book.author + "</td><td>Kirjastus::</td><td bgcolor=ffffff>" + book.publisher+ "</td>";
		}
	 out_data = out_data + "</table>";
	
	 $("#books_external_table").html(out_data);
}


function display_search(data)
{
	var out_data="";
	 out_data = out_data + "<table bgcolor=eeeeee><tr><td colspan=6>Otsingu tulemused. Leiti: <b>" + data.length + "</b></td></tr>";
	 for(var  i in data) {
   	  var book = data[i];
		out_data = out_data + "<tr><td>ID:</td><td bgcolor=ffffff>" + book.id+ "</td><td>Pealkiri:</td><td bgcolor=ffffff>" + book.title + "</td><td>autor:</td><td bgcolor=ffffff>" + book.author + "</td><td>Kirjastus::</td><td bgcolor=ffffff>" + book.publisher+ "</td>";
		}
	 out_data = out_data + "</table>";
	
	 $("#search_table").html(out_data);
}


function show_message(message)
{	
	 $("#msg_text").html(message);
}