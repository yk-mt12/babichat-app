
function formatDate (date: any, format: any) {
    const sendTime = date.toDate()

    format = format.replace(/yyyy/g, sendTime.getFullYear());
    format = format.replace(/MM/g, ('0' + (sendTime.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + sendTime.getDate()).slice(-2));
    format = format.replace(/HH/g, ('0' + sendTime.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + sendTime.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + sendTime.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + sendTime.getMilliseconds()).slice(-3));
    return format;
}

export default formatDate