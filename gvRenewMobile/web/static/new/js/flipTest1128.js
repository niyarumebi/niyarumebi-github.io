var TimeDeal = {
    endDateObj: new Date(),

    init: function () {
        this.endDateObj.setHours(18);
        this.endDateObj.setMinutes(0);
        this.endDateObj.setSeconds(0);
    },

    getRemainedTime: function () {
        var second = 0;

        var nowDate = new Date();

        second += this.endDateObj.getHours() * 3600;
        second += this.endDateObj.getMinutes() * 60;
        second += this.endDateObj.getSeconds();

        console.log(nowDate);
        return second - nowDate.getHours() * 3600 - nowDate.getMinutes() * 60 - nowDate.getSeconds() - 1;
    },
};

$(document).ready(function () {
    TimeDeal.init();
    var remainedTime = TimeDeal.getRemainedTime();
    console.log(remainedTime);

    if (remainedTime <= 3600 && remainedTime >= 0) {
        var clock = new FlipClock($('.flip-clock'), remainedTime, {
            countdown: true,
            autoPlay: true,

            callbacks: {
                interval: function () {
                },
                stop: function () {
                    alert('이벤트가 종료 됬습니다. 참여해주셔서 감사합니다.');
                    location.reload();
                }
            }
        });
    } else {
        var clock = new FlipClock($('.flip-clock'), 0, {
            countdown: true,
            autoPlay: true,
        });
    }
});