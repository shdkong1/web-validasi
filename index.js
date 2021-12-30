function validate() {
    var name = document.forms["mainForm"]["fullname"].value;
    if (name == "" || name == null) {
        alert("Nama tidak boleh kosong!");
        return false;
    }
    var idnum = document.forms["mainForm"]["idnum"].value;
    if (idnum == "" || idnum == null) {
        alert("Nomor MyID tidak boleh kosong!");
        return false;
    }
    var residenceaddr = document.forms["mainForm"]["residenceaddr"].value;
    if (residenceaddr == "" || residenceaddr == null) {
        alert("Alamat Tinggal tidak boleh kosong!");
        return false;
    }

    if (document.forms["mainForm"]["departemen"].selectedIndex < 1) {
        alert("Fakultas belum dipilih!");
        return false;
    }

    if (document.forms["mainForm"]["dosis"].selectedIndex < 1) {
        alert("Status Vaksinasi belum dipilih!");
        return false;
    }

    alert("Data berhasil dikirim");
}