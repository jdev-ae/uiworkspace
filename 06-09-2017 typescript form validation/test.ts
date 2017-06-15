/**
 * Created by SuRu on 06/11/2017.
 */

function validateForm() {
    var firstName: string = (<HTMLInputElement>document.getElementById("firstName")).value.trim();
    var lastName: string = (<HTMLInputElement>document.getElementById("lastName")).value.trim();
    var userId: string = (<HTMLInputElement>document.getElementById("userId")).value.trim();
    var password: string = (<HTMLInputElement>document.getElementById("password")).value;
    var country: string = (<HTMLInputElement>document.getElementById("country")).value;
    var hobbies: number = document.querySelectorAll('input[name="hbs"]:checked').length;
    
    if (firstName.length === 0) {
        alert("Invalid first name");
    } else if (lastName.length === 0) {
        alert("Invalid last name");
    } else if (userId.length === 0 || !/^[A-Za-z0-9]*$/.test(userId)) {
        alert("Invalid user id");
    } else if (password.length === 0) {
        alert("Please enter password");
    } else if (country.length === 0) {
        alert("Please select country");
    } else if (hobbies === 0) {
        alert("Please select at least one hobby");
    }
}
