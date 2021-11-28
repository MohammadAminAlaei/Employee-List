function addCard({ firstName, lastName, email, avatar }) {
    let cardHtml = `
    <div class="col-3 m-2">
    <div class="w-100 h-100 box p-3 d-flex">
        <div class="rounded" style="width: 150px;">
            <img src="${avatar}" alt="img"
            class="rounded"
            style="width: 100%; height: 100%;"
            />
        </div>
        <div class="d-flex flex-column ps-3 justify-content-center">
            <div class="text-title"> ${firstName} </div>
            <div class="normal-title"> ${lastName} </div>
            <div class="email-dsadadsaddsa@gmail.com"> ${email} </div>
        </div>
    </div>
</div>
    `

    $('#cardWrapper').append(cardHtml);
}

