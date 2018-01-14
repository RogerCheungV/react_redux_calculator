export function GetFirstNum(num) {
    num = parseInt(num);
    return {
        type: 'GetFirstNum',
        payload: num
    }
}

export function GetSecondNum(num) {
    num = parseInt(num);
    return {
        type: 'GetSecondNum',
        payload: num
    }
}

export function GetCalType(type) {
    return {
        type: 'GetCalType',
        payload: type
    }
}

export function GetResult(result) {
    return {
        type: 'GetResult',
        payload: result
    }
}
