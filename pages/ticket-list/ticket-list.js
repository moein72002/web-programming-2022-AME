function setFinishTime(ticket) {
    startTime = ticket.departStartTime;
    finishTime = new Date(startTime.getTime() + (ticket.duarationTime * 60 * 60 * 1000));
    ticket.departFinishTime = finishTime;
}

var airports = ["همدان", "یزد", "کیش", "امام خمینی(تهران)", "مهرآباد(تهران)", "مشهد", "کرمان"];


var allTickets = [
    {
        ticketId: "t1",
        userId: "",
        originAirportName: airports[1],
        destinationAirportName: airports[2],
        departStartTime: new Date(2022, 11, 20, 20, 30),
        // returnStartTime: Date(2022, 12, 25, 12, 00),
        duarationTime: 2,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne("t1",2),
        price: 1000000,
        capacityRemains: 15,
        flightType: 'economy',
    },
    {
        ticketId: "t2",
        userId: "",
        originAirportName: airports[1],
        destinationAirportName: airports[2],
        departStartTime: new Date(2022, 12, 20, 21, 00),
        // returnStartTime: Date(2022, 12, 25, 13, 30),
        duarationTime: 2,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 1000000,
        capacityRemains: 12,
        flightType: 'economy',
    },
    {
        ticketId: "t3",
        userId: "",
        originAirportName: airports[1],
        destinationAirportName: airports[2],
        departStartTime: new Date(2022, 12, 10, 14, 00),
        // returnStartTime: Date(2022, 12, 15, 22, 00),
        duarationTime: 2,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 1000000,
        capacityRemains: 21,
        flightType: 'business',
    },
    {
        ticketId: "t4",
        userId: "",
        originAirportName: airports[1],
        destinationAirportName: airports[4],
        departStartTime: new Date(2022, 12, 10, 15, 00),
        // returnStartTime: Date(2022, 12, 15, 20, 20),
        duarationTime: 1,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 700000,
        capacityRemains: 9,
        flightType: 'economy',
    },
    {
        ticketId: "t5",
        userId: "",
        originAirportName: airports[1],
        destinationAirportName: airports[4],
        departStartTime: new Date(2022, 12, 20, 14, 45),
        // returnStartTime: Date(2022, 12, 25, 12, 30),
        duarationTime: 1,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 800000,
        capacityRemains: 6,
        flightType: 'first class',
    },
    {
        ticketId: "t6",
        userId: "",
        originAirportName: airports[2],
        destinationAirportName: airports[5],
        departStartTime: new Date(2022, 12, 15, 15, 00),
        // returnStartTime: Date(2022, 12, 20, 17, 30),
        duarationTime: 2,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 1500000,
        capacityRemains: 18,
        flightType: 'economy',
    },
    {
        ticketId: "t7",
        userId: "",
        originAirportName: airports[2],
        destinationAirportName: airports[5],
        departStartTime: new Date(2022, 12, 20, 18, 00),
        // returnStartTime: Date(2022, 12, 25, 19, 30),
        duarationTime: 2,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 1600000,
        capacityRemains: 15,
        flightType: 'business',
    },
    {
        ticketId: "t8",
        userId: "",
        originAirportName: airports[4],
        destinationAirportName: airports[5],
        departStartTime: new Date(2022, 12, 20, 10, 00),
        // returnStartTime: Date(2022, 12, 25, 12, 30),
        duarationTime: 1,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 900000,
        capacityRemains: 24,
        flightType: 'economy',
    },
    {
        ticketId: "t9",
        userId: "",
        originAirportName: airports[4],
        destinationAirportName: airports[5],
        departStartTime: new Date(2022, 12, 20, 7, 30),
        // returnStartTime: Date(2022, 12, 25, 12, 30),
        duarationTime: 1,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 900000,
        capacityRemains: 21,
        flightType: 'business',
    },
    {
        ticketId: "t10",
        userId: "",
        originAirportName: airports[4],
        destinationAirportName: airports[6],
        departStartTime: new Date(2022, 10, 20, 8, 30),
        // returnStartTime: Date(2022, 12, 25, 7, 00),
        duarationTime: 2,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 700000,
        capacityRemains: 9,
        flightType: 'economy',
    },
    {
        ticketId: "t11",
        userId: "",
        originAirportName: airports[4],
        destinationAirportName: airports[6],
        departStartTime: new Date(2022, 12, 20, 13, 00),
        // returnStartTime: Date(2022, 12, 25, 18, 00),
        duarationTime: 2,
        departFinishTime: new Date(),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 700000,
        capacityRemains: 12,
        flightType: 'first class',
    }
]

allTickets.forEach(ticket => {
    setFinishTime(ticket);
});
console.log("finish setFinishTime");

function addTicketToHtml(ticket) {
    ticketHtml = `<div class="ticket-container">
        <div class="row">
            <a id="${ticket.ticketId}" class="price">
                <h1 class="price-label">
                    ${ticket.flightType}<br> ${ticket.price} تومان
                </h1>
            </a>
            <div class="finish-time-div">
                <h3>${ticket.departFinishTime.getHours()}:${(ticket.departFinishTime.getMinutes() < 10 ? '0' : '') + ticket.departFinishTime.getMinutes()}</h3>
                <h3>${ticket.destinationAirportName}</h3>
            </div>
            <div class="image-box">
                <h3>${ticket.duarationTime} ساعت</h3>
                <img src="../../images/airplane-line-light.png" style="max-width:100%;" />
            </div>
            <div class="start-time-div">
                <h3>${ticket.departStartTime.getHours()}:${(ticket.departStartTime.getMinutes() < 10 ? '0' : '') + ticket.departStartTime.getMinutes()}</h3>
                <h3>${ticket.originAirportName}</h3>
            </div>
        </div>
    </div> `

    document.getElementById("amir").innerHTML = document.getElementById("amir").innerHTML + ticketHtml;
}

ticketSearch = JSON.parse(sessionStorage.getItem("ticketSearch"));

filteredTickets = allTickets.filter(isCapacityEnough).filter(isDateSuitable).filter(isOriginAirport).filter(isDestinationAirport);


function isCapacityEnough(ticket) {
    ice = ticket.capacityRemains > ticketSearch.psgNumber;
    return ice;
}

function isDateSuitable(ticket) {
    startDateObj = new Date(ticketSearch.startDate);
    ids = (startDateObj.getYear() == ticket.departStartTime.getYear()
        && startDateObj.getMonth() == ticket.departStartTime.getMonth()
        && startDateObj.getDay() == ticket.departStartTime.getDay());
    return ids;
}

function isOriginAirport(ticket) {
    return ticket.originAirportName == ticketSearch.originAirportName;
}

function isDestinationAirport(ticket) {
    return ticket.destinationAirportName == ticketSearch.destinationAirportName;
}


filteredTickets.forEach(ticket => {
    addTicketToHtml(ticket)
});