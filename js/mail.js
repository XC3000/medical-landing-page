function sendEmail(name, email, phone, year) {
  if (name === "" || email === "" || phone === "" || year === "") {
    alert("fields cannot be empty");
    return;
  }

  Email.send({
    Host: "smtp.gmail.com",
    Username: "imsbizschoolform@gmail.com",
    Password: "imsbizschool123",
    To: "imsbizschoolform@gmail.com",
    From: "imsbizschoolform@gmail.com",
    Subject: "Register",
    Body: `
         Name: ${name} <br />
         Email: ${email} <br />
         Phone: ${phone} <br />
         Year: ${year} <br />
      `,
  }).then(function (message) {
    alert("mail sent successfully");
  });
}

document
  .getElementById("submitModalRegister")
  .addEventListener("click", function () {
    console.log("submit modal register");
    var name = document.getElementById("registerModalName").value;
    var email = document.getElementById("registerModalEmail").value;
    var phone = document.getElementById("registerModalPhone").value;
    var year = document.getElementById("registerModalYear").value;
    sendEmail(name, email, phone, year);
  });

document
  .getElementById("homepageSubmitBtn")
  .addEventListener("click", function () {
    console.log("homepage submmit");
    console.log(document.getElementById("homepagename").value);
    console.log(document.getElementById("homepageemail").value);
    console.log(document.getElementById("homepagephone").value);
    console.log(document.getElementById("homepageyear").value);

    var name = document.getElementById("homepagename").value;
    var email = document.getElementById("homepageemail").value;
    var phone = document.getElementById("homepagephone").value;
    var year = document.getElementById("homepageyear").value;
    sendEmail(name, email, phone, year);
  });

document
  .getElementById("submitModalEnquire")
  .addEventListener("click", function () {
    console.log("submmit modal eenquire submmit");

    var name = document.getElementById("enquireModalName").value;
    var email = document.getElementById("enquireModalEmail").value;
    var phone = document.getElementById("enquireModalPhone").value;
    var year = document.getElementById("enquireModalYear").value;
    sendEmail(name, email, phone, year);
  });

document
  .getElementById("downloadBrochureModalSubmit")
  .addEventListener("click", function () {
    console.log("submmit modal download brochure submmit");

    var name = document.getElementById("downloadBrochureName").value;
    var email = document.getElementById("downloadBrochureEmail").value;
    var phone = document.getElementById("downloadBrochurePhone").value;
    var year = document.getElementById("downloadBrochureYear").value;
    sendEmail(name, email, phone, year);
    window.location.href = "files/IMSBSProspectus21-23.pdf";
  });
