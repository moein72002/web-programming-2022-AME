// function findEndTimne(ticketId, duarationTime) {
//     var startTime = new Date();
//     startTime = allTickets.find(ticketId = ticketId).departStartTime;
//     var endTime = new Date(startTime.getTime + (duarationTime*60*60*1000));
//     return endTime;
// }

var airports = ["همدان", "یزد", "کیش", "بین المللی امام خمینی(تهران)", "بین المللی مهرآباد(تهران)", "مشهد", "کرمان"];


var allTickets = [
    {
        ticketId: "t1",
        userId: "",
        originAirportName: airports[1],
        destinationAirportName: airports[2],
        departStartTime: Date(2022, 12, 20, 20, 30),
        returnStartTime: Date(2022, 12, 25, 12, 00),
        duarationTime: 2,
        // departFinishTime: findEndTimne("t1",2),
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
        departStartTime: Date(2022, 12, 20, 21, 00),
        returnStartTime: Date(2022, 12, 25, 13, 30),
        duarationTime: 2,
        // departFinishTime: findEndTimne(ticketId,duarationTime),
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
        departStartTime: Date(2022, 12, 10, 14, 00),
        returnStartTime: Date(2022, 12, 15, 22, 00),
        duarationTime: 2,
        // departFinishTime: findEndTimne(ticketId,duarationTime),
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
        departStartTime: Date(2022, 12, 10, 15, 00),
        returnStartTime: Date(2022, 12, 15, 20, 20),
        duarationTime: 1,
        // departFinishTime: findEndTimne(ticketId,duarationTime),
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
        departStartTime: Date(2022, 12, 20, 14, 45),
        returnStartTime: Date(2022, 12, 25, 12, 30),
        duarationTime: 1,
        // departFinishTime: findEndTimne(ticketId,duarationTime),
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
        departStartTime: Date(2022, 12, 15, 16, 00),
        returnStartTime: Date(2022, 12, 20, 17, 30),
        duarationTime: 2,
        // departFinishTime: findEndTimne(ticketId,duarationTime),
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
        departStartTime: Date(2022, 12, 20, 18, 00),
        returnStartTime: Date(2022, 12, 25, 19, 30),
        duarationTime: 2,
        // departFinishTime: findEndTimne(ticketId,duarationTime),
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
        departStartTime: Date(2022, 12, 20, 10, 00),
        returnStartTime: Date(2022, 12, 25, 12, 30),
        duarationTime: 1,
        // departFinishTime: findEndTimne(ticketId,duarationTime),
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
        departStartTime: Date(2022, 12, 20, 7, 30),
        returnStartTime: Date(2022, 12, 25, 12, 30),
        duarationTime: 1,
        // departFinishTime: findEndTimne(ticketId,duarationTime),
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
        departStartTime: Date(2022, 12, 20, 8, 30),
        returnStartTime: Date(2022, 12, 25, 7, 00),
        duarationTime: 2,
        // departFinishTime: findEndTimne(ticketId,duarationTime),
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
        departStartTime: Date(2022, 12, 20, 13, 00),
        returnStartTime: Date(2022, 12, 25, 18, 00),
        duarationTime: 2,
        // departFinishTime: findEndTimne(ticketId,duarationTime),
        // returnFinishTime: findEndTimne(ticketId,duarationTime),
        price: 700000,
        capacityRemains: 12,
        flightType: 'first class',
    }
]



const html =
    `<div class="ticket-container">
        <div class="row">
            <a class="price">
                <h1 class="price-label">
                    اکونومی<br> 500.000 تومان
                </h1>
            </a>
            <a class="price">
                <h1 class="price-label">
                    بیزینس<br> 1.000.000 تومان
                </h1>
            </a>
            <a class="price">
                <h1 class="price-label"">
                    first class<br> 3.000.000 تومان
                </h1>
            </a>
            <div class="finish-time-div">
                <h3>20:30</h3>
                <h3>مشهد</h3>
            </div>
            <div class="image-box">
                <h3>مدت زمان پرواز: 1 ساعت</h3>
                <img src="../../images/airplane-line-light.png" style=" max-width:100%;" />
            </div>
            <div class="start-time-div">
                <h3>16:30</h3>
                <h3>همدان</h3>
            </div>
        </div>
    </div>`
for (let index = 0; index < 20; index++) {
    document.getElementById("amir").innerHTML = document.getElementById("amir").innerHTML + html;
}
// document.getElementById("amir").innerHTML = html;