$(document).ready(function () {

  // append current day to Jumbotron
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  //save button
  $(".saveBtn").on("click", function () {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
  });

  //retrieve data from local storage and append to screen

  function appendEntry() {
      var calendarEntry9 = localStorage.getItem("9");
      $("#9").children(".description").text(calendarEntry9);
      var calendarEntry10 = localStorage.getItem("10");
      $("#10").children(".description").text(calendarEntry10);
      var calendarEntry11 = localStorage.getItem("11");
      $("#11").children(".description").text(calendarEntry11);
      var calendarEntry12 = localStorage.getItem("12");
      $("#12").children(".description").text(calendarEntry12);
      var calendarEntry1 = localStorage.getItem("13");
      $("#13").children(".description").text(calendarEntry1);
      var calendarEntry2 = localStorage.getItem("14");
      $("#14").children(".description").text(calendarEntry2);
      var calendarEntry3 = localStorage.getItem("15");
      $("#15").children(".description").text(calendarEntry3);
      var calendarEntry4 = localStorage.getItem("16");
      $("#16").children(".description").text(calendarEntry4);
      var calendarEntry5 = localStorage.getItem("17");
      $("#17").children(".description").text(calendarEntry5);
  };

  //row color by time

  function rowColorByTime() {
      var currentHour = Number(moment().format("k"));
      if (currentHour < 9) {
          $("#9, #10, #11, #12, #13, #14, #15, #16, #17").addClass("future");
          console.log("it's before 9!");
      } else if (currentHour === 9) {
          $("#9").removeClass("future past").addClass("present");
          $("#10, #11, #12, #13, #14, #15, #16, #17").addClass("future");
          console.log("it's 9!");
      } else if (currentHour === 10) {
          $("#9").removeClass("present future").addClass("past");
          $("#10").removeClass("future past").addClass("present");
          $("#11, #12, #13, #14, #15, #16, #17").addClass("future");
          console.log("it's 10!");
      } else if (currentHour === 11) {
          $("#9, #10").removeClass("present future").addClass("past");
          $("#11").removeClass("future past").addClass("present");
          $("#12, #13, #14, #15, #16, #17").addClass("future");
          console.log("it's 11!");
      } else if (currentHour === 12) {
          $("#9, #10, #11").removeClass("present future").addClass("past");
          $("#12").removeClass("future past").addClass("present");
          $("#13, #14, #15, #16, #17").addClass("future");
          console.log("it's 12!");
      } else if (currentHour === 13) {
          $("#9, #10, #11, #12").removeClass("present future").addClass("past");
          $("#13").removeClass("future past").addClass("present");
          $("#14, #15, #16, #17").addClass("future");
          console.log("it's 1!");
      } else if (currentHour === 14) {
          $("#9, #10, #11, #12, #13").removeClass("present future").addClass("past");
          $("#14").removeClass("future past").addClass("present");
          $("#15, #16, #17").addClass("future");
          console.log("it's 2!");
      } else if (currentHour === 15) {
          $("#9, #10, #11, #12, #13, #14").removeClass("present future").addClass("past");
          $("#15").removeClass("future past").addClass("present");
          $("#16, #17").addClass("future");
          console.log("it's 3!");
      } else if (currentHour === 16) {
          $("#9, #10, #11, #12, #13, #14, #15").removeClass("present future").addClass("past");
          $("#16").removeClass("future past").addClass("present");
          $("#17").addClass("future");
          console.log("it's 4!");
      } else if (currentHour === 17) {
          $("#9, #10, #11, #12, #13, #14, #15, #16").removeClass("present future").addClass("past");
          $("#17").removeClass("future past").addClass("present");
          console.log("it's 5!");
      } else {
          $("#9, #10, #11, #12, #13, #14, #15, #16, #17").removeClass("present future").addClass("past");
          console.log("it's after 5!");
      };
  };

  //call function
  rowColorByTime();
  appendEntry();

});
