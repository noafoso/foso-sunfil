const formatNumber = (num: number): string => {
    // Làm tròn số và chuyển thành chuỗi
    let roundedNumber = Math.round(num).toString();

    // Sử dụng regex để thêm dấu phân cách hàng nghìn
    roundedNumber = roundedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return roundedNumber;
};

const formatNumberNoRounding = (num: number): string => {
    // Làm tròn số và chuyển thành chuỗi
    // Sử dụng regex để thêm dấu phân cách hàng nghìn
    const roundedNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return roundedNumber;
};

//  format số đến hàng ngàn (vdu: 300k)
const FormatNumberToThousands = (number: number): string => {
    if (number >= 1000) {
        return (number / 1000)?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "k";
    } else {
        // return number?.toString();
        return (number / 1000)?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "k";
    }
};

const FormatOnlyNumberToThousands = (number: number): string => {
    if (number >= 1000) {
        return (number / 1000)?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return number?.toString();
    }
};

// format 3 số là có dấu ","
const FormatNumberComma = (number: number): string => {
    // Lấy phần nguyên của số
    const integerPart = Math.floor(number);

    // Chuyển đổi thành chuỗi và thêm dấu phẩy ngăn cách hàng nghìn
    return integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
// format 3 số là có dấu ",," và thêm + hoặc - phía trước
const FormatNumberCommaAndPlusOrMinus = (number: number) => {
    const absNumber = Math.abs(number);
    // const formattedNumber = new Intl.NumberFormat('de-DE').format(absNumber);
    const formattedNumber = new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    })
        .format(absNumber)
        .replace(/\./g, ",");

    if (number < 0) {
        return `- ${formattedNumber}`;
    } else if (number > 0) {
        return `+ ${formattedNumber}`;
    }
    return formattedNumber;
};

// format 3 số là có dấu "."
const FormatNumberDot = (number: number): string => {
    return Math.round(number)
        ?.toString()
        ?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// format 3 số là có dấu "." và thêm + hoặc - phía trước
const FormatNumberDotAndPlusOrMinus = (number: number) => {
    const absNumber = Math.abs(number);
    const formattedNumber = new Intl.NumberFormat("de-DE").format(absNumber);
    if (number < 0) {
        return `- ${formattedNumber}`;
    } else if (number > 0) {
        return `+ ${formattedNumber}`;
    }
    return formattedNumber;
};

// format 3 số là có dấu " "
const FormatNumberSpace = (number: number): string => {
    return Math.round(number)
        ?.toString()
        ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// format đã có làm tròn (3 số -> .)
const FormatNumberToDecimal = (number: number, decimalPlaces: number): string => {
    const roundedNumber = parseFloat(number.toFixed(decimalPlaces));
    return roundedNumber?.toString()?.replace(/\B(?=(\d{99})+(?!\d))/g, ".");
};

// format số sao yêu thích
const FormatPointStar = (number: number, decimalPlaces: number): string => {
    const stringNumber = number.toString();
    const decimalIndex = stringNumber.indexOf(".");

    if (decimalIndex !== -1 && stringNumber.length - decimalIndex - 1 > decimalPlaces) {
        return stringNumber.slice(0, decimalIndex + decimalPlaces + 1);
    } else {
        return stringNumber;
    }
};

// format đến giới hạn
const FormatMaxNumber = (number: number, max_number: number): string => {
    if (number >= max_number) {
        return `${max_number}`;
    } else {
        return number?.toString();
    }
};

// format số vượt quá max là "+"
const FormatNumberHundred = (number: number, max_number: number): string => {
    if (number >= max_number) {
        return `${max_number} +`;
    } else {
        return number?.toString();
    }
};

// format số điện thoại
const FormatPhoneNumber = (number: number | string, decimalPlaces?: number): string => {
    // Chuyển đổi số điện thoại thành chuỗi và loại bỏ tất cả các ký tự không phải là số
    const numberString = number.toString().replace(/\D/g, "");

    // Kiểm tra xem chuỗi số điện thoại có đủ độ dài không để áp dụng định dạng
    if (numberString.length < 10) {
        return numberString; // Trả về số điện thoại không định dạng nếu ngắn hơn 10 ký tự
    }

    // Tạo chuỗi số điện thoại với định dạng
    const formattedNumber = numberString.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");

    return formattedNumber;
};

// formart trang my trip
const FormatCurrency = (amount: any) => {
    // Chuyển số tiền sang chuỗi
    var amountString = amount.toString();

    // Chèn dấu phẩy sau mỗi 3 chữ số từ phải qua trái, trừ chữ số đầu tiên nếu số tiền có hơn 3 chữ số
    for (var i = amountString.length - 3; i > 0; i -= 3) {
        amountString = amountString.slice(0, i) + " " + amountString.slice(i);
    }

    // Thêm ký hiệu tiền tệ 'đ' vào cuối chuỗi
    amountString += "đ";

    return amountString;
};

// format số km & số m
const FormatDistance = (distance: number) => {
    if (distance >= 1000) {
        // Nếu lớn hơn hoặc bằng 1000, chuyển đổi thành km
        return (distance / 1000).toFixed(1) + "km";
    } else {
        // Nếu bé hơn 1000, giữ nguyên là m
        return Math.round(distance) + "m";
    }
};

// format full km
const FormatDistanceFullKm = (distance: number) => {
    if (distance >= 1000) {
        // Nếu lớn hơn hoặc bằng 1000, chuyển đổi thành km và giữ 1 chữ số thập phân
        return (distance / 1000).toFixed(1) + "km";
    } else {
        // Nếu bé hơn 1000, chuyển đổi thành km và giữ 3 chữ số thập phân
        return (distance / 1000).toFixed(3) + "km";
    }
};

// format bỏ dấu "," trong chuỗi string
const FormatOriginalString = (value: string) => {
    return value?.replace(/[.,]/g, "");
};

// format %
const FormatPercentage = (value: number): string => {
    // Nếu giá trị lớn hơn 100 thì đặt giá trị bằng 100
    if (value > 100) {
        value = 100;
    }

    // Định dạng giá trị với tối đa hai chữ số thập phân
    const formattedValue = value.toFixed(2);

    // Loại bỏ chữ số 0 ở cuối nếu không cần thiết
    return `${parseFloat(formattedValue)}%`;
};
const FormatPercentageNoLimit = (value: number): string => {
    // Định dạng giá trị với tối đa hai chữ số thập phân
    const formattedValue = value.toFixed(2);

    // Loại bỏ chữ số 0 ở cuối nếu không cần thiết
    return `${parseFloat(formattedValue)}%`;
};

export {
    formatNumber,
    formatNumberNoRounding,
    FormatNumberToThousands,
    FormatOnlyNumberToThousands,
    FormatOriginalString,
    FormatNumberDot,
    FormatNumberDotAndPlusOrMinus,
    FormatNumberToDecimal,
    FormatPointStar,
    FormatNumberHundred,
    FormatPhoneNumber,
    FormatCurrency,
    FormatDistance,
    FormatDistanceFullKm,
    FormatNumberComma,
    FormatNumberCommaAndPlusOrMinus,
    FormatNumberSpace,
    FormatPercentage,
    FormatPercentageNoLimit,
    FormatMaxNumber,
};
