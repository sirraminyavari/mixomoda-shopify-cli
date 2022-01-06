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

export const isUrl = (str) => !str || /(((https?)|(ftp)):\/\/[^\s<>]+)/ig.test(str);


const imageIds = [
    100, 101, 1000, 1008, 1011, 1012, 1015, 1016, 1018, 1020, 1021,
    1024, 103, 1037, 1039, 1043, 1044, 1059, 106, 1065, 1067, 1070,
    1084, 110, 111, 118, 122, 129, 127, 133, 132, 136, 137, 139, 142,
    144, 145, 146, 15, 155, 157, 160, 164, 163, 169, 168, 17, 171
];

export const randomImageUrl = () => "https://picsum.photos/id/" + 
    imageIds[random(0, imageIds.length - 1)] + "/400/400";