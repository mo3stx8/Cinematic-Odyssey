function Theme()
{
    var icon=document.getElementById("icon");
    icon.onclick=function()
    {
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme"))
        {
            icon.src="icon/sun (1).png";
        }
        else
        {
            icon.src="icon/moon.png";
        }
    }
}
