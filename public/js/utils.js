function formatDateSingle(date) {
    var d = new Date(date);
    return d.toDateString().slice(3, 10) + " at " + d.toTimeString().slice(0, 5);
}