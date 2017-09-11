function edit_row(no) {
    //console.log(no);
    // var table = document.getElementById("agendadatas");
    // var table_len = (table.rows.length)-1;
    // var row = table.insertRow(table_len).outerHTML = "<tr id ='row'"+table_len+"><td id='time_row'"+table_len+">"+agendatime+"</td><td id='desc_row'"+table_len+">"+agendadesc+"</td><td id = 'ins_row'"+table_len+">"+agendainstruction+"</td><td><button id='btnedit'"+table_len+"class='edit' onclick ='edit_row("+table_len+")'></button></td><td><button id='btnsave'"+table_len+" class='save' onclick='save_row("+table_len+")'></button></td><td><button id='btndel'"+table_len+" class='delete' onclick='delete_row("+table_len+")'></button></td></tr>"

    //document.getElementById("btnedit" + no).style.display = "none";
    //document.getElementById("btnsave" + no).style.display = "block";

    var time = document.getElementById("time_row" + no).innerText;
    var desc = document.getElementById("desc_row" + no).innerText;
    var ins = document.getElementById("ins_row" + no).innerText;

    document.getElementById('agendatime').value = time;
    document.getElementById('agendadesc').value = desc;
    document.getElementById('agendainstruction').value = ins;

    // var agendatime = $("#agendatime").val();
    // var agendadesc = $("#agendadesc").val();
    // var agendainstruction = $("#agendainstruction").val();

    // var time_data = time.innerHTML;
    // console.log(time_data);
    // var desc_data = desc.innerHTML;
    // var ins_data = ins.innerHTML;

    // time_data.innerHTML = "<input type='text' id='time_text'" + no + "value='" + time_data + "'>";
    // desc_data.innerHTML = "<input type='text' id='desc_text'" + no + "value='" + desc_data + "'>";
    // ins_data.innerHTML = "<input type='text' id='ins_text'" + no + "value='" + ins_data + "'>";

}

function save_row(no) {

    var text_time = document.getElementById('agendatime').value;
    var text_desc = document.getElementById('agendadesc').value;
    var text_ins = document.getElementById('agendainstruction').value;

    document.getElementById("time_row" + no).innerText = text_time;
    document.getElementById("desc_row" + no).innerText = text_desc;
    document.getElementById("ins_row" + no).innerText = text_ins;

    // var time_val = document.getElementById("time_text" + no);
    // var desc_val = document.getElementById("desc_text" + no);
    // var ins_val = document.getElementById("ins_text" + no);

    // document.getElementById("time_row" + no).innerHTML = time_val;
    // document.getElementById("desc_row" + no).innerHTML = desc_val;
    // document.getElementById("ins_row" + no).innerHTML = ins_val;

    // document.getElementById("btnedit" + no).style.display = "block";
    // document.getElementById("btnsave" + no).style.display = "none";
}

function delete_row(no) {

    document.getElementById("row" + no).innerHTML = "";
}