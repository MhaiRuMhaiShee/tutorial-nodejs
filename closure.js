// closure คือ ฟังค์ชันที่รวม env ของ parent ด้วย

function parent(){
    var x = 1;

    function child(){
        console.log(x);
    }
    return child; // frist class function
}

var childFn = parent(); // x=1 still alive after exec this line
childFn();
//1 is alive