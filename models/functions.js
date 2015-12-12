function makeLinkName(name) {
    return name.replace(/ /g, "-");
}



module.exports = {
    makeLinkName: makeLinkName
};