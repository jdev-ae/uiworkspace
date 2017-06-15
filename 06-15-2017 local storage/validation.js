/**
 * Created by SuRu on 06/15/2017.
 */
function pageLoad() {
    var rememberCheckbox = document.getElementById("rememberMeCheckbox");
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var userId = document.getElementById("userId");
    var pageData = localStorage.getItem("pageData");
    if (pageData != null) {
        var pageDataJSON = JSON.parse(pageData);
        firstName.value = pageDataJSON.firstName;
        lastName.value = pageDataJSON.lastName;
        userId.value = pageDataJSON.userID;
    }
    rememberCheckbox.addEventListener("click", function () {
        if (this.checked) {
            var pageData_1 = {
                firstName: firstName.value,
                lastName: lastName.value,
                userId: userId.value,
            };
            localStorage.setItem("pageData", JSON.stringify(pageData_1));
        }
        else {
            localStorage.removeItem("pageData");
        }
    });
}
