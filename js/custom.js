//Target Graph :: START
var data1_target = [[0, 0], [1, 80], [2, 180], [3, 190], [4, 530], [5, 1010], [6, 990], [7, 1400], [8, 1600], [9, 1800], [10, 2400],
    [11, 2350], [12, 2450], [13, 2480], [14, 2600], [15, 2900], [16, 3100], [17, 3300], [18, 3400], [19, 4005], [20, 4002],
    [21, 4001], [22, 4200], [23, 4400], [24, 4600], [25, 4800], [26, 4900], [27, 5350], [28, 5400], [29, 5450], [30, 5500]];
var data2_target = [[0, 0], [1, 180], [2, 498], [3, 540], [4, 800], [5, 900], [6, 1120], [7, 1400], [8, 1490], [9, 1800], [10, 2000],
    [11, 2200], [12, 2455], [13, 2500], [14, 2850], [15, 2900], [16, 3200], [17, 3405], [18, 3500], [19, 3700], [20, 3995],
    [21, 4000], [22, 4450], [23, 4500], [24, 4800], [25, 4900], [26, 5000], [27, 5400], [28, 5500], [29, 5750], [30, 5882]];

var dataset_target = [
    {label: "Achieved Target", data: data1_target},
    {label: "Target", data: data2_target}
];

var options_target = {
    series: {
        lines: {
            show: !0,
            lineWidth: 1,
            fill: !0,
            fillColor: {
                colors: [{
                        opacity: 0.01
                    }, {
                        opacity: 0.09
                    }]
            }
        },
        points: {
            show: !0,
            radius: 3,
            lineWidth: 1
        },
        shadowSize: 1
    },
    grid: {
        hoverable: !0,
        clickable: !0,
        tickColor: "#d9dffa",
        borderColor: "#d9dffa",
        borderStyle: "dotted",
        borderWidth: 0,
        labelMargin: 10,
        backgroundColor: "#ffffff"// => margin in pixels
    },
    legend: {
        noColumns: 1,
        labelBoxBorderColor: "#cccccc",
        position: "ne"
    },
    colors: ["#d12610", "#37b7f3"],
    xaxis: {
        ticks: 31,
        tickDecimals: 0,
        tickColor: "#fff",
    },
    yaxis: {
        ticks: 13,
        tickDecimals: 0,
        tickColor: "#d9dffa",
    }
};
//Target Graph :: END

$(document).ready(function () {
    //Target Graph :: START
    // $.plot($("#flot_placeholder_target"), dataset_target, options_target);
    //Target Graph :: END


    if ($(window).width() > 768) {
        $("ul.tabs li:first").addClass("active");
        var e = $("ul.tabs li:first").attr("rel");
        $("#" + e).addClass("active_content"),
                $("ul.tabs li").click(function () {
            $(".tab_content").removeClass("active_content");
            var e = $(this).attr("rel");
            $("#" + e).addClass("active_content");
            $("ul.tabs li").removeClass("active");
            $(this).addClass("active");
            $(".tab_drawer_heading").removeClass("d_active");
            $(".tab_drawer_heading[rel^='" + e + "']").addClass("d_active");
        });
    } else
        $(".tab_drawer_heading").on("click", function () {
            if ($(this).hasClass("d_active")) {
                $(this).next().slideUp("slow");
                $(this).removeClass("d_active");
                $(this).next().removeClass("active_content");
            } else {
                $(this).toggleClass("d_active");
                $(this).siblings(".tab_drawer_heading").removeClass("d_active");
                var e = $(this).attr("rel");
                $("#" + e).slideDown("slow");
                $("#" + e).siblings(".tab_content").slideUp("slow");
            }
        });

    var h_top = $('.m-header__top').outerHeight();
    var h_bottom = $('.m-header__bottom').outerHeight();
    var h_total = h_top + h_bottom;

    $('.main_content').css('padding-top', h_total);
    $(window).resize(function () {
        var h_top = $('.m-header__top').outerHeight();
        var h_bottom = $('.m-header__bottom').outerHeight();
        var h_total = h_top + h_bottom;
        $('.main_content').css('padding-top', $('#m_header').outerHeight());
    });
    
    
    /* code for warning message displat start */
    show_warning_message()
    function show_warning_message(msg){
        $('.warning_msg_content').hide();
        
        setTimeout(function(){
            $('.warning_msg_content').show();
            setTimeout(function(){
                $('.warning_msg_content').hide();
            }, 5000);
        }, 5000);
    }
    
    /* code for warning message displat end */
    
});


$('#m_datetimepicker_4_1').datepicker({
    orientation: "bottom left",
    todayHighlight: true
});
$('#m_datetimepicker_4_2').datepicker({
    orientation: "bottom left",
    todayHighlight: true
});


$("#m_chart_revenue_change").length && Morris.Donut({
    element: "m_chart_revenue_change",
    percentFormatString: "#0.##",
    data: [{
            label: "Error",
            value: 10
        }, {
            label: "Completed",
            value: 7
        }, {
            label: "Cancelled",
            value: 20
        }, {
            label: "Inprocess",
            value: 37
        }, {
            label: "New",
            value: 20
        }],
    colors: ["#716aca", "#34bfa3", "#00c5dc", "#ffb822", "#f4516c"]
});

     