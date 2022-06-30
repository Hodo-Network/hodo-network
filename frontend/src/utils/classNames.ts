// TODO: no longer used
// Replaced with clsx
export default function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}