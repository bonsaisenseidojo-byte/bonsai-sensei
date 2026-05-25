document.addEventListener("DOMContentLoaded", () => {

    // BUTTON ACTIONS
    const dojoBtn = document.querySelector(".btn-primary");
    const trainBtn = document.querySelector(".btn-secondary");

    dojoBtn.addEventListener("click", () => {
        document.querySelector("#species").scrollIntoView({
            behavior: "smooth"
        });
    });

    trainBtn.addEventListener("click", () => {
        document.querySelector("#tracker").scrollIntoView({
            behavior: "smooth"
        });
    });

    // SIMPLE AI SENSEI
    const askBtn = document.querySelector("#askBtn");

    askBtn.addEventListener("click", () => {

        const question = document.querySelector("#question").value.toLowerCase();

        const response = document.querySelector("#response");

        if(question.includes("yellow")){
            response.innerHTML =
            "Your bonsai may be overwatered or lacking sunlight.";
        }

        else if(question.includes("brown")){
            response.innerHTML =
            "Brown leaves can indicate underwatering or heat stress.";
        }

        else if(question.includes("dropping")){
            response.innerHTML =
            "Leaf drop may be caused by stress, improper watering, or sudden environmental change.";
        }

        else if(question.includes("juniper")){
            response.innerHTML =
            "Junipers need outdoor sunlight and should not stay indoors long term.";
        }

        else if(question.includes("bald cypress")){
            response.innerHTML =
            "Bald Cypress bonsai love water and thrive in humid environments.";
        }

        else{
            response.innerHTML =
            "AI Sensei is still training. Try asking about watering, yellow leaves, Juniper, or Bald Cypress.";
        }

    });

});
