/**
 * Constructs uri parameters from an object
 * @private
 * @param input The input object
 */
 export function objectToURI(input: {[key: string]: string | number | boolean} | any): string {
    let res = "?"
    const keys = Object.keys(input)
    keys.forEach((key, index) => {
        res += encodeURIComponent(key) + "=" + encodeURIComponent(input[key])
        if (index + 1 != keys.length) res += "&"
    })
    return res
}

/**
 * Returns a promise that resolves after x ms
 * @private
 * @param ms time to sleep for
 */
export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}