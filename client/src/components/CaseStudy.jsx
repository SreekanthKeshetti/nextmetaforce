// import React from "react";
// import { Container } from "react-bootstrap";
// import retailImg from "../assets/Retailimage.jpg";
// import healthImg from "../assets/health1.jpg";
// import finImage from "../assets/finance1.jpg";
// import manfacImage from "../assets/Manufacture.jpg";
// import mediaImg from "../assets/media1.jpg"; // Placeholder for Media vertical image

// const caseStudies = [
//   {
//     id: 1,
//     title: "Retail Solutions",
//     About:
//       "The client is a leading global apparel and accessories retailer with a portfolio of iconic brands. Founded in 1969 and headquartered in the United States, the company operates internationally through its several distinct divisions, catering to a wide range of customers across multiple market segments.",

//     challenge:
//       "1. Provide comprehensive L2 and L3 support for all Salesforce applications. \n" +
//       "2. Optimize existing application processes and code quality to improve system performance. \n" +
//       "3. Develop a Flexi page to empower service agents to track shipments and order status efficiently. \n" +
//       "4. Design and implement an embedded chat bot to reduce agent workload. \n" +
//       "5. Establish a consistent monthly release cycle for the Service Cloud. \n" +
//       "6. Implement Salesforce interfaces to integrate with critical third-party systems, including SSO and SAP.",
//     solution:
//       "1. Advanced Support & Optimization: Provided dedicated L2/L3 support, performing quick bug fixes, troubleshooting sync issues, and identifying and addressing areas of poor code quality to enhance system stability. \n" +
//       "2. Service Automation: Implemented an Email-to-Case system for faster customer query handling and successfully designed and deployed an embedded chat bot, converting it from Einstein Bot to a live agent to efficiently manage service load. \n" +
//       "3. Third-Party Integration: Built and implemented robust Salesforce interfaces to enable seamless interaction with external systems, including SSO for authentication and SAP for enterprise resource planning. \n" +
//       "4. Data & Process Enhancement: Developed a custom Flexi page within Salesforce to give agents a unified view for tracking shipments and order status. Successfully migrated a large volume of historical agreements and attachments into the Salesforce platform.",
//     result:
//       "Yet to receive. (Expected: Improved system performance, reduced agent workload, efficient order tracking, seamless third-party integrations, consistent release cycles, and enhanced support capabilities.)",
//     technologies: [
//       "Salesforce Service Cloud",
//       "Salesforce Flexi Page",
//       "Einstein Bot",
//       "Live Agent",
//       "SSO",
//       "SAP",
//       "Apex",
//       "Lightning Web Components",
//     ],
//     team: ["Alice Johnson", "Bob Smith", "Charlie Lee"],
//     image: retailImg,
//   },
//   {
//     id: 2,
//     title: "Healthcare Innovation",
//     About:
//       "The client is a major American drugstore chain providing a comprehensive range of health and wellness products, pharmacy services, and convenience items to communities across the United States.",
//     challenge:
//       "1. Handle all support tickets with an emphasis on automation to reduce manual administrative tasks. \n" +
//       "2. Provide end-to-end support, including triage, resolution, configuration, maintenance, and release management for all severity levels. \n" +
//       "3. Consolidate customer cases from multiple systems into a single Salesforce platform to improve agent efficiency.",
//     solution:
//       "1. Unified Support Platform: Leveraged Salesforce Service Cloud to create a central engagement platform for agents to collaborate and resolve customer issues promptly. \n" +
//       "2. System Integration for Case Consolidation: Integrated external systems to automatically roll cases into Salesforce, creating a single source of truth for customer support. \n" +
//       "3. Process Automation: Automated the manual process of activating partner users through a dedicated batch job, reducing administrative overhead. \n" +
//       "4. Data Hygiene & System Efficiency: Implemented a weekly batch process to identify and remove object records older than one year, maintaining data cleanliness and optimizing system performance and storage.",
//     result:
//       "Yet to come. (Expected: Significant reduction in manual tasks, improved agent efficiency through case consolidation, faster issue resolution, streamlined support processes, and optimized system performance.)",
//     technologies: [
//       "Salesforce Service Cloud",
//       "Salesforce Flow",
//       "APEX Batch Jobs",
//       "SOAP API",
//       "REST API",
//       "Data Loader",
//     ],
//     team: ["Dana White", "Eve Davis", "Frank Harris"],
//     image: healthImg,
//   },
//   {
//     id: 3,
//     title: "Financial Services",
//     About:
//       "The client is a major financial institution and one of the largest banks in Australasia. It provides a comprehensive suite of banking, wealth management, and financial services to retail, business, and institutional customers across Australia, New Zealand, and international markets.",
//     challenge:
//       "1. Improve accuracy in broker discount calculations. \n" +
//       "2. Enhance broker visibility into client mortgage accounts, balances, terms, and rates. \n" +
//       "3. Implement audit tracking for pricing approvals and create a visualized dashboard for key pricing insights. \n" +
//       "4. Refine the loan application lifecycle with improved milestone tracking and broker visibility. \n" +
//       "5. Implement secure, custom multi-factor authentication (MFA) for external brokers and single sign-on (SSO) for internal users.",
//     solution:
//       "1. System Integration: Seamlessly connected Salesforce to the core pricing engine, Oracle banking platform, data warehouse, and customer master data systems using MuleSoft. \n" +
//       "2. Process Automation: Automated the internal pricing approval process, including bulk approvals, and enhanced reporting with a complete audit trail. \n" +
//       "3. Broker Experience Cloud Portal: Delivered an enhanced broker portal via Salesforce Experience Cloud, featuring automated email communications and a system for capturing broker feedback. \n" +
//       "4. Enterprise Security: Implemented a custom Multi-Factor Authentication (MFA) solution for external brokers on Experience Cloud and established SSO for internal users across enterprise systems.",
//     result:
//       "Yet to come. (Expected: Enhanced accuracy in calculations, improved broker self-service, real-time audit trails, better loan lifecycle management, and robust security for all users.)",
//     technologies: [
//       "Salesforce Experience Cloud",
//       "MuleSoft",
//       "Oracle Banking Platform",
//       "MFA",
//       "SSO",
//       "Lightning Web Components",
//       "Apex",
//     ],
//     team: ["Grace Kim", "Hank Miller", "Ivy Clark"],
//     image: finImage,
//   },
//   {
//     id: 4,
//     title: "Manufacturing & Logistics",
//     About:
//       "World leader in manufacturer of construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives. The company operates globally through several primary segments, including Construction Industries, Resource Industries, and Energy & Transportation, and also provides financing services for its customers and dealers.",
//     challenge:
//       "1. Inefficient Order Sourcing: The evaluation and sourcing of dealer orders by the Product Group team was a manual, time-consuming process, often taking up to four days.\n" +
//       "2. Rigid Legacy Systems: The in-house order management system was nearly 50 years old, with over 65% of its functionality unmodifiable, making new implementations and changes extremely challenging.\n" +
//       "3. Resource-Intensive Configuration: Order fulfillment required the Variant Configuration team to manually set up material configurations in SAP, a process so labor-intensive it was projected to require over 60 additional full-time resources. This manual setup led to frequent errors and delays, impacting production schedules and delivery timelines. The complexity of product variations further exacerbated these issues, making scaling operations nearly impossible without significant human capital investment.",
//     solution:
//       "1. Multi-Source Facility Application:\n" +
//       "   - A rules engine was implemented in Salesforce, allowing the Product Group team to author and manage sourcing rules systematically.\n" +
//       "   - Dealer orders are now automatically evaluated against these rules and routed to the appropriate facility and order manager.\n\n" +
//       "2. Unified Order Visibility Platform (0360 Application):\n" +
//       "   - A centralized Salesforce solution was deployed to provide end-to-end visibility of orders.\n" +
//       "   - The platform allows users to schedule orders and view all order-related documents in a single interface, improving transparency.\n\n" +
//       "3. Sales Configuration Management Application:\n" +
//       "   - An application was built to allow the Variant Configuration team to upload and maintain configuration data directly within Salesforce.\n" +
//       "   - This data is systematically synchronized with external systems, including SAP, reducing manual intervention and errors.",
//     result:
//       "1. Exponentially reduced the manual effort for the VC team and completely eliminated the projected need to hire 60+ additional resources. This saved significant operational costs and allowed existing staff to focus on higher-value tasks.\n" +
//       "2. Provided a single, scalable platform for most order procurement and fulfillment operations, replacing the inefficient legacy system. This modernization improved system reliability and allowed for rapid implementation of new features.\n" +
//       "3. Order processing time was reduced from four days to less than one day, significantly improving delivery times and customer satisfaction. The new system provided real-time insights into order status, enhancing decision-making and operational agility.",
//     technologies: [
//       "Salesforce",
//       "SAP",
//       "Node.js",
//       "React",
//       "Heroku Connect",
//       "MuleSoft",
//     ],
//     team: ["Jack Lee", "Kimberly Moore", "Liam Taylor"],
//     image: manfacImage,
//   },
//   {
//     id: 5, // New ID for Media Solutions
//     title: "Media Solutions",
//     About:
//       "The client is a leading provider of digital television entertainment and satellite services in the United States, delivering a wide array of programming and services to a substantial subscriber base nationwide.",
//     challenge:
//       "1. Implement a Sales Agent Portal to provide real-time, contextual customer data.\n" +
//       "2. Enable more personalized sales conversations and tailored product recommendations.\n" +
//       "3. Reduce Average Handle Time (AHT) while increasing sales conversion rates.\n" +
//       "4. Enhance overall customer satisfaction during sales interactions.\n" +
//       "5. Ensure seamless integration with existing CRM systems for scalability and data consistency.",
//     solution:
//       "1. Salesforce-Based Portal: Developed a custom Sales Agent Portal within Salesforce, providing agents with deep insights into customer profiles and behavior.\n" +
//       "2. Seamless CRM Integration: Enhanced the inbound call flow by integrating the portal with the existing Sales CRM, allowing for in-context application launch at the moment of customer interaction.\n" +
//       "3. Real-Time Customer Data: Equipped agents with contextual customer information prior to call engagement, enabling focused conversations that significantly reduced Average Handle Time (AHT).\n" +
//       "4. Performance Analytics: Implemented usage tracking to capture weekly portal adoption metrics, providing data to monitor engagement and inform strategies for improving sales conversion rates.",
//     result:
//       "Yet to come. (Expected: Reduced AHT, increased sales conversion, more personalized customer interactions, improved agent efficiency, and higher customer satisfaction.)",
//     technologies: [
//       "Salesforce Sales Cloud",
//       "Salesforce Experience Cloud",
//       "CRM Integration",
//       "Custom API",
//       "Analytics Dashboard",
//       "CTI (Computer Telephony Integration)",
//     ],
//     team: ["Oliver Queen", "Felicity Smoak", "John Diggle"], // Placeholder team members
//     image: mediaImg,
//   },
// ];

