import { Images, Video } from "lucide-react";

// ========================================
// IMAGES
// Replace these dummy filenames later
// ========================================

import galleryImage1 from "../../assets/images/img1.jpg";
import galleryImage2 from "../../assets/images/img2.jpg";
import galleryImage3 from "../../assets/images/img3.jpg";
import galleryImage4 from "../../assets/images/img4.jpg";
import galleryImage5 from "../../assets/images/img5.jpg";

// ========================================
// VIDEOS
// Your actual videos
// ========================================

import galleryVideo1 from "../../assets/videos/gallery1.mp4";
import galleryVideo2 from "../../assets/videos/gallery2.mp4";
import galleryVideo3 from "../../assets/videos/gallery3.mp4";

function Gallery() {
  const images = [
    {
      src: galleryImage1,
      alt: "Nalan Catering wedding catering service in Trichy",
    },
    {
      src: galleryImage2,
      alt: "Traditional Tamil food catering by Nalan Catering",
    },
    {
      src: galleryImage3,
      alt: "Nalan Catering food arrangement for a special event",
    },
    {
      src: galleryImage4,
      alt: "Wedding food and catering service by Nalan Catering",
    },
    {
      src: galleryImage5,
      alt: "Traditional South Indian catering service in Trichy",
    },
  ];

  const videos = [
    {
      src: galleryVideo1,
      title: "Nalan Catering customer feedback",
    },
    {
      src: galleryVideo2,
      title: "Nalan Catering event and food service",
    },
    {
      src: galleryVideo3,
      title: "Nalan Catering celebration and catering service",
    },
  ];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="
        relative
        overflow-hidden
        bg-[#dcefe3]
        py-14
        sm:py-16
        md:py-20
      "
    >
      {/* ========================================
          SOFT GREEN BACKGROUND
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#eef9f1]
          via-[#dcefe3]
          to-[#cfe6d7]
        "
      />

      {/* Soft green glow */}

      <div
        aria-hidden="true"
        className="
          absolute
          -top-32
          left-1/2
          h-72
          w-[700px]
          max-w-[100%]
          -translate-x-1/2
          rounded-full
          bg-green-300/20
          blur-3xl
        "
      />

      {/* ========================================
          MAIN CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* ========================================
            HEADER
        ========================================= */}

        <header className="mx-auto max-w-3xl text-center">

          <div className="mb-3 flex items-center justify-center gap-2">
            <Images
              size={17}
              aria-hidden="true"
              className="text-green-700"
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[3px]
                text-green-700
                sm:text-xs
              "
            >
              எங்கள் நினைவுகள்
            </span>
          </div>

          <h2
            id="gallery-heading"
            className="
              text-3xl
              font-bold
              leading-tight
              text-green-950
              sm:text-4xl
              md:text-5xl
            "
          >
            ஒவ்வொரு விழாவும்

            <span className="block text-green-700">
              ஒரு இனிய நினைவு
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-green-950/65
              sm:text-base
              sm:leading-7
            "
          >
            நளன் கேட்டரிங் வழங்கும் திருமணம், பிறந்தநாள்,
            குடும்ப விழாக்கள் மற்றும் சிறப்பு நிகழ்வுகளின்
            அழகான தருணங்களை காணுங்கள். பாரம்பரிய சுவை,
            தரமான உணவு மற்றும் சிறந்த catering service
            மூலம் உங்கள் விழாவை மறக்க முடியாத நினைவாக
            மாற்றுகிறோம்.
          </p>

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-5
              h-1
              w-14
              rounded-full
              bg-green-600
            "
          />
        </header>


        {/* ========================================
            IMAGE GALLERY
        ========================================= */}

        <div className="mt-10 sm:mt-12">

          <div className="mb-4 flex items-end justify-between">

            <div>

              <h3
                className="
                  flex
                  items-center
                  gap-2
                  text-lg
                  font-bold
                  text-green-950
                  sm:text-xl
                "
              >
                <Images
                  size={19}
                  aria-hidden="true"
                  className="text-green-700"
                />

                புகைப்படங்கள்
              </h3>

              <p className="mt-1 text-[11px] text-green-950/55 sm:text-xs">
                Swipe to explore our catering moments
              </p>

            </div>

            <span
              className="
                hidden
                rounded-full
                bg-green-700/10
                px-3
                py-1
                text-[11px]
                font-medium
                text-green-800
                sm:block
              "
            >
              ← Swipe →
            </span>

          </div>


          {/* IMAGE SCROLLER */}

          <div
            className="
              flex
              gap-3
              overflow-x-auto
              overscroll-x-contain
              pb-3
              snap-x
              snap-mandatory
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
            aria-label="Nalan Catering photo gallery"
          >

            {images.map((image, index) => (

              <figure
                key={image.src}
                className="
                  relative
                  min-w-[47%]
                  snap-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-green-900/10
                  bg-white
                  shadow-[0_8px_25px_rgba(20,83,45,0.10)]
                  sm:min-w-[30%]
                  md:min-w-[24%]
                  lg:min-w-[22%]
                "
              >

                <div className="aspect-[4/3] overflow-hidden">

                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width="800"
                    height="600"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                </div>

                
              </figure>

            ))}

          </div>

        </div>


        {/* ========================================
            VIDEO GALLERY
        ========================================= */}

        <div className="mt-10 sm:mt-12">

          <div className="mb-4 flex items-end justify-between">

            <div>

              <h3
                className="
                  flex
                  items-center
                  gap-2
                  text-lg
                  font-bold
                  text-green-950
                  sm:text-xl
                "
              >

                <Video
                  size={19}
                  aria-hidden="true"
                  className="text-green-700"
                />

                வீடியோ தருணங்கள்

              </h3>

              <p className="mt-1 text-[11px] text-green-950/55 sm:text-xs">
                Watch our catering moments and customer experiences
              </p>

            </div>

            <span
              className="
                hidden
                rounded-full
                bg-green-700/10
                px-3
                py-1
                text-[11px]
                font-medium
                text-green-800
                sm:block
              "
            >
              ← Swipe →
            </span>

          </div>


          {/* VIDEO SCROLLER */}

          <div
            className="
              flex
              gap-3
              overflow-x-auto
              overscroll-x-contain
              pb-3
              snap-x
              snap-mandatory
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
            aria-label="Nalan Catering video gallery"
          >

            {videos.map((video) => (

              <article
                key={video.src}
                className="
                  min-w-[47%]
                  snap-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-green-900/10
                  bg-white
                  shadow-[0_8px_25px_rgba(20,83,45,0.10)]
                  sm:min-w-[30%]
                  md:min-w-[28%]
                  lg:min-w-[25%]
                "
              >

                {/* VIDEO */}

                <div className="aspect-square bg-black">

                  <video
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={video.title}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                </div>


                {/* VIDEO INFO */}

                <div className="px-3 py-2.5">

                  <h4
                    className="
                      text-[11px]
                      font-bold
                      leading-4
                      text-green-950
                      sm:text-xs
                    "
                  >
                    {video.title}
                  </h4>

                 

                </div>

              </article>

            ))}

          </div>

        </div>


        {/* ========================================
            BOTTOM TEXT
        ========================================= */}

        <div className="mt-8 text-center">

          <p
            className="
              text-xs
              font-semibold
              tracking-wide
              text-green-800/70
              sm:text-sm
            "
          >
            தமிழ் பாரம்பரியம் • சுவையின் பெருமை
          </p>

        </div>

      </div>


      {/* ========================================
          BOTTOM GREEN ACCENT
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-full
          bg-gradient-to-r
          from-green-300
          via-green-600
          to-green-300
        "
      />

    </section>
  );
}

export default Gallery;