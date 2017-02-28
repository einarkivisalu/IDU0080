<%@page contentType="text/html" pageEncoding="UTF-8"%>
<c:set var="uri" value="${req.requestURI}" />

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Koduleht</title>
         <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <script src="resources/app.js"></script>
    </head>
    <body>
        <h1>Suur raamatukogu!</h1>
        <a href=${uri}>Raamatukogu koduleht</a>
      <form>
      <input type=button value="Koik raamatud" onClick="javascript:get_books()">      
      
      <br><br>
      <table bgcolor=000000>
      <tr><td bgcolor=cccccc>Teated</td></tr>
      <tr><td bgcolor=ffffff><div id="msg_text"> </div></td></tr>
      </table> 
      <br>
      <div id="books_table"></div>
<<<<<<< HEAD
      <br>
      <div id="one_book"></div> 
      <br>
=======
      <br>
      <div id="one_book"></div> 
      <br><br>
      <br>
>>>>>>> 7b84f96c77d136137aca2f39481b011799f920be
      <table bgcolor=eeeeee><tr><td>Uus raamat</td></tr>
      <tr><td>Autor:</td><td><input type=text name=newbook_author value=''></td></tr>
      <tr><td>Pealkiri:</td><td><input type=text name=newbook_title value=''></td></tr>
      <tr><td>Kirjastus:</td><td><input type=text name=newbook_publisher value=''></td></tr>
      <tr><td>Köide:</td><td><input type=text name=newbook_booktype value=''></td></tr>
      <tr><td>Lehekülgi:</td><td><input type=text name=newbook_pages value=''></td></tr>
      <tr><td>ISBN:</td><td><input type=text name=newbook_isbn value=''></td></tr>
      <td><button type='button' class='btn'  onClick='javascript:add_book()'>Lisa teos</button></td></tr>
      </table>
      <br>        
<<<<<<< HEAD
      <table bgcolor=eeeeee><tr><td>Otsi raamatut</td></tr>
      <tr><td>Kirjastus:</td><td><input type=text name=searchbook_title value=''></td></tr>
      <td><button type='button' class='btn'  onClick='javascript:search_book()'>Otsi</button></td></tr>
      </table>
      <br>
      <div id="search_table"></div>
      <br>
      <br>        
      <table bgcolor=eeeeee><tr><td>Nimekiri läbi REST_service: </td></tr>
      <td><button type='button' class='btn'  onClick='javascript:service_books()'>Service</button></td></tr>
      </table>
      <br>
      <div id="books_external_table"></div>
      <br>
      <br>
=======
      <br><br>	  
>>>>>>> 7b84f96c77d136137aca2f39481b011799f920be
	  </form>	  
    </body>
</html>
