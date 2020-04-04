function dis()
{
    var x=document.getElementById("name").value;
    var y=document.getElementById("password").value;
        
        if(x=="kareem" && y==123)
        {
            alert("Welcome Kareem");
            location.replace("Kareem.html");
        }
        else if(x=="amr" && y==123)
        {
            alert("Welcome Amr");
            location.replace("Amr.html");
        }
        else if(x=="osama" && y==123)
        {
            alert("Welcome Osama");name=x;
            location.replace("Osama.html");
        }
        else
        {
        alert("Your data don't match with any of the admins");
        }
    
}
   

    // ADD & REMOVE & DELETE ...
var indx, table = document.getElementById("table");

         function emptyInput ()
         {
             var isEmpty = true ,
             offers = document.getElementById("offers").value ;
             visits = document.getElementById("visits").value ;
             if (offers === ""){alert("First cell cannot be empty");isEmpty = true;}
             else if (visits === ""){(alert)("Second cell cannot be empty");isEmpty = true;return isEmpty;}

         }
         function tableRow()
         {
             if (!emptyInput()){
             var row = table.insertRow(table.length);
             var cell1=row.insertCell(0),cell2=row.insertCell(1);
             var offers = document.getElementById("offers").value ;
             var visits = document.getElementById("visits").value ;


             cell1.innerHTML =  offers ;
             cell2.innerHTML =  visits ;

             selectedRow();}
         }

         function selectedRow()
         {
             for (var i = 1 ; i < table.rows.length;i++)
                 {
                     table.rows[i].onclick = function ()
                     {
                         //get the selected row index
                         indx = this.rowIndex;
                        document.getElementById("offers").value=this.cells[0].innerHTML;
                        document.getElementById("visits").value=this.cells[1].innerHTML;
                     };
                 }
         }
            selectedRow();


         function editSelected()
         {
         var offers =document.getElementById("offers").value ;
         var visits =document.getElementById("visits").value ;
             if (!emptyInput()){
          table.rows[indx].cells[0].innerHTML=offers;
          table.rows[indx].cells[1].innerHTML=visits;}
         }

         function removeSelected()
         {
             table.deleteRow(indx);
             offers = document.getElementById("offers").value="" ;
             visits = document.getElementById("visits").value="" ;
         }

