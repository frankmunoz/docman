!function () {
    "use strict";
    angular.module("app", ["ngRoute", "ngAnimate", "ngAria", "ui.bootstrap", "ui.tree", "ngMap", "ngTagsInput", "textAngular", "angular-loading-bar", "ui.calendar", "duScroll", "mgo-angular-wizard", "app.nav", "app.i18n", "app.chart", "app.ui", "app.ui.form", "app.ui.form.validation", "app.page", "app.table", "app.task", "app.calendar", "app.filing"])
}(),
        function () {
            "use strict";
            angular.module("app.calendar", ["ui.calendar", "ui.bootstrap"])
        }(),
        function () {
            "use strict";
            angular.module("app.task", [])
        }(),
        function () {
            "use strict";
            angular.module("app.chart", ["ngecharts"])
        }(),
        function () {
            "use strict";
            angular.module("app.ui.form", [])
        }(),
        function () {
            "use strict";
            angular.module("app.ui.form.validation", ["validation.match"])
        }(),
        function () {
            "use strict";
            angular.module("app.nav", [])
        }(),
        function () {
            "use strict";
            angular.module("app.page", [])
        }(),
        function () {
            "use strict";
            angular.module("app.filing", [])
        }(),
        function () {
            "use strict";
            angular.module("app.table", [])
        }(),
        function () {
            "use strict";
            angular.module("app.ui", [])
        }(),
