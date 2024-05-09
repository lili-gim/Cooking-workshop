function contactInfo() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let h1 = document.querySelector("h1");
  let format = prompt("Will you join the cooking workshop online or onsite?")
    .toLowerCase()
    .trim();
  if (format === "online") {
    h1.innerHTML = "Hello " + name + "! See you at the workshop💻👩‍🍳";
  } else {
    h1.innerHTML = "Hello " + name + "! See you at the workshop👩‍🍳";
  }
}

let joinButton = document.querySelector("button");
joinButton.addEventListener("click", contactInfo);
