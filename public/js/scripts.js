const cardList = [
    {
        title: "Australia",
        image: "images/au.jpg",
        link: "Top Australian Universities",
        desciption: "Deakin University <br> Monash University <br> university of Melbourne <br> Australian National University"
    },
    {
        title: "United Kingdom",
        image: "images/uk.png",
        link: "Best UK Universities",
        desciption: "Oxford University <br> University of Cambridge <br> Manchester University <br> London University"
    },
    {
        title: "Canada",
        image: "images/canada.png",
        link: "Top Canadian Universities",
        desciption: "McGill University <br> University of Alberta <br> University Of Waterloo <br> York University"
    },
    {
        title: "Ireland",
        image: "images/ireland.jpg",
        link: "Best Universities in Ireland",
        desciption: "Maynooth University <br> Dublin City University <br> National University of Ireland <br> Trinity College Dublin"
    }
]
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.email = $('#email').val();
    formData.Phone_Number = $('#Phone_Number').val();
    formData.username = $('#username').val();
    formData.password = $('#password').val();

    console.log("Form Data Submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}



$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});