//        function () {
//            "use strict";
//            angular.run(function ($rootScope, $location, authService) {
//                console.log(authService);
//                $rootScope.$on("$routeChangeStart", function (event, next, current) {
//                    $rootScope.authenticated = false;
//                    authService.get('session').then(function (results) {
//                        if (results.uid) {
//                            $rootScope.authenticated = true;
//                            $rootScope.uid = results.uid;
//                            $rootScope.name = results.name;
//                            $rootScope.email = results.email;
//                        } else {
//                            var nextUrl = next.$$route.originalPath;
//                            if (nextUrl == '/signup' || nextUrl == '/login') {
//
//                            } else {
//                                $location.path("/login");
//                            }
//                        }
//                    });
//                });
//            });
//        },
        function () {
            "use strict";

            function a(a) {
                var b = new Date,
                        c = b.getDate(),
                        d = b.getMonth(),
                        e = b.getFullYear();
                a.events = [{
                        title: "All Day Event",
                        start: new Date(e, d, 1)
                    }, {
                        title: "Long Event",
                        start: new Date(e, d, c - 5),
                        end: new Date(e, d, c - 2)
                    }, {
                        title: "Go Hiking",
                        start: new Date(e, d, c - 1),
                        className: ["fc-event-warning"]
                    }, {
                        id: 999,
                        title: "Repeating Event",
                        start: new Date(e, d, c - 3, 16, 0),
                        allDay: !1,
                        className: ["fc-event-success"]
                    }, {
                        id: 999,
                        title: "Repeating Event",
                        start: new Date(e, d, c + 4, 16, 0),
                        allDay: !1,
                        className: ["fc-event-success"]
                    }, {
                        title: "Birthday Party",
                        start: new Date(e, d, c + 1, 11, 0),
                        end: new Date(e, d, c + 1, 12, 30),
                        allDay: !1,
                        className: ["fc-event-danger"]
                    }, {
                        title: "Shopping",
                        start: new Date(e, d, c + 2, 9, 0),
                        end: new Date(e, d, c + 2, 12, 0),
                        allDay: !1,
                        className: ["fc-event-success"]
                    }, {
                        title: "Click for Google",
                        start: new Date(e, d, 28),
                        end: new Date(e, d, 29),
                        url: "http://google.com/"
                    }, {
                        title: "Shopping",
                        start: new Date(e, d + 1, 8)
                    }], a.eventsF = function (a, b, c, d) {
                    var e = new Date(a).getTime() / 1e3,
                            f = (new Date(b).getTime() / 1e3, new Date(a).getMonth()),
                            g = [{
                                    title: "Feed Me " + f,
                                    start: e + 5e4,
                                    end: e + 1e5,
                                    allDay: !1,
                                    className: ["customFeed"]
                                }];
                    d(g)
                }, a.calEventsExt = {
                    color: "#f00",
                    textColor: "yellow",
                    events: [{
                            type: "party",
                            title: "Lunch",
                            start: new Date(e, d, c, 12, 0),
                            end: new Date(e, d, c, 14, 0),
                            allDay: !1
                        }, {
                            type: "party",
                            title: "Lunch 2",
                            start: new Date(e, d, c, 12, 0),
                            end: new Date(e, d, c, 14, 0),
                            allDay: !1
                        }, {
                            type: "party",
                            title: "Click for Google",
                            start: new Date(e, d, 28),
                            end: new Date(e, d, 29),
                            url: "http://google.com/"
                        }]
                }, a.alertOnEventClick = function (b, c, d, e) {
                    a.alertMessage = b.title + " was clicked "
                }, a.alertOnDrop = function (b, c, d, e, f) {
                    a.alertMessage = "Event Droped on " + b.start.format()
                }, a.alertOnResize = function (b, c, d, e) {
                    a.alertMessage = "Event end date was moved to " + b.end.format()
                }, a.addRemoveEventSource = function (a, b) {
                    var c = 0;
                    angular.forEach(a, function (d, e) {
                        a[e] === b && (a.splice(e, 1), c = 1)
                    }), 0 === c && a.push(b)
                }, a.addEvent = function () {
                    a.events.push({
                        title: "New Event",
                        start: new Date(e, d, c),
                        end: new Date(e, d, c + 1)
                    })
                }, a.remove = function (b) {
                    a.events.splice(b, 1)
                }, a.changeView = function (b) {
                    a.myCalendar1.fullCalendar("changeView", b)
                }, a.renderCalender = function (a) {
                    a && a.fullCalendar("render")
                }, a.uiConfig = {
                    calendar: {
                        height: 450,
                        editable: !0,
                        header: {
                            left: "title",
                            center: "",
                            right: "today prev,next"
                        },
                        eventClick: a.alertOnEventClick,
                        eventDrop: a.alertOnDrop,
                        eventResize: a.alertOnResize
                    }
                }, a.eventSources = [a.events, a.eventsF]
            }
            angular.module("app.calendar").controller("calendarCtrl", ["$scope", a])
        }(),
        function () {
            "use strict";

            function a(a, b, c, d, e) {
                var f;
                f = a.tasks = b.get(), a.newTask = "", a.remainingCount = c(f, {
                    completed: !1
                }).length, a.editedTask = null, a.statusFilter = {
                    completed: !1
                }, a.filter = function (b) {
                    switch (b) {
                        case "all":
                            return a.statusFilter = "";
                        case "active":
                            return a.statusFilter = {
                                completed: !1
                            };
                        case "completed":
                            return a.statusFilter = {
                                completed: !0
                            }
                    }
                }, a.add = function () {
                    var c;
                    c = a.newTask.trim(), 0 !== c.length && (f.push({
                        title: c,
                        completed: !1
                    }), e.logSuccess('New task: "' + c + '" added'), b.put(f), a.newTask = "", a.remainingCount++)
                }, a.edit = function (b) {
                    a.editedTask = b
                }, a.doneEditing = function (c) {
                    a.editedTask = null, c.title = c.title.trim(), c.title ? e.log("Task updated") : a.remove(c), b.put(f)
                }, a.remove = function (c) {
                    var d;
                    a.remainingCount -= c.completed ? 0 : 1, d = a.tasks.indexOf(c), a.tasks.splice(d, 1), b.put(f), e.logError("Task removed")
                }, a.completed = function (c) {
                    a.remainingCount += c.completed ? -1 : 1, b.put(f), c.completed && (a.remainingCount > 0 ? 1 === a.remainingCount ? e.log("Almost there! Only " + a.remainingCount + " task left") : e.log("Good job! Only " + a.remainingCount + " tasks left") : e.logSuccess("Congrats! All done :)"))
                }, a.clearCompleted = function () {
                    a.tasks = f = f.filter(function (a) {
                        return !a.completed
                    }), b.put(f)
                }, a.markAll = function (c) {
                    f.forEach(function (a) {
                        a.completed = c
                    }), a.remainingCount = c ? 0 : f.length, b.put(f), c && e.logSuccess("Congrats! All done :)")
                }, a.$watch("remainingCount == 0", function (b) {
                    a.allChecked = b
                }), a.$watch("remainingCount", function (a, b) {
                    d.$broadcast("taskRemaining:changed", a)
                })
            }
            angular.module("app.task").controller("taskCtrl", ["$scope", "taskStorage", "filterFilter", "$rootScope", "logger", a])
        }(),
        function () {
            "use strict";

            function a(a) {
                function b(b, c, d) {
                    b.$watch(d.taskFocus, function (b) {
                        b && a(function () {
                            return c[0].focus()
                        }, 0, !1)
                    })
                }
                var c = {
                    link: b
                };
                return c
            }
            angular.module("app.task").directive("taskFocus", ["$timeout", a])
        }(),
        function () {
            "use strict";

            function a() {
                var a, b;
                return a = "tasks", b = '[ {"title": "Upgrade to Yosemite", "completed": true},{"title": "Finish homework", "completed": false},{"title": "Try Google glass", "completed": false},{"title": "Build a snowman :)", "completed": false},{"title": "Play games with friends", "completed": true},{"title": "Learn Swift", "completed": false},{"title": "Shopping", "completed": true} ]', {
                    get: function () {
                        return JSON.parse(localStorage.getItem(a) || b)
                    },
                    put: function (b) {
                        return localStorage.setItem(a, JSON.stringify(b))
                    }
                }
            }
            angular.module("app.task").factory("taskStorage", a)
        }(),
        function () {
            "use strict";

            function authService($http, log) {
                var serviceBase = 'http://localhost/auth/api/v1/';

                var obj = {};
                obj.toast = function (data) {
                    log.log(data.message);
                };
//                            log.logSuccess("Well done! You successfully read this important alert message.");
//                            log.logWarning("Warning! Best check yo self, you're not looking too good.");
//                            log.logError("Oh snap! Change a few things up and try submitting again.")
                obj.get = function (q) {
                    return $http.get(serviceBase + q).then(function (results) {
                        console.log("rr--->", results);

                        return results.data;
                    });
                };
                obj.post = function (q, object) {
                    return $http.post(serviceBase + q, object).then(function (results) {
                        return results.data;
                    });
                };
                obj.put = function (q, object) {
                    return $http.put(serviceBase + q, object).then(function (results) {
                        return results.data;
                    });
                };
                obj.delete = function (q) {
                    return $http.delete(serviceBase + q).then(function (results) {
                        return results.data;
                    });
                };

                return obj;
            }
            angular.module("app.page").factory("authService", ['$http', 'logger', authService])
        }(),
        function () {
            "use strict";

            function a(a, b) {
                function c() {
                    var a = Math.round(100 * Math.random());
                    return a * (a % 2 == 0 ? 1 : -1)
                }

                function d() {
                    for (var a = [], b = 100; b--; )
                        a.push([c(), c(), Math.abs(c())]);
                    return a
                }
                a.line1 = {}, a.line2 = {}, a.line3 = {}, a.line4 = {}, a.bar1 = {}, a.bar2 = {}, a.bar3 = {}, a.bar4 = {}, a.bar5 = {}, a.pie1 = {}, a.pie2 = {}, a.pie4 = {}, a.scatter1 = {}, a.scatter2 = {}, a.radar1 = {}, a.radar2 = {}, a.gauge1 = {}, a.chord1 = {}, a.funnel1 = {}, a.line1.options = {
                    tooltip: {
                        trigger: "axis"
                    },
                    legend: {
                        data: ["Highest temperature", "Lowest temperature"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    xAxis: [{
                            type: "category",
                            boundaryGap: !1,
                            data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
                        }],
                    yAxis: [{
                            type: "value",
                            axisLabel: {
                                formatter: "{value} °C"
                            }
                        }],
                    series: [{
                            name: "Highest temperature",
                            type: "line",
                            data: [11, 11, 15, 13, 12, 13, 10],
                            markPoint: {
                                data: [{
                                        type: "max",
                                        name: "Max"
                                    }, {
                                        type: "min",
                                        name: "Min"
                                    }]
                            },
                            markLine: {
                                data: [{
                                        type: "average",
                                        name: "Average"
                                    }]
                            }
                        }, {
                            name: "Lowest temperature",
                            type: "line",
                            data: [1, -2, 2, 5, 3, 2, 0],
                            markPoint: {
                                data: [{
                                        name: "Lowest temperature",
                                        value: -2,
                                        xAxis: 1,
                                        yAxis: -1.5
                                    }]
                            },
                            markLine: {
                                data: [{
                                        type: "average",
                                        name: "Average"
                                    }]
                            }
                        }]
                }, a.line2.options = {
                    tooltip: {
                        trigger: "axis"
                    },
                    legend: {
                        data: ["Email", "Affiliate", "Video Ads", "Direct", "Search"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    xAxis: [{
                            type: "category",
                            boundaryGap: !1,
                            data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
                        }],
                    yAxis: [{
                            type: "value"
                        }],
                    series: [{
                            name: "Email",
                            type: "line",
                            stack: "Sum",
                            data: [120, 132, 101, 134, 90, 230, 210]
                        }, {
                            name: "Affiliate",
                            type: "line",
                            stack: "Sum",
                            data: [220, 182, 191, 234, 290, 330, 310]
                        }, {
                            name: "Video Ads",
                            type: "line",
                            stack: "Sum",
                            data: [150, 232, 201, 154, 190, 330, 410]
                        }, {
                            name: "Direct",
                            type: "line",
                            stack: "Sum",
                            data: [320, 332, 301, 334, 390, 330, 320]
                        }, {
                            name: "Search",
                            type: "line",
                            stack: "Sum",
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }]
                }, a.line3.options = {
                    title: {
                        text: "Sales"
                    },
                    tooltip: {
                        trigger: "axis"
                    },
                    legend: {
                        data: ["Intention", "Pre-order", "Deal closed"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    xAxis: [{
                            type: "category",
                            boundaryGap: !1,
                            data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
                        }],
                    yAxis: [{
                            type: "value"
                        }],
                    series: [{
                            name: "Deal closed",
                            type: "line",
                            smooth: !0,
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [10, 12, 21, 54, 260, 830, 710]
                        }, {
                            name: "Pre-order",
                            type: "line",
                            smooth: !0,
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [30, 182, 434, 791, 390, 30, 10]
                        }, {
                            name: "Intention",
                            type: "line",
                            smooth: !0,
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [1320, 1132, 601, 234, 120, 90, 20]
                        }]
                }, a.line4.options = {
                    tooltip: {
                        trigger: "axis"
                    },
                    legend: {
                        data: ["Email", "Affiliate", "Video Ads", "Direct", "Search"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    xAxis: [{
                            type: "category",
                            boundaryGap: !1,
                            data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
                        }],
                    yAxis: [{
                            type: "value"
                        }],
                    series: [{
                            name: "Email",
                            type: "line",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        }, {
                            name: "Affiliate",
                            type: "line",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        }, {
                            name: "Video Ads",
                            type: "line",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [150, 232, 201, 154, 190, 330, 410]
                        }, {
                            name: "Direct",
                            type: "line",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [320, 332, 301, 334, 390, 330, 320]
                        }, {
                            name: "Search",
                            type: "line",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }]
                }, a.bar1.options = {
                    tooltip: {
                        trigger: "axis"
                    },
                    legend: {
                        data: ["Evaporation", "Precipitation"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    xAxis: [{
                            type: "category",
                            data: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
                        }],
                    yAxis: [{
                            type: "value"
                        }],
                    series: [{
                            name: "Evaporation",
                            type: "bar",
                            data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3],
                            markPoint: {
                                data: [{
                                        type: "max",
                                        name: "Max"
                                    }, {
                                        type: "min",
                                        name: "Min"
                                    }]
                            },
                            markLine: {
                                data: [{
                                        type: "average",
                                        name: "Average"
                                    }]
                            }
                        }, {
                            name: "Precipitation",
                            type: "bar",
                            data: [2.6, 5.9, 9, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6, 2.3],
                            markPoint: {
                                data: [{
                                        name: "Highest",
                                        value: 182.2,
                                        xAxis: 7,
                                        yAxis: 183,
                                        symbolSize: 18
                                    }, {
                                        name: "Lowest",
                                        value: 2.3,
                                        xAxis: 11,
                                        yAxis: 3
                                    }]
                            },
                            markLine: {
                                data: [{
                                        type: "average",
                                        name: "Average"
                                    }]
                            }
                        }]
                }, a.bar2.options = {
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow"
                        }
                    },
                    legend: {
                        data: ["Direct", "Email", "Affiliate", "Video Ads", "Search", "Baidu", "Google", "Bing", "Others"]
                    },
                    calculable: !0,
                    xAxis: [{
                            type: "category",
                            data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
                        }],
                    yAxis: [{
                            type: "value"
                        }],
                    series: [{
                            name: "Direct",
                            type: "bar",
                            data: [320, 332, 301, 334, 390, 330, 320]
                        }, {
                            name: "Email",
                            type: "bar",
                            stack: "Ads",
                            data: [120, 132, 101, 134, 90, 230, 210]
                        }, {
                            name: "Affiliate",
                            type: "bar",
                            stack: "Ads",
                            data: [220, 182, 191, 234, 290, 330, 310]
                        }, {
                            name: "Video Ads",
                            type: "bar",
                            stack: "Ads",
                            data: [150, 232, 201, 154, 190, 330, 410]
                        }, {
                            name: "Search",
                            type: "bar",
                            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                            markLine: {
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: "dashed"
                                        }
                                    }
                                },
                                data: [
                                    [{
                                            type: "min"
                                        }, {
                                            type: "max"
                                        }]
                                ]
                            }
                        }, {
                            name: "Baidu",
                            type: "bar",
                            barWidth: 5,
                            stack: "Search",
                            data: [620, 732, 701, 734, 1090, 1130, 1120]
                        }, {
                            name: "Google",
                            type: "bar",
                            stack: "Search",
                            data: [120, 132, 101, 134, 290, 230, 220]
                        }, {
                            name: "Bing",
                            type: "bar",
                            stack: "Search",
                            data: [60, 72, 71, 74, 190, 130, 110]
                        }, {
                            name: "Others",
                            type: "bar",
                            stack: "Search",
                            data: [62, 82, 91, 84, 109, 110, 120]
                        }]
                }, a.bar3.options = {
                    title: {
                        text: "World Population",
                        subtext: "From the Internet"
                    },
                    tooltip: {
                        trigger: "axis"
                    },
                    legend: {
                        data: ["2011", "2012"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    xAxis: [{
                            type: "value",
                            boundaryGap: [0, .01]
                        }],
                    yAxis: [{
                            type: "category",
                            data: ["Brazil", "Indonesia", "USA", "India", "China", "World Population (10k)"]
                        }],
                    series: [{
                            name: "2011",
                            type: "bar",
                            data: [18203, 23489, 29034, 104970, 131744, 630230]
                        }, {
                            name: "2012",
                            type: "bar",
                            data: [19325, 23438, 31e3, 121594, 134141, 681807]
                        }]
                }, a.bar4.options = {
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow"
                        }
                    },
                    legend: {
                        data: ["Direct", "Email", "Affiliate", "Video Ads", "Search"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    xAxis: [{
                            type: "value"
                        }],
                    yAxis: [{
                            type: "category",
                            data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
                        }],
                    series: [{
                            name: "Direct",
                            type: "bar",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !0,
                                        position: "insideRight"
                                    }
                                }
                            },
                            data: [320, 302, 301, 334, 390, 330, 320]
                        }, {
                            name: "Email",
                            type: "bar",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !0,
                                        position: "insideRight"
                                    }
                                }
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        }, {
                            name: "Affiliate",
                            type: "bar",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !0,
                                        position: "insideRight"
                                    }
                                }
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        }, {
                            name: "Video Ads",
                            type: "bar",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !0,
                                        position: "insideRight"
                                    }
                                }
                            },
                            data: [150, 212, 201, 154, 190, 330, 410]
                        }, {
                            name: "Search",
                            type: "bar",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !0,
                                        position: "insideRight"
                                    }
                                }
                            },
                            data: [820, 832, 901, 934, 1290, 1330, 1320]
                        }]
                }, a.bar5.options = {
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow"
                        }
                    },
                    legend: {
                        data: ["Profit", "Cost", "Income"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    xAxis: [{
                            type: "value"
                        }],
                    yAxis: [{
                            type: "category",
                            axisTick: {
                                show: !1
                            },
                            data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
                        }],
                    series: [{
                            name: "Profit",
                            type: "bar",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !0,
                                        position: "inside"
                                    }
                                }
                            },
                            data: [200, 170, 240, 244, 200, 220, 210]
                        }, {
                            name: "Income",
                            type: "bar",
                            stack: "Sum",
                            barWidth: 5,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !0
                                    }
                                }
                            },
                            data: [320, 302, 341, 374, 390, 450, 420]
                        }, {
                            name: "Cost",
                            type: "bar",
                            stack: "Sum",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !0,
                                        position: "left"
                                    }
                                }
                            },
                            data: [-120, -132, -101, -134, -190, -230, -210]
                        }]
                }, a.pie1.options = {
                    title: {
                        text: "Traffic Source",
                        x: "center"
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: "vertical",
                        x: "left",
                        data: ["Direct", "Email", "Affiliate", "Video Ads", "Search"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    series: [{
                            name: "Vist source",
                            type: "pie",
                            radius: "55%",
                            center: ["50%", "60%"],
                            data: [{
                                    value: 335,
                                    name: "Direct"
                                }, {
                                    value: 310,
                                    name: "Email"
                                }, {
                                    value: 234,
                                    name: "Affiliate"
                                }, {
                                    value: 135,
                                    name: "Video Ads"
                                }, {
                                    value: 1548,
                                    name: "Search"
                                }]
                        }]
                }, a.pie2.options = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: "vertical",
                        x: "left",
                        data: ["Direct", "Email", "Affiliate", "Video Ads", "Search"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    series: [{
                            name: "Traffic source",
                            type: "pie",
                            radius: ["50%", "70%"],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !1
                                    },
                                    labelLine: {
                                        show: !1
                                    }
                                },
                                emphasis: {
                                    label: {
                                        show: !0,
                                        position: "center",
                                        textStyle: {
                                            fontSize: "30",
                                            fontWeight: "bold"
                                        }
                                    }
                                }
                            },
                            data: [{
                                    value: 335,
                                    name: "Direct"
                                }, {
                                    value: 310,
                                    name: "Email"
                                }, {
                                    value: 234,
                                    name: "Affiliate"
                                }, {
                                    value: 135,
                                    name: "Video Ads"
                                }, {
                                    value: 1548,
                                    name: "Search"
                                }]
                        }]
                }, a.pie4.options = {
                    title: {
                        text: "Nightingale rose diagram",
                        x: "center"
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        x: "center",
                        y: "bottom",
                        data: ["rose1", "rose2", "rose3", "rose4", "rose5", "rose6", "rose7", "rose8"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    series: [{
                            name: "Radius model",
                            type: "pie",
                            radius: [20, 110],
                            center: ["25%", 200],
                            roseType: "radius",
                            width: "40%",
                            max: 40,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !1
                                    },
                                    labelLine: {
                                        show: !1
                                    }
                                },
                                emphasis: {
                                    label: {
                                        show: !0
                                    },
                                    labelLine: {
                                        show: !0
                                    }
                                }
                            },
                            data: [{
                                    value: 10,
                                    name: "rose1"
                                }, {
                                    value: 5,
                                    name: "rose2"
                                }, {
                                    value: 15,
                                    name: "rose3"
                                }, {
                                    value: 25,
                                    name: "rose4"
                                }, {
                                    value: 20,
                                    name: "rose5"
                                }, {
                                    value: 35,
                                    name: "rose6"
                                }, {
                                    value: 30,
                                    name: "rose7"
                                }, {
                                    value: 40,
                                    name: "rose8"
                                }]
                        }, {
                            name: "Area model",
                            type: "pie",
                            radius: [30, 110],
                            center: ["75%", 200],
                            roseType: "area",
                            x: "50%",
                            max: 40,
                            sort: "ascending",
                            data: [{
                                    value: 10,
                                    name: "rose1"
                                }, {
                                    value: 5,
                                    name: "rose2"
                                }, {
                                    value: 15,
                                    name: "rose3"
                                }, {
                                    value: 25,
                                    name: "rose4"
                                }, {
                                    value: 20,
                                    name: "rose5"
                                }, {
                                    value: 35,
                                    name: "rose6"
                                }, {
                                    value: 30,
                                    name: "rose7"
                                }, {
                                    value: 40,
                                    name: "rose8"
                                }]
                        }]
                }, a.scatter1.options = {
                    title: {
                        text: "Height and weight distribution",
                        subtext: "Data: Heinz  2003"
                    },
                    tooltip: {
                        trigger: "axis",
                        showDelay: 0,
                        formatter: function (a) {
                            return a.value.length > 1 ? a.seriesName + " :<br/>" + a.value[0] + "cm " + a.value[1] + "kg " : a.seriesName + " :<br/>" + a.name + " : " + a.value + "kg "
                        },
                        axisPointer: {
                            show: !0,
                            type: "cross",
                            lineStyle: {
                                type: "dashed",
                                width: 1
                            }
                        }
                    },
                    legend: {
                        data: ["Femail", "Male"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    xAxis: [{
                            type: "value",
                            scale: !0,
                            axisLabel: {
                                formatter: "{value} cm"
                            }
                        }],
                    yAxis: [{
                            type: "value",
                            scale: !0,
                            axisLabel: {
                                formatter: "{value} kg"
                            }
                        }],
                    series: [{
                            name: "Femail",
                            type: "scatter",
                            data: [
                                [161.2, 51.6],
                                [167.5, 59],
                                [159.5, 49.2],
                                [157, 63],
                                [155.8, 53.6],
                                [170, 59],
                                [159.1, 47.6],
                                [166, 69.8],
                                [176.2, 66.8],
                                [160.2, 75.2],
                                [172.5, 55.2],
                                [170.9, 54.2],
                                [172.9, 62.5],
                                [153.4, 42],
                                [160, 50],
                                [147.2, 49.8],
                                [168.2, 49.2],
                                [175, 73.2],
                                [157, 47.8],
                                [167.6, 68.8],
                                [159.5, 50.6],
                                [175, 82.5],
                                [166.8, 57.2],
                                [176.5, 87.8],
                                [170.2, 72.8],
                                [174, 54.5],
                                [173, 59.8],
                                [179.9, 67.3],
                                [170.5, 67.8],
                                [160, 47],
                                [154.4, 46.2],
                                [162, 55],
                                [176.5, 83],
                                [160, 54.4],
                                [152, 45.8],
                                [162.1, 53.6],
                                [170, 73.2],
                                [160.2, 52.1],
                                [161.3, 67.9],
                                [166.4, 56.6],
                                [168.9, 62.3],
                                [163.8, 58.5],
                                [167.6, 54.5],
                                [160, 50.2],
                                [161.3, 60.3],
                                [167.6, 58.3],
                                [165.1, 56.2],
                                [160, 50.2],
                                [170, 72.9],
                                [157.5, 59.8],
                                [167.6, 61],
                                [160.7, 69.1],
                                [163.2, 55.9],
                                [152.4, 46.5],
                                [157.5, 54.3],
                                [168.3, 54.8],
                                [180.3, 60.7],
                                [165.5, 60],
                                [165, 62],
                                [164.5, 60.3],
                                [156, 52.7],
                                [160, 74.3],
                                [163, 62],
                                [165.7, 73.1],
                                [161, 80],
                                [162, 54.7],
                                [166, 53.2],
                                [174, 75.7],
                                [172.7, 61.1],
                                [167.6, 55.7],
                                [151.1, 48.7],
                                [164.5, 52.3],
                                [163.5, 50],
                                [152, 59.3],
                                [169, 62.5],
                                [164, 55.7],
                                [161.2, 54.8],
                                [155, 45.9],
                                [170, 70.6],
                                [176.2, 67.2],
                                [170, 69.4],
                                [162.5, 58.2],
                                [170.3, 64.8],
                                [164.1, 71.6],
                                [169.5, 52.8],
                                [163.2, 59.8],
                                [154.5, 49],
                                [159.8, 50],
                                [173.2, 69.2],
                                [170, 55.9],
                                [161.4, 63.4],
                                [169, 58.2],
                                [166.2, 58.6],
                                [159.4, 45.7],
                                [162.5, 52.2],
                                [159, 48.6],
                                [162.8, 57.8],
                                [159, 55.6],
                                [179.8, 66.8],
                                [162.9, 59.4],
                                [161, 53.6],
                                [151.1, 73.2],
                                [168.2, 53.4],
                                [168.9, 69],
                                [173.2, 58.4],
                                [171.8, 56.2],
                                [178, 70.6],
                                [164.3, 59.8],
                                [163, 72],
                                [168.5, 65.2],
                                [166.8, 56.6],
                                [172.7, 105.2],
                                [163.5, 51.8],
                                [169.4, 63.4],
                                [167.8, 59],
                                [159.5, 47.6],
                                [167.6, 63],
                                [161.2, 55.2],
                                [160, 45],
                                [163.2, 54],
                                [162.2, 50.2],
                                [161.3, 60.2],
                                [149.5, 44.8],
                                [157.5, 58.8],
                                [163.2, 56.4],
                                [172.7, 62],
                                [155, 49.2],
                                [156.5, 67.2],
                                [164, 53.8],
                                [160.9, 54.4],
                                [162.8, 58],
                                [167, 59.8],
                                [160, 54.8],
                                [160, 43.2],
                                [168.9, 60.5],
                                [158.2, 46.4],
                                [156, 64.4],
                                [160, 48.8],
                                [167.1, 62.2],
                                [158, 55.5],
                                [167.6, 57.8],
                                [156, 54.6],
                                [162.1, 59.2],
                                [173.4, 52.7],
                                [159.8, 53.2],
                                [170.5, 64.5],
                                [159.2, 51.8],
                                [157.5, 56],
                                [161.3, 63.6],
                                [162.6, 63.2],
                                [160, 59.5],
                                [168.9, 56.8],
                                [165.1, 64.1],
                                [162.6, 50],
                                [165.1, 72.3],
                                [166.4, 55],
                                [160, 55.9],
                                [152.4, 60.4],
                                [170.2, 69.1],
                                [162.6, 84.5],
                                [170.2, 55.9],
                                [158.8, 55.5],
                                [172.7, 69.5],
                                [167.6, 76.4],
                                [162.6, 61.4],
                                [167.6, 65.9],
                                [156.2, 58.6],
                                [175.2, 66.8],
                                [172.1, 56.6],
                                [162.6, 58.6],
                                [160, 55.9],
                                [165.1, 59.1],
                                [182.9, 81.8],
                                [166.4, 70.7],
                                [165.1, 56.8],
                                [177.8, 60],
                                [165.1, 58.2],
                                [175.3, 72.7],
                                [154.9, 54.1],
                                [158.8, 49.1],
                                [172.7, 75.9],
                                [168.9, 55],
                                [161.3, 57.3],
                                [167.6, 55],
                                [165.1, 65.5],
                                [175.3, 65.5],
                                [157.5, 48.6],
                                [163.8, 58.6],
                                [167.6, 63.6],
                                [165.1, 55.2],
                                [165.1, 62.7],
                                [168.9, 56.6],
                                [162.6, 53.9],
                                [164.5, 63.2],
                                [176.5, 73.6],
                                [168.9, 62],
                                [175.3, 63.6],
                                [159.4, 53.2],
                                [160, 53.4],
                                [170.2, 55],
                                [162.6, 70.5],
                                [167.6, 54.5],
                                [162.6, 54.5],
                                [160.7, 55.9],
                                [160, 59],
                                [157.5, 63.6],
                                [162.6, 54.5],
                                [152.4, 47.3],
                                [170.2, 67.7],
                                [165.1, 80.9],
                                [172.7, 70.5],
                                [165.1, 60.9],
                                [170.2, 63.6],
                                [170.2, 54.5],
                                [170.2, 59.1],
                                [161.3, 70.5],
                                [167.6, 52.7],
                                [167.6, 62.7],
                                [165.1, 86.3],
                                [162.6, 66.4],
                                [152.4, 67.3],
                                [168.9, 63],
                                [170.2, 73.6],
                                [175.2, 62.3],
                                [175.2, 57.7],
                                [160, 55.4],
                                [165.1, 104.1],
                                [174, 55.5],
                                [170.2, 77.3],
                                [160, 80.5],
                                [167.6, 64.5],
                                [167.6, 72.3],
                                [167.6, 61.4],
                                [154.9, 58.2],
                                [162.6, 81.8],
                                [175.3, 63.6],
                                [171.4, 53.4],
                                [157.5, 54.5],
                                [165.1, 53.6],
                                [160, 60],
                                [174, 73.6],
                                [162.6, 61.4],
                                [174, 55.5],
                                [162.6, 63.6],
                                [161.3, 60.9],
                                [156.2, 60],
                                [149.9, 46.8],
                                [169.5, 57.3],
                                [160, 64.1],
                                [175.3, 63.6],
                                [169.5, 67.3],
                                [160, 75.5],
                                [172.7, 68.2],
                                [162.6, 61.4],
                                [157.5, 76.8],
                                [176.5, 71.8],
                                [164.4, 55.5],
                                [160.7, 48.6],
                                [174, 66.4],
                                [163.8, 67.3]
                            ],
                            markPoint: {
                                data: [{
                                        type: "max",
                                        name: "Max"
                                    }, {
                                        type: "min",
                                        name: "Min"
                                    }]
                            },
                            markLine: {
                                data: [{
                                        type: "average",
                                        name: "Average"
                                    }]
                            }
                        }, {
                            name: "Male",
                            type: "scatter",
                            data: [
                                [174, 65.6],
                                [175.3, 71.8],
                                [193.5, 80.7],
                                [186.5, 72.6],
                                [187.2, 78.8],
                                [181.5, 74.8],
                                [184, 86.4],
                                [184.5, 78.4],
                                [175, 62],
                                [184, 81.6],
                                [180, 76.6],
                                [177.8, 83.6],
                                [192, 90],
                                [176, 74.6],
                                [174, 71],
                                [184, 79.6],
                                [192.7, 93.8],
                                [171.5, 70],
                                [173, 72.4],
                                [176, 85.9],
                                [176, 78.8],
                                [180.5, 77.8],
                                [172.7, 66.2],
                                [176, 86.4],
                                [173.5, 81.8],
                                [178, 89.6],
                                [180.3, 82.8],
                                [180.3, 76.4],
                                [164.5, 63.2],
                                [173, 60.9],
                                [183.5, 74.8],
                                [175.5, 70],
                                [188, 72.4],
                                [189.2, 84.1],
                                [172.8, 69.1],
                                [170, 59.5],
                                [182, 67.2],
                                [170, 61.3],
                                [177.8, 68.6],
                                [184.2, 80.1],
                                [186.7, 87.8],
                                [171.4, 84.7],
                                [172.7, 73.4],
                                [175.3, 72.1],
                                [180.3, 82.6],
                                [182.9, 88.7],
                                [188, 84.1],
                                [177.2, 94.1],
                                [172.1, 74.9],
                                [167, 59.1],
                                [169.5, 75.6],
                                [174, 86.2],
                                [172.7, 75.3],
                                [182.2, 87.1],
                                [164.1, 55.2],
                                [163, 57],
                                [171.5, 61.4],
                                [184.2, 76.8],
                                [174, 86.8],
                                [174, 72.2],
                                [177, 71.6],
                                [186, 84.8],
                                [167, 68.2],
                                [171.8, 66.1],
                                [182, 72],
                                [167, 64.6],
                                [177.8, 74.8],
                                [164.5, 70],
                                [192, 101.6],
                                [175.5, 63.2],
                                [171.2, 79.1],
                                [181.6, 78.9],
                                [167.4, 67.7],
                                [181.1, 66],
                                [177, 68.2],
                                [174.5, 63.9],
                                [177.5, 72],
                                [170.5, 56.8],
                                [182.4, 74.5],
                                [197.1, 90.9],
                                [180.1, 93],
                                [175.5, 80.9],
                                [180.6, 72.7],
                                [184.4, 68],
                                [175.5, 70.9],
                                [180.6, 72.5],
                                [177, 72.5],
                                [177.1, 83.4],
                                [181.6, 75.5],
                                [176.5, 73],
                                [175, 70.2],
                                [174, 73.4],
                                [165.1, 70.5],
                                [177, 68.9],
                                [192, 102.3],
                                [176.5, 68.4],
                                [169.4, 65.9],
                                [182.1, 75.7],
                                [179.8, 84.5],
                                [175.3, 87.7],
                                [184.9, 86.4],
                                [177.3, 73.2],
                                [167.4, 53.9],
                                [178.1, 72],
                                [168.9, 55.5],
                                [157.2, 58.4],
                                [180.3, 83.2],
                                [170.2, 72.7],
                                [177.8, 64.1],
                                [172.7, 72.3],
                                [165.1, 65],
                                [186.7, 86.4],
                                [165.1, 65],
                                [174, 88.6],
                                [175.3, 84.1],
                                [185.4, 66.8],
                                [177.8, 75.5],
                                [180.3, 93.2],
                                [180.3, 82.7],
                                [177.8, 58],
                                [177.8, 79.5],
                                [177.8, 78.6],
                                [177.8, 71.8],
                                [177.8, 116.4],
                                [163.8, 72.2],
                                [188, 83.6],
                                [198.1, 85.5],
                                [175.3, 90.9],
                                [166.4, 85.9],
                                [190.5, 89.1],
                                [166.4, 75],
                                [177.8, 77.7],
                                [179.7, 86.4],
                                [172.7, 90.9],
                                [190.5, 73.6],
                                [185.4, 76.4],
                                [168.9, 69.1],
                                [167.6, 84.5],
                                [175.3, 64.5],
                                [170.2, 69.1],
                                [190.5, 108.6],
                                [177.8, 86.4],
                                [190.5, 80.9],
                                [177.8, 87.7],
                                [184.2, 94.5],
                                [176.5, 80.2],
                                [177.8, 72],
                                [180.3, 71.4],
                                [171.4, 72.7],
                                [172.7, 84.1],
                                [172.7, 76.8],
                                [177.8, 63.6],
                                [177.8, 80.9],
                                [182.9, 80.9],
                                [170.2, 85.5],
                                [167.6, 68.6],
                                [175.3, 67.7],
                                [165.1, 66.4],
                                [185.4, 102.3],
                                [181.6, 70.5],
                                [172.7, 95.9],
                                [190.5, 84.1],
                                [179.1, 87.3],
                                [175.3, 71.8],
                                [170.2, 65.9],
                                [193, 95.9],
                                [171.4, 91.4],
                                [177.8, 81.8],
                                [177.8, 96.8],
                                [167.6, 69.1],
                                [167.6, 82.7],
                                [180.3, 75.5],
                                [182.9, 79.5],
                                [176.5, 73.6],
                                [186.7, 91.8],
                                [188, 84.1],
                                [188, 85.9],
                                [177.8, 81.8],
                                [174, 82.5],
                                [177.8, 80.5],
                                [171.4, 70],
                                [185.4, 81.8],
                                [185.4, 84.1],
                                [188, 90.5],
                                [188, 91.4],
                                [182.9, 89.1],
                                [176.5, 85],
                                [175.3, 69.1],
                                [175.3, 73.6],
                                [188, 80.5],
                                [188, 82.7],
                                [175.3, 86.4],
                                [170.5, 67.7],
                                [179.1, 92.7],
                                [177.8, 93.6],
                                [175.3, 70.9],
                                [182.9, 75],
                                [170.8, 93.2],
                                [188, 93.2],
                                [180.3, 77.7],
                                [177.8, 61.4],
                                [185.4, 94.1],
                                [168.9, 75],
                                [185.4, 83.6],
                                [180.3, 85.5],
                                [174, 73.9],
                                [167.6, 66.8],
                                [182.9, 87.3],
                                [160, 72.3],
                                [180.3, 88.6],
                                [167.6, 75.5],
                                [186.7, 101.4],
                                [175.3, 91.1],
                                [175.3, 67.3],
                                [175.9, 77.7],
                                [175.3, 81.8],
                                [179.1, 75.5],
                                [181.6, 84.5],
                                [177.8, 76.6],
                                [182.9, 85],
                                [177.8, 102.5],
                                [184.2, 77.3],
                                [179.1, 71.8],
                                [176.5, 87.9],
                                [188, 94.3],
                                [174, 70.9],
                                [167.6, 64.5],
                                [170.2, 77.3],
                                [167.6, 72.3],
                                [188, 87.3],
                                [174, 80],
                                [176.5, 82.3],
                                [180.3, 73.6],
                                [167.6, 74.1],
                                [188, 85.9],
                                [180.3, 73.2],
                                [167.6, 76.3],
                                [183, 65.9],
                                [183, 90.9],
                                [179.1, 89.1],
                                [170.2, 62.3],
                                [177.8, 82.7],
                                [179.1, 79.1],
                                [190.5, 98.2],
                                [177.8, 84.1],
                                [180.3, 83.2],
                                [180.3, 83.2]
                            ],
                            markPoint: {
                                data: [{
                                        type: "max",
                                        name: "Max"
                                    }, {
                                        type: "min",
                                        name: "Min"
                                    }]
                            },
                            markLine: {
                                data: [{
                                        type: "average",
                                        name: "Average"
                                    }]
                            }
                        }]
                }, a.scatter2.options = {
                    tooltip: {
                        trigger: "axis",
                        showDelay: 0,
                        axisPointer: {
                            show: !0,
                            type: "cross",
                            lineStyle: {
                                type: "dashed",
                                width: 1
                            }
                        }
                    },
                    legend: {
                        data: ["scatter1", "scatter2"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    xAxis: [{
                            type: "value",
                            splitNumber: 4,
                            scale: !0
                        }],
                    yAxis: [{
                            type: "value",
                            splitNumber: 4,
                            scale: !0
                        }],
                    series: [{
                            name: "scatter1",
                            type: "scatter",
                            symbolSize: function (a) {
                                return Math.round(a[2] / 5)
                            },
                            data: d()
                        }, {
                            name: "scatter2",
                            type: "scatter",
                            symbolSize: function (a) {
                                return Math.round(a[2] / 5)
                            },
                            data: d()
                        }]
                }, a.radar1.options = {
                    title: {
                        text: "Budget vs spending"
                    },
                    tooltip: {
                        trigger: "axis"
                    },
                    legend: {
                        orient: "vertical",
                        x: "right",
                        y: "bottom",
                        data: ["Allocated Budget", "Actual Spending"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    polar: [{
                            indicator: [{
                                    text: "sales",
                                    max: 6e3
                                }, {
                                    text: "dministration",
                                    max: 16e3
                                }, {
                                    text: "Information Techology",
                                    max: 3e4
                                }, {
                                    text: "Customer Support",
                                    max: 38e3
                                }, {
                                    text: "Development",
                                    max: 52e3
                                }, {
                                    text: "Marketing",
                                    max: 25e3
                                }]
                        }],
                    calculable: !0,
                    series: [{
                            name: "Budget vs spending",
                            type: "radar",
                            data: [{
                                    value: [4300, 1e4, 28e3, 35e3, 5e4, 19e3],
                                    name: "Allocated Budget"
                                }, {
                                    value: [5e3, 14e3, 28e3, 31e3, 42e3, 21e3],
                                    name: "Actual Spending"
                                }]
                        }]
                }, a.radar2.options = {
                    tooltip: {
                        trigger: "axis"
                    },
                    legend: {
                        x: "center",
                        data: ["Ronaldo", "Andriy Shevchenko"]
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    calculable: !0,
                    polar: [{
                            indicator: [{
                                    text: "Attack",
                                    max: 100
                                }, {
                                    text: "Guard",
                                    max: 100
                                }, {
                                    text: "Physical",
                                    max: 100
                                }, {
                                    text: "Speed",
                                    max: 100
                                }, {
                                    text: "Strength",
                                    max: 100
                                }, {
                                    text: "Skill",
                                    max: 100
                                }],
                            radius: 130
                        }],
                    series: [{
                            name: "Full of live data",
                            type: "radar",
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [{
                                    value: [97, 42, 88, 94, 90, 86],
                                    name: "Andriy Shevchenko"
                                }, {
                                    value: [97, 32, 74, 95, 88, 92],
                                    name: "Ronaldo"
                                }]
                        }]
                }, a.gauge1.options = {
                    tooltip: {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    series: [{
                            name: "Business metric",
                            type: "gauge",
                            detail: {
                                formatter: "{value}%"
                            },
                            data: [{
                                    value: 50,
                                    name: "Completion"
                                }]
                        }]
                }, a.chord1.options = {
                    title: {
                        text: "Test Data",
                        subtext: "From d3.js",
                        x: "right",
                        y: "bottom"
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: function (a) {
                            return a.indicator2 ? a.value.weight : a.name
                        }
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    legend: {
                        x: "left",
                        data: ["group1", "group2", "group3", "group4"]
                    },
                    series: [{
                            type: "chord",
                            sort: "ascending",
                            sortSub: "descending",
                            showScale: !0,
                            showScaleText: !0,
                            data: [{
                                    name: "group1"
                                }, {
                                    name: "group2"
                                }, {
                                    name: "group3"
                                }, {
                                    name: "group4"
                                }],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: !1
                                    }
                                }
                            },
                            matrix: [
                                [11975, 5871, 8916, 2868],
                                [1951, 10048, 2060, 6171],
                                [8010, 16145, 8090, 8045],
                                [1013, 990, 940, 6907]
                            ]
                        }]
                }, a.funnel1.options = {
                    title: {
                        text: "Funnel"
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        show: !0,
                        feature: {
                            restore: {
                                show: !0,
                                title: "restore"
                            },
                            saveAsImage: {
                                show: !0,
                                title: "save as image"
                            }
                        }
                    },
                    legend: {
                        data: ["Display", "Click", "Vist", "Contact", "Order"]
                    },
                    calculable: !0,
                    series: [{
                            name: "Funnel",
                            type: "funnel",
                            width: "40%",
                            data: [{
                                    value: 60,
                                    name: "Vist"
                                }, {
                                    value: 40,
                                    name: "Contact"
                                }, {
                                    value: 20,
                                    name: "Order"
                                }, {
                                    value: 80,
                                    name: "Click"
                                }, {
                                    value: 100,
                                    name: "Display"
                                }]
                        }, {
                            name: "Pyramid",
                            type: "funnel",
                            x: "50%",
                            sort: "ascending",
                            itemStyle: {
                                normal: {
                                    label: {
                                        position: "left"
                                    }
                                }
                            },
                            data: [{
                                    value: 60,
                                    name: "Vist"
                                }, {
                                    value: 40,
                                    name: "Contact"
                                }, {
                                    value: 20,
                                    name: "Order"
                                }, {
                                    value: 80,
                                    name: "Click"
                                }, {
                                    value: 100,
                                    name: "Display"
                                }]
                        }]
                }
            }
            angular.module("app.chart").controller("EChartsCtrl", ["$scope", "$timeout", a])
        }(),
        function () {
            "use strict";

            function a() {
                var a = [{
                        name: "Fade up",
                        "class": "animate-fade-up"
                    }, {
                        name: "Scale up",
                        "class": "ainmate-scale-up"
                    }, {
                        name: "Slide in from right",
                        "class": "ainmate-slide-in-right"
                    }, {
                        name: "Flip Y",
                        "class": "animate-flip-y"
                    }],
                        b = new Date,
                        c = b.getFullYear(),
                        d = {
                            brand: "Gestor Documental",
                            name: "Lisa",
                            year: c,
                            layout: "wide",
                            menu: "vertical",
                            isMenuCollapsed: !1,
                            fixedHeader: !0,
                            fixedSidebar: !0,
                            pageTransition: a[0],
                            skin: "12"
                        },
                        e = {
                            primary: "#4E7FE1",
                            success: "#81CA80",
                            info: "#6BBCD7",
                            infoAlt: "#7266BD",
                            warning: "#E9C842",
                            danger: "#E96562",
                            gray: "#DCDCDC"
                        };
                return {
                    pageTransitionOpts: a,
                    main: d,
                    color: e
                }
            }
            angular.module("app").factory("appConfig", [a])
        }(),
        function () {
            "use strict";

            function a(a, b, c, d, e, $location, authService) {
                a.pageTransitionOpts = e.pageTransitionOpts, a.main = e.main, a.color = e.color, a.$watch("main", function (c, d) {
                    "horizontal" === c.menu && "vertical" === d.menu && b.$broadcast("nav:reset"), c.fixedHeader === !1 && c.fixedSidebar === !0 && (d.fixedHeader === !1 && d.fixedSidebar === !1 && (a.main.fixedHeader = !0, a.main.fixedSidebar = !0), d.fixedHeader === !0 && d.fixedSidebar === !0 && (a.main.fixedHeader = !1, a.main.fixedSidebar = !1)), c.fixedSidebar === !0 && (a.main.fixedHeader = !0), c.fixedHeader === !1 && (a.main.fixedSidebar = !1)
                }, !0), b.$on("$routeChangeSuccess", function (a, b, c) {
                    d.scrollTo(0, 0)
                })
                a.signOut = function(){
                    authService.get('logout').then(function (results) {
                    authService.toast(results);
                    $location.path('login');
                    });

                    console.log("LOGOUT");
                }
            }
            angular.module("app").controller("AppCtrl", ["$scope", "$rootScope", "$route", "$document", "appConfig", "$location","authService",a])
        }(),
        function () {
            "use strict";
            angular.module("app").config(["$routeProvider", function (a) {
                    var b, c;
                    b = ["dashboard", "ui/typography", "ui/buttons", "ui/icons", "ui/grids", "ui/widgets", "ui/components", "ui/boxes", "ui/timeline", "ui/nested-lists", "ui/pricing-tables", "ui/maps", "table/static", "table/dynamic", "table/responsive", "form/elements", "form/layouts", "form/validation", "form/wizard", "chart/echarts", "chart/echarts-line", "chart/echarts-bar", "chart/echarts-pie", "chart/echarts-scatter", "chart/echarts-more", "page/404", "page/500", "page/blank", "page/forgot-password", "page/invoice", "page/lock-screen", "page/profile", "page/invoice", "page/signin", "page/signup", "filing/filing-list", "mail/compose", "mail/inbox", "mail/single", "app/tasks", "app/calendar"], c = function (b) {
                        var c, d;
                        return d = "/" + b, c = {
                            templateUrl: "app/" + b + ".html"
                        }, a.when(d, c), a
                    }, b.forEach(function (a) {
                        return c(a)
                    }), a.when("/", {
                        redirectTo: "/dashboard"
                    }).when("/dashboard", {
                        templateUrl: "app/dashboard/dashboard.html"
                    }).when("/page/signin", {
                        templateUrl: "app/page/signin.html"
                    }).when("/404", {
                        templateUrl: "app/page/404.html"
                    }).otherwise({
                        redirectTo: "/404"
                    })
                }]).run(["$rootScope", "$location", "authService", function ($rootScope, $location, authService) {
                    $rootScope.$on("$routeChangeStart", function (event, next, current) {
                        $rootScope.authenticated = false;
                        authService.get('session').then(function (results) {
                            if (results.uid) {
                                $rootScope.authenticated = true;
                                $rootScope.uid = results.uid;
                                $rootScope.name = results.name;
                                $rootScope.email = results.email;
                            } else {
                                console.log(next);
                                var nextUrl = next.$$route.originalPath;
                                if (nextUrl == '/page/signup' || nextUrl == '/page/signin'|| nextUrl == '/page/forgot-password') {

                                } else {
                                    $location.path("/page/signin");
                                }
                            }
                        });
                    });
                }]);
        }(),
        function () {
            function a(a) {
                a.useStaticFilesLoader({
                    prefix: "i18n/",
                    suffix: ".json"
                }), a.preferredLanguage("es"), a.useSanitizeValueStrategy(null)
            }

            function b(a, b) {
                a.lang = "Español", a.setLang = function (c) {
                    switch (c) {
                        case "English":
                            b.use("en");
                            break;
                        case "Español":
                            b.use("es");
                            break;
                        case "中文":
                            b.use("zh");
                            break;
                        case "日本語":
                            b.use("ja");
                            break;
                        case "Portugal":
                            b.use("pt");
                            break;
                        case "Русский язык":
                            b.use("ru")
                    }
                    return a.lang = c
                }, a.getFlag = function () {
                    var b;
                    switch (b = a.lang) {
                        case "English":
                            return "flags-american";
                        case "Español":
                            return "flags-spain";
                        case "中文":
                            return "flags-china";
                        case "Portugal":
                            return "flags-portugal";
                        case "日本語":
                            return "flags-japan";
                        case "Русский язык":
                            return "flags-russia"
                    }
                }
            }
            angular.module("app.i18n", ["pascalprecht.translate"]).config(["$translateProvider", a]).controller("LangCtrl", ["$scope", "$translate", b])
        }(),
        function () {
            "use strict";

            function a(a) {
                function b() {
                    var a = Math.round(100 * Math.random());
                    return a * (a % 2 == 0 ? 1 : -1)
                }

                function c() {
                    for (var a = [], c = 100; c--; )
                        a.push([b(), b(), Math.abs(b())]);
                    return a
                }
                a.pie1 = {}, a.pie1.options = {
                    animation: !1,
                    title: {
                        text: "Traffic Source",
                        x: "left"
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    calculable: !0,
                    series: [{
                            name: "Vist source",
                            type: "pie",
                            radius: "55%",
                            center: ["50%", "60%"],
                            data: [{
                                    value: 335,
                                    name: "Direct",
                                    itemStyle: {
                                        normal: {
                                            color: a.color.success,
                                            label: {
                                                show: !0,
                                                textStyle: {
                                                    color: a.color.success
                                                }
                                            },
                                            labelLine: {
                                                show: !0,
                                                lineStyle: {
                                                    color: a.color.success
                                                }
                                            }
                                        }
                                    }
                                }, {
                                    value: 310,
                                    name: "Email",
                                    itemStyle: {
                                        normal: {
                                            color: a.color.infoAlt,
                                            label: {
                                                show: !0,
                                                textStyle: {
                                                    color: a.color.infoAlt
                                                }
                                            },
                                            labelLine: {
                                                show: !0,
                                                lineStyle: {
                                                    color: a.color.infoAlt
                                                }
                                            }
                                        }
                                    }
                                }, {
                                    value: 135,
                                    name: "Video Ads",
                                    itemStyle: {
                                        normal: {
                                            color: a.color.warning,
                                            label: {
                                                show: !0,
                                                textStyle: {
                                                    color: a.color.warning
                                                }
                                            },
                                            labelLine: {
                                                show: !0,
                                                lineStyle: {
                                                    color: a.color.warning
                                                }
                                            }
                                        }
                                    }
                                }, {
                                    value: 1548,
                                    name: "Search",
                                    itemStyle: {
                                        normal: {
                                            color: a.color.info,
                                            label: {
                                                show: !0,
                                                textStyle: {
                                                    color: a.color.info
                                                }
                                            },
                                            labelLine: {
                                                show: !0,
                                                lineStyle: {
                                                    color: a.color.info
                                                }
                                            }
                                        }
                                    }
                                }]
                        }]
                }, a.scatter2 = {}, a.scatter2.options = {
                    tooltip: {
                        trigger: "axis",
                        showDelay: 0,
                        axisPointer: {
                            show: !0,
                            type: "cross",
                            lineStyle: {
                                type: "dashed",
                                width: 1
                            }
                        }
                    },
                    legend: {
                        data: ["scatter1", "scatter2"]
                    },
                    xAxis: [{
                            type: "value",
                            splitNumber: 4,
                            scale: !0
                        }],
                    yAxis: [{
                            type: "value",
                            splitNumber: 4,
                            scale: !0
                        }],
                    series: [{
                            name: "scatter1",
                            type: "scatter",
                            symbolSize: function (a) {
                                return Math.round(a[2] / 5)
                            },
                            itemStyle: {
                                normal: {
                                    color: "rgba(107,188,215,.5)"
                                }
                            },
                            data: c()
                        }, {
                            name: "scatter2",
                            type: "scatter",
                            symbolSize: function (a) {
                                return Math.round(a[2] / 5)
                            },
                            itemStyle: {
                                normal: {
                                    color: "rgba(129,202,128,.5)"
                                }
                            },
                            data: c()
                        }]
                }
            }
            angular.module("app").controller("DashboardCtrl", ["$scope", a])
        }(),
        function () {
            "use strict";

            function a(a) {
                a.tags = ["foo", "bar"]
            }

            function b(a) {
                a.today = function () {
                    a.dt = new Date
                }, a.today(), a.clear = function () {
                    a.dt = null
                }, a.disabled = function (a, b) {
                    return "day" === b && (0 === a.getDay() || 6 === a.getDay())
                }, a.toggleMin = function () {
                    a.minDate = a.minDate ? null : new Date
                }, a.toggleMin(), a.maxDate = new Date(2020, 5, 22), a.open1 = function () {
                    a.popup1.opened = !0
                }, a.open2 = function () {
                    a.popup2.opened = !0
                }, a.setDate = function (b, c, d) {
                    a.dt = new Date(b, c, d)
                }, a.dateOptions = {
                    formatYear: "yy",
                    startingDay: 1
                }, a.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], a.format = a.formats[0],
                        a.altInputFormats = ["M!/d!/yyyy"], a.popup1 = {
                    opened: !1
                }, a.popup2 = {
                    opened: !1
                };
                var b = new Date;
                b.setDate(b.getDate() + 1);
                var c = new Date;
                c.setDate(b.getDate() + 1), a.events = [{
                        date: b,
                        status: "full"
                    }, {
                        date: c,
                        status: "partially"
                    }], a.getDayClass = function (b, c) {
                    if ("day" === c)
                        for (var d = new Date(b).setHours(0, 0, 0, 0), e = 0; e < a.events.length; e++) {
                            var f = new Date(a.events[e].date).setHours(0, 0, 0, 0);
                            if (d === f)
                                return a.events[e].status
                        }
                    return ""
                }
            }

            function c(a) {
                a.mytime = new Date, a.hstep = 1, a.mstep = 15, a.options = {
                    hstep: [1, 2, 3],
                    mstep: [1, 5, 10, 15, 25, 30]
                }, a.ismeridian = !0, a.toggleMode = function () {
                    return a.ismeridian = !a.ismeridian
                }, a.update = function () {
                    var b;
                    return b = new Date, b.setHours(14), b.setMinutes(0), a.mytime = b
                }, a.changed = function () {}, a.clear = function () {
                    return a.mytime = null
                }
            }

            function d(a) {
                a.selected = void 0, a.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
            }

            function e(a) {
                a.rate = 7, a.max = 10, a.isReadonly = !1, a.hoveringOver = function (b) {
                    return a.overStar = b, a.percent = 100 * (b / a.max)
                }, a.ratingStates = [{
                        stateOn: "glyphicon-ok-sign",
                        stateOff: "glyphicon-ok-circle"
                    }, {
                        stateOn: "glyphicon-star",
                        stateOff: "glyphicon-star-empty"
                    }, {
                        stateOn: "glyphicon-heart",
                        stateOff: "glyphicon-ban-circle"
                    }, {
                        stateOn: "glyphicon-heart"
                    }, {
                        stateOff: "glyphicon-off"
                    }]
            }
            angular.module("app.ui.form").controller("TagsDemoCtrl", ["$scope", a]).controller("DatepickerDemoCtrl", ["$scope", b]).controller("TimepickerDemoCtrl", ["$scope", c]).controller("TypeaheadCtrl", ["$scope", d]).controller("RatingDemoCtrl", ["$scope", e])
        }(),
        function () {
            "use strict";

            function a() {
                return {
                    restrict: "A",
                    link: function (a, b) {
                        b.bootstrapFileInput()
                    }
                }
            }
            angular.module("app.ui.form").directive("uiFileUpload", a)
        }(),
        function () {
            "use strict";

            function a(a) {
                var b;
                a.form = {
                    required: "",
                    minlength: "",
                    maxlength: "",
                    length_rage: "",
                    type_something: "",
                    confirm_type: "",
                    foo: "",
                    email: "",
                    url: "",
                    num: "",
                    minVal: "",
                    maxVal: "",
                    valRange: "",
                    pattern: ""
                }, b = angular.copy(a.form), a.revert = function () {
                    return a.form = angular.copy(b), a.form_constraints.$setPristine()
                }, a.canRevert = function () {
                    return !angular.equals(a.form, b) || !a.form_constraints.$pristine
                }, a.canSubmit = function () {
                    return a.form_constraints.$valid && !angular.equals(a.form, b)
                }
            }

            function b(a) {
                var b;
                a.user = {
                    email: "",
                    password: ""
                }, a.showInfoOnSubmit = !1, b = angular.copy(a.user), a.revert = function () {
                    return a.user = angular.copy(b), a.form_signin.$setPristine()
                }, a.canRevert = function () {
                    return !angular.equals(a.user, b) || !a.form_signin.$pristine
                }, a.canSubmit = function () {
                    return a.form_signin.$valid && !angular.equals(a.user, b)
                }, a.submitForm = function () {
                    return a.showInfoOnSubmit = !0, a.revert()
                }
            }

            function c(a) {
                var b;
                a.user = {
                    name: "",
                    email: "",
                    password: "",
                    age: ""
                }, a.showInfoOnSubmit = !1, b = angular.copy(a.user), a.revert = function () {
                    a.user = angular.copy(b), a.form_signup.$setPristine()
                }, a.canRevert = function () {
                    return !angular.equals(a.user, b) || !a.form_signup.$pristine
                }, a.canSubmit = function () {
                    return a.form_signup.$valid && !angular.equals(a.user, b)
                }, a.submitForm = function () {
                    return a.showInfoOnSubmit = !0, a.revert()
                }
            }
            angular.module("app.ui.form.validation").controller("formConstraintsCtrl", ["$scope", a]).controller("signinCtrl", ["$scope", b]).controller("signupCtrl", ["$scope", c])
        }(),
        function () {
            "use strict";

            function a(a, b, c, d) {
                a.canExit = !1, a.stepActive = !0, a.finished = function () {
                    alert("Wizard finished :)")
                }, a.logStep = function () {}, a.goBack = function () {
                    d.wizard().goTo(0)
                }, a.exitWithAPromise = function () {
                    var a = b.defer();
                    return c(function () {
                        a.resolve(!0)
                    }, 1e3), a.promise
                }, a.exitToggle = function () {
                    a.canExit = !a.canExit
                }, a.stepToggle = function () {
                    a.stepActive = !a.stepActive
                }, a.exitValidation = function () {
                    return a.canExit
                }
            }
            angular.module("app.ui.form").controller("WizardCtrl", ["$scope", "$q", "$timeout", "WizardHandler", a])
        }(),
        function () {
            "use strict";

            function a(a) {
                function b(b, c, d) {
                    var e;
                    e = $("#app"), c.on("click", function (b) {
                        return e.hasClass("nav-collapsed-min") ? e.removeClass("nav-collapsed-min") : (e.addClass("nav-collapsed-min"), a.$broadcast("nav:reset")), b.preventDefault()
                    })
                }
                var c = {
                    restrict: "A",
                    link: b
                };
                return c
            }

            function b() {
                function a(a, b, c) {
                    var d, e, f, g, h, i, j, k, l, m, n;
                    m = 250, j = $(window), g = b.find("ul").parent("li"), g.append('<i class="ti-angle-down icon-has-ul-h"></i><i class="ti-angle-right icon-has-ul"></i>'), d = g.children("a"), h = b.children("li").not(g), e = h.children("a"), f = $("#app"), i = $("#nav-container"), d.on("click", function (a) {
                        var b, c;
                        return f.hasClass("nav-collapsed-min") || i.hasClass("nav-horizontal") && j.width() >= 768 ? !1 : (c = $(this), b = c.parent("li"), g.not(b).removeClass("open").find("ul").slideUp(m), b.toggleClass("open").find("ul").stop().slideToggle(m), void a.preventDefault())
                    }), e.on("click", function (a) {
                        g.removeClass("open").find("ul").slideUp(m)
                    }), a.$on("nav:reset", function (a) {
                        g.removeClass("open").find("ul").slideUp(m)
                    }), k = void 0, l = j.width(), n = function () {
                        var a;
                        a = j.width(), 768 > a && f.removeClass("nav-collapsed-min"), 768 > l && a >= 768 && i.hasClass("nav-horizontal") && g.removeClass("open").find("ul").slideUp(m), l = a
                    }, j.resize(function () {
                        var a;
                        clearTimeout(a), a = setTimeout(n, 300)
                    })
                }
                var b = {
                    restrict: "A",
                    link: a
                };
                return b
            }

            function c() {
                function a(a, b, c, d) {
                    var e, f, g;
                    f = b.find("a"), g = function () {
                        return d.path()
                    }, e = function (a, b) {
                        return b = "#" + b, angular.forEach(a, function (a) {
                            var c, d, e;
                            return d = angular.element(a), c = d.parent("li"), e = d.attr("href"), c.hasClass("active") && c.removeClass("active"), 0 === b.indexOf(e) ? c.addClass("active") : void 0
                        })
                    }, e(f, d.path()), a.$watch(g, function (a, b) {
                        return a !== b ? e(f, d.path()) : void 0
                    })
                }
                var b = {
                    restrict: "A",
                    controller: ["$scope", "$element", "$attrs", "$location", a]
                };
                return b
            }

            function d() {
                function a(a, b, c) {
                    b.on("click", function () {
                        return $("#app").toggleClass("on-canvas")
                    })
                }
                var b = {
                    restrict: "A",
                    link: a
                };
                return b
            }
            angular.module("app.nav").directive("toggleNavCollapsedMin", ["$rootScope", a]).directive("collapseNav", b).directive("highlightActive", c).directive("toggleOffCanvas", d)
        }(),
        function () {
            "use strict";

            function a(a, b) {
                var c, d, e;
                a.printInvoice = function () {
                    c = document.getElementById("invoice").innerHTML, d = document.body.innerHTML, e = window.open(), e.document.open(), e.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + c + "</html>"), e.document.close()
                }
            }

            function authCtrl($scope, $rootScope, $routeParams, $location, $http, authService) {
                $scope.login = {};
                $scope.signup = {};
                $scope.doLogin = function (customer) {
                    authService.post('login', {
                        customer: customer
                    }).then(function (results) {
                        authService.toast(results);
                        if (results.status === "success") {
                            $location.path('dashboard');
                        }
                    });
                };

                $scope.signup = {email: '', password: '', name: '', phone: '', address: ''};
                $scope.doSignUp = function (customer) {
                    authService.post('signUp', {
                        customer: customer
                    }).then(function (results) {
                        authService.toast(results);
                        if (results.status === "success") {
                            $location.path('dashboard');
                        }
                    });
                };
                $scope.logout = function () {
                    authService.get('logout').then(function (results) {
                        authService.toast(results);
                        $location.path('login');
                    });
                }

                $scope.reset = function () {
                    $location.url("/")
                }, $scope.unlock = function () {
                    $location.url("/")
                }
            }
            angular.module("app.page").controller("invoiceCtrl", ["$scope", "$window", a]).controller("authCtrl", ["$scope", "$rootScope", "$routeParams", "$location", "$http", "authService", authCtrl])

        }(),
        function () {
            "use strict";

            function a() {
                function a(a, b, c) {
                    var d, e;
                    e = function () {
                        return c.path()
                    }, d = function (a) {
                        switch (b.removeClass("body-wide body-err body-lock body-auth"), a) {
                            case "/404":
                            case "/page/404":
                            case "/page/500":
                                return b.addClass("body-wide body-err");
                            case "/page/signin":
                            case "/page/signup":
                            case "/page/forgot-password":
                                return b.addClass("body-wide body-auth");
                            case "/page/lock-screen":
                                return b.addClass("body-wide body-lock")
                        }
                    }, d(c.path()), a.$watch(e, function (a, b) {
                        return a !== b ? d(c.path()) : void 0
                    })
                }
                var b = {
                    restrict: "A",
                    controller: ["$scope", "$element", "$location", a]
                };
                return b
            }
            angular.module("app.page").directive("customPage", a)
        }(),
        function () {
            "use strict";

            function a(a, b) {
                var c;
                a.stores = [{
                        name: "Nijiya Market",
                        price: "$$",
                        sales: 292,
                        rating: 4
                    }, {
                        name: "Eat On Monday Truck",
                        price: "$",
                        sales: 119,
                        rating: 4.3
                    }, {
                        name: "Tea Era",
                        price: "$",
                        sales: 874,
                        rating: 4
                    }, {
                        name: "Rogers Deli",
                        price: "$",
                        sales: 347,
                        rating: 4.2
                    }, {
                        name: "MoBowl",
                        price: "$$$",
                        sales: 24,
                        rating: 4.6
                    }, {
                        name: "The Milk Pail Market",
                        price: "$",
                        sales: 543,
                        rating: 4.5
                    }, {
                        name: "Nob Hill Foods",
                        price: "$$",
                        sales: 874,
                        rating: 4
                    }, {
                        name: "Scratch",
                        price: "$$$",
                        sales: 643,
                        rating: 3.6
                    }, {
                        name: "Gochi Japanese Fusion Tapas",
                        price: "$$$",
                        sales: 56,
                        rating: 4.1
                    }, {
                        name: "Cost Plus World Market",
                        price: "$$",
                        sales: 79,
                        rating: 4
                    }, {
                        name: "Bumble Bee Health Foods",
                        price: "$$",
                        sales: 43,
                        rating: 4.3
                    }, {
                        name: "Costco",
                        price: "$$",
                        sales: 219,
                        rating: 3.6
                    }, {
                        name: "Red Rock Coffee Co",
                        price: "$",
                        sales: 765,
                        rating: 4.1
                    }, {
                        name: "99 Ranch Market",
                        price: "$",
                        sales: 181,
                        rating: 3.4
                    }, {
                        name: "Mi Pueblo Food Center",
                        price: "$",
                        sales: 78,
                        rating: 4
                    }, {
                        name: "Cucina Venti",
                        price: "$$",
                        sales: 163,
                        rating: 3.3
                    }, {
                        name: "Sufi Coffee Shop",
                        price: "$",
                        sales: 113,
                        rating: 3.3
                    }, {
                        name: "Dana Street Roasting",
                        price: "$",
                        sales: 316,
                        rating: 4.1
                    }, {
                        name: "Pearl Cafe",
                        price: "$",
                        sales: 173,
                        rating: 3.4
                    }, {
                        name: "Posh Bagel",
                        price: "$",
                        sales: 140,
                        rating: 4
                    }, {
                        name: "Artisan Wine Depot",
                        price: "$$",
                        sales: 26,
                        rating: 4.1
                    }, {
                        name: "Hong Kong Chinese Bakery",
                        price: "$",
                        sales: 182,
                        rating: 3.4
                    }, {
                        name: "Starbucks",
                        price: "$$",
                        sales: 97,
                        rating: 3.7
                    }, {
                        name: "Tapioca Express",
                        price: "$",
                        sales: 301,
                        rating: 3
                    }, {
                        name: "House of Bagels",
                        price: "$",
                        sales: 82,
                        rating: 4.4
                    }], a.searchKeywords = "", a.filteredStores = [], a.row = "", a.select = function (b) {
                    var c, d;
                    return d = (b - 1) * a.numPerPage, c = d + a.numPerPage, a.currentPageStores = a.filteredStores.slice(d, c)
                }, a.onFilterChange = function () {
                    return a.select(1), a.currentPage = 1, a.row = ""
                }, a.onNumPerPageChange = function () {
                    return a.select(1), a.currentPage = 1
                }, a.onOrderChange = function () {
                    return a.select(1), a.currentPage = 1
                }, a.search = function () {
                    return a.filteredStores = b("filter")(a.stores, a.searchKeywords), a.onFilterChange()
                }, a.order = function (c) {
                    return a.row !== c ? (a.row = c, a.filteredStores = b("orderBy")(a.stores, c), a.onOrderChange()) : void 0
                }, a.numPerPageOpt = [3, 5, 10, 20], a.numPerPage = a.numPerPageOpt[2], a.currentPage = 1, a.currentPageStores = [], (c = function () {
                    return a.search(), a.select(a.currentPage)
                })()
            }
            angular.module("app.table").controller("tableCtrl", ["$scope", "$filter", a])
        }(),
        function () {
            "use strict";

            function a(a, b) {
                a.start = function () {
                    b.start()
                }, a.inc = function () {
                    b.inc()
                }, a.set = function () {
                    b.set(.3)
                }, a.complete = function () {
                    b.complete()
                }
            }

            function b(a, b) {
                a.notify = function (a) {
                    switch (a) {
                        case "info":
                            return b.log("Heads up! This alert needs your attention, but it's not super important.");
                        case "success":
                            return b.logSuccess("Well done! You successfully read this important alert message.");
                        case "warning":
                            return b.logWarning("Warning! Best check yo self, you're not looking too good.");
                        case "error":
                            return b.logError("Oh snap! Change a few things up and try submitting again.")
                    }
                }
            }

            function c(a) {
                a.alerts = [{
                        type: "success",
                        msg: "Well done! You successfully read this important alert message."
                    }, {
                        type: "info",
                        msg: "Heads up! This alert needs your attention, but it is not super important."
                    }, {
                        type: "warning",
                        msg: "Warning! Best check yo self, you're not looking too good."
                    }, {
                        type: "danger",
                        msg: "Oh snap! Change a few things up and try submitting again."
                    }], a.addAlert = function () {
                    var b, c;
                    switch (b = Math.ceil(4 * Math.random()), c = void 0, b) {
                        case 0:
                            c = "info";
                            break;
                        case 1:
                            c = "success";
                            break;
                        case 2:
                            c = "info";
                            break;
                        case 3:
                            c = "warning";
                            break;
                        case 4:
                            c = "danger"
                    }
                    return a.alerts.push({
                        type: c,
                        msg: "Another alert!"
                    })
                }, a.closeAlert = function (b) {
                    return a.alerts.splice(b, 1)
                }
            }

            function d(a) {
                a.max = 200, a.random = function () {
                    var b, c;
                    c = Math.floor(100 * Math.random() + 10), b = void 0, b = 25 > c ? "success" : 50 > c ? "info" : 75 > c ? "warning" : "danger", a.showWarning = "danger" === b || "warning" === b, a.dynamic = c, a.type = b
                }, a.random()
            }

            function e(a) {
                a.oneAtATime = !0, a.groups = [{
                        title: "Dynamic Group Header - 1",
                        content: "Dynamic Group Body - 1"
                    }, {
                        title: "Dynamic Group Header - 2",
                        content: "Dynamic Group Body - 2"
                    }, {
                        title: "Dynamic Group Header - 3",
                        content: "Dynamic Group Body - 3"
                    }], a.items = ["Item 1", "Item 2", "Item 3"], a.status = {
                    isFirstOpen: !0,
                    isFirstOpen1: !0
                }, a.addItem = function () {
                    var b;
                    b = a.items.length + 1, a.items.push("Item " + b)
                }
            }

            function f(a) {
                a.isCollapsed = !1
            }

            function g(a, b, c) {
                a.items = ["item1", "item2", "item3"], a.animationsEnabled = !0, a.open = function (d) {
                    var e = b.open({
                        animation: a.animationsEnabled,
                        templateUrl: "myModalContent.html",
                        controller: "ModalInstanceCtrl",
                        size: d,
                        resolve: {
                            items: function () {
                                return a.items
                            }
                        }
                    });
                    e.result.then(function (b) {
                        a.selected = b
                    }, function () {
                        c.info("Modal dismissed at: " + new Date)
                    })
                }, a.toggleAnimation = function () {
                    a.animationsEnabled = !a.animationsEnabled
                }
            }

            function h(a, b, c) {
                a.items = c, a.selected = {
                    item: a.items[0]
                }, a.ok = function () {
                    b.close(a.selected.item)
                }, a.cancel = function () {
                    b.dismiss("cancel")
                }
            }

            function i(a) {
                a.totalItems = 64, a.currentPage = 4, a.setPage = function (b) {
                    a.currentPage = b
                }, a.maxSize = 5, a.bigTotalItems = 175, a.bigCurrentPage = 1
            }

            function j(a) {
                a.tabs = [{
                        title: "Dynamic Title 1",
                        content: "Dynamic content 1.  Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
                    }, {
                        title: "Disabled",
                        content: "Dynamic content 2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
                        disabled: !0
                    }], a.navType = "pills"
            }

            function k(a) {
                a.list = [{
                        id: 1,
                        title: "Item 1",
                        items: []
                    }, {
                        id: 2,
                        title: "Item 2",
                        items: [{
                                id: 21,
                                title: "Item 2.1",
                                items: [{
                                        id: 211,
                                        title: "Item 2.1.1",
                                        items: []
                                    }, {
                                        id: 212,
                                        title: "Item 2.1.2",
                                        items: []
                                    }]
                            }, {
                                id: 22,
                                title: "Item 2.2",
                                items: [{
                                        id: 221,
                                        title: "Item 2.2.1",
                                        items: []
                                    }, {
                                        id: 222,
                                        title: "Item 2.2.2",
                                        items: []
                                    }]
                            }]
                    }, {
                        id: 3,
                        title: "Item 3",
                        items: []
                    }, {
                        id: 4,
                        title: "Item 4",
                        items: [{
                                id: 41,
                                title: "Item 4.1",
                                items: []
                            }]
                    }, {
                        id: 5,
                        title: "Item 5",
                        items: []
                    }, {
                        id: 6,
                        title: "Item 6",
                        items: []
                    }, {
                        id: 7,
                        title: "Item 7",
                        items: []
                    }], a.selectedItem = {}, a.options = {}, a.remove = function (a) {
                    a.remove()
                }, a.toggle = function (a) {
                    a.toggle()
                }, a.newSubItem = function (a) {
                    var b;
                    b = a.$modelValue, b.items.push({
                        id: 10 * b.id + b.items.length,
                        title: b.title + "." + (b.items.length + 1),
                        items: []
                    })
                }
            }

            function l(a, b, c) {
                var d, e;
                for (e = [], d = 0; 8 > d; )
                    e[d] = new google.maps.Marker({
                        title: "Marker: " + d
                    }), d++;
                a.GenerateMapMarkers = function () {
                    var b, c, f, g, h;
                    for (b = new Date, a.date = b.toLocaleString(), h = Math.floor(4 * Math.random()) + 4, d = 0; h > d; )
                        c = 43.66 + Math.random() / 100, f = -79.4103 + Math.random() / 100, g = new google.maps.LatLng(c, f), e[d].setPosition(g), e[d].setMap(a.map), d++
                }, c(a.GenerateMapMarkers, 2e3)
            }
            angular.module("app.ui").controller("LoaderCtrl", ["$scope", "cfpLoadingBar", a]).controller("NotifyCtrl", ["$scope", "logger", b]).controller("AlertDemoCtrl", ["$scope", c]).controller("ProgressDemoCtrl", ["$scope", d]).controller("AccordionDemoCtrl", ["$scope", e]).controller("CollapseDemoCtrl", ["$scope", f]).controller("ModalDemoCtrl", ["$scope", "$uibModal", "$log", g]).controller("ModalInstanceCtrl", ["$scope", "$uibModalInstance", "items", h]).controller("PaginationDemoCtrl", ["$scope", i]).controller("TabsDemoCtrl", ["$scope", j]).controller("TreeDemoCtrl", ["$scope", k]).controller("MapDemoCtrl", ["$scope", "$http", "$interval", l])
        }(),
        function () {
            "use strict";

            function a() {
                function a(a, b) {
                    var c, d;
                    d = function () {
                        var a, e, f, g, h, i;
                        return i = new Date, a = i.getHours(), e = i.getMinutes(), f = i.getSeconds(), e = c(e), f = c(f), h = a + ":" + e + ":" + f, b.html(h), g = setTimeout(d, 500)
                    }, c = function (a) {
                        return 10 > a && (a = "0" + a), a
                    }, d()
                }
                var b = {
                    restrict: "A",
                    link: a
                };
                return b
            }

            function b() {
                return {
                    restrict: "A",
                    compile: function (a, b) {
                        return a.on("click", function (a) {
                            return a.stopPropagation()
                        })
                    }
                }
            }

            function c() {
                return {
                    restrict: "A",
                    link: function (a, b, c) {
                        return b.slimScroll({
                            height: c.scrollHeight || "100%"
                        })
                    }
                }
            }

            function d() {
                return {
                    restrict: "A",
                    link: function (a, b, c) {
                        return Holder.run({
                            images: b[0]
                        })
                    }
                }
            }
            angular.module("app.ui").directive("uiTime", a).directive("uiNotCloseOnClick", b).directive("slimScroll", c).directive("imgHolder", d)
        }(),
        function () {
            "use strict";

            function a() {
                var a;
                return toastr.options = {
                    closeButton: !0,
                    positionClass: "toast-bottom-right",
                    timeOut: "3000"
                }, a = function (a, b) {
                    return toastr[b](a)
                }, {
                    log: function (b) {
                        a(b, "info")
                    },
                    logWarning: function (b) {
                        a(b, "warning")
                    },
                    logSuccess: function (b) {
                        a(b, "success")
                    },
                    logError: function (b) {
                        a(b, "error")
                    }
                }
            }
            angular.module("app.ui").factory("logger", a)
        }();