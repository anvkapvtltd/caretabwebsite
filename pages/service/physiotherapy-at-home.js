import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";
import Slider from "react-slick";
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link'






export default function Physiotherapy() {
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

    const registerUser2 = async event => {
        event.preventDefault()

        document.getElementById("submitbuttonform2").value = "Submitting form...."

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            // console.log(this.responseText.status);
        }
        xhttp.open("Post", 'https://phpstack-1457894-5753298.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/6/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                var res = JSON.parse(xhttp.responseText);
                console.log(res)
                if (res.status == "mail_sent") {
                    document.getElementById("contactForm2").reset();

                    document.getElementById("showlabel2").innerHTML = "Your submission has been received and we will contact you soon";

                    document.getElementById("showlabel2").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thankyou"
                    }, 10);

                } else {
                    document.getElementById("showlabel2").innerHTML = "There was a problem with the request.";
                    document.getElementById("showlabel2").style.display = "block";

                }
            }
        };
        xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&service=" + event.target.service.value +
            "&your-message=" + event.target.message.value)

    }

    const registerUser3 = async event => {
        event.preventDefault()

        document.getElementById("submitbuttonform3").value = "Submitting form...."

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            // console.log(this.responseText.status);
        }
        xhttp.open("Post", 'https://phpstack-1457894-5753298.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/6/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                var res = JSON.parse(xhttp.responseText);
                console.log(res)
                if (res.status == "mail_sent") {
                    document.getElementById("contactForm3").reset();

                    document.getElementById("showlabel3").innerHTML = "Your submission has been received and we will contact you soon";

                    document.getElementById("showlabel3").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thankyou"
                    }, 10);

                } else {
                    document.getElementById("showlabel3").innerHTML = "There was a problem with the request.";
                    document.getElementById("showlabel3").style.display = "block";

                }
            }
        };
        xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&service=" + event.target.service.value +
            "&your-message=" + event.target.message.value)

    }

    const [modalOpen, setModalOpen] = React.useState(false);

    var settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
                <title>Physiotherapy at Home | Expert Physiotherapist Home Visit | CareTAB.ai</title>
                <meta name="description" content="Book certified physiotherapists for home visits with CareTAB.ai. Get rehabilitation, pain management, stroke recovery, and mobility therapy from the comfort of your home across India."/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />       
                <link rel="stylesheet" href="/assets/css/physiotherapy-at-home.css" />
                <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "CareTab.ai",
  "alternateName": "CareTAB.ai",
  "url": "https://caretab.ai",
  "logo": "https://caretab.ai/assets/img/logo/logo.png",
  "telephone": "+91-7891-444-333",
  "email": "connect@caretab.ai",
  "description": "CareTab.ai is built and managed by a team of experienced doctors and nurses. Using all-round healthcare technology, we deliver reliable, efficient and high-quality medical care right where you are.",
  "address": [
    {
      "@type": "PostalAddress",
      "name": "Delhi Office",
      "streetAddress": "Plot No. 1, Basement Karuna Kunj, Sector-3, Dwarka",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110075",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "name": "Gurugram Office",
      "streetAddress": "Plot No. 231, Phase IV, Udyog Vihar, Sector 18",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/CareTab",
    "https://www.instagram.com/caretab.ai/",
    "https://www.linkedin.com/company/108111134",
    "https://x.com/CaretabAi"
  ],
  "areaServed": ["Dwarka", "New Delhi", "Gurugram", "Delhi NCR"],
  "medicalSpecialty": [
  ]
}
</script>

