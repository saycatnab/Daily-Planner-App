$(document).ready(function(){

    $(".saveBtn").on("click", function(){
        console.log('It saved');


        let timeID = $(this).parent().attr("id")
        let value = $(this).siblings(".description").val();
    
        console.log(timeID);
        console.log(value);

        localStorage.setItem(timeID, value);

        $(".notification").addClass('show')
    })
})