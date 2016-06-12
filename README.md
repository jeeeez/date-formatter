# Date Formatter
日期格式化函数

## build
```bash
npm run build
```

## Usage
```javascript
import dateFormatter from 'date-formatter';

Date.prototype.format=function(format){
    return dateFormatter(this, format);
}
new Date().format('yyyy-MM-dd hh:mm:ss');
// or

dateFormatter(new Date(), 'yyyy-MM-dd hh:mm:ss');
```

## Options
+ y year
+ M month
+ d date
+ h hour
+ m minute
+ s second
+ S millisecond
