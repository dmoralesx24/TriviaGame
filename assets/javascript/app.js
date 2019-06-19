// global variables 



// $(document).ready(function () {
    $(".pageTwo").hide();
    $("#thirdPage").hide();

    $("#btn").on("click", function () {
        $(".pageTwo").show();
        $("#btn").hide();
    })

    function sumbitAnswers() {
        var total = 10;
        var correct = 0;
        var incorrect = 0;

        // user input
        var q1 = document.forms["quizForm"]["q1"].value;
        var q2 = document.forms["quizForm"]["q2"].value;
        var q3 = document.forms["quizForm"]["q3"].value;
        var q4 = document.forms["quizForm"]["q4"].value;
        var q5 = document.forms["quizForm"]["q5"].value;
        var q6 = document.forms["quizForm"]["q6"].value;
        var q7 = document.forms["quizForm"]["q7"].value;
        var q8 = document.forms["quizForm"]["q8"].value;
        var q9 = document.forms["quizForm"]["q9"].value;
        var q10 = document.forms["quizForm"]["q10"].value;

        // if user misses question 
        for (i = 1; i <= total; i++) {

            if (eval('q' + i) == null || eval('q' + i) == '') {
                alert("You missed question " + i);
                return false;
            }
        }

        // my correct answers 
        var answers = ["c", "b", "d", "a", "d", "a", "c", "b", "d", "c"];

        for (i = 1; i <= total; i++) {
            if (eval('q' + i) == answers[i - 1]) {
                correct++;
                $("#right").html("Correct: " + correct);

            } else {
                incorrect++;
                $("#wrong").html("Incorrect: " + incorrect)
            }
        }

        
        
        $(".pageTwo").hide();
        $("btn").hide();
        $("#thirdPage").show();
        
        return false;
    } 
    



// })  