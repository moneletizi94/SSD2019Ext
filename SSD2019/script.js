﻿
//DOM MANIPULATION 
$(document).ready(function () {

    var ip = "localhost";
    //UTILITY FUNCTIONS
    function getSelectedOptimizationMethod() {
        return $(".optimizationMethod").children("option:selected").text();
    }
    var cust = null;

    //SERVER INTERACTION FUNCTIONS
    function readAll() {
        $.ajax(
            {
                url: "https://"+ip+":44306/api/orders",
                type: "GET",
                contentType: "application/json",
                data: "",
                success: function (result) {
                    $("#resultsTextArea").val(JSON.stringify(result));
                },
                error: function (xhr, status, p3, p4) {
                    alert("Something went wrong");
                }
            });
    }
    function readCustomerOrders(customer) {
        $.ajax(
            {
                url: "https://" + ip +":44306/api/customers/"+customer+"/orders",
                type: "GET",
                contentType: "application/json",
                data: "",
                success: function (result) {
                    alert(JSON.stringify(result));
                    $("#resultsTextArea").val(JSON.stringify(result));
                },
                error: function (xhr, status, p3, p4) {
                    alert("Something went wrong");
                }
            });
    }
    function deleteAllCustomerOrders(customer) {
        $.ajax(
            {
                url: "https://" + ip +":44306/api/customers/" + customer + "/orders",
                type: "DELETE",
                contentType: "application/json",
                data: "",
                success: function (result) {
                    
                },
                error: function (xhr, status, p3, p4) {
                    alert("Something went wrong");
                }
            });
    }
    function resetCustomerOrdersQuant(customer) {
        $.ajax(
            {
                url: "https://" + ip +":44306/api/customers/" + customer + "/orders",
                type: "PUT",
                contentType: "application/json",
                data: "",
                success: function (result) {

                },
                error: function (xhr, status, p3, p4) {
                    alert("Something went wrong");
                }
            });
    }
    function getAllOrdersChart() {
        $.ajax(
            {
                url: "https://" + ip +":44306/api/ordersChart",
                type: "GET",
                contentType: "application/json",
                data: "",
                success: function (result) {
                    //get the bitmap
                },
                error: function (xhr, status, p3, p4) {
                    alert("Something went wrong");
                }
            });
    }
    function forecastsSpecifiedCustomer(customer) {
        $.ajax(
            {
                url: "https://" + ip +":44306/api/customers/"+customer+"/forecasts",
                type: "GET",
                contentType: "application/json",
                data: "",
                success: function (result) {
                    //get the bitmap
                },
                error: function (xhr, status, p3, p4) {
                    alert("Something went wrong");
                }
            });
    }
    function forecastsAll() {
        $.ajax(
            {
                url: "https://" + ip +":44306/api/forecasts",
                type: "GET",
                contentType: "application/json",
                data: "",
                success: function (result) {
                    $("#resultsTextArea").val(JSON.stringify(result));
                },
                error: function (xhr, status, p3, p4) {
                    alert("Something went wrong");
                }
            });
    }

    $('#getAll').click(function () {
        readAll();
    })
    $('#getAllForCustomer').click(function () {
        readCustomerOrders(cust);
    })
    $('#deleteOrdersForCustomer').click(function () {
        deleteAllCustomerOrders(cust);
    })
    $('#resetCustomerQuant').click(function () {
        resetCustomerOrdersQuant(cust);
    })
    $('#chartCustomers').click(function () {
        getAllOrdersChart(cust);
    })
    $('#forecast').click(function () {
        if ($('input').val().length > 0) {
            forecastsSpecifiedCustomer(cust);
        } else {
            forecastsAll();
        }
    })
    $('#optimize').click(function () {
        var selectedMethod = getSelectedOptimizationMethod();
        alert("You have selected - " + selectedMethod);
    })


    $('.customerButton').prop("disabled", true);
    $('input').keyup(function () {
        if ($(this).val().length > 0) {
            cust = $(this).val();
            $('.customerButton').removeClass('buttonNoHover');
            $('.customerButton').addClass('buttonHover');
            $('.customerButton').prop("disabled", false);
            $('#addOrderForCustomer').prop("disabled", true);
            $('#addOrderForCustomer').removeClass('buttonHover');
            $('#addOrderForCustomer').addClass('buttonNoHover');

        } else {
            cust = null;
            $('.customerButton').removeClass('buttonHover');
            $('.customerButton').addClass('buttonNoHover');
            $('.customerButton').prop("disabled", true);
        }
    });

});
