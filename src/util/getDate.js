function getDate(which){

    function getLastDay(year,month) {         
      var new_year = year;    //取当前的年份
      var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）
      if(month>12) {         
        new_month -=12;        //月份减
        new_year++;            //年份增
      }         
      var new_date = new Date(new_year,new_month,1);                //取当年当月中的第一天
      return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期
    }

    function getWeek(type) {
      var now = new Date;
      var day = now.getDay ();
      var week = [7,1,2,3,4,5,6];
      if (type == 'b') {
        return getDateByDateNum(1 - week[day])
      } else if (type == 'e') {
        return getDateByDateNum(7 - week[day])
      } else if(type == 'wek'){
          var arr=[]
          for(var i=0;i<week.length;i++){
           arr.push(getDateByDateNum(week[i] - week[day]))
          }
          return arr
      }
    }

    function getWeeked() {
      var now = new Date;
      var day = now.getDay ();
      var week = [1,2,3,4,5,6,7];
      var arr=[]
        for(var i=0;i<week.length;i++){
            
        arr.push(getStartAndEnd(getDateByDateNum(week[i] - week[day])))
        }
        return arr
    }

    function getStartAndEnd(data){
        var date = new Date(data)
        var dateStr=Date.parse(date)
        return {'start':dateStr,'end':dateStr+24*60*60*1000}
    }

    function getPreMonth(date) {
      var arr = date.split('-');
      var year = arr[0]; //获取当前日期的年份
      var month = arr[1]; //获取当前日期的月份
      var day = arr[2]; //获取当前日期的日
      var days = new Date(year, month, 0);
      days = days.getDate(); //获取当前日期中月的天数
      var year2 = year;
      var month2 = parseInt(month) - 1;
      if (month2 == 0) {
          year2 = parseInt(year2) - 1;
          month2 = 12;
      }
      var day2 = day;
      var days2 = new Date(year2, month2, 0);
      days2 = days2.getDate();
      if (day2 > days2) {
          day2 = days2;
      }
      if (month2 < 10) {
          month2 = '0' + month2;
      }
      var t2 = year2 + '-' + month2 + '-' + day2;
      return t2;
    }

    function getDateByDateNum(dateNum,dateString) {
      dateNum = dateNum || 0;
      var dd = dateString ? new Date(dateString) : new Date();
      dd.setDate(dd.getDate() + dateNum);
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1;
      var d = dd.getDate()
      return y + '-' + fix(m,2) + '-' + fix(d,2);
    };

    function getCurrentMonthFirst(){
      var date = new Date();
      date.setDate(1);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate()
      return y + '-' + fix(m,2) + '-' + fix(d,2);
    }

    function getCurrentMonthLast(){
      var date = new Date();
      var currentMonth = date.getMonth();
      var nextMonth =++currentMonth;
      var nextMonthFirstDay = new Date(date.getFullYear(),nextMonth,1);
      var oneDay = 1000*60*60*24;
      var dd = new Date(nextMonthFirstDay-oneDay)
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1;
      var d = dd.getDate()
      return y + '-' + fix(m,2) + '-' + fix(d,2);
    }

    function fix(num, length) {
      return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
    }


    var sy_b = getDateByDateNum(-1,getCurrentMonthFirst()).substr(0,7) + '-01';
    switch (which) {
      case 'jt'://今天
        return getDateByDateNum()
      case 'zt'://昨天
        return getDateByDateNum(-1)
      case 'bz_b'://获得本周的开始日期
        return getWeek('b')
      case 'bz_e'://获得本周的结束日期
        return getWeek('e')
      case 'bz_wek'://获得本周的结束日期
        return getWeeked()
      case 'sz_b'://获得上周的开始日期
        return getDateByDateNum(-7,getWeek('b'))
      case 'sz_e'://获得上周的结束日期
        return getDateByDateNum(-1,getWeek('b'))
      case 'by_b'://获得本月的开始日期
        return getCurrentMonthFirst()
      case 'by_e'://获得本月的结束日期
        return getCurrentMonthLast()
      case 'sy_b'://获得上月开始时间
        return sy_b
      case 'sy_e'://获得上月结束时间
        return getDateByDateNum(-1,getCurrentMonthFirst())
      case 'ssy_b'://获得上上月开始时间
        return getDateByDateNum(-1,sy_b).substr(0,7) + '-01';
      case 'ssy_e'://获得上上月结束时间
        return getDateByDateNum(-1,sy_b)
      default:
        return ''

    }

  }

  export default getDate