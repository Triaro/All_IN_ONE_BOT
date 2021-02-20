module.exports = async function (username) {
    var lno=0;
    for(var i=0;i<username.length;i++)
       lno+=username.charCodeAt(i)-96;
    lno = Math.abs(parseInt(lno%10)-parseInt(lno/10));   
    return lno;
}