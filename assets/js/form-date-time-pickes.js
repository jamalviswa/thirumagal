$(function() {
	"use strict";

    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: true
    }),
    $('.timepicker').pickatime()


   
        $('#date-time').bootstrapMaterialDatePicker({
            format: 'YYYY-MM-DD HH:mm'
        });
        
    var date = new Date();
    var cYear = date.getFullYear();
    var cMonth = date.getMonth();
    var cDate = date.getDate();
    $(document).ready(function () {
    $('.datepickers').bootstrapMaterialDatePicker({
        format: 'DD-MM-YYYY',
        maxDate : new Date(cYear,cMonth,cDate),
        time: false
    });
    
    });
    //$('.datepicker').datepicker();


        $('#time').bootstrapMaterialDatePicker({
            date: false,
            format: 'HH:mm'
        });
   


});


