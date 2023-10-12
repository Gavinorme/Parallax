const toggleNav = () =>
{
    document.getElementById("hamburger").classList.toggle("hidden");
}


window.onload = () =>
{
    document.getElementById("hamburger").onclick = toggleNav;
}
