const analyze = (array) => {
    const average =  (() => {
        const sum = array.reduce((prev, next) => {
            let a = parseInt(prev);
            let b = parseInt(next);
            return a+=b;
        }, 0);
        return sum/array.length;
    })();

    const min = (() => {
        array.sort((first, second) => {
            let a = parseInt(first);
            let b = parseInt(second);
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        })
        return array[0];
    })();

    const max = (() => {
        array.sort((first, second) => {
            let a = parseInt(first);
            let b = parseInt(second);
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        })
        return array[array.length - 1];
    })()

    const length = array.length;

    return {
        average,
        min,
        max,
        length,
    }
}


module.exports = analyze;