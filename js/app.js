/**
 * WEB222 – Assignment 04
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
 *      Date:       2022-04-01
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

function createNode(source, tag, id) {
    var s = document.querySelector(source);
    var d = document.createElement(tag);
    s.appendChild(d);
    d.id = id;
    d.className = id;
}

//Convert the price in cents to dollars and cents
function dollarCent(price) {
    price = price / 100;
    const dollarcent = { style: "currency", currency: "CAD" };
    const numberFormat = new Intl.NumberFormat("en-CA", dollarcent);

    return numberFormat.format(price);
}

function isDiscontinued(discontinued) {
    var ishidded = false;
    if (discontinued) ishidded = true;
    return ishidded;
}

// Create all of the buttons for your store’s Categories
function createCatBtn() {
    createNode("#menu", "div", "topnav");

    // Use each Category’s name for the button’s text
    categories.forEach((element) => {
        var catName = element.name;
        var topnavOpt = document.createElement("a");
        var topnav = document.querySelector("#topnav");
        topnav.appendChild(topnavOpt);
        topnavOpt.id = "topbtn";
        topnavOpt.href = "#" + catName;
        topnavOpt.innerText = catName;
    });
}

//display default category and product
function defaultCategory() {
    //default first category
    var topbtn = document.querySelectorAll("#topbtn");
    document.querySelector("#selected-category").innerText = topbtn[0].innerText;

    //default first Product
    var firstID = categories[0].id;
    let index = 1;
    products.forEach((e) => {
        if (e.categories[0] === firstID && !isDiscontinued(e.discontinued)) {
            createtableIndex(e, index);
            index++;
        }
    });
}

//create table index
function createtableIndex(e, index) {
    createNode("#category-products", "tr", "tbody_tr" + index);
    for (var i = 0; i < 3; i++) {
        //Create a <tr> element
        createNode("#tbody_tr" + index, "th", "tbody_th" + index + (i + 1));
        //Add a click handler to your <tr> that will console.log() the product whenever the user clicks it
        var trN = document.querySelector("#tbody_tr" + +index);
        trN.addEventListener("click", function() {
            console.log(trN.innerText);
        });
        //Create <td> elements for the product’s title, description, and price
        switch (i + 1) {
            case 1:
                document.querySelector("#tbody_th" + index + 1).innerText = e.title;
                break;
            case 2:
                document.querySelector("#tbody_th" + index + 2).innerText = e.description;
                break;
            case 3:
                document.querySelector("#tbody_th" + index + 3).innerText = dollarCent(e.price);
                break;
        }
    }
}

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