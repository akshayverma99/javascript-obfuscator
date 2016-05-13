export class Utils {
    /**
     * @param array
     * @param times
     * @param reverse
     * @returns any[]
     */
    public static arrayRotate (array: any[], times: number, reverse: boolean = false): any[] {
        if (times < 0) {
            return;
        }

        let newArray: any[] = array,
            temp: any;

        while (times--) {
            if (!reverse) {
                temp = newArray.pop();
                newArray.unshift(temp);
            } else {
                temp = newArray.shift();
                newArray.push(temp);
            }
        }

        return newArray;
    }

    /**
     * @param dec
     * @returns {string}
     */
    public static decToHex(dec: number): string {
        return (dec + Math.pow(16, 6)).toString(16).substr(-6);
    }

    /**
     * @param min
     * @param max
     * @returns {number}
     */
    public static getRandomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * @param length
     * @returns any
     */
    public static getRandomVariableName (length: number = 6): string {
        const prefix = '_0x';

        return `${prefix}${(Utils.decToHex(Utils.getRandomInteger(10000, 99999999))).substr(0, length)}`;
    }

    /**
     * @param string
     * @returns {string}
     */
    public static stringToUnicode (string: string): string {
        return `'${string.replace(/[\s\S]/g, (escape) => {
            return `\\u${('0000' + escape.charCodeAt(0).toString(16)).slice(-4)}`;
        })}'`;
    }
}