// export default function CaseStudy() {
//   return (
//     <>
//       <style>{`
//         .case-study-section {
//           // background: #f8f9fa;
//           padding: 5rem 0;
//         }
//         .case-study-container {
//           padding: 0;
//           max-width: 100%;
//           margin: 0;
//           background: transparent;
//           box-shadow: none;
//           border-radius: 0;
//         }
//         .case-study-title {
//           font-size: 2rem;
//           font-weight: 600;
//           color: #0d2d62;
//           text-align: center;
//           margin-bottom: 4rem;
//           position: relative;
//         }
//         .case-study-title::after {
//           content: "";
//           display: block;
//           margin: 8px auto 0 auto;
//           width: 150px;
//           height: 4px;
//           background: linear-gradient(90deg, #60a5fa, #3b82f6, #60a5fa);
//           border-radius: 2px;
//           box-shadow: 0 0 10px rgba(59,130,246,0.5);
//         }
//         .case-study-row {
//           display: grid;
//           grid-template-columns: 1fr 1.5fr;
//           gap: 3rem;
//           align-items: start;
//           padding: 4rem 8% 4rem 8%;
//           // background-color: #ffffff;
//           margin-bottom: 2rem;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.05);
//           border-radius: 10px;
//         }
//         .case-study-row:last-of-type {
//           margin-bottom: 0;
//         }
//         .case-study-row:nth-child(even) {
//           grid-template-areas: "text image";
//           // background-color: #f6f7fbff;
//         }
//         .case-study-row:nth-child(odd) {
//           grid-template-areas: "image text";
//         }
//         .case-study-image-wrapper {
//           grid-area: image;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         .case-study-image {
//           width: 100%;
//           max-height: 450px;
//           object-fit: cover;
//           border-radius: 10px;
//           box-shadow: 0 6px 15px rgba(0,0,0,0.1);
//           transition: transform 0.3s ease;
//         }
//         .case-study-image:hover { transform: scale(1.01); }

