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

    //  switcher 1  (comment this highlighted snippet and uncomment switcher 2 if u change the script with getData.php) <

    .then(json => {
        console.log("submitAjax success", json);
        alert('Готово!!! Данные успешно добавлены!');
    })

    // >



    // // switcher 2 .  Part for adding without reload (getData.php)  <
    
    // .then(json => {
    //     console.log("submitAjax success", json);

    //     // fetch the latest data and update the content on the page
    //     fetch("./api/getData.php")
    //     .then(res => {
    //         if (res.ok)
    //             return res.json();
    //         else
    //             throw Error('api send not 200');
    //     })

    //     .then(data =>{
    //         // update the content on the page
    //         const protocolTable = document.querySelector('.protocolTable');
    //         protocolTable.innerHTML = '',
    //         data.forEach(item => {
    //             const newRow = document.getElementsByClassName('newRow');
    //             newRow.innerHTML = `
    //             <tr>
    //                 <td>${item.id}</td>
    //                 <td>${item.number}</td>
    //                 <td>${item.date}</td>
    //                 <td>${item.text}</td>
    //                 <td>${item.checkbox}</td>
    //             </tr>
    //             `;
    //             protocolTable.appendChild(newRow);
    //         });

    //         alert('ready!!! The page has been updated!');
    //     })
    //     .catch(error =>{
    //         console.log('getData failure', error);
    //         alert('something went wrong while updating the page');
    //     });
        
    //     // alert('ready!!! The page has been updated!');
    // })

    // // end of part (getData.php) >

    .catch(error => {
        console.log('submitAjax failure', error);
        alert('Ошибка! Данные не добавлены!');
    });
};


// don't forget to try it out in teamMaker.
// form.ondrag