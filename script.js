



const tickets = document.querySelectorAll('.ticket')





let count = 0;

let totalPrice = 0;

let grandTotalPrice = 0;

const maxTickets = 4;

for (let index = 0; index < tickets.length; index++) {
    const ticket = tickets[index];



    const ticketClickHandler = ticket.addEventListener('click', function () {

       if (count >= maxTickets) {
            alert('You have reached the maximum number of tickets allowed.');
            return;
        }


        count = count + 1;

        setInnerText("selected-ticket", count);


        const remainingTicketCount = document.getElementById('remaining-ticket').innerText;

        const remainingTicket = parseInt(remainingTicketCount)


        if (remainingTicket === 0) {
            alert('Sold Out')
            return;
        }



        document.getElementById('remaining-ticket').innerText = remainingTicket - 1;



            ticket.style.backgroundColor = 'green';


            
        // if (count < 4) {
        //     count = count + 1;
        //     setInnerText("selected-ticket", count);

        //     const remainingTicketCount = document.getElementById('remaining-ticket').innerText;

        //     const remainingTicket = parseInt(remainingTicketCount)


        //     if (remainingTicket === 0) {
        //         alert('Sold Out')
        //         return;
        //     }


            



        // }






        // console.log(remainingTicketCount)


        // get the title

        const title = ticket.querySelector("p").innerText;

        const fixedClass = 'Economics';

        const fixedPrice = 550;


        const titleContainer = document.getElementById('title-container')
        const p = document.createElement('p')
        p.innerText = title;
        titleContainer.appendChild(p)


        const classContainer = document.getElementById('class-container')
        const p2 = document.createElement('p')
        p2.innerText = fixedClass;
        classContainer.appendChild(p2)



        const priceContainer = document.getElementById('price-container')
        const p3 = document.createElement('p')
        p3.innerText = fixedPrice;
        priceContainer.appendChild(p3);



        totalPrice += fixedPrice;
        document.getElementById('show-total-price').innerText = totalPrice;
        document.getElementById('grand-total-price').innerText = totalPrice;

       

    })

}





function setColor(id) { }



function setInnerText(id, value) {

    document.getElementById(id).innerText = value;
}


const btn = document.getElementById('apply-btn')

btn.addEventListener('click', function () {


    const applyElement = document.getElementById('apply-input').value;

    const couponCode = applyElement.split(" ").join('').toUpperCase();
    console.log(couponCode)

    if (totalPrice >= 1650) {


        if (couponCode === "NEW15") {

            const discountAmount = totalPrice * 0.15;

            const grandTotal = document.getElementById('grand-total-price')
            grandTotal.innerText = totalPrice - discountAmount;

            document.getElementById('apply-input').classList.add('hidden')

            btn.classList.add('hidden')
        }

        else if (couponCode === "COUPLE20") {

            const discountAmount = totalPrice * 0.20;

            const grandTotal = document.getElementById('grand-total-price')
            grandTotal.innerText = totalPrice - discountAmount;

            document.getElementById('apply-input').classList.add('hidden')

            btn.classList.add('hidden')
        }

        else {
            alert('Invalid Coupon')
        }

    } else {
        alert('Please buy at least 3 tickets for discount !')
    }


    // console.log(applyElement)
})
