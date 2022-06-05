function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    index++;
    let standardCounter = 0;
    let studentCounter = 0;
    let kidCounter = 0;
    let totalTicket = 0;

    while (command !== "Finish") {
        let name = command;
        let freeSpace = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let ticketCounter = 0;

        while (ticketType !== "End") {
            ticketCounter++;

            switch (ticketType) {
                case "standard": standardCounter++; break;
                case "student": studentCounter++; break;
                case "kid": kidCounter++; break;
            }
            if (ticketCounter >= freeSpace) {
                break;
            }
            ticketType = input[index];
            index++;
        }
        totalTicket += ticketCounter;
        let capacity = ticketCounter / freeSpace * 100;
        console.log(`${name} - ${capacity.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }

    let studentTickets = studentCounter / totalTicket * 100;
    let standardTickets = standardCounter / totalTicket * 100;
    let kidTickets = kidCounter / totalTicket * 100;

    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${studentTickets.toFixed(2)}% student tickets.`);
    console.log(`${standardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${kidTickets.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi","10","standard","kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])