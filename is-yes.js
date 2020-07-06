function isYes(text) {
    text = text.toLowerCase();
    if (text.charAt(0) === 'y') {
        return true
    } else return false;
}


export default isYes;