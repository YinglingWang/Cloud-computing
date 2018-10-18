
window.onload = function () {
    
    var num = 0;//判断左右
    var portrait_position = 0;
    var now = -1;//左右浮动
    var send_btn = document.getElementById('send_btn');
    var send_txt = document.getElementById('send_txt');
    var chat_ul = document.getElementById('chat_ul');
    var chat_span = chat_ul.getElementsByTagName('span');
    send_btn.onclick = function () {
        if (send_txt.value == '') {
            alert("please input message");
        } else {
            chat_ul.innerHTML += '<li><span>' + send_txt.value + '</span>';
            now++;
            if (num==0) {
                chat_span[now].className = 'spanright';
                chat_img[now].className = 'imgright';
            }
             else {
                chat_span[now].className = 'spanleft';
                chat_img[now].className = 'imgleft';
            }
            send_txt.value = '';
        }
    }
 
 
}
