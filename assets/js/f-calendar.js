$(document).ready(function() {

    //------------------------------------------------------

    $('[data-toggle="tooltip"]').tooltip();
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /*  className colors
    
    className: default(transparent), important(red), chill(pink), success(green), info(blue)
    
    */


    /* initialize the external events
    -----------------------------------------------------------------*/

    $('#external-events div.external-event').each(function() {


        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 //  original position after the drag
        });

    });


    /* initialize the calendar
    -----------------------------------------------------------------*/

    var calendar = $('#calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: ' '
        },
        resources: [
            { id: 'a', title: 'Room A' },
            { id: 'b', title: 'Room B' },
            { id: 'c', title: 'Room C' }
        ],
        dayClick: function(date, jsEvent, view, resource) {
            alert('clicked ' + date.format() + ' on resource ' + resource.id);
        },
        select: function(startDate, endDate, jsEvent, view, resource) {
            alert('selected ' + startDate.format() + ' to ' + endDate.format() + ' on resource ' + resource.id);
        },
        editable: true,
        firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
        selectable: true,
        defaultView: 'month',

        axisFormat: 'h:mm',
        columnFormat: {
            month: 'ddd', // Mon
            week: 'ddd d', // Mon 7
            day: 'dddd M/d', // Monday 9/7
            agendaDay: 'dddd d'
        },
        titleFormat: {
            month: 'MMMM yyyy', // September 2009
            week: "MMMM yyyy", // September 2009
            day: 'MMMM yyyy' // Tuesday, Sep 8, 2009
        },
        allDaySlot: false,
        selectHelper: true,
        select: function(start, end, allDay) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.fullCalendar('renderEvent', {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                );
            }
            calendar.fullCalendar('unselect');
        },
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop: function(date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar

            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        },

        events: [{
                id: 9999,
                title: '',
                start: new Date(y, m, 31),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y, m, 1),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y, m, 2),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y, m, 3),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y, m, 4),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y, m, 5),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y, m, 6),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y, 2, 7),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y, 2, 8),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y,2, 9),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y, 2, 10),
                //allDay: false,
                className: 'danger'
            },
            {
                id: 9999,
                title: '',
                start: new Date(y, m, 11),
                //allDay: false,
                className: 'danger'
            },


        ],
    });


});
