import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://admin.caretab.ai/wp-json/wp/v2/posts?_embed&categories_exclude=52505&per_page=6&page=1",
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "Next.js Server",
        },
      }
    )

    const posts = await res.json()

    return {
      props: {
        initialPosts: posts || [],
        totalPages:
          Number(res.headers.get("X-WP-TotalPages")) || 1,
      },
    }
  } catch (error) {
    return {
      props: {
        initialPosts: [],
        totalPages: 1,
      },
    }
  }
}



/* =========================
   COMPONENT
========================= */
export default function Index({
  initialPosts,
  totalPages,
}) {
  const [posts, setPosts] = useState(initialPosts)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)



  // console.log("posts", posts)

  const loadMoreRef = useRef(null)

  /* =========================
     LOAD MORE POSTS
  ========================= */
  const loadMorePosts = async () => {
    if (loading || page >= totalPages) return

    try {
      setLoading(true)

      const nextPage = page + 1

      const res = await fetch(
        `https://admin.caretab.ai/wp-json/wp/v2/posts?_embed&categories_exclude=52505&per_page=6&page=${nextPage}`
      )

      const newPosts = await res.json()

      setPosts((prev) => [...prev, ...newPosts])

      setPage(nextPage)
    } catch (error) {
      console.log("Load More Error:", error)
    } finally {
      setLoading(false)
    }
  }

  /* =========================
     INTERSECTION OBSERVER
  ========================= */
  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts()
        }
      },
      {
        rootMargin: "300px",
      }
    )

    observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [page, loading])

    
    const [selectedService, setSelectedService] = useState(''); // Initial empty selection



  return (
    <>
      <Head>
        <title>Contact CareTAB.ai | Book Home Healthcare Services | +91-7891-444-333 </title>
        <meta name="description" content="Contact CareTAB.ai | Book Home Healthcare Services | +91-7891-444-333 "/>
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
      "logo": "https://caretab.ai/assets/img/logo/logo.png",
      "email": "connect@caretab.ai",
      "telephone": "+91-7891-444-333",
      "description": "CareTAB.ai provides home healthcare services including nursing care, doctor consultation, physiotherapy, diagnostics, ICU setup, and medical equipment at home.",
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
        "postalCode": "110078",
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
        "postalCode": "110078",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-7891-444-333",
      "contactType": "customer support",
      "email": "connect@caretab.ai",
      "availableLanguage": [
        "English",
        "Hindi"
      ],
      "areaServed": "IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://caretab.ai/contact-us/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://caretab.ai/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact Us",
          "item": "https://caretab.ai/contact-us"
        }
      ]
    }
  ]
}

          `,
            }}
          />
      </Head>

<main class="main">

  
        <div class="site-breadcrumb blogbanner">
            <div class="container">
                <h2 class="breadcrumb-title">Our Blog</h2>
                <ul class="breadcrumb-menu">
                    <li><a href="/">Home</a></li>
                    <li class="active">Our Blog</li>
                </ul>
            </div>
        </div>

        <div class="blog-area py-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mx-auto">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span class="site-title-tagline"><i class="far"><img class="brandiconw" src="/assets/img/icon/brandicon.png" alt=""/></i> Our Blog</span>
                            <h2 class="site-title">Our Latest News & <span>Blog</span></h2>
                        </div>
                    </div>
                </div>
                <div class="row g-4">

                    {posts?.map((post) => (
                    <div key={post.id} class="col-md-6 col-lg-4">
                        <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                            <div class="blog-item-img">
                                <a
                              href={`/blogs/${post.slug}`}
                            >
                              <Image
                                src={
                                  post?.yoast_head_json?.og_image?.[0]
                                    ?.url || "/placeholder.jpg"
                                }
                                width={500}
                                height={350}
                                className="img-fluid"
                                alt={
                                  post?.title?.rendered ||
                                  "Blog Image"
                                }
                              />
                            </a>
                                <div class="blog-date">
                                    {new Date(
                                  post.date
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "2-digit",
                                  year: "numeric",
                                })}
                                </div>
                            </div>
                            <div class="blog-item-info">
                                <div class="blog-item-meta">
                                    <ul>
                                        <li><a href="#"><i class="far fa-user-circle"></i>{post.yoast_head_json.author}</a></li>
                                        {/* <li><a href="#"><i class="far fa-comments"></i> 2.5k Comments</a></li> */}
                                    </ul>
                                </div>
                                <h4 class="blog-title">
                                    <a href={`/blogs/${post.slug}`}><div dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></a>
                                </h4>
                                <div dangerouslySetInnerHTML={{__html:post.excerpt?.rendered?.replace(/<[^>]+>/g, "").split(" ").slice(0, 14).join(" ") || "",}}></div>
                                <a class="theme-btn" href={`/blogs/${post.slug}`}>Read More<i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                     ))}


                <div ref={loadMoreRef}></div>

          {/* LOADING */}
          {loading && (
            <p className="text-center">
              Loading...
            </p>
          )}

          {/* END */}
          {page >= totalPages && (
            <p className="text-center">
              No more posts
            </p>
          )}
                </div>
             
                {/* <div class="pagination-area">
                    <div aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true"><i class="fas fa-arrow-left"></i></span>
                                </a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> */}
        
            </div>
        </div>
      

    </main>


   


    </>
  );
}
