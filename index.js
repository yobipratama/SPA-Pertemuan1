const linkHome = document.getElementById("Link-home");
const linkAbout = document.getElementById("Link-about");
const root = document.getElementById("root");

linkHome.onclick = function (event){
    event.preventDefault();
    const homeScreen = HomeScreen();
    root.innerHTML = "";
    root.append(homeScreen); 
    history.pushState(null, "", event.target.href);
};

linkAbout.onclick = function (event){
    event.preventDefault();
    root.textContent = "Welcome to About";
    history.pushState(null, "", event.target.href);
};

function HomeScreen() { 
    const input = document.createElement("input");
    input.placeholder = "Enter your name"; 

    const textPreview = document.createElement("p");
    textPreview.textContent = "Hello";
    
    const div = document.createElement("div");
    div.append(input); 
    div.append(textPreview); 

    return div;
}

if (location.hash == "#about") {
    root.textContent = "Welcome to About";
} else if (location.hash == "#home") {
    root.textContent = "Welcome to  Home";
}