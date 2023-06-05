
const form = document.getElementById('addForm');
const table = document.querySelector('.protocolTable tbody');
const wrapper = document.querySelector('.wrapper tbody');

form.onsubmit = (ev) => {
    ev.preventDefault();
    const bodyData = new FormData(form);
    if (bodyData.get('number') === null || bodyData.get('date') === null || bodyData.get('text') === null ) {
        return;
    }

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

        if (json.includes('номер протокола уже существует!')) {
            console.log("the number is already existed in the table");
            alert('Не добавлено ! Протокол с данным номером уже существует')
        } else {
            console.log("submit success", json);
            alert('Готово!!! Данные успешно добавлены!');
            location.reload();
            window.location.href = '#dbContainer';
        }

    })
    .catch(error => {
        console.log('submit failure', error);
        alert('Ошибка! Данные не добавлены!');
    });
};

        // console.log("submit success", json);
        // alert('Готово!!! Данные успешно добавлены!');
        // location.reload();
        // window.location.href = '#dbContainer';
        
        // if (condition) {
        //     console.log("submit success", json);
        //     alert('Готово!!! Данные успешно добавлены!');
        //     location.reload();
        //     window.location.href = '#dbContainer';
        // } else {
        //     console.log("the number is already existed in the table");
        //     alert('Не добавлено ! Протокол с данным номером уже существует')
        // }



            // // Fetch updated data from server and update table
            // fetch("./api/getData.php")
            // .then(res => res.json())
            // .then(data => {
            //     let rows = '';
            //     data.forEach(record => {
            //         rows += 
            //                 // '<tr class="dbFacade">' 
            //                 //     '<th> № п\п  </th>' 
            //                 //     '<th> Номер протокола </th>' 
            //                 //     '<th> Дата выдачи  </th>' 
            //                 //     '<th> Ответственный (ФИО)  </th>' 
            //                 //     '<th> Соответствие («да», «нет»)  </th>' 
            //                 // '</tr>';

            //                 '<tr class="dbOutput">' +
            //                     '<td>' + record.id + '</td>' +
            //                     '<td>' + record.number + '</td>' +
            //                     '<td>' + record.date + '</td>' +
            //                     '<td>' + record.text + '</td>' +
            //                     '<td>' + record.checkbox + '</td>' +
            //                 '</tr>';
            //     });
            //     table.innerHTML = rows;
            //     // wrapper.innerHTML = rows;
                
            // })
            // .catch(error => {
            //     console.log("fetch error", error);
            // });

            // or update the table data to avoid page refresh MANUALLY  
            // location.reload();
            // 
            // window.location.href = '#dbContainer';
            
//     })
//     .catch(error => {
//         console.log('submit failure', error);
//         alert('Ошибка! Данные не добавлены!');
//     });
// };





//     //  switcher 1  (comment this highlighted snippet and uncomment switcher 2 if u change the script with getData.php) <

//     .then(json => {
//         console.log("submit success", json);
//         alert('Готово!!! Данные успешно добавлены!');
//         window.location.href = '#dbContainer';
//     })

//     // >



//     // // switcher 2 .  
//     // Part for adding without reload (getData.php) 
//     // <
    
//     // .then(json => {
//     //     console.log("submit success", json);

//     //     // fetch the latest data and update the content on the page
//     //     fetch("./api/getData.php")
//     //     .then(res => {
//     //         if (res.ok)
//     //             return res.json();
//     //         else
//     //             throw Error('api send not 200');
//     //     })

//     //     .then(data =>{
//     //         // update the content on the page
//     //         const protocolTable = document.querySelector('.protocolTable');
//     //         protocolTable.innerHTML = '',
//     //         data.forEach(item => {
//     //             const newRow = document.getElementsByClassName('newRow');
//     //             newRow.innerHTML = `
//     //             <tr>
//     //                 <td>${item.id}</td>
//     //                 <td>${item.number}</td>
//     //                 <td>${item.date}</td>
//     //                 <td>${item.text}</td>
//     //                 <td>${item.checkbox}</td>
//     //             </tr>
//     //             `;
//     //             protocolTable.appendChild(newRow);
//     //         });

//     //         alert('Готово!!! Данные успешно добавлены!');
//     //     })
//     //     .catch(error =>{
//     //         console.log('getData failure', error);
//     //         alert('Ошибка! Данные не добавлены!');
//     //     });
        
//     // })

//     // // end of part (getData.php) >

//     .catch(error => {
//         console.log('submit failure', error);
//         alert('Ошибка! Данные не добавлены!');
//     });
// };
