let btnSearch = document.getElementById("btnSearch");
let barre = document.getElementById("bar");

btnSearch.addEventListener("click", doSearch);

barre.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode == 13) {
        doSearch();
    }
}

function doSearch() {
  if (barre.value != '') {
    let debut = "https://www.google.com/search?q=";
    let milieu = "&sxsrf=ALiCzsZZ_RvSYctFYnGOxHYSBykT6MlWSw%3A1651670232165&source=hp&ei=2HxyYufJB9KSa5W-lpAL&iflsig=AJiK0e8AAAAAYnKK6B_hRrs4jDMOXJQpjxv4s55Pmh5G&ved=0ahUKEwjnleOL98X3AhVSyRoKHRWfBbIQ4dUDCAc&uact=5&oq=";
    let fin = "&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBOgcIIxDqAhAnOgQIIxAnOgQIABBDOgUIABCABDoLCC4QgAQQxwEQ0QM6CwguEIAEEMcBEKMCOggILhCABBDUAjoOCC4QgAQQxwEQ0QMQ1AI6BQguEIAEOgcIABCABBAKOgsIABCABBAKEAEQKjoJCAAQgAQQChABOgQIABAKOgQILhAKOggIABAFEAoQHjoECAAQDToGCAAQDRAKOgQILhANOg4ILhCABBDHARCjAhDUAlDtAljZ3UBgxd5AaANwAHgBgAHBAYgB3xWSAQQ3LjE2mAEAoAEBsAEK&sclient=gws-wiz";
    let research = barre.value.replace(/\s+/g, '+');
    let url = debut + research + milieu + research + fin;
    document.location.href = url;
    console.log(url);
  }
}
