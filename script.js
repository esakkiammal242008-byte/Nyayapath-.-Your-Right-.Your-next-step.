const nav = document.getElementById("navMenu");

function toggleMenu() {
  nav.classList.toggle("active");
}


// SEARCH

function searchTopics() {

  const search =
    document
      .getElementById("search")
      .value
      .toLowerCase();

  const cards =
    document.querySelectorAll(".card");


  cards.forEach(card => {

    const name =
      card.dataset.name.toLowerCase();

    if (name.includes(search)) {

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

}


// TOPIC DATA

const topics = {

  "Consumer Rights":

    "Keep your bill, order details, warranty information, photographs and communication with the seller. Depending on the issue, you may first contact the seller or service provider and then explore an appropriate consumer grievance route.",


  "Cyber Safety":

    "Preserve screenshots, transaction details, messages, phone numbers and dates. If money or accounts are involved, contact the relevant financial service provider quickly and use an appropriate official reporting channel.",


  "Workplace Rights":

    "Keep employment documents, notices, messages and a clear record of important events. The appropriate route depends on the nature of the workplace issue and applicable law or policy.",


  "Women & Safety":

    "Prioritize immediate personal safety. Preserve relevant evidence when safe to do so and consider an appropriate support or reporting route based on the circumstances.",


  "Property & Housing":

    "Keep agreements, receipts, notices, photographs and communication records. Property and tenancy issues can depend on the agreement and applicable local law.",


  "Student Rights":

    "Keep admission records, fee receipts, institutional communications and other relevant documents. The appropriate route depends on the nature of the academic or administrative issue."

};


// OPEN MODAL

function openTopic(topic) {

  document.getElementById("modalTitle")
    .innerText = topic;


  document.getElementById("modalDescription")
    .innerText =
      topics[topic] ||
      "Explore the relevant information and consider professional advice for your specific situation.";


  document
    .getElementById("modal")
    .classList.add("active");
}


// CLOSE MODAL

function closeTopic() {

  document
    .getElementById("modal")
    .classList.remove("active");

}


// CLOSE WHEN CLICKING OUTSIDE

document
  .getElementById("modal")
  .addEventListener("click", function(event) {

    if (event.target === this) {

      closeTopic();

    }

  });


// ESCAPE KEY

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      closeTopic();

    }

  }
);
