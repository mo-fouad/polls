function fixDate(dateString) {
    let days = dateString.split("T")[0].split("-").join(" / ")
    let hours = dateString.split("T")[1].split(":");
    return days + " - " + hours[0] + ":" + hours[1]
}

export default fixDate