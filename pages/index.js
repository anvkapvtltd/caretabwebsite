import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";
import Slider from "react-slick";
import { useState } from 'react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
    const [selectedService, setSelectedService] = useState(''); // Initial empty selection

    const registerUser = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://admin.caretab.ai/wp-json/contact-form-7/v1/contact-forms/6/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            var res = JSON.parse(xhttp.responseText);
            console.log(res)
            if (res.status == "mail_sent") {
               document.getElementById("contactForm").reset();

               document.getElementById("showlabel").innerHTML = "Your submission has been received and we will contact you soon";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                   window.location.href = "/thankyou"
               }, 10);

            } else {
               document.getElementById("showlabel").innerHTML = "There was a problem with the request.";
               document.getElementById("showlabel").style.display = "block";

            }
         }
        };
      xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&service=" + event.target.service.value +
            "&your-message=" + event.target.message.value)
   }

//    const registerUser2 = async event => {
//       event.preventDefault()

//       document.getElementById("submitbuttonform2").value = "Submitting form...."

//       const xhttp = new XMLHttpRequest();
//       xhttp.onload = function () {
//          // console.log(this.responseText.status);
//       }
//       xhttp.open("Post", 'https://phpstack-1457894-5753298.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/6/feedback');
//       xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
//       xhttp.onreadystatechange = function () {
//          if (xhttp.readyState == 4) {
//             var res = JSON.parse(xhttp.responseText);
//             console.log(res)
//             if (res.status == "mail_sent") {
//                document.getElementById("contactForm2").reset();

//                document.getElementById("showlabel2").innerHTML = "Your submission has been received and we will contact you soon";

//                document.getElementById("showlabel2").style.display = "block";
//                window.setTimeout(function () {
//                    window.location.href = "/thankyou"
//                }, 10);

//             } else {
//                document.getElementById("showlabel2").innerHTML = "There was a problem with the request.";
//                document.getElementById("showlabel2").style.display = "block";

//             }
//          }
//       };
//       xhttp.send("your-name=" + event.target.name.value +
//             "&your-email=" + event.target.email.value +
//             "&phone=" + event.target.phone.value +
//             "&service=" + event.target.service.value +
//             "&your-message=" + event.target.message.value)

//    }

//    const registerUser3 = async event => {
//       event.preventDefault()

//       document.getElementById("submitbuttonform3").value = "Submitting form...."

//       const xhttp = new XMLHttpRequest();
//       xhttp.onload = function () {
//          // console.log(this.responseText.status);
//       }
//       xhttp.open("Post", 'https://phpstack-1457894-5753298.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/6/feedback');
//       xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
//       xhttp.onreadystatechange = function () {
//          if (xhttp.readyState == 4) {
//             var res = JSON.parse(xhttp.responseText);
//             console.log(res)
//             if (res.status == "mail_sent") {
//                document.getElementById("contactForm3").reset();

//                document.getElementById("showlabel3").innerHTML = "Your submission has been received and we will contact you soon";

//                document.getElementById("showlabel3").style.display = "block";
//                window.setTimeout(function () {
//                    window.location.href = "/thankyou"
//                }, 10);

//             } else {
//                document.getElementById("showlabel3").innerHTML = "There was a problem with the request.";
//                document.getElementById("showlabel3").style.display = "block";

//             }
//          }
//       };
//       xhttp.send("your-name=" + event.target.name.value +
//             "&your-email=" + event.target.email.value +
//             "&phone=" + event.target.phone.value +
//             "&service=" + event.target.service.value +
//             "&your-message=" + event.target.message.value)

