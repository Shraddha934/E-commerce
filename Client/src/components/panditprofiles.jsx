import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PanditCatalog = () => {
  const [pandits] = useState([
    {
      nameEnglish: "Pandit Shankar Joshi",
      education: "वेदांत आचार्य",
      gender: "Male",
      address: "Pune, Maharashtra",
      email: "shankar.joshi@example.com",
      phone: "9990011111",
    },
    {
      nameEnglish: "Pandit Vishnu Kulkarni",

      education: "संस्कृत पीएच.डी.",
      gender: "Male",
      address: "Nashik, Maharashtra",
      email: "vishnu.kulkarni@example.com",
      phone: "9990022222",
    },
    {
      nameEnglish: "Pandit Ramkrishna Pathak",

      education: "ज्योतिषाचार्य",
      gender: "Male",
      address: "Solapur, Maharashtra",
      email: "ramkrishna.pathak@example.com",
      phone: "9990033333",
    },
    {
      nameEnglish: "Pandit Balasaheb Shinde",

      education: "वास्तुशास्त्र आचार्य",
      gender: "Male",
      address: "SambhajiNagar, Maharashtra",
      email: "balasaheb.shinde@example.com",
      phone: "9990044444",
    },
    {
      nameEnglish: "Pandit Suresh Deshmukh",

      education: "संस्कृत एम.ए.",
      gender: "Male",
      address: "Nagpur, Maharashtra",
      email: "suresh.deshmukh@example.com",
      phone: "9990055555",
    },
    {
      nameEnglish: "Pandit Mahadev Patil",

      education: "वास्तुशास्त्र विशेषज्ञ",
      gender: "Male",
      address: "Kolhapur, Maharashtra",
      email: "mahadev.patil@example.com",
      phone: "9990066666",
    },
    {
      nameEnglish: "Pandit Haridas Mule",

      education: "संस्कृताचार्य",
      gender: "Male",
      address: "Thane, Maharashtra",
      email: "haridas.mule@example.com",
      phone: "9990077777",
    },
    {
      nameEnglish: "Pandit Janardan Sawant",

      education: "संस्कृत बी.ए.",
      gender: "Male",
      address: "Ratnagiri, Maharashtra",
      email: "janardan.sawant@example.com",
      phone: "9990088888",
    },
    {
      nameEnglish: "Pandit Narayan Chavan",

      education: "ज्योतिषाचार्य",
      gender: "Male",
      address: "Ahmednagar, Maharashtra",
      email: "narayan.chavan@example.com",
      phone: "9990099999",
    },
    {
      nameEnglish: "Pandit Rajendra Kale",

      education: "वेदशास्त्र आचार्य",
      gender: "Male",
      address: "Sangli, Maharashtra",
      email: "rajendra.kale@example.com",
      phone: "9990100000",
    },
  ]);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Pandit Catalog</h1>
      <div className="row">
        {pandits.map((pandit, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {pandit.nameEnglish} <br />{" "}
                </h5>
                <p className="card-text">
                  <strong>Education:</strong> {pandit.education} <br />
                  <strong>Gender:</strong> {pandit.gender} <br />
                  <strong>Address:</strong> {pandit.address} <br />
                  <strong>Email:</strong> {pandit.email} <br />
                  <strong>Phone:</strong> {pandit.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanditCatalog;
