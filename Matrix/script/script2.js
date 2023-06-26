//---------------- ترانهاده ---------------------//


// functtion for creat first table 
function creatMatrixe(rows,cols,table){
   // get row and col from input
   rows = document.getElementById("row").value;
   cols = document.getElementById("col").value;
   //chose the table in html 
   var table= document.getElementById("matrixf");

   //اگر پاک نکنیم مقدار table با هر کلیک روی جدول بساز جدول به همون قبلی اضافه میشه
   table.innerHTML="";


   //برای ساخت جدول 
   // یه حلقه به اندازه سطر ها بچرخه
   for(var i = 0 ; i<rows ;i++){

      // اضافه کردن سطر
      var row = table.insertRow();
      //بخواییم توی سطری گه اضافه کردیم رو پر کنیم
      for(var j=0 ; j<cols ; j++){
         // اول به تعداد ستون ها باید سلول بسازیم
         var cell = row.insertCell();
         //اول یه المنت میسازیم که جنس هر سلول چی باشه
         var input = document.createElement('input');
         input.type="number";
         input.className="matrix-input";

         // بعد هر سلول appendchild میکنیم که هر سلول یه انپوت باشه 
         cell.appendChild(input);
      }
   } 
}

//matrix1 ساخت آرایه ای خالی برای ذخیره سازی مقدار 
var matrix1Values=[];
function transpose(){
   // گرفتن جدولی که در function creatMatrixe ساختیم
   var matrix1=document.getElementById("matrixf");
   // گرفتن جدول خالی بای نشان دادن نتیجه
   var result = document.getElementById("TableMt");

   // ماتریس اول گرفتن تعداد سطر و ستون 
   var rows1 = document.getElementById("row").value;
   var cols1 = document.getElementById("col").value;

   //ساخت این حلقه برای ذخیره سازی مقادیر داخل جدولی که کاربر مشخص میکنه
   for(var i=0;i<rows1;i++){
     //که هر بار بره تو حلقهه تا مقدار input رو ذخیره کنه
      var row =[];
      for(var j =0; j<cols1;j++){
         // ساخت متغیر برای انتخاب اینپوت 00 عم به ترتیب
         var input = matrix1.rows[i].cells[j].querySelector(".matrix-input");
         //و حالا مقدار اینپوت که عدده ذخیره میشع داخل آرایه
         row.push(Number(input.value));
         //console.log(row);
      }
      //console.log(row);
      // حالا داخل آرایه Row یک سطر کامل ار جدول ذخیره شده
      //و اون آرایه رو داخل آرایه matrix1Values ذخیره سازی میکنیم
      matrix1Values.push(row);
   }

   
   // اینجا یک متغیر میسازیم تا تابع transpseMatrix رو فراخوانی کنه
   //در واقع اون آرایه ای که ماتریس اولیه که کاربر مشخص برعکس کنه
   var resultValue = transposeMatrix(matrix1Values);

   //اگر پاک نکنیم مقدار ریزالاو با هر کلیک روی ترانهاده جدول به همون قبلی اضافه میشه
   result.innerHTML="";

   //قراره یه جدول برخلاف قبلی بسازیم یعی سطر و ستون های جابجا میکنیم
   for(var i =0; i<cols1 ; i++){
      var row = result.insertRow();
      for(var j=0;j<rows1;j++){
         var cell =row.insertCell();
         //حالا اینحا قراره جدول رو پر کنیم
         cell.innerHTML=resultValue[i][j];
         console.log(cell);
      }
   }
}

// اینحا قراره اون آرایه ای که ار کاربر گرفتیم ترانهاده کنیم
// i,j رو برعکس کنیم
// پس ورودی تابع را همون آرایه قرار میدهیم
function transposeMatrix(matrix){

   var rows1 = document.getElementById("row").value;
   var cols= document.getElementById("col").value;

   //این خط کد در واقع یک آرایه جدید با طول cols ایجاد می‌کند.
   // چون هدف ساخت آرایه دو بعدی هست اول یه آریه با تعداد ستون ها میسازیم که میشه تعداد سطر ها ماتریس جدید
   var result = new Array(cols);

   // چون ترانهاده به اندازه ستونا میگردیم 
   //چرا؟
   //چون جا به جا شدن در ترانهاده
   for(var i =0 ; i<cols;i++){
      // جالا خونه iعم رو انتخاب میکنیم
      // قراره بکنیمش سطر iعم
      // و توی اون یه آرایه به اندازه سطر ها میسازیم که میشه آرایه دو بعدی 
      result[i] =new Array(rows1);
      for(var j =0;j<rows1;j++){
         result[i][j] = matrix[j][i];
      }
   }
   return result;
}

//---------------- ضرب دو  ماتریس ---------------------//

