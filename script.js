$(document).ready(function(){

    $(".saveBtn").on("click", function(){

        console.log('It saved');


        let timeID = $(this).parent().attr("id")
        let value = $(this).siblings(".description").val();
    
        console.log(timeID);
        console.log(value);
 
        localStorage.setItem(timeID, value);

        // Makes the notification show only when save button is clicked and disappears after 5 seconds

        $(".notification").addClass('show');


        setTimeout(function(){
            $(".notification").removeClass("show");
        }, 5000)
    })

    function hourUpdate(){
        let currentHour = moment().hours();

        for (let i = 0; i < $(".time-block").length; i++ ){
            let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
            console.log(hour)
            console.log(currentHour)
            if(hour < currentHour) {
                $(".time-block")[i].classList.add("past")
            }
        }
    }

    hourUpdate()

})



