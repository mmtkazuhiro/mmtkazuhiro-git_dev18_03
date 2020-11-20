function clickBtn0(){
    const na = $("#name").val();
    const co = $("#code").val();
    const set = $("#setumei").val();

    if(co == '') 
    {alert("コードの入力は必須です。")
    return;  // #codeが空欄なら最初に戻る
    }

    console.log(co)
    console.log(na)
    console.log(set)

    var datalist = {
    code: co,
    name: na,
    setumei: set
    }

  
    localStorage.setItem(co, JSON.stringify(datalist));

    const html =`
        <li>
        <span>${co}</span>
        <span>${na}</span>
        <span>${set}</span>
        </li>`

    $("#list").append(html);

    $("#name").val("");
    $("#code").val("");
    $("#setumei").val("");

    location.reload();


};


for (let i = 0; i < localStorage.length; i++) {

    // 保存されたデータのkeyを取得
    // forでkey列の0番目からずっとデータを取得し続ける
    const key = localStorage.key(i);
    
    console.log(key);

    // getItemのKeyを使って保存されたデータを全部取得
    const value2 = localStorage.getItem(key);
    const value =  JSON.parse(value2); 

    console.log(value);

    const html = `
    
  <tr id="kesuyatu">
    <td><form name="form1"><label for="list01"><input type="checkbox" class="code1" name="code100" value="0" id="list01">
      ${value.code}
    </label></form></td>
    <td>${value.name}</td>
      <td>${value.setumei}</td>
  </tr>
       `


    // htmlに埋め込む
    $("#list").append(html);


    // 実行ボタンを押すとcssのサンプル部分にテキストが表示&その部分のテキストも取得
    function clickBtn1(){
      var code1 = $('.code1:checked').map(function() {
        return $(this).parent('label').text();
      }).get();
        console.log(code1)

      document.getElementById("hannei").textContent = code1;

      var csstext = document.getElementById('samplecode');
      console.log(csstext.textContent);
      }

      console.log(i)


      if(i>8){
        var hyouka = document.getElementById("hyouka");
        console.log("10個到達！次は50個を目指そう!")
        hyouka.innerHTML = "10個到達！";
      }else if (i <=8 && i>=0) {
        var hyouka = document.getElementById("hyouka");
        console.log("まだまだ勉強だ！")
        hyouka.innerHTML = "まだまだ勉強だ！";
      }else if (i >48) {
        var hyouka = document.getElementById("hyouka");
        console.log("おめでとう！50個に到達だ")
        hyouka.innerHTML = "おめでとう！50個に到達だ！";
      }else if(i>98){
        var hyouka = document.getElementById("hyouka");
        console.log("君はもうCSSの達人だ")
        hyouka.innerHTML = "君はもうCSSの達人だ";
      }

    }

  

function clickBtncopy(){

var copymoto = document.getElementById("css");
var hani = document.createRange();
hani.selectNodeContents(copymoto);
var sentaku = window.getSelection();
sentaku.removeAllRanges();
sentaku.addRange(hani);
document.execCommand('copy');
alert("コピーしました。")
}

function clickBtnclear(){
  localStorage.clear();
  location.reload();
}