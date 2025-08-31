function daysleft() {
    //this function gets the days difference between today and January 15th 2026, today's day will be excluded from the count
    const currentTime = new Date();
    time_date_today = new Date();
    time_date_target = new Date('2026-01-15');
    timeDifference = time_date_target.getTime() - time_date_today.getTime();
    millisecondsPerDay = 1000 * 60 * 60 * 24;
    daysRemaining = Math.ceil(timeDifference / millisecondsPerDay);
    days_left_text_box = document.getElementById('days_left_text_box');
    daysRemaining = daysRemaining - 1;
    //console.log("time is " + daysRemaining + "date");
    days_left_text_box.textContent = 'Days left : ' + daysRemaining;
}

//repeater for days left, 1 second interval
intervalId = setInterval(daysleft, 1000);