"use client";
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useEffect } from "react";
import moment from "moment"

/* =========================
   SERVER SIDE PROPS
========================= */
export async function getServerSideProps(context) {
  try {
    const posturl = context.params.blogsSlug

    const [postRes, recentRes, catedata] = await Promise.all([
      fetch(
        `https://admin.caretab.ai/wp-json/wp/v2/posts?slug=${posturl}&_embed`
      ),
      fetch(
        "https://admin.caretab.ai/wp-json/wp/v2/posts?_embed&categories_exclude=845454545454545&per_page=6"
      ),
      fetch(
        "https://admin.caretab.ai/wp-json/wp/v2/categories"
      ),
    ])

    const postData = await postRes.json()
    const recentData = await recentRes.json()
    const CatData = await catedata.json()

    if (!postData || postData.length === 0) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        posts: postData[0],
        posts5: recentData || [],
        cat: CatData || [],
      },
    }
  } catch (error) {
    console.log("SERVER ERROR:", error)

    return {
      notFound: true,
    }
  }
}

/* =========================
   COMPONENT
========================= */
const SingleBlog = ({ posts, posts5, cat }) => {

  console.log("posts data", posts);

  useEffect(() => {
    document.body.classList.add("headerbodyc");

    return () => {
      document.body.classList.remove("headerbodyc");
    };
  }, []);



  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: posts.title.rendered,
        "description": posts.yoast_head_json.description,
        "image": posts?.yoast_head_json?.og_image?.[0]?.url,
        "author": { "@type": "Person", "name": "Nishu Negi" },
        "publisher": {
          "@type": "Organization",
          "name": "CareTab.ai",
          "logo": { "@type": "ImageObject", "url": "https://caretab.ai/assets/img/logo/logo.png" }
        },
        "datePublished": posts.date,
        "dateModified": posts.modified,
        mainEntityOfPageq: { "@type": "WebPage", "@id": `https://caretab.ai/blogs/${posts.slug}`, },

      },
      {
        "@type": "MedicalWebPage",
        "name": posts.title.rendered,
        "url": `https://caretab.ai/blogs/${posts.slug}`,
        "about": { "@type": "MedicalTherapy", "name": posts.title.rendered, },
        "lastReviewed": "2026-06-18"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://caretab.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://caretab.ai/blogs" },
          { "@type": "ListItem", "position": 3, "name": posts.title.rendered, "item": `https://caretab.ai/blogs/${posts.slug}`, }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          {posts?.title?.rendered || "Blog"} - Curewith3D
        </title>

        <meta
          name="description"
          content={
            posts?.yoast_head_json?.og_description ||
            "Curewith3D Blog"
          }
        />

        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />


      </Head>
      <main class="main">

        <div class="blog-single py-120">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-8">
                <div class="blog-single-wrap">
                  <div class="blog-single-content">
                    <div class="blog-thumb-img">
                      <img
                        src={
                          posts?.yoast_head_json?.og_image?.[0]
                            ?.url || "/placeholder.jpg"
                        }
                        alt={
                          posts?.title?.rendered ||
                          "Blog Image"
                        }

                        className="ajimgfull"
                        priority
                      />
                    </div>
                    <div class="blog-info">
                      <div class="blog-meta">
                        <div class="blog-meta-left">
                          <ul>
                            <li><i class="far fa-user"></i><a href="#">{posts.yoast_head_json.author}</a></li>
                            <li><i class="far fa-clock"></i>{new Date(
                              posts.date
                            ).toLocaleDateString("en-US", {
                              month: "long",
                              day: "2-digit",
                              year: "numeric",
                            })}</li>
                          </ul>
                        </div>
                        
                      </div>
                      <div class="blog-details">
                        <h1 class="blog-details-title mb-20">
                          <div dangerouslySetInnerHTML={{ __html: posts.title.rendered }} />
                        </h1>
                       <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: posts?.content?.rendered || "" }}
                      />
                        <hr />
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <aside class="blog-sidebar">
                  <div class="widget recent-post">
                    <h3 class="widget-title">Recent Post</h3>
                    {posts5?.map((post) => (
                      <div class="recent-post-item">
                        <div class="recent-post-img">
                          <Image
                            src={
                              post?.yoast_head_json?.og_image?.[0]
                                ?.url || "/placeholder.jpg"
                            }
                            alt={
                              post?.title?.rendered ||
                              "Recent Blog"
                            }
                            width={150}
                            height={100}
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                        <div class="recent-post-info">
                          <h4><a href={`/blogs/${post.slug}`} > <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> </a></h4>
                          <span><i class="far fa-clock"></i> {moment(post?.date).format(
                            "MMMM DD YYYY"
                          )}</span>
                        </div>
                      </div>
                    ))}
                  </div>


                  <div class="widget social">
                    <h5 class="widget-title">Follow Us</h5>
                    <div class="social-link">
                      <a href="https://www.facebook.com/CareTab"><i class="fab fa-facebook-f"></i></a>
                      <a href="https://www.instagram.com/caretab.ai/"><i class="fab fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/company/108111134"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>

                </aside>
              </div>
            </div>
          </div>
        </div>

      </main>


    </>
  )
}

export default SingleBlog