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
        alert("Invalid First Name");
    } else if (lName.value.trim().length == 0) {
        lName.focus();
        alert("Invalid Last Name");
    } else if (uid.value.trim().length == 0 || !/^\S*$/.test(uid.value.trim())) {
        uid.focus();
        alert("Invalid User ID");
    } else if (pwd.value.length == 0) {
        pwd.focus();
        alert("Invalid Password");
    } else if (country.value.length == 0) {
        country.focus();
        alert("Select Country");
    } else if (hobbies.length == 0) {
        alert("Select at least one hobby");
    } else {
        alert("all pass");
    }
}