</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Physiotherapy at Home",
  "serviceType": "Home Physiotherapy",
  "url": "https://caretab.ai/service/physiotherapy-at-home",
  "description": "Certified physiotherapists provide personalised physiotherapy at home using evidence-based techniques and advanced equipment. Services include Post Surgical Rehabilitation, Neurological Rehabilitation, Cardiac Rehabilitation, Pain Management, TKR and THR Recovery — with supervised doctor guidance in Delhi NCR.",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "CareTab.ai",
    "url": "https://caretab.ai",
    "telephone": "+91-7891-444-333",
    "email": "connect@caretab.ai"
  },
  "areaServed": [
    "Dwarka",
    "New Delhi",
    "Gurugram",
    "Delhi NCR"
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+91-7891-444-333",
      "contactType": "booking",
      "availableLanguage": ["English", "Hindi"]
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Physiotherapy Services at Home",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Post Surgical Rehabilitation at Home"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Neurological Rehabilitation at Home"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cardiac Rehabilitation at Home"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pain Management Physiotherapy at Home"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Total Knee Replacement (TKR) Recovery Physiotherapy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Total Hip Replacement (THR) Recovery Physiotherapy"
        }
      }
    ]
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I book physiotherapy at home with CareTab.ai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can call our helpline +91-7891-444-333 or book directly through our website. Our care coordinator will guide you in choosing the right physiotherapy service and schedule a certified physiotherapist at your home."
      }
    },
    {
      "@type": "Question",
      "name": "Who are the physiotherapists at CareTab.ai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team includes clinically-certified physiotherapists who have undergone rigorous training, background verification, and are supervised by senior specialist doctors. They use evidence-based techniques and advanced equipment."
      }
    },
    {
      "@type": "Question",
      "name": "What conditions can physiotherapy at home help with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CareTab.ai physiotherapists specialise in Post Surgical Rehabilitation, Neurological Rehabilitation (stroke, paralysis), Cardiac Rehabilitation, Orthopedic Rehabilitation (TKR, THR), Pain Management, and mobility and strengthening training."
      }
    },
    {
      "@type": "Question",
      "name": "Can CareTab.ai coordinate with my hospital or doctor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CareTab.ai works alongside your hospital doctors to provide continuity of physiotherapy care at home, ensuring smooth communication and better recovery outcomes."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of home physiotherapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Home physiotherapy offers: care in the comfort of home without travel stress, personalised one-on-one attention, faster recovery through consistent sessions, pain and mobility management, holistic support, and reduced chances of stiffness or re-injury."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://caretab.ai"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://caretab.ai/#our-services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Physiotherapy at Home",
      "item": "https://caretab.ai/service/physiotherapy-at-home"
    }
  ]
}

          `,
            }}
          />
            </Head>


            <div className="hero-section" id="inquirenow">
                <div className="">
                    <div className="hero-single physiotherapybanner bannerpad">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-5">
                                    <div className="hero-content">
                                        {/* <br></br>
                                        <h6 className="hero-sub-title wow fadeInUp" data-delay=".25s">
                                            <i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i> Physiotherapy at Home | CareTAB.ai 
                                        </h6> */}

                                        <h1 className="hero-title wow fadeInRight" data-delay=".50s">
                                            Regain Strength, <br></br>Mobility & Confidence
                                        </h1>
                                        {/* <p className="text-justify">Physiotherapy plays a vital role in recovery, pain management, and improving quality of life. At CareTAB.ai, our certified physiotherapists provide personalized physiotherapy treatment at home, using evidence-based techniques to help you recover faster and move better.</p> */}
                                        <div className="hero-btn wow fadeInUp" data-delay="1s">
                                            <a href="tel:+91-7891-444-333" className="theme-btn btnc">Call To Book Physiotherapy <i
                                                className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-lg-4 header-top-right"></div>
                                <div class="col-lg-3 header-top-right">
                                    <div class="bannerform align-items-center">
                                        <div class="quote-header">
                                            {/* <h4>Book an appointment with our expert</h4> */}
                                            <h2 style={{ fontSize: "20px" }}>Book Your Services!</h2>
                                        </div>
                                        <form id="contactForm" onSubmit={registerUser}>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-icon">
                                                            <i class="far fa-user-tie"></i>
                                                            <input type="text" name="name" id="name" class="form-control" placeholder="Name" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-icon">
                                                            <i class="far fa-envelope"></i>
                                                            <input type="email" name="email" id="email" class="form-control" placeholder="Email" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-icon">
                                                            <i class="far fa-pencil"></i>
                                                            <input type="text" name="phone" id="phone" class="form-control" maxlength="13" minlength="10" pattern="[0-9]*" placeholder="Phone No." required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-icon servicesl">
                                                            <i class="far fa-pencil"></i>
                                                            <select class="form-control" name="service" id="service" className="service" required>                                                                
                                                                <option value="Nursing Care At Home">Nursing Care At Home</option>
                                                                <option value="Doctor Consultation at Home">Doctor Consultation at Home</option>
                                                                <option value="Physiotherapy at Home" selected>Physiotherapy at Home</option>
                                                                <option value="ICU Setup at Home">ICU Setup at Home</option>
                                                                <option value="Medical Equipment at Home">Medical Equipment at Home</option>
                                                                <option value="CGM at Home">CGM at Home</option>
                                                                <option value="PFT or LFT at Home">PFT / LFT at Home</option>
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
                                                    <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Get a Call!" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="living-option pt-60 pb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <div class="site-heading text-center">
                                {/* <span class="site-title-tagline"><i class="far fa-house-chimney-heart"></i> Living Options</span> */}
                                <h2 class="site-title">Benefits of Home <span>Physiotherapy</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 slpadding">
                        <Slider {...settings}>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/Care in the Comfort of Home.jpg" alt="Care in the Comfort of Home" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Care in the Comfort of Home</a>
                                        </h3>
                                    </div>
                                    <p>
                                        Receive expert therapy without the stress of travel.
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/Personalized Attention.jpg" alt="Personalized Attention" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Personalized Attention</a>
                                        </h3>
                                    </div>
                                    <p>
                                        One-on-one care designed around your condition and lifestyle.
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/Faster Recovery.jpg" alt="" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Faster Recovery</a>
                                        </h3>
                                    </div>
                                    <p>
                                        Regular, consistent sessions speed up healing and improve outcomes.
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/Pain & Mobility Management.jpg" alt="Pain & Mobility Management" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Pain & Mobility Management</a>
                                        </h3>
                                    </div>
                                    <p>
                                        Helps reduce pain, improve flexibility, and restore strength.
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/holistic support.jpg" alt="holistic support" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Holistic Support</a>
                                        </h3>
                                    </div>
                                    <p>
                                        Focuses on physical, emotional, and functional well-being.
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/Prevents Complications.jpg" alt="Prevents Complications" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Prevents Complications</a>
                                        </h3>
                                    </div>
                                    <p>
                                        Reduces chances of stiffness, contractures, or re-injury.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>


            <div class="choose-area pt-50 pb-50 planebg">
                <div class="container">
                    <div className="row">
                        <div className="col">
                            <div class="site-heading mb-0">
                                <h2 class="site-title">Our Physiotherapy <span>Services</span></h2>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <Tabs>
                        <div class="row zindexxx">

                            <div class="col-lg-6 allboxx">
                                <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                    <div class="choose-content-wrap">
                                        <div class="row g-4 ajrow">
                                            <TabList className="lefttab lefttabphysiotheapy">
                                             
                                                <Tab>
                                                    <div class="col-md-12">
                                                        <div class="about-item align-items-center">
                                                            <div class="icon">
                                                                <img src="/assets/img/icon/medical-team.png" alt="" />
                                                            </div>
                                                            <div class="choose-item-info">
                                                                <h3 className="margobb0">Post Surgical Rehabilitation</h3>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>

                                                <Tab>
                                                    <div class="col-md-12">
                                                        <div class="about-item align-items-center">
                                                            <div class="icon">
                                                                <img src="/assets/img/icon/help.png" alt="" />
                                                            </div>
                                                            <div class="choose-item-info">
                                                                <h3 className="margobb0">Neurological Rehabilitation</h3>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>

                                                <Tab>
                                                    <div class="col-md-12">
                                                        <div class="about-item align-items-center">
                                                            <div class="icon">
                                                                <img src="/assets/img/icon/protocol.png" alt="" />
                                                            </div>
                                                            <div class="choose-item-info">
                                                                <h3 className="margobb0">Cardiac Rehabilitation </h3>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab>
                                                    <div class="col-md-12">
                                                        <div class="about-item align-items-center">
                                                            <div class="icon">
                                                                <img src="/assets/img/icon/medical-team.png" alt="" />
                                                            </div>
                                                            <div class="choose-item-info">
                                                                <h3 className="margobb0">Pain management</h3>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>

                                                

                                                


                                            </TabList>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">                        

                                <TabPanel className="tabdetails">
                                    <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                        <div class="choose-content-wrap">
                                            <div class="row g-3 nursingiconbox">
                                                <div class="col-sm-6">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/Total Knee Replacement (TKR) Recovery.svg" alt="Total Knee Replacement (TKR) Recovery" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Total Knee Replacement (TKR) Recovery</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/Total Hip Replacement (THR) Recovery.svg" alt="Total Hip Replacement (THR) Recovery" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Total Hip Replacement (THR) Recovery</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tabdetails">
                                    <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                        <div class="choose-content-wrap">
                                            <div class="row g-3 nursingiconbox">
                                                <div class="col-sm-6">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/Physiotherapy for stroke patients at home.svg" alt="Physiotherapy for stroke patients at home" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Physiotherapy for stroke patients at home</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/Parkinson Care.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Parkinson’s Care </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tabdetails">
                                    <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                        <div class="choose-content-wrap">
                                            <div class="row g-3 nursingiconbox">

                                                {/* <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>ActiveAge</h4>
                                                        </div>
                                                    </div>
                                                </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tabdetails">
                                    <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                        <div class="choose-content-wrap">
                                            <div class="row g-3 nursingiconbox">

                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/Physiotherapy for knee pain at home.svg" alt="Physiotherapy for knee pain at home" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Physiotherapy for knee <br></br>pain at home</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/Physiotherapy for body pain.svg" alt="Physiotherapy for body pain" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Physiotherapy <br></br>for body pain</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/Physiotherapy for mobility.svg" alt="Physiotherapy for mobility" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Physiotherapy for <br></br>mobility</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/Back pain physiotherapy treatment at home.svg" alt="Back pain physiotherapy treatment at home" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Back pain physiotherapy treatment at home</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>




            <div class="video-area pb-100 pt-50">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <img className="bredius img100" src="/assets/img/physiotherapy-at-home/Why Choose Care Tab Physiotherapy.jpg" alt="" />
                        </div>

                        <div class="col-lg-6">
                            <div class="video-info wow fadeInUp insidep" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Why Choose <span>CareTAB.ai</span> <br></br>Physiotherapy?</h2>
                                    <br></br>
                                </div>
                                <div class="feature-content">
                                    <ul class="listicon">
                                        <li>
                                            <img src="/assets/img/icon/listicon.png" />
                                            <p>Clinically-certified, expert physiotherapists</p>
                                        </li>

                                        <li>
                                            <img src="/assets/img/icon/listicon.png" />
                                            <p>Bespoke physiotherapy plans</p>
                                        </li>
                                        <li>
                                            <img src="/assets/img/icon/listicon.png" />
                                            <p>Evidence-based techniques and advanced equipment</p>
                                        </li>
                                        <li>
                                            <img src="/assets/img/icon/listicon.png" />
                                            <p>Supervised care with doctor guidance</p>
                                        </li>
                                        <li>
                                            <img src="/assets/img/icon/listicon.png" />
                                            <p>Convenient & flexible scheduling at home</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cta-area">
                <div class="container">
                    <div class="cta-wrap rounded-5 w-100">
                        <div class="col-lg-7 mx-auto">
                            <div class="cta-content">
                                <h2>Rebuild strength with expert guidance</h2>
                                <p>
                                    Take the first step toward recovery and better mobility. With CareTAB.ai, best physiotherapy at home services, care is just a call away.
                                </p>
                                <a href="#" class="theme-btn">Book Your Rehabilitation Session Now<i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- faq area --> */}
            <div class="faq-area pt-100 pb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="faq-content wow fadeInUp text-center" data-wow-delay=".25s">
                                <div class="site-heading mb-3">
                                    <span class="site-title-tagline"><i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i> FAQs</span>
                                    <h2 class="site-title my-3 pb-20">Frequently Asked <span>Questions</span> (FAQs)</h2>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="accordion wow fadeInRight" data-wow-delay=".25s" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <span><i class="far fa-question"></i></span> How do I book a CareTAB.ai physiotherapy at home? 
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            You can call our helpline or book directly through our website. Our care coordinator will guide you in choosing the right service and schedule.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span><i class="far fa-question"></i></span> Who are the doctors and nurses at CareTAB.ai?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Our team is made up of qualified doctors, registered nurses, and certified physiotherapists. Each professional undergoes rigorous training, verification, and is supervised by senior specialists.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            <span><i class="far fa-question"></i></span> What conditions can physiotherapy at home help with? 
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Our physiotherapists specialize in post-surgery rehab, neuro rehabilitation, cardiac rehab, and orthopedic rehab, as well as pain management, mobility training, and strengthening exercises.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">
                                            <span><i class="far fa-question"></i></span> Can CareTAB.ai coordinate with my hospital/doctor? 
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse"
                                        aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Yes. We work alongside your hospital doctors and provide continuity of care at home, ensuring smooth communication and better outcomes.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- faq area end --> */}



        </>
    );
}