//         .case-study-text {
//           grid-area: text;
//           align-self: start;
//         }
//         .case-study-text h3 { font-size: 1.2rem; color: #1c3b70; margin-bottom: 1rem; }
//         .case-study-text h4 { font-size: 1rem; color: #0d2d62; margin-top: 1.5rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 600; }
//         .case-study-text p { font-size: 1rem; line-height: 1.7; color: #444; white-space: pre-line; margin-bottom: 1rem; }

//         .scrollable-content {
//           max-height: 350px;
//           overflow-y: auto;
//           padding-right: 15px;
//           margin-bottom: 1.5rem;
//         }
//         .scrollable-content::-webkit-scrollbar {
//           width: 8px;
//         }
//         .scrollable-content::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 10px;
//         }
//         .scrollable-content::-webkit-scrollbar-thumb {
//           background: #888;
//           border-radius: 10px;
//         }
//         .scrollable-content::-webkit-scrollbar-thumb:hover {
//           background: #555;
//         }

//         .technologies-list, .team-members { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 1rem; }
//         .technology, .team-member { padding: 8px 18px; border-radius: 25px; font-size: 0.9rem; font-weight: 500; }
//         .technology {
//           background-color: #e0f2fe;
//          color: #0d2d62; }
//         .team-member {
//          background-color: #edf2fe;
//           color: #0d2d62; }

