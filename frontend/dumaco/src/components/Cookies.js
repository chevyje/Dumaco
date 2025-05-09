export function SetCookies(cname, cvalue, expireHours) {
    const d = new Date();
    d.setHours(d.getHours() + expireHours);
    let expiryDate = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + expiryDate + ";path=/";
}

export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}