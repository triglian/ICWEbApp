function formatDateSingle(date) {
    var d = new Date(date);
    console.log(d.toDateString());
    console.log(d.toTimeString());
    return d.toDateString().slice(3, 10) + " - " + d.toTimeString().slice(0, 5);
}