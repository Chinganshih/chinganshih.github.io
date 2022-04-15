/**
 * WEB222 – Final Assessment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Ching-An, Shih
 *      Student ID: 148221195
 *      Date:       2022-04-15
 */

function validateInput(e) {
    let isInvalid = false;
    const value = e.target.value.trim();
    switch (e.target.name) {
        case "fname":
            isInvalid = value === "";
            break;

        case "lname":
            isInvalid = value === "";
            break;

        case "email":
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var pr = regex.test(e.target.value);
            isInvalid = value === "" || !pr;
            break;

        case "address":
            isInvalid = value === "";
            break;

        case "city":
            isInvalid = value === "";
            break;

        case "postalcode":
            var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
            var pr = regex.test(e.target.value);
            isInvalid = value === "" || !pr;
            break;

        case "question":
            isInvalid = value === "";
            break;

        case "question":
            isInvalid = value === "";
            break;

        case "other":
            isInvalid = value === "";
            break;
    }
    e.target.classList.toggle("invalid", isInvalid);
    return isInvalid;
}

// 1.	Create an event handler to run when the page is loaded.
window.onload = function() {
    var formData = {};
    var contact = document.querySelector(".contact");
    var fname = document.querySelector("#fname");
    var lname = document.querySelector("#lname");
    var email = document.querySelector("#email");
    var address = document.querySelector("#address");
    var email = document.querySelector("#email");
    var postalcode = document.querySelector("#postalcode");
    var hiring = document.querySelector('#hiring');
    var hourlyrate = document.querySelector('#hourlyrate');
    var question = document.querySelector("#question");
    var other = document.querySelector("#other");
    var comment = document.querySelector("#comment");
    var submit = document.querySelector("#submit");

    contact.addEventListener("click", function() {
        document.querySelector(".content").style.visibility = "visible";
    })

    question.addEventListener("click", function(e) {
        hiring.checked = false;
        comment.checked = false;

    })

    comment.addEventListener("click", function(e) {
        question.checked = false;
        hiring.checked = false;

    })

    hiring.addEventListener("click", function(e) {
        var hourlylabel = document.createElement("label");
        var hourlyinput = document.createElement("input");

        hourlyrate.appendChild(hourlylabel);
        hourlyrate.appendChild(hourlyinput);
        hourlylabel.innerText = "Hourly Rate (Ex. 14.5)";
        hourlyinput.id = "hourlyinput";
        hourlyinput.type = "text";
        hourlyinput.setAttribute("required", "");
        hourlyinput.required = true;


        question.checked = false;
        comment.checked = false;

        question.addEventListener("click", function(e) {
            hourlyrate.removeChild(hourlylabel);
            hourlyrate.removeChild(hourlyinput);

        })

        comment.addEventListener("click", function(e) {
            hourlyrate.removeChild(hourlylabel);
            hourlyrate.removeChild(hourlyinput);

        })
    })

    submit.addEventListener("click", function(e) {
        var hourrateEpy = 0;
        var hourlyinput = document.querySelector('#hourlyinput');
        var url = "https://httpbin.org/post?key=formdata";
        var xhr = new XMLHttpRequest();
        e.preventDefault();

        if (hourlyinput) {
            const isInvalid = hourlyinput.value === "" || !isFinite(hourlyinput.value);
            hourlyinput.classList.toggle("invalid", isInvalid);
            (isInvalid) ? hourrateEpy = 1: 0;
        }
        const isInvalid = validateInput({ target: fname }) | validateInput({ target: lname }) | validateInput({ target: email }) | validateInput({ target: address }) | validateInput({ target: city }) |
            validateInput({ target: postalcode }) | validateInput({ target: question }) | validateInput({ target: other });

        if (!isInvalid && !hourrateEpy) {
            formData.fname = fname.value;
            formData.lname = lname.value;
            formData.email = email.value;
            formData.address = address.value;
            formData.city = city.value;
            formData.postalcode = postalcode.value;
            formData.other = other.value;

            if (question.checked) {
                console.log(question.value);
                formData.question_about = question.value;
            } else if (comment.checked) {
                formData.question_about = comment.value;
            } else {
                formData.question_about = hiring.value;
                formData.hourRate = hourlyinput.value;
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);
                }
            }
            xhr.open("POST", url);
            xhr.send(JSON.stringify(formData));
            console.log(formData.question_about);

            window.confirm("Please check your information below.\n" +
                "First Name: " + fname.value + "\n" +
                "Last Name: " + lname.value + "\n" +
                "Email: " + email.value + "\n" +
                "Address: " + address.value + "\n" +
                "City: " + city.value + "\n" +
                "Postal Code: " + postalcode.value + "\n" +
                "Question About: " + formData.question_about + "\n" +
                "Other: " + other.value + "\n" +
                "Submit successfully! Thank you for your feedback!");


            fname.value = "";
            lname.value = "";
            email.value = "";
            address.value = "";
            city.value = "";
            postalcode.value = "";
            question.value = "";
            other.value = "";
            if (hourlyinput) hourlyinput.value = "";
        } else alert("Invalid information, Please check again before you submit!");

    })
};