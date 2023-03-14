let holiday
let targetTime
let nextWorkDate
getNextWorkTime()
starter()
updateTime()
setInterval(function() {
    updateTime()
}, 1000)

function starter() {
    if (isWorkDay(new Date())) {
        startTime = new Date()
        startTime.setHours(9)
        startTime.setMinutes(0)
        startTime.setSeconds(0)

        endTime = new Date()
        endTime.setHours(18)
        endTime.setMinutes(0)
        endTime.setSeconds(0)

        nowTime = new Date()

        if (startTime <= nowTime && endTime >= nowTime) {
            document.getElementById("headline").innerText = "上班中，距离下班还有"
            targetTime = endTime
        } else {
            document.getElementById("headline").innerText = "已下班，距离下次上班还有"
            targetTime = nextWorkDate
            targetTime.setHours(9)
            targetTime.setMinutes(0)
            targetTime.setSeconds(0)
        }
    } else {
        document.getElementById("headline").innerText = "现在是" + holiday + "，距离下次上班还有"
        targetTime = nextWorkDate
        targetTime.setHours(9)
        targetTime.setMinutes(0)
        targetTime.setSeconds(0)
    }

}

function isWorkDay(now) {
    now.setHours(0)
    now.setMinutes(0)
    now.setSeconds(0)
    now.setMilliseconds(0)
    let holidays = [
        { "date": "2022-01-01 00:00:00", "name": "元旦" },
        { "date": "2022-01-02 00:00:00", "name": "元旦" },
        { "date": "2022-01-03 00:00:00", "name": "元旦" },
        { "date": "2022-01-31 00:00:00", "name": "春节" },
        { "date": "2022-02-01 00:00:00", "name": "春节" },
        { "date": "2022-02-02 00:00:00", "name": "春节" },
        { "date": "2022-02-03 00:00:00", "name": "春节" },
        { "date": "2022-02-04 00:00:00", "name": "春节" },
        { "date": "2022-02-05 00:00:00", "name": "春节" },
        { "date": "2022-02-06 00:00:00", "name": "春节" },
        { "date": "2022-04-03 00:00:00", "name": "清明节" },
        { "date": "2022-04-05 00:00:00", "name": "清明节" },
        { "date": "2022-04-06 00:00:00", "name": "清明节" },
        { "date": "2022-04-30 00:00:00", "name": "劳动节" },
        { "date": "2022-05-01 00:00:00", "name": "劳动节" },
        { "date": "2022-05-02 00:00:00", "name": "劳动节" },
        { "date": "2022-05-03 00:00:00", "name": "劳动节" },
        { "date": "2022-05-04 00:00:00", "name": "劳动节" },
        { "date": "2022-06-03 00:00:00", "name": "端午节" },
        { "date": "2022-06-04 00:00:00", "name": "端午节" },
        { "date": "2022-06-05 00:00:00", "name": "端午节" },
        { "date": "2022-09-10 00:00:00", "name": "中秋节" },
        { "date": "2022-09-11 00:00:00", "name": "中秋节" },
        { "date": "2022-09-12 00:00:00", "name": "中秋节" },
        { "date": "2022-10-01 00:00:00", "name": "国庆节" },
        { "date": "2022-10-02 00:00:00", "name": "国庆节" },
        { "date": "2022-10-03 00:00:00", "name": "国庆节" },
        { "date": "2022-10-04 00:00:00", "name": "国庆节" },
        { "date": "2022-10-05 00:00:00", "name": "国庆节" },
        { "date": "2022-10-06 00:00:00", "name": "国庆节" },
        { "date": "2022-10-07 00:00:00", "name": "国庆节" },
    ]

    let holiday_work = [
        { "date": "2022-01-29 00:00:00", "name": "春节调休" },
        { "date": "2022-01-30 00:00:00", "name": "春节调休" },
        { "date": "2022-04-01 00:00:00", "name": "清明节调休" },
        { "date": "2022-04-24 00:00:00", "name": "劳动节调休" },
        { "date": "2022-05-07 00:00:00", "name": "劳动节调休" },
        { "date": "2022-10-08 00:00:00", "name": "国庆节调休" },
        { "date": "2022-10-09 00:00:00", "name": "国庆节调休" },
    ]
    let flag = true
    if (now.getDay() === 6) {
        flag = false
        holiday = '周六'
    }
    if (now.getDay() === 0) {
        flag = false
        holiday = '周日'
    }
    for (let hol in holidays) {
        let temp = new Date(holidays[hol].date)
        if (temp.getTime() === now.getTime()) {
            flag = false
            holiday = holidays[hol].name
            break
        }
    }
    for (let hol in holiday_work) {
        let temp = new Date(holiday_work[hol].date)
        if (temp.getTime() === now.getTime()) {
            flag = true
            holiday = holidays[hol].name
            break
        }
    }
    return flag
}

function getNextWorkTime() {
    date = new Date()
    for (let i = 0; i < 100; i++) {
        date.setDate(date.getDate() + 1)
        if (isWorkDay(date)) {
            nextWorkDate = date
            return
        }
    }
}

function PrefixInteger(num, length) {
    return (num / Math.pow(10, length)).toFixed(length).substr(2);
}

function updateTime() {
    let nowTime = new Date()
    let offsetTime = targetTime.getTime() - nowTime.getTime()
    offsetTime = parseInt(offsetTime / 1000)
    let days = parseInt(offsetTime / (24 * 60 * 60))
    let hours = parseInt(offsetTime % (24 * 60 * 60) / (60 * 60))
    let minutes = parseInt(offsetTime % (60 * 60) / 60)
    let seconds = offsetTime % 60
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        getNextWorkTime()
        starter()
    }
    document.getElementById('days').innerText = PrefixInteger(days, 2)
    document.getElementById('hours').innerText = PrefixInteger(hours, 2)
    document.getElementById('minutes').innerText = PrefixInteger(minutes, 2)
    document.getElementById('seconds').innerText = PrefixInteger(seconds, 2)
}