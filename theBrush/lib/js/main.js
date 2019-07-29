function onClick()
{
    document.getElementById("rengar").src = "assets/rengar.png";
    alert("youve been deleted");
}

const documentElement = document.querySelector("#rengar");
documentElement.addEventListener('click', onClick());