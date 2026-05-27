const form = document.getElementById("email-form");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const name = document
    .getElementById("name")
    .value
    .trim();

  const email = document
    .getElementById("email")
    .value
    .trim()
    .toLowerCase();

  try {

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyG5DTQIJhG-tbp6EH6VshlZC3_KiFPb4TqiQcdcVSWJQKssCXDRdDPfKwJTGGKDbbf/exec",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          email
        })
      }
    );

    const result = await response.json();

    if (result.success) {

      alert("Successfully registered!");
      form.reset();

    } else {

      alert(result.message);

    }

  } catch (error) {

    console.error(error);
    alert("Something went wrong.");

  }

});