window.onload = function () {
    var portrait_position = 0;
    var send_btn = document.getElementById('send_btn');
    var send_txt = document.getElementById('send_txt');
    var chat_ul = document.getElementById('chat_ul');
    var chat_span = chat_ul.getElementsByTagName('span');
    send_btn.onclick = function () {
    	var input = $("#send_txt").val();
        if (send_txt.value == '') {
            alert("please input message");
        } else {
            chat_ul.innerHTML += '<li><span class="spanright">' + send_txt.value + '</span>';
           
        console.log(input);
        axios({
        url: "  https://azpx1ffscc.execute-api.us-east-2.amazonaws.com/dev/chatbot",
        method: 'POST',
        headers :{
            "X-Api-Key": "eo1d1X9N5Q5jMUgLlgaHs3g1S0B3fjqP6XkKlqWn"
        },
        data: {
            "input": input
        },
        }).then(response => {
        console.log(response);
        chat_ul.innerHTML += '<li ><span class = "spanleft">' + response.data.body+ '</span>' + '</li>';
    }).catch(error => {
        console.log(error);
    });
    }

    }
}
 