function creatMatrixe1(){
   
   var rows1 =document.getElementById("rowMul1").value;
   var cols2 =document.getElementById("colMul1").value;
   var table= document.getElementById('Table1');
   table.innerHTML="";
   for(var i = 0 ; i<rows1 ;i++){
      var row = table.insertRow();
      for(var j=0 ; j<cols2 ; j++){
         var cell = row.insertCell();
         var input = document.createElement('input');
         input.type="number";
         input.className="matrix-input";
         cell.appendChild(input);
      }
   } 
}

function creatMatrixe2(){
   var rows =document.getElementById("rowMul2").value;
   var cols =document.getElementById("colMul2").value;
   var table= document.getElementById('Table2');
   table.innerHTML="";
   for(var i = 0 ; i<rows ;i++){
      var row = table.insertRow();
      for(var j=0 ; j<cols ; j++){
         var cell = row.insertCell();
         var input = document.createElement('input');
         input.type="number";
         input.className="matrix-input";
         cell.appendChild(input);
      }
   } 
}


 
function  multiply(){
   //گرفتن ماتریس1و2 و قسمت نتیجه
   var matrix1 = document.getElementById("Table1");
   var matrix2 = document.getElementById("Table2"); 
   var result = document.getElementById("resultMul");

   // و سطز و ستون ماتریس هایی که کاربر میخواد ضرب کنه   
   var rows1 = document.getElementById("rowMul1").value;
   var cols1 = document.getElementById("colMul1").value;
   var rows2 = document.getElementById("rowMul2").value;
   var cols2 = document.getElementById("colMul2").value;

   // چک کنه قابل ضرب هستند آیا
   if(cols1 !== rows2){
      //alert("the number of col in matrixe1 must equal the number of rows Matrix2");
      Swal.fire({
         title : 'wrong',
         text:'the number of col in matrixe1 must equal the number of rows Matrix2',
         confirmButtonText:'try again'
      })
   }
 
   // ساخت آؤایه برای ذخیره سازی ماتریس1و2 در آرایه
   var matrix1Values=[];
   var matrix2Values=[];

   // دخیره سازی مقادیر ماتریس 2
   for (var i=0; i<rows1;i++){
      var row=[];
      for(var j=0; j<cols1 ;j++){
         var input= matrix1.rows[i].cells[j].querySelector('.matrix-input');
         row.push(Number(input.value));
      }
      matrix1Values.push(row);
   }

   // دخیره سازی مقادیر ماتریس 1
   for (var i=0; i<rows2;i++){
      var row=[];
      for(var j=0; j<cols2 ;j++){
         var input= matrix2.rows[i].cells[j].querySelector('.matrix-input');
         row.push(Number(input.value));
      }
      matrix2Values.push(row);
   }

// فراخوانی تابع ضرب
   var resultValue= multiplyMatrices(matrix1Values,matrix2Values);

   // نمایش نتیجه ضرب در html
    //result table = rows1*cols2
   result.innerHTML="";
   for(var i =0; i<rows1;i++){
      var row = result.insertRow();
      for(var j =0 ;j<cols2 ; j++){
         var cell = row.insertCell();
         cell.innerHTML=resultValue[i][j];
      }
   }
}


function multiplyMatrices(matrix1,matrix2){

   var rows1 = document.getElementById("rowMul1").value;
   var cols1 = document.getElementById("colMul1").value;
   //var rows2 = document.getElementById("rowMul2").value;
   var cols2 = document.getElementById("colMul2").value;

   //ساخت آرایه برای اینکه بعد محاصبه عناصر در اون ذخیره ساری شه
   //result table = rows1*cols2
   var result = new Array(rows1);

   for(var i=0; i<rows1;i++){
      //عنصر iعم آرایه برابر آرابه دیگه به انداره تعداد سطر ها برای اینکخ آرابه 2 بعدی داشته باشیم
      result[i] = new Array(cols2); 

      for(var j=0;j<cols2;j++){
         // ساختن متغیر برای 
         var sum=0;

         for(var k=0; k<cols1;k++){
            sum += matrix1[i][k] * matrix2[k][j];
         }
         result[i][j]= sum 
      }
   }
   return result;
}
/*------------SPARS---------------*/

var ArraySpars =[];
function getArrayForSpars(){
   var countZero =0;
   var countcell=0;
   var matrix1=document.getElementById("matrixf");
   var rows1 = document.getElementById("row").value;
   var cols1 = document.getElementById("col").value;

   for(var i=0;i<rows1;i++){
       var row =[];
       for(var j =0; j<cols1;j++){
          var input = matrix1.rows[i].cells[j].querySelector(".matrix-input");
          if(input.value != 0){
            row.push(Number(input.value));
            countcell++;
         }
         else{
            row.push(Number(input.value));
            countZero++;
            countcell++;
         }
       }
       ArraySpars.push(row);
    }
   
    if((countZero/ countcell) > (1/3)){
      Swal.fire({
         icon: 'success',
         title: 'Is a sparse matrix',
       })
    }else{
      Swal.fire({
         icon: 'error',
         title: 'Not a sparse matrix',
       })
    }
   
}


//----------------------------

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