//         @media (max-width: 992px) {
//           .case-study-row {
//             grid-template-columns: 1fr;
//             grid-template-areas:
//               "image"
//               "text";
//             gap: 2rem;
//             padding: 3rem 5%;
//             margin-bottom: 1.5rem;
//           }
//           .case-study-image {
//             max-height: 280px;
//           }
//           .case-study-text h3 { font-size: 1.8rem; }
//           .case-study-text h4 { font-size: 1rem; }
//           .scrollable-content {
//             max-height: 300px;
//             padding-right: 10px;
//           }
//         }
//       `}</style>

//       <section className="case-study-section">
//         <Container fluid className="case-study-container">
//           <div className="text-center">
//             <span className="case-study-title">Case Studies</span>
//           </div>

//           {caseStudies.map((study) => (
//             <div key={study.id} className="case-study-row">
//               <div className="case-study-image-wrapper">
//                 <img
//                   src={study.image}
//                   alt={study.title}
//                   className="case-study-image"
//                 />
//               </div>
//               <div className="case-study-text">
//                 <h3>{study.title}:</h3>
//                 <div className="scrollable-content">
//                   <h4>About Client:</h4>
//                   <p>{study.About}</p>
//                   <h4>Challenge:</h4>
//                   <p>{study.challenge}</p>
//                   <h4>Solution:</h4>
//                   <p>{study.solution}</p>
//                   {/* <h4>Result:</h4>
//                   <p>{study.result}</p> */}
//                 </div>
//                 {/* <h4>Technologies Used</h4>
//                 <div className="technologies-list">
//                   {study.technologies.map((tech, idx) => (
//                     <span key={idx} className="technology">
//                       {tech}
//                     </span>
//                   ))}
//                 </div> */}
//                 {/* {study.team && study.team.length > 0 && (
//                   // <>
//                   //   <h4>Team Members</h4>
//                   //   <div className="team-members">
//                   //     {study.team.map((member, idx) => (
//                   //       <span key={idx} className="team-member">
//                   //         {member}
//                   //       </span>
//                   //     ))}
//                   //   </div>
//                   // </>
//                 )} */}
//               </div>
//             </div>
//           ))}
//         </Container>
//       </section>
//     </>
//   );
// }
import React from "react";
import retailImg from "../assets/Retailimage.jpg";
import healthImg from "../assets/health1.jpg";
import finImage from "../assets/finance1.jpg";
import manfacImage from "../assets/Manufacture.jpg";
import mediaImg from "../assets/media1.jpg";

