export const getType = ((value) => {
    var f = (function () { }).constructor;
    var j = ({}).constructor;
    var a = ([]).constructor;
    var s = ("gesi").constructor;
    var n = (2).constructor;
    var b = (true).constructor;
    var t = (new Date()).constructor;

    return function (value) {
        if (value === null) return "null";
        else if (value === undefined) return "undefined";

        switch (value.constructor) {
            case f:
                return "function";
            case j:
                return "json";
            case a:
                return "array";
            case s:
                return "string";
            case n:
                return "number";
            case b:
                return "boolean";
            case t:
                return "datetime";
            default:
                return String(typeof (value));
        }
    }
})();


export const random = (min, max) => {
    if (!min || isNaN(min)) min = 0;
    if ((max !== 0) && (!max || isNaN(max))) max = 9999999999;
    if (max < min) { var t = min; min = max; max = t; }
    if (min == max) return min;
    var lnt = String(max).length;
    return (Number((Math.random() * Math.pow(10, lnt + 1)).toFixed(0)) % (max - min + 1)) + min;
};

export const isUrl = (str) => /(((https?)|(ftp)):\/\/[^\s<>]+)/ig.test(str);