//    }

   const [modalOpen, setModalOpen] = React.useState(false);

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

       var settings2 = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         }
      ]
   };

  return (
    <>
      <Head>
        <title>Trusted Healthcare Services for Better Care & Better Outcomes</title>
        <meta name="description" content="Delivering trusted healthcare services focused on better care and better outcomes. We provide compassionate, professional, and patient-centered healthcare solutions for improved well-being and quality care."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://db.onlinewebfonts.com/c/2cd5263ca3ce6bc9dca6a336c613a5aa?family=Cambria+W01+Regular" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://caretab.ai/#organization",
      "name": "CareTAB.ai",
      "url": "https://caretab.ai/",
      "email": "connect@caretab.ai",
      "telephone": "+91-7891-444-333",
 "logo": "https://caretab.ai/assets/img/logo/logo.png",
      "description": "CareTAB.ai provides expert home healthcare services across India. Certified professionals, affordable plans & 24/7 support – bringing quality healthcare right to your doorstep. Book now!",
      "sameAs": [
        "https://www.linkedin.com/company/caretab-ai"
      ]
    },

    {
      "@type": "MedicalBusiness",
      "@id": "https://caretab.ai/#medicalbusiness",
      "name": "CareTAB.ai",
      "url": "https://caretab.ai/",
      "telephone": "+91-7891-444-333",
      "email": "connect@caretab.ai",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 1, Basement Karuna Kunj, Sector-3, Dwarka",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "parentOrganization": {
        "@id": "https://caretab.ai/#organization"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://caretab.ai/#localbusiness",
      "name": "CareTAB.ai",
      "url": "https://caretab.ai/",
      "telephone": "+91-7891-444-333",
      "email": "connect@caretab.ai",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 1, Basement Karuna Kunj, Sector-3, Dwarka",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://caretab.ai/#website",
      "url": "https://caretab.ai/",
      "name": "CareTAB.ai",
      "publisher": {
        "@id": "https://caretab.ai/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://caretab.ai/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://caretab.ai/"
        }
      ]
    }
  ]
}

          `,
            }}
          />
      </Head>


      <div className="hero-section" id="inquirenow">
            <div className="">
                <div className="hero-single careslide1 bannerpad">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-5">
                                <div className="hero-content ajcx hideinmobile">
                                    {/* <br></br>
                                     <h6 className="hero-sub-title wow fadeInUp" data-delay=".25s">
                                        <i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt=""/></i> Your health partner for life
                                    </h6> */}
                                    <div className="fxit">


                                    <h1 className="hero-title wow fadeInRight" data-delay=".50s">
                                         Better Care <br></br>Better Outcomes <br></br>Trusted Healthcare</h1>

                                    <div className="hero-btn wow fadeInUp" data-delay="1s">
                                        <a href="tel:+91-7891-444-333" className="theme-btn btnc">Call for Care<i
                                                className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                             </div>





                             <div className="hero-content hideindestop">
                                     {/* <h6 className="hero-sub-title wow fadeInUp" data-delay=".25s">
                                        <i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt=""/></i> Your health partner for life
                                    </h6> */}

                                     <div className="hero-btn wow fadeInUp" data-delay="1s">
                                        <a href="tel:+91-7891-444-333" className="theme-btn btnc">Call for Care<i
                                                className="fas fa-arrow-right"></i></a>
                                    </div>

                                    <h2 className="hero-title wow fadeInRight" data-delay=".50s">
                                         Better Care <br></br>Better Outcomes <br></br>Comfort of Home </h2>
                            </div>

                            </div>


                            <div class="col-lg-4 header-top-right"></div>
                            <div class="col-lg-3 header-top-right">
                            <div class="bannerform align-items-center">
                                <div class="quote-header">
                                    {/* <h4>Book an appointment with our expert</h4> */}
                                    <h2 style={{ fontSize: "20px" }}>Book Your Services!</h2>

                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-lg-6">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Doctor Consultations'); }}>

                                                <div class="sicon" >
                                                    <img src="/assets/img/icon/doctor-consultation.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        Doctor <br></br>Consultations
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-6">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Nursing Care'); }}>
                                                <div class="sicon">
                                                    <img src="/assets/img/icon/medical-teamx.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        Nursing <br></br>Care
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   <div class="col-md-6 col-lg-6">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('ICU Setup at Home'); }}>
                                                <div class="sicon">
                                                    <img src="/assets/img/icon/icu.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        ICU Setup <br></br>at Home
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   <div class="col-md-6 col-lg-6">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Home Physiotherapy'); }}>
                                                <div class="sicon">
                                                    <img src="/assets/img/icon/people.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        Home <br></br>Physiotherapy
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-6">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Diagnostics'); }}>
                                                <div class="sicon">
                                                    <img src="/assets/img/icon/wellness.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        Diagnostics <br></br>@ Home
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-6">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Medical Equipment'); }}>
                                                <div class="sicon">
                                                    <img src="/assets/img/icon/ventilation.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        Medical <br></br>Equipment
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="hero-section hideindestop">
            <div className="">
                <div className="hero-single bannerpad">
                    <div className="container">
                        <div className="row align-items-center">
                            <div class="col-lg-4">
                            <div class="">

                                <div class="row">

                                    <div class="col-md-6 col-lg-4 col-4">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Doctor Consultations'); }}>

                                                <div class="sicon" >
                                                    <img src="/assets/img/icon/doctor-consultation.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        Doctor Consultations
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-4">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Nursing Care'); }}>
                                                <div class="sicon">
                                                    <img src="/assets/img/icon/medical-teamx.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        Nursing Care
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   <div class="col-md-6 col-lg-4 col-4">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('ICU Setup at Home'); }}>
                                                <div class="sicon">
                                                    <img src="/assets/img/icon/icu.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        ICU Setup <br></br>at Home
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   <div class="col-md-6 col-lg-4 col-4">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Home Physiotherapy'); }}>
                                                <div class="sicon">
                                                    <img src="/assets/img/icon/people.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        Home Physiotherapy
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-4">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Diagnostics'); }}>
                                                <div class="sicon">
                                                    <img src="/assets/img/icon/wellness.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        Diagnostics <br></br>@ Home
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-4">
                                        <div class="wow fadeInUp" data-wow-delay=".25s">
                                            <div class="sbox" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Medical Equipment'); }}>
                                                <div class="sicon">
                                                    <img src="/assets/img/icon/ventilation.png" alt=""/>
                                                </div>
                                                <div class="servicetitle">
                                                    <h3>
                                                        Medical<br></br>Equipment
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>




        {/* <!-- service area --> */}
        <div id="our-services" class="service-area2 pt-30 pb-60 lightdarkbgx helooaj servicebg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="site-heading text-center pt-30">
                            <span class="site-title-tagline"><i class="far"><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt=""/></i>Our Care Services</span>
                            <h2 class="site-title">We don’t just treat patients, <br className="dnmob"></br><span>We support families</span></h2>
                        </div>
                    </div>
                </div>
                <div class="row g-4 service-itemmain">
                    <div class="col-md-6 col-lg-4">
                        <div class="service-item wow fadeInUp" data-wow-delay=".25s">
                            <span class="count">01</span>
                            <div class="service-img">
                                <a href="/service/doctor-consultation-at-home"><img src="/assets/img/service/doctor-consultations.jpg" alt=""/></a>
                            </div>
                            <div class="service-info">
                                <div class="service-icon">
                                    <img src="/assets/img/icon/doctor-consultation.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="service-title">
                                        <a href="/service/doctor-consultation-at-home">Doctor Consultations</a>
                                    </h3>
                                    <p class="service-text">
                                        From tele-consultations to emergency visits, expert care is just one call away.
                                    </p>
                                    <a class="theme-btn" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Doctor Consultations'); }}>Inquire now<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="service-item wow fadeInUp" data-wow-delay=".50s">
                            <span class="count">02</span>
                            <div class="service-img">
                                <a href="/service/nursing-care-at-home"><img src="/assets/img/service/nursing-care.jpg" alt=""/></a>
                            </div>
                            <div class="service-info">
                                <div class="service-icon">
                                    <img src="/assets/img/icon/nurse.svg" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="service-title">
                                        <a href="/service/nursing-care-at-home">Nursing Care</a>
                                    </h3>
                                    <p class="service-text">
                                        Short & long-term nursing care including <br className="dnmob"></br>post-op, palliative & respiratory care.
                                    </p>
                                    <a class="theme-btn" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Nursing Care'); }}>Inquire now<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="service-item wow fadeInUp" data-wow-delay=".75s">
                            <span class="count">03</span>
                            <div class="service-img">
                                <a href="/service/icu-setup-at-home"><img src="/assets/img/service/icu.jpg" alt=""/></a>
                            </div>
                            <div class="service-info">
                                <div class="service-icon">
                                    <img src="/assets/img/icon/icu.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="service-title">
                                        <a href="/service/icu-setup-at-home">ICU Setup at Home</a>
                                    </h3>
                                    <p class="service-text">
                                        Complete intensive care environment setup with ventilators, monitors, & skilled staff.
                                    </p>
                                    <a onClick={() => {  setModalOpen(!modalOpen); setSelectedService('ICU Setup at Home'); }} class="theme-btn">Inquire now<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="service-item wow fadeInUp" data-wow-delay=".25s">
                            <span class="count">04</span>
                            <div class="service-img">
                                <a href="/service/physiotherapy-at-home"><img src="/assets/img/service/physiotherapy.jpg" alt=""/></a>
                            </div>
                            <div class="service-info">
                                <div class="service-icon">
                                    <img src="/assets/img/icon/people.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="service-title">
                                        <a href="/service/physiotherapy-at-home">Home Physiotherapy</a>
                                    </h3>
                                    <p class="service-text">
                                        Rehabilitation & recovery-focused sessions tailored to neuro, cardiac, & orthopedic needs.
                                    </p>
                                    <a onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Home Physiotherapy'); }} class="theme-btn">Inquire now<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="service-item wow fadeInUp" data-wow-delay=".50s">
                            <span class="count">05</span>
                            <div class="service-img">
                                <a href="/diagnostics"><img src="/assets/img/service/wellness-programs.png" alt=""/></a>
                            </div>
                            <div class="service-info">
                                <div class="service-icon">
                                    <img src="/assets/img/icon/wellness.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="service-title">
                                        <a href="/diagnostics">Diagnostics @ Home</a>
                                    </h3>
                                    <p class="service-text">
                                        Sample collection to ECG, EEG, & sleep studies at home, get priority booking for Xray, CT, & MRI
                                    </p>
                                    <a onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Diagnostics'); }} class="theme-btn">Inquire now<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="service-item wow fadeInUp" data-wow-delay=".75s">
                            <span class="count">06</span>
                            <div class="service-img">
                                <a href="/service/medical-equipment-at-home"><img src="/assets/img/service/medical-equipment.jpg" alt=""/></a>
                            </div>
                            <div class="service-info">
                                <div class="service-icon">
                                    <img src="/assets/img/icon/ventilation.png" alt=""/>
                                </div>
                                <div class="service-content">
                                    <h3 class="service-title">
                                        <a href="/service/medical-equipment-at-home">Medical Equipment (Sale & Rent)</a>
                                    </h3>
                                    <p class="service-text">
                                        Access to beds, monitors, oxygen cylinders, and more delivered to your home.
                                    </p>
                                    <a id="why-us" onClick={() => {  setModalOpen(!modalOpen); setSelectedService('Medical Equipment'); }} class="theme-btn">Inquire now<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- service area end --> */}

         {/* <!-- choose area --> */}
        <div class="choose-area pt-50 pb-50 purplebg">
            <div class="container">
                <div class="row g-4 align-items-center justify-content-between wow fadeInDown" data-wow-delay=".25s">
                    <div class="col-lg-6">
                        <div class="site-heading mb-0">
                            <span class="site-title-tagline"><i class="far"><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt=""/></i> Why CareTAB.ai?</span>
                            <h2 class="site-title colorwhite">Because healing is more than <br className="dnmob"></br><span className="colororange">just medicine</span></h2>
                            <br></br>
                        </div>
                    </div>
                    <div class="col-lg-5">

                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7 allboxx">
                        <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                            <div class="choose-content-wrap">
                                <div class="row g-4 ajrow">
                                    <div class="col-md-6">
                                        <div class="about-item align-items-center">
                                            <div class="icon">
                                                <img src="/assets/img/icon/citizen.png" alt=""/>
                                            </div>
                                            <div class="choose-item-info">
                                                <h3 className="margobb0">Endorsed by Leading Hospitals & Clinicians</h3>
                                                {/* <p>Trusted hospital backing. Reliable care at home.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="about-item align-items-center">
                                            <div class="icon">
                                                <img src="/assets/img/icon/help.png" alt=""/>
                                            </div>
                                            <div class="choose-item-info">
                                                <h3 className="margobb0">Managed & Run by Expert Doctors</h3>
                                                {/* <p>Doctors lead your care, not just approve it.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="about-item align-items-center">
                                            <div class="icon">
                                                <img src="/assets/img/icon/protocol.png" alt=""/>
                                            </div>
                                            <div class="choose-item-info">
                                                <h4 className="margobb0">Follows Global Standard Medical Protocols</h4>
                                                {/* <p>We follow the same standards as hospitals.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="about-item align-items-center">
                                            <div class="icon">
                                                <img src="/assets/img/icon/medical-team.png" alt=""/>
                                            </div>
                                            <div class="choose-item-info">
                                                <h4 className="margobb0">Qualified & Verified Medical Staff</h4>
                                                {/* <p>Trained, certified nurses and caregivers.</p> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="about-item align-items-center about-iteml">
                                            <div class="icon">
                                                <img src="/assets/img/icon/support-2.svg" alt=""/>
                                            </div>
                                            <div class="choose-item-info">
                                                <h4 className="margobb0">24/7 Patient Monitoring & Support</h4>
                                                {/* <p>Round-the-clock support. No gaps in care.</p> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                       <div class="about-item align-items-center about-iteml">
                                            <div class="icon">
                                                <img src="/assets/img/icon/certified.svg" alt=""/>
                                            </div>
                                            <div class="choose-item-info">
                                                <h4 className="margobb0">Al-Enabled 360° Personalized Healthcare</h4>
                                                {/* <p>Smart tools + human care = Better outcomes.</p> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 whycaretab">
                        <div class="choose-img wow fadeInRight" data-wow-delay=".25s">
                            {/* <img src="/assets/img/choose/01.jpg" alt=""/> */}
                        </div>
                           <span id="about-us"></span>
                    </div>

                </div>
            </div>
        </div>
        {/* <!-- choose area end --> */}


        {/* <!-- about area --> */}
        <div class="about-area pt-50 pb-50 lightdarkbg">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-left wow fadeInLeft" data-wow-delay=".25s">
                            <div class="about-img">
                                <div class="row">
                                    <div class="col-6">
                                        <img class="img-1" src="/assets/img/about/01.jpg" alt=""/>
                                    </div>
                                    <div class="col-6">
                                        <div class="img-2">
                                            <img src="/assets/img/about/02.jpg" alt=""/>
                                        </div>
                                        <div class="img-3">
                                            <img src="/assets/img/about/03.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-right wow fadeInUp" data-wow-delay=".25s">
                            <div class="site-heading mb-3">
                                <span class="site-title-tagline"><i class="far"><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt=""/></i> About Us</span>
                                <h2 class="site-title">Hospital-quality care <br></br><span >to your home</span> </h2>
                            </div>
                            <p class="about-text">CareTAB.ai envisions building a quality-driven, outcome-focused, and tech-enabled ecosystem for healthcare delivery beyond hospital walls.
                                We aim to be India’s leading home-based care provider, combining clinical excellence with AI-powered decision support, thereby improving accessibility, convenience, and patient satisfaction.</p>
                            <br></br>
                            <div class="counter-wrap">
                                <div class="row g-3 expt">

                                    <div class="col-lg-6 col-sm-6">
                                        <div class="counter-box">
                                            <div class="icon">
                                                <img src="/assets/img/icon/customer-service.png" alt=""/>
                                            </div>
                                            <div>
                                                <span class="counterx" data-count="+" data-to="7320" data-speed="3000">5000+</span>
                                                <h3 class="title">Home Visits Completed</h3>
                                            </div>
                                        </div>
                                    </div>

                                   <div class="col-lg-6 col-sm-6">
                                        <div class="counter-box">
                                            <div class="icon">
                                                <img src="/assets/img/icon/experience.png" alt=""/>
                                            </div>
                                            <div>
                                                <span class="counterx" data-count="+" data-to="6560" data-speed="3000">100%</span>
                                                <h3 class="title">Patient Satisfaction</h3>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="col-lg-6 col-sm-6">
                                        <div class="counter-box">
                                            <div class="icon">
                                                <img src="/assets/img/icon/teamwork.png" alt=""/>
                                            </div>
                                            <div>
                                                <span class="counterx" data-count="+" data-to="1500" data-speed="3000">100+</span>
                                                <h3 class="title"> ICU Setups at Home</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-sm-6">
                                        <div class="counter-box">
                                            <div class="icon">
                                                <img src="/assets/img/icon/deal.png" alt=""/>
                                            </div>
                                            <div>
                                                <span class="counterx" data-count="+" data-to="50" data-speed="3000">25+</span>
                                                <h3 class="title">Specialist Doctors on Panel</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- about area end --> */}



{/* <!-- team-area --> */}
        {/* <div id="our-team" class="team-area pb-50 pt-50 wihitebg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <h2 class="site-title">Exclusive Home Health Care Partner of <img width="130px" src="/assets/img/logo/aakash-healthcare-logo.png"/></h2>
                            <br></br>
                            <span class="site-title-tagline"><i class="far"><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt=""/></i>24X7 Medical Command Center</span>
                            <br></br>
                            <h2 class="site-title">Leading Healthcare <span>Professionals</span></h2>
                        </div>
                    </div>
                </div>
                <div class="row g-4">

                   <div class="col-md-2 col-lg-2"></div>
                    <div class="col-md-6 col-lg-4">
                        <div class="team-item wow fadeInUp" data-wow-delay=".75s">
                            <div class="team-img">
                                <img src="/assets/img/team/khushboo-kumari-n.jpg" alt="thumb"/>
                                <div class="team-social-wrap">
                                    <div class="team-social-btn">
                                        <a href="#"><button type="button"><i class="fab fa-linkedin-in"></i></button></a>
                                    </div>

                                </div>
                            </div>
                            <div class="team-content">
                                <h4>Khushboo Kumari</h4>
                                <span>Nursing Staff</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="team-item wow fadeInUp" data-wow-delay="1s">
                            <div class="team-img">
                                <img src="/assets/img/team/kapil-dalal-n.jpg" alt="thumb"/>
                                <div class="team-social-wrap">
                                    <div class="team-social-btn">
                                        <a href="#"><button type="button"><i class="fab fa-linkedin-in"></i></button></a>
                                    </div>

                                </div>
                            </div>
                            <div class="team-content">
                                <h4>Kapil Dalal</h4>
                                <span>Nursing Staff</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- team-area end --> */}

        {/* <!-- quote area --> */}
        {/* <div id="contact-us" class="quote-area pt-50 pb-50">
            <div class="container">
                <div class="quote-content">
                    <div class="row g-lg-0 align-items-center">
                        <div class="col-lg-7">
                            <div class="quote-form">
                                <div class="quote-header">
                                    <h4>Book Your Consultation & Request a Quote!</h4>

                                </div>
                                <form id="contactForm3" onSubmit={registerUser3}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-user-tie"></i>
                                                    <input type="text" name="name" id="name" class="form-control" placeholder="Name"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-envelope"></i>
                                                    <input type="email" name="email" id="email" class="form-control" placeholder="Email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-pencil"></i>
                                                    <input type="text" name="phone" id="phone" class="form-control" placeholder="Phone No."/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="form-icon servicesl">
                                                    <i class="far fa-pencil"></i>
                                                    <select class="form-control" name="service" id="service" className="service">
                                                        <option value="">---Select Service---</option>
                                                        <option value="Doctor Consultations">Doctor Consultations</option>
                                                        <option value="Nursing Care">Nursing Care</option>
                                                        <option value="ICU Setup at Home">ICU Setup at Home</option>
                                                        <option value="Physiotherapy">Physiotherapy</option>
                                                        <option value="Diagnostics">Diagnostics</option>
                                                        <option value="Medical Equipment">Medical Equipment</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-comment-lines"></i>
                                                    <textarea name="message" id="message" cols="30" rows="3" class="form-control"
                                                        placeholder="Write Your Message" required></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-2">
                                            <div className="clearfix"></div>
                                            <p id="showlabel3" style={{ display: "none" }}></p>
                                            <input id="submitbuttonform3" type="submit" className="theme-btn btnwidth" value="Get a Call!"/>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="quote-img">
                                <img src="/assets/img/quote/01.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* <!-- testimonial-area --> */}
        <div class="testimonial-area testimonial-bg pt-40 pb-20">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="wow fadeInDown" data-wow-delay=".25s">
                            <span class="site-title-tagline"><i class="far"><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt=""/></i> Testimonials</span>
                            <h2 class="site-title text-white">Voices of Care</h2>
                            <p class="text-white text-whitex">
                                Every family we serve has a story of trust, healing, and comfort. These real experiences reflect how CareTAB.ai brings
                                 professional medical care home, making recovery safe and personal.
                            </p>
                            {/* <a href="contact.html" class="theme-btn mt-30">Know More <i class="fas fa-arrow-right"></i></a> */}
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="testimonial-slider1 owl-theme fadeInUp dnmob" data-wow-delay=".25s">
                             <Slider {...settings}>
                                <div class="testimonial-item">
                                <div class="testimonial-quote">
                                    <span class="testimonial-quote-icon"><i class="fal fa-quote-right"></i></span>
                                    <div class="testimonial-shadow-icon">
                                        <img src="/assets/img/icon/quote.svg" alt=""/>
                                    </div>
                                    <p>
                                        “As ICU Incharge, I have seen many patients who need continued care after discharge. CareTAB has been a reliable partner in ensuring this transition is smooth and safe. Their trained nursing staff, timely response, and professional approach give us the confidence that our patients are in good hands once they return home.”
                                    </p>
                                    <div class="testimonial-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="testimonial-content">
                                    <div class="testimonial-author-img">
                                        <img src="/assets/img/testimonial/01.jpg" alt=""/>
                                    </div>
                                    <div class="testimonial-author-info">
                                        <h4>Dr.Ajit</h4>
                                        <p>Aakash Hospital, Dwarka,New Delhi.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="testimonial-item">
                                <div class="testimonial-quote">
                                    <span class="testimonial-quote-icon"><i class="fal fa-quote-right"></i></span>
                                    <div class="testimonial-shadow-icon">
                                        <img src="/assets/img/icon/quote.svg" alt=""/>
                                    </div>
                                    <p>
                                        CareTAB.ai Team responded promptly when I needed urgent help at home. Their expert treatment restored my mobility and comfort in just few sessions. CareTAB.ai has shown how healthcare can be both professional and deeply caring"
                                    </p>
                                    <div class="testimonial-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="testimonial-content">
                                    <div class="testimonial-author-img">
                                        <img src="/assets/img/testimonial/02.jpg" alt=""/>
                                    </div>
                                    <div class="testimonial-author-info">
                                        <h4>Avinash Chander Vadhera</h4>
                                        <p>79, Dwarka, New Delhi</p>
                                    </div>
                                </div>
                            </div>
                            </Slider>
                        </div>

                        <div class="testimonial-slider1 owl-theme fadeInUp hideindestop" data-wow-delay=".25s">
                             <Slider {...settings2}>
                                <div class="testimonial-item">
                                <div class="testimonial-quote">
                                    <span class="testimonial-quote-icon"><i class="fal fa-quote-right"></i></span>
                                    <div class="testimonial-shadow-icon">
                                        <img src="/assets/img/icon/quote.svg" alt=""/>
                                    </div>
                                    <p>
                                        “As ICU Incharge, I have seen many patients who need continued care after discharge. CareTAB has been a reliable partner in ensuring this transition is smooth and safe. Their trained nursing staff, timely response, and professional approach give us the confidence that our patients are in good hands once they return home.”
                                    </p>
                                    <div class="testimonial-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="testimonial-content">
                                    <div class="testimonial-author-img">
                                        <img src="/assets/img/testimonial/01.jpg" alt=""/>
                                    </div>
                                    <div class="testimonial-author-info">
                                        <h4>Dr.Ajit</h4>
                                        <p>Aakash Hospital, Dwarka,New Delhi.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="testimonial-item">
                                <div class="testimonial-quote">
                                    <span class="testimonial-quote-icon"><i class="fal fa-quote-right"></i></span>
                                    <div class="testimonial-shadow-icon">
                                        <img src="/assets/img/icon/quote.svg" alt=""/>
                                    </div>
                                    <p>
                                        CareTAB.ai Team responded promptly when I needed urgent help at home. Their expert treatment restored my mobility and comfort in just few sessions. CareTAB.ai has shown how healthcare can be both professional and deeply caring"
                                    </p>
                                    <div class="testimonial-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="testimonial-content">
                                    <div class="testimonial-author-img">
                                        <img src="/assets/img/testimonial/02.jpg" alt=""/>
                                    </div>
                                    <div class="testimonial-author-info">
                                        <h4>Avinash Chander Vadhera</h4>
                                        <p>79, Dwarka, New Delhi</p>
                                    </div>
                                </div>
                            </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- testimonial-area end --> */}
        {/* <!-- quote area end --> */}



        <div className="ajrm">
<Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} backdrop="static" keyboard={false}>
      <button
            aria-label="Close"
            className="close popcl"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>

        <ModalBody>
            <div class="">
                                <div class="quote-header">
                                    {/* <h4>Book an appointment with our expert</h4> */}
                                    <h4>Book Your Services!</h4>
                                </div>
                                <form id="contactForm" onSubmit={registerUser}>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-user-tie"></i>
                                                    <input type="text" name="name" id="name" class="form-control" placeholder="Name" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-envelope"></i>
                                                    <input type="email" name="email" id="email" class="form-control" placeholder="Email" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-pencil"></i>
                                                    <input type="text" name="phone" id="phone" class="form-control" maxlength="13" minlength="10" pattern="[0-9]*" placeholder="Phone No." required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="form-icon servicesl">
                                                    <i class="far fa-pencil"></i>
                                                    <select class="form-control" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} name="service" id="service" className="service" required>
                                                        <option value="">---Select Service---</option>
                                                        <option value="Doctor Consultations">Doctor Consultations</option>
                                                        <option value="Nursing Care">Nursing Care</option>
                                                        <option value="ICU Setup at Home">ICU Setup at Home</option>
                                                        <option value="Home Physiotherapy">Home Physiotherapy</option>
                                                        <option value="Diagnostics">Diagnostics</option>
                                                        <option value="Medical Equipment">Medical Equipment</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-comment-lines"></i>
                                                    <textarea name="message" id="message" cols="30" rows="3" class="form-control"
                                                        placeholder="Write Your Message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-2">
                                            <div className="clearfix"></div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                        <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Get a Call!"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
        </ModalBody>

      </Modal>

       </div>


    </>
  );
}
