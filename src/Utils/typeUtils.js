
export default function isDefined(object: any) {
    if (typeof (object) !== 'undefined' || object != null) {
        return true;
    }
    return false;
}