const caseStudies = [
  {
    id: 1,
    title: "Retail Solutions",
    About:
      "The client is a leading global apparel and accessories retailer with a portfolio of iconic brands. Founded in 1969 and headquartered in the United States, the company operates internationally through its several distinct divisions, catering to a wide range of customers across multiple market segments.",

    challenge:
      "1. Provide comprehensive L2 and L3 support for all Salesforce applications. \n" +
      "2. Optimize existing application processes and code quality to improve system performance. \n" +
      "3. Develop a Flexi page to empower service agents to track shipments and order status efficiently. \n" +
      "4. Design and implement an embedded chat bot to reduce agent workload. \n" +
      "5. Establish a consistent monthly release cycle for the Service Cloud. \n" +
      "6. Implement Salesforce interfaces to integrate with critical third-party systems, including SSO and SAP.",
    solution:
      "1. Advanced Support & Optimization: Provided dedicated L2/L3 support, performing quick bug fixes, troubleshooting sync issues, and identifying and addressing areas of poor code quality to enhance system stability. \n" +
      "2. Service Automation: Implemented an Email-to-Case system for faster customer query handling and successfully designed and deployed an embedded chat bot, converting it from Einstein Bot to a live agent to efficiently manage service load. \n" +
      "3. Third-Party Integration: Built and implemented robust Salesforce interfaces to enable seamless interaction with external systems, including SSO for authentication and SAP for enterprise resource planning. \n" +
      "4. Data & Process Enhancement: Developed a custom Flexi page within Salesforce to give agents a unified view for tracking shipments and order status. Successfully migrated a large volume of historical agreements and attachments into the Salesforce platform.",
    result:
      "Yet to receive. (Expected: Improved system performance, reduced agent workload, efficient order tracking, seamless third-party integrations, consistent release cycles, and enhanced support capabilities.)",
    technologies: [
      "Salesforce Service Cloud",
      "Salesforce Flexi Page",
      "Einstein Bot",
      "Live Agent",
      "SSO",
      "SAP",
      "Apex",
      "Lightning Web Components",
    ],
    team: ["Alice Johnson", "Bob Smith", "Charlie Lee"],
    image: retailImg,
  },
  {
    id: 2,
    title: "Healthcare Innovation",
    About:
      "The client is a major American drugstore chain providing a comprehensive range of health and wellness products, pharmacy services, and convenience items to communities across the United States.",
    challenge:
      "1. Handle all support tickets with an emphasis on automation to reduce manual administrative tasks. \n" +
      "2. Provide end-to-end support, including triage, resolution, configuration, maintenance, and release management for all severity levels. \n" +
      "3. Consolidate customer cases from multiple systems into a single Salesforce platform to improve agent efficiency.",
    solution:
      "1. Unified Support Platform: Leveraged Salesforce Service Cloud to create a central engagement platform for agents to collaborate and resolve customer issues promptly. \n" +
      "2. System Integration for Case Consolidation: Integrated external systems to automatically roll cases into Salesforce, creating a single source of truth for customer support. \n" +
      "3. Process Automation: Automated the manual process of activating partner users through a dedicated batch job, reducing administrative overhead. \n" +
      "4. Data Hygiene & System Efficiency: Implemented a weekly batch process to identify and remove object records older than one year, maintaining data cleanliness and optimizing system performance and storage.",
    result:
      "Yet to come. (Expected: Significant reduction in manual tasks, improved agent efficiency through case consolidation, faster issue resolution, streamlined support processes, and optimized system performance.)",
    technologies: [
      "Salesforce Service Cloud",
      "Salesforce Flow",
      "APEX Batch Jobs",
      "SOAP API",
      "REST API",
      "Data Loader",
    ],
    team: ["Dana White", "Eve Davis", "Frank Harris"],
    image: healthImg,
  },
  {
    id: 3,
    title: "Financial Services",
    About:
      "The client is a major financial institution and one of the largest banks in Australasia. It provides a comprehensive suite of banking, wealth management, and financial services to retail, business, and institutional customers across Australia, New Zealand, and international markets.",
    challenge:
      "1. Improve accuracy in broker discount calculations. \n" +
      "2. Enhance broker visibility into client mortgage accounts, balances, terms, and rates. \n" +
      "3. Implement audit tracking for pricing approvals and create a visualized dashboard for key pricing insights. \n" +
      "4. Refine the loan application lifecycle with improved milestone tracking and broker visibility. \n" +
      "5. Implement secure, custom multi-factor authentication (MFA) for external brokers and single sign-on (SSO) for internal users.",
    solution:
      "1. System Integration: Seamlessly connected Salesforce to the core pricing engine, Oracle banking platform, data warehouse, and customer master data systems using MuleSoft. \n" +
      "2. Process Automation: Automated the internal pricing approval process, including bulk approvals, and enhanced reporting with a complete audit trail. \n" +
      "3. Broker Experience Cloud Portal: Delivered an enhanced broker portal via Salesforce Experience Cloud, featuring automated email communications and a system for capturing broker feedback. \n" +
      "4. Enterprise Security: Implemented a custom Multi-Factor Authentication (MFA) solution for external brokers on Experience Cloud and established SSO for internal users across enterprise systems.",
    result:
      "Yet to come. (Expected: Enhanced accuracy in calculations, improved broker self-service, real-time audit trails, better loan lifecycle management, and robust security for all users.)",
    technologies: [
      "Salesforce Experience Cloud",
      "MuleSoft",
      "Oracle Banking Platform",
      "MFA",
      "SSO",
      "Lightning Web Components",
      "Apex",
    ],
    team: ["Grace Kim", "Hank Miller", "Ivy Clark"],
    image: finImage,
  },
  {
    id: 4,
    title: "Manufacturing & Logistics",
    About:
      "World leader in manufacturer of construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives. The company operates globally through several primary segments, including Construction Industries, Resource Industries, and Energy & Transportation, and also provides financing services for its customers and dealers.",
    challenge:
      "1. Inefficient Order Sourcing: The evaluation and sourcing of dealer orders by the Product Group team was a manual, time-consuming process, often taking up to four days.\n" +
      "2. Rigid Legacy Systems: The in-house order management system was nearly 50 years old, with over 65% of its functionality unmodifiable, making new implementations and changes extremely challenging.\n" +
      "3. Resource-Intensive Configuration: Order fulfillment required the Variant Configuration team to manually set up material configurations in SAP, a process so labor-intensive it was projected to require over 60 additional full-time resources. This manual setup led to frequent errors and delays, impacting production schedules and delivery timelines. The complexity of product variations further exacerbated these issues, making scaling operations nearly impossible without significant human capital investment.",
    solution:
      "1. Multi-Source Facility Application:\n" +
      "   - A rules engine was implemented in Salesforce, allowing the Product Group team to author and manage sourcing rules systematically.\n" +
      "   - Dealer orders are now automatically evaluated against these rules and routed to the appropriate facility and order manager.\n\n" +
      "2. Unified Order Visibility Platform (0360 Application):\n" +
      "   - A centralized Salesforce solution was deployed to provide end-to-end visibility of orders.\n" +
      "   - The platform allows users to schedule orders and view all order-related documents in a single interface, improving transparency.\n\n" +
      "3. Sales Configuration Management Application:\n" +
      "   - An application was built to allow the Variant Configuration team to upload and maintain configuration data directly within Salesforce.\n" +
      "   - This data is systematically synchronized with external systems, including SAP, reducing manual intervention and errors.",
    result:
      "1. Exponentially reduced the manual effort for the VC team and completely eliminated the projected need to hire 60+ additional resources. This saved significant operational costs and allowed existing staff to focus on higher-value tasks.\n" +
      "2. Provided a single, scalable platform for most order procurement and fulfillment operations, replacing the inefficient legacy system. This modernization improved system reliability and allowed for rapid implementation of new features.\n" +
      "3. Order processing time was reduced from four days to less than one day, significantly improving delivery times and customer satisfaction. The new system provided real-time insights into order status, enhancing decision-making and operational agility.",
    technologies: [
      "Salesforce",
      "SAP",
      "Node.js",
      "React",
      "Heroku Connect",
      "MuleSoft",
    ],
    team: ["Jack Lee", "Kimberly Moore", "Liam Taylor"],
    image: manfacImage,
  },
  {
    id: 5, // New ID for Media Solutions
    title: "Media Solutions",
    About:
      "The client is a leading provider of digital television entertainment and satellite services in the United States, delivering a wide array of programming and services to a substantial subscriber base nationwide.",
    challenge:
      "1. Implement a Sales Agent Portal to provide real-time, contextual customer data.\n" +
      "2. Enable more personalized sales conversations and tailored product recommendations.\n" +
      "3. Reduce Average Handle Time (AHT) while increasing sales conversion rates.\n" +
      "4. Enhance overall customer satisfaction during sales interactions.\n" +
      "5. Ensure seamless integration with existing CRM systems for scalability and data consistency.",
    solution:
      "1. Salesforce-Based Portal: Developed a custom Sales Agent Portal within Salesforce, providing agents with deep insights into customer profiles and behavior.\n" +
      "2. Seamless CRM Integration: Enhanced the inbound call flow by integrating the portal with the existing Sales CRM, allowing for in-context application launch at the moment of customer interaction.\n" +
      "3. Real-Time Customer Data: Equipped agents with contextual customer information prior to call engagement, enabling focused conversations that significantly reduced Average Handle Time (AHT).\n" +
      "4. Performance Analytics: Implemented usage tracking to capture weekly portal adoption metrics, providing data to monitor engagement and inform strategies for improving sales conversion rates.",
    result:
      "Yet to come. (Expected: Reduced AHT, increased sales conversion, more personalized customer interactions, improved agent efficiency, and higher customer satisfaction.)",
    technologies: [
      "Salesforce Sales Cloud",
      "Salesforce Experience Cloud",
      "CRM Integration",
      "Custom API",
      "Analytics Dashboard",
      "CTI (Computer Telephony Integration)",
    ],
    team: ["Oliver Queen", "Felicity Smoak", "John Diggle"], // Placeholder team members
    image: mediaImg,
  },
];

