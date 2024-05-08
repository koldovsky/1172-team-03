const form = document.getElementById("book-a-trip-form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("book-a-trip-form-status");
    const response = await fetch(event.target.action, {
        method: form.method,
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
      status.className = "successful-message";
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    } else {
      status.className = "error-message";
      status.innerHTML = "ERROR";
    }
    setTimeout(() => status.innerHTML = null , 3000);
}
form.addEventListener("submit", handleSubmit);