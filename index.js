init()

function init() {

    let url = "https://api.covid19api.com/summary"



    $.get(url, function (data) {

        //console.log(data.Countries[8].TotalConfirmed)//
        // console.log(data.Countries[8])//

        data = `<td> ${data.Countries[8].NewConfirmed} </td>
       <td> ${data.Countries[8].NewDeaths} </td>
       <td> ${data.Countries[8].NewRecovered} </td>`
        $("#data").html(data)


    });


    $.get(url, function (dataTwo) {


        dataTwo = `<td> ${dataTwo.Countries[8].TotalConfirmed} </td>
    <td> ${dataTwo.Countries[8].TotalDeaths} </td>
    <td> ${dataTwo.Countries[8].TotalRecovered} </td>`
        $("#dataTwo").html(dataTwo)

    })


}

let refreshData = () => {
    clearData()
    init()
}

let clearData = () => {
    $("#data").empty()
    $("#dataTwo").empty()

}