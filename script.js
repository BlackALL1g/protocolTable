const form = document.getElementById('addForm');


function updateTable() {
  fetch('./api/getData.php')
    .then(response => response.json())
    .then(data => {
      // Get the <tbody> element that contains the table rows
      const tableBody = document.querySelector('tbody');

      tableBody.innerHTML = '';
      // Loop through the data and create a new row for each item
      data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item[0]}</td>
          <td>${item[1]}</td>
          <td>${item[2]}</td>
          <td>${item[3]}</td>
          <td>${item[4]}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
}

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
            // location.reload();
            updateTable();
            window.location.href = '#dbContainer';
        }

    })
    .catch(error => {
        console.log('submit failure', error);
        alert('Ошибка! Данные не добавлены!');
    });

    
};


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
