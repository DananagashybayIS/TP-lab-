let count = 0;

export function increase() {
    count++;
    return count;
}

export function decrease() {
    count--;
    return count;
}

export function reset() {
    count = 0;
    return count;
}

export function getCount() {
    return count;
}
