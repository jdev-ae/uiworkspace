/**
 * Created by SuRu on 06/15/2017.
 */

function pageLoad() {
    let rememberCheckbox: HTMLFormElement = <HTMLFormElement>document.getElementById("rememberMeCheckbox");
    let firstName: HTMLFormElement = <HTMLFormElement>document.getElementById("firstName");
    let lastName: HTMLFormElement = <HTMLFormElement>document.getElementById("lastName");
    let userId: HTMLFormElement = <HTMLFormElement>document.getElementById("userId");

    let pageData: string = localStorage.getItem("pageData");
    if (pageData != null) {
        let pageDataJSON = JSON.parse(pageData);
        firstName.value = pageDataJSON.firstName;
        lastName.value = pageDataJSON.lastName;
        userId.value = pageDataJSON.userID;
    }


    rememberCheckbox.addEventListener("click", function () {
        if (this.checked) {
            let pageData = {
                firstName: firstName.value,
                lastName: lastName.value,
                userId: userId.value,
            };
            localStorage.setItem("pageData", JSON.stringify(pageData));
        } else {
            localStorage.removeItem("pageData");
        }
    });
}