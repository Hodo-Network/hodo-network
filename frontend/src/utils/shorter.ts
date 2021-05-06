// @param account address
// 0x0000000000000000000000000000000000000000
// @return 0x0000...0000
export default function shorter(str: string) {
    return str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str;
}
