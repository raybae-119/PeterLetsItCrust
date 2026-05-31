/* ========================= */
/* CONTACT FORM */
/* ========================= */

const contactForm =
  document.getElementById("contact-form");

contactForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const name =
      document.getElementById("contact-name")
      .value
      .trim();

    const email =
      document.getElementById("contact-email")
      .value
      .trim()
      .toLowerCase();

    const phone =
      document.getElementById("contact-phone")
      .value
      .trim();

    const issue =
      document.getElementById("contact-issue")
      .value
      .trim();

    try {

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzIDUrvoBL8RVwHfV9I29vcVXs9QJmuu3bPAN0drs4ffSRx0x4RsJqC63wn3SxXnJXaCg/exec",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name,
            email,
            phone,
            issue
          })
        }
      );

      const result =
        await response.json();

      if (result.success) {

        alert(
          "Request submitted successfully!"
        );

        contactForm.reset();

      } else {

        alert(
          result.message ||
          "Unable to submit request."
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Something went wrong. Please try again."
      );

    }

  }
);