import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {

  const displayNames = {
    Tindog: "Tindog",
    RogFree: "RogFree",
    Newsletter: "Newsletter Signup",
    Wiggles: "Wiggles",
    ForecastIQ: "ForecastIQ",
    AlignIQ: "AlignIQ",
    TrustIQ: "TrustIQ",
    RevenueDashboard: "Revenue & Earnings Dashboard",
    Infinity2: "Infinity 50 Portfolio",
    TorontoRentalInsights: "Toronto Rental Insights",
    FraudDetection: "Credit Card Fraud Detection",
    HousePricePredictor: "House Price Prediction (Lasso)"
  };

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

    ForecastIQDesc: "A real-time stock price prediction tool using live Yahoo Finance data & Facebook Prophet model for time series forecasting. Hosted live.",
    ForecastIQGithub: "https://github.com/Bakhshish987/forecastiq",
    ForecastIQWebsite: "https://forecastiq-v2.streamlit.app/",

    AlignIQDesc: "A resume–job description matcher using TF-IDF and cosine similarity. It shows skill alignment scores and feedback in real time using a Streamlit-based front end.",
    AlignIQGithub: "https://github.com/Bakhshish987/aligniq",
    AlignIQWebsite: "https://aligniq-v2.streamlit.app/",

    TrustIQDesc: "A fake review detection app built using XGBoost, SMOTE, and SHAP. It flags suspicious reviews and explains predictions visually using SHAP interpretability.",
    TrustIQGithub: "https://github.com/Bakhshish987/trustiq",
    TrustIQWebsite: "https://trustiq-v2.streamlit.app/",

    RevenueDashboardDesc: "An interactive Tableau dashboard showing revenue, net earnings, and trends. It includes monthly highlights & YoY insights.",
    RevenueDashboardGithub: "",
    RevenueDashboardWebsite: "https://public.tableau.com/shared/6PPNYHHG6?:display_count=n&:origin=viz_share_link",
    RevenueDashboardLabel: "Dashboard",

    Infinity2Desc: "A data-driven live stock portfolio built on research, factor models, and macro analysis. This real-money $10K+ portfolio is managed using technical and quant tools.",
    Infinity2Github: "",
    Infinity2Website: "https://drive.google.com/file/d/1nszpNkFkwJVMPxtzTSz_FYadzVyhDSVt/view",
    Infinity2Label: "Presentation",

    TorontoRentalInsightsDesc: "A data-driven case study exploring rental prices and affordability trends in Toronto. Visualized using Tableau with maps and filters for property type.",
    TorontoRentalInsightsGithub: "https://github.com/Bakhshish987/toronto-rental-dashboard",
    TorontoRentalInsightsWebsite: "https://public.tableau.com/views/RealIQ/Dashboard2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    TorontoRentalInsightsLabel: "Dashboard",
    TorontoRentalInsightsGithubLabel: "Presentation",

    FraudDetectionDesc: "A classification project using XGBoost to detect fraudulent credit card transactions. Includes precision-focused evaluation.",
    FraudDetectionGithub: "https://github.com/Bakhshish987/fraud-detection-ml",
    FraudDetectionWebsite: "",

    HousePricePredictorDesc: "A linear and lasso regression model for predicting housing prices based on multiple features. Shows model metrics and residuals interactively.",
    HousePricePredictorGithub: "https://github.com/Bakhshish987/regression-ml",
    HousePricePredictorWebsite: ""
  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  let showWebsite = '';
  if (desc[projectName + 'Website'] === "") {
    showWebsite = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{displayNames[projectName] || projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank'>
          <button className='projectbtn'>
            <FaGithub /> {desc[projectName + 'GithubLabel'] || "Github"}
          </button>
        </a>

        <a style={{ display: showWebsite }} href={desc[projectName + 'Website']} target='_blank'>
          <button className='projectbtn'>
            <CgFileDocument /> {desc[projectName + 'Label'] || "Demo"}
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