export default function CaseStudy() {
  return (
    <>
      <style>
        {`
       .case-section {
          padding: 5rem 0;
          background:var( --Case-Study-bg);
        }

        .case-title {
          font-size: 1.8rem;
          font-weight: 700;
          // color: #0d2d62;
          color:var(--Case-Study-title);
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .case-title::after {
          content: "";
          display: block;
          margin: 10px auto 0;
          width: 140px;
          height: 4px;
          border-radius: 4px;
          background: linear-gradient(90deg, #60a5fa, #2563eb, #60a5fa);
          box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
        }

        .case-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 3rem;
          background: var(--Case-Study-cardbg);
          border-radius: 18px;
          padding: 3rem 3.5rem;
          margin: 0 auto 3rem;
          width: 90%;
          max-width: 1400px;
          box-shadow: var(--Case-CardShadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .case-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        /* alternate desktop layout */
        .case-card:nth-child(even) {
          grid-template-columns: 1fr 1.2fr;
        }

        .case-card:nth-child(even) .case-content {
          order: 2;
        }

        .case-card:nth-child(even) .case-image-wrapper {
          order: 1;
        }

        .case-image-wrapper {
          display: flex;
          justify-content: center;
        }

        .case-image {
          width: 100%;
          max-height: 420px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        }

        /* ✅ Scrollbar for text area */
        .case-content {
          max-height: 400px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .case-content::-webkit-scrollbar {
          width: 6px;
        }
        .case-content::-webkit-scrollbar-thumb {
          background: #c0c8d2;
          border-radius: 4px;
        }
        .case-content::-webkit-scrollbar-thumb:hover {
          background: #9aa3b1;
        }

        .case-content h3 {
          font-size: 1.8rem;
          // color: #1c3b70;
          color:var(--Case-Study-title);
          margin-bottom: 1rem;
        }

        .case-content h4 {
          font-size: 1rem;
          text-transform: uppercase;
          // color: #0d2d62;
          color:var(--Case-Study-title);
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          letter-spacing: 0.7px;
          font-weight: 600;
        }

        .case-content p {
          font-size: 1rem;
          // color: #444;
          line-height: 1.7;
          white-space: pre-line;
        }

        /* ✅ Mobile Fix: force both odd & even to stack text first, image below */
        @media (max-width: 992px) {
          .case-card {
            display: flex;
            flex-direction: column;
            padding: 2rem;
            gap: 2rem;
          }

          .case-content {
            order: 1 !important;
            max-height: 300px; /* smaller scroll area for mobile */
          }

          .case-image-wrapper {
            order: 2 !important;
          }

          .case-image {
            max-height: 300px;
          }

          .case-content h3 {
            font-size: 1.5rem;
          }

          .case-content p {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 576px) {
          .case-card {
            width: 95%;
            padding: 1.5rem;
            gap: 1.5rem;
          }

          .case-title {
            font-size: 1.8rem;
          }

          .case-content h3 {
            font-size: 1.3rem;
          }

          .case-content p {
            font-size: 0.9rem;
          }
        }
      `}
      </style>

      <section className="case-section">
        <h2 className="case-title">Case Studies</h2>
        {caseStudies.map((study) => (
          <div key={study.id} className="case-card">
            <div className="case-content">
              <h3>{study.title}</h3>
              <h4>About Client</h4>
              <p>{study.About}</p>
              <h4>Challenge</h4>
              <p>{study.challenge}</p>
              <h4>Solution</h4>
              <p>{study.solution}</p>
            </div>
            <div className="case-image-wrapper">
              <img src={study.image} alt={study.title} className="case-image" />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
