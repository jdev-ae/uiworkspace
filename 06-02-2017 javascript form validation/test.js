/**
 * Created by SuRu on 06/03/2017.
 */

function validateForm() {
    var fName = document.getElementById('fName');
    var lName = document.getElementById('lName');
    var uid = document.getElementById('uid');
    var pwd = document.getElementById('password');
    var country = document.getElementById('country');
    var hobbies = document.querySelectorAll('input[name="hbs"]:checked');

    if (fName.value.trim().length == 0) {
        fName.focus();
        showMessage("fNameMessage", "Invalid First Name");
    } else {
        showMessage("fNameMessage", "");
    }
    if (lName.value.trim().length == 0) {
        lName.focus();
        showMessage("lNameMessage", "Invalid Last Name");
    } else {
        showMessage("lNameMessage", "");
    }
    if (uid.value.trim().length == 0 || !/^[A-Za-z0-9]*$/.test(uid.value.trim())) {
        uid.focus();
        showMessage("uidMessage", "Invalid User ID");
    } else {
        showMessage("uidMessage", "");
    }
    if (pwd.value.length == 0) {
        pwd.focus();
        showMessage("passwordMessage", "Invalid Password");
    } else {
        showMessage("passwordMessage", "");
    }
    if (country.value.length == 0) {
        country.focus();
        showMessage("countryMessage", "Select Country");
    } else {
        showMessage("countryMessage", "");
    }
    if (hobbies.length == 0) {
        showMessage("hbsMessage", "Select at least one hobby");
    } else {
        showMessage("hbsMessage", "");
    }
}

function showMessage(c, msg) {
    document.getElementById(c).innerHTML = msg;
}
