



    const tickets = document.querySelectorAll('.ticket')


    let count = 0; 
    
    let totalPrice = 0;

    for (let index = 0; index < tickets.length; index++){
        const ticket = tickets[index];
       
        ticket.addEventListener('click', function () {
            
            count = count + 1;
            
            setInnerText("selected-ticket", count);


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

            
        })
    }

function setInnerText (id, value){

    document.getElementById(id).innerText = value;
}


