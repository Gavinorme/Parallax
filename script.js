const toggleNav = () =>
{
    document.getElementById("nav-list").classList.toggle("hidden");
}


window.onload = () =>
{
    document.getElementById("hamburger").onclick = toggleNav;
}
