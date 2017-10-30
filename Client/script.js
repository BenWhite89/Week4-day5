$(function() {

    const destination = `http://localhost:3000/api/locations`;

    var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY");

    stateList.forEach((st) => {
        $('.create select').append(`<option value=${st}>${st}</option>`);
    })

    function drawLocation(loc) {
       $('<div></div>').attr('id', loc._id).appendTo($('.locations'));

        $(`#${loc._id}`).append(`<span>${loc.name}</span><br/>`);
        if (loc.delivers == true) {
            $(`#${loc._id}`).append(`<span>delivers</span><br/>`);
        } else {
            $(`#${loc._id}`).append(`<span>no delivery</span><br/>`);
        }
        $(`#${loc._id}`).append(`<span>${loc.phone}</span><br/>`);
        $(`#${loc._id}`).append(`<span>${loc.address.line1}</span> `);
        $(`#${loc._id}`).append(`<span>${loc.address.line2}</span><br/>`);
        $(`#${loc._id}`).append(`<span>${loc.address.city}, </span>`);
        $(`#${loc._id}`).append(`<span>${loc.address.state}</span><br/>`);
        $(`#${loc._id}`).append(`<span>${loc.address.zip}</span><br/><br/>`);

    }

    function clearInput() {
        $('#name').val('');
        $('#del').attr('checked', false);
        $('#phone').val('');
        $('#line1').val('');
        $('#line2').val('');
        $('#city').val('');
        $('#zip').val('');
    }

    function refresh() {
        $.get(destination, (data) => {
            data.forEach((e) => {
                drawLocation(e);
            })
        })
    }

    refresh();

    $('input').keyup(function() {

        if ($('#name').val().length != 0 && $('#phone').val().length == 10 && $('#line1').val().length != 0 && $('#city').val().length != 0 && $('#zip').val().length == 5)  {
            $('#submit').removeAttr('disabled');
        } else {
            $('#submit').attr('disabled', 'disabled');
        }
    })

    $('#submit').click((e) => {
        e.preventDefault();

        let post = JSON.stringify({
            name: $('#name').val(),
            delivers: $("#del").is(':checked'),
            phone: $('#phone').val(),
            address: {
                line1: $('#line1').val(),
                line2: $('#line2').val(),
                city: $('#city').val(),
                state: $('#state').val(),
                zip: $('#zip').val()
            }
        });

        $.ajax({
            method: 'POST',
            url: destination,
            contentType: "application/json",
            data: post,
            success: function() {
                $('.locations').empty();
                clearInput();
                refresh();
            }

        })
    })

})

