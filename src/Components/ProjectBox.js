import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TindogDesc: "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/DevanshSahni/tindog",
    TindogWebsite: "https://devanshsahni.github.io/tindog/",

    RogFreeDesc: "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    RogFreeGithub: "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite: "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc: "A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub: "",
    NewsletterWebsite: "https://newsletter-signup-teal.vercel.app/",

    WigglesDesc: "An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    WigglesGithub: "https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite: "https://wiggles.vercel.app/",

    ForecastIQDesc: "A real-time stock prediction tool using live Yahoo Finance data & Facebook Prophet for time series forecasting. Built with Streamlit and hosted live.",
    ForecastIQGithub: "https://github.com/Bakhshish987/forecastiq",
    ForecastIQWebsite: "https://forecastiq.streamlit.app",

    AlignIQDesc: "A resume–job description matcher using TF-IDF and cosine similarity. It shows skill alignment scores and feedback in real time using a Streamlit-based front end.",
    AlignIQGithub: "https://github.com/Bakhshish987/aligniq",
    AlignIQWebsite: "https://aligniq-v2.streamlit.app",

    TrustIQDesc: "A fake review detection app built using XGBoost, SMOTE, and SHAP. It flags suspicious reviews and explains predictions visually using SHAP interpretability.",
    TrustGuardGithub: "https://github.com/Bakhshish987/trustguard",
    TrustGuardWebsite: "https://trustguard.streamlit.app",

    RevenueDashboardDesc: "An interactive Tableau dashboard showing revenue, net earnings, and trends. It includes monthly highlights & YoY insights.",
    RevenueDashboardGithub: "",
    RevenueDashboardWebsite: "https://public.tableau.com/app/profile/bakhshish.sethi/viz/RevenueNetEarningsDashboard2023",

    Infinity2Desc: "A data-driven live stock portfolio built on research, factor models, and macro analysis. This real-money $10K+ portfolio is managed using technical and quant tools.",
    Infinity2Github: "",
    Infinity2Website: "https://docs.google.com/spreadsheets/d/1wZdq4eWcVjC5UgUevMuR8zWISwHjx7N9m3lmM1x-6cs/edit?usp=sharing",

    TorontoRentalInsightsDesc: "A data-driven case study exploring rental prices and affordability trends in Toronto. Visualized using Tableau with filters for property type and location.",
    TorontoRentalInsightsGithub: "https://github.com/Bakhshish987/toronto-rental-dashboard",
    TorontoRentalInsightsWebsite: "https://public.tableau.com/app/profile/bakhshish.sethi/viz/TorontoRentalInsightsDashboard",
    
    FraudDetectionDesc: "A classification project using XGBoost to detect fraudulent credit card transactions. Includes SMOTE, feature scaling, and precision-focused evaluation.",
    FraudDetectionGithub: "https://github.com/Bakhshish987/fraud-detection",
    FraudDetectionWebsite: "https://fraud-detection.streamlit.app",
    
    HousePricePredictorDesc: "A linear and lasso regression model for predicting housing prices based on multiple features. Shows model metrics and residuals interactively.",
    HousePricePredictorGithub: "https://github.com/Bakhshish987/house-price-regression",
    HousePricePredictorWebsite: "https://house-price-app.streamlit.app"

  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
