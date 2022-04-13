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


function verify() {
    var postalcode = document.querySelector("#postalcode");
    var btn_verify = document.querySelector("#btn_verify");
    console.log(btn_verify);
    btn_verify.addEventListener("click", function(e) {
        let postal = postalcode.value;
        var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        var pr = regex.test(postal);

        if (pr === true) {
            //all good      
        } else {
            // not so much
            document.getElementById("error").innerHTML = "Invalid Postal Code!";
        }
    });

}

// 1.	Create an event handler to run when the page is loaded.
window.onload = function() {

    var contact = document.querySelector(".contact");
    var postalcode = document.querySelector("#postalcode");
    var btn_verify = document.querySelector("#btn_verify");
    var hiring = document.querySelector('#hiring');
    var hourlyrate = document.querySelector('#hourlyrate');
    var question = document.querySelector("#question");
    var comment = document.querySelector("#comment");

    contact.addEventListener("click", function() {
        document.querySelector(".content").style.visibility = "visible";
    })

    btn_verify.addEventListener("click", function(e) {
        let postal = postalcode.value;
        var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        var pr = regex.test(postal);

        if (pr === true) {
            //all good      
        } else {
            // not so much
            document.querySelector("#postalcode").value = "Invalid Postal Code!";
            postalcode.addEventListener("click", function(e) {
                document.querySelector("#postalcode").value = "";
            })
        }
    });

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
        hourlylabel.innerText = "Hourly Rate";
        hourlyinput.type = "text";

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

};