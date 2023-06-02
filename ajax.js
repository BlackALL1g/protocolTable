const form = document.getElementById('addForm');
form.onsubmit = (ev) => {
    ev.preventDefault();
    const bodyData = new FormData(form);
    if (bodyData.get('number') === null || bodyData.get('date') === null || bodyData.get('text') === null ) {
        return ;
    }
    // || bodyData.get('checkbox') === null

    fetch("./api/postData.php", {
        body: bodyData,
        method: 'post'
    })
    .then(res => {
        if (res.ok) {
            return res.text();
        } else {
            return Error('api send not 200');
        }
    })
    .then(json => {
        console.log("submitAjax success", json);
        alert('ready!!! The page has been updated!');
    })
    .catch(error => {
        console.log('submitAjax failure', error);
        alert('something went wrong, not added!');
    });
}


// don't forget to try it out in teamMaker.
// form.ondrag