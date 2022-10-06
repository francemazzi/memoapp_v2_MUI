const SetCookie = (name, value, days = 7, path = "/") => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  //Cookie value
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    "; path=" +
    path;
};

const GetCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
};

const DeleteCookie = (name, path) => {
  SetCookie(name, "", -1, path);
  alert("Cookies eliminati 🍪");
};
export { SetCookie, GetCookie, DeleteCookie };
