import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Images,
  Video,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// =====================================================
// IMAGES
// =====================================================

import galleryImage1 from "../../assets/images/img1.jpg";
import galleryImage2 from "../../assets/images/img2.jpg";
import galleryImage3 from "../../assets/images/img3.jpg";
import galleryImage4 from "../../assets/images/img4.jpg";
import galleryImage5 from "../../assets/images/img5.jpg";

// =====================================================
// VIDEOS
// =====================================================

import galleryVideo1 from "../../assets/videos/gallery1.mp4";
import galleryVideo2 from "../../assets/videos/gallery2.mp4";
import galleryVideo3 from "../../assets/videos/gallery3.mp4";


// =====================================================
// COMPONENT
// =====================================================

function Gallery() {

  // ===================================================
  // DATA
  // ===================================================

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


  // ===================================================
  // CAROUSEL STATE
  // ===================================================

  const [imageIndex, setImageIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);


  // ===================================================
  // POPUP STATE
  // ===================================================

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);


  // ===================================================
  // SCROLL POSITION
  // ===================================================

  const savedScrollPosition = useRef(0);


  // ===================================================
  // AUTO SLIDE - IMAGES
  // ===================================================

  useEffect(() => {

    if (selectedImage || selectedVideo) return;

    const timer = setInterval(() => {
      setImageIndex((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 4000);

    return () => clearInterval(timer);

  }, [selectedImage, selectedVideo, images.length]);


  // ===================================================
  // AUTO SLIDE - VIDEOS
  // ===================================================

  useEffect(() => {

    if (selectedImage || selectedVideo) return;

    const timer = setInterval(() => {
      setVideoIndex((current) =>
        current === videos.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(timer);

  }, [selectedImage, selectedVideo, videos.length]);


  // ===================================================
  // LOCK PAGE SCROLL WHEN POPUP OPENS
  //
  // IMPORTANT:
  // This prevents the page from jumping to the top.
  // ===================================================

  useEffect(() => {

    const popupOpen = Boolean(selectedImage || selectedVideo);

    if (!popupOpen) {
      return;
    }

    // Save EXACT current scroll position
    savedScrollPosition.current = window.scrollY;

    const body = document.body;

    // Save existing styles
    const originalPosition = body.style.position;
    const originalTop = body.style.top;
    const originalWidth = body.style.width;
    const originalOverflow = body.style.overflow;

    // Lock body exactly where user currently is
    body.style.position = "fixed";
    body.style.top = `-${savedScrollPosition.current}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {

      // Restore original body styles
      body.style.position = originalPosition;
      body.style.top = originalTop;
      body.style.width = originalWidth;
      body.style.overflow = originalOverflow;

      // Restore EXACT scroll position
      window.scrollTo({
        top: savedScrollPosition.current,
        left: 0,
        behavior: "instant",
      });
    };

  }, [selectedImage, selectedVideo]);


  // ===================================================
  // ESCAPE KEY
  // ===================================================

  useEffect(() => {

    const handleEscape = (event) => {

      if (event.key === "Escape") {
        setSelectedImage(null);
        setSelectedVideo(null);
      }

    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };

  }, []);


  // ===================================================
  // IMAGE CONTROLS
  // ===================================================

  const nextImage = () => {

    setImageIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );

  };


  const previousImage = () => {

    setImageIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );

  };


  // ===================================================
  // VIDEO CONTROLS
  // ===================================================

  const nextVideo = () => {

    setVideoIndex((current) =>
      current === videos.length - 1 ? 0 : current + 1
    );

  };


  const previousVideo = () => {

    setVideoIndex((current) =>
      current === 0 ? videos.length - 1 : current - 1
    );

  };


  // ===================================================
  // POPUP COMPONENT
  // ===================================================

  const Popup = () => {

    if (!selectedImage && !selectedVideo) {
      return null;
    }

    return createPortal(

      <div
        className="
          fixed
          inset-0
          z-[999999]
          flex
          items-center
          justify-center
          bg-black/90
          p-4
          sm:p-6
        "
        role="dialog"
        aria-modal="true"
        onMouseDown={(event) => {

          // Close only when clicking the dark background
          if (event.target === event.currentTarget) {

            setSelectedImage(null);
            setSelectedVideo(null);

          }

        }}
      >

        {/* ==========================================
            IMAGE POPUP
        =========================================== */}

        {selectedImage && (

          <div
            className="
              relative
              flex
              max-h-[82vh]
              max-w-[88vw]
              items-center
              justify-center
            "
            onMouseDown={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="
                block
                max-h-[78vh]
                max-w-[86vw]
                rounded-xl
                object-contain
                shadow-2xl
              "
            />


            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={() => {
                setSelectedImage(null);
              }}
              aria-label="Close image preview"
              className="
                absolute
                -right-2
                -top-12
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/70
                text-white
                backdrop-blur-md
                transition
                hover:bg-black
                sm:-right-11
                sm:top-0
              "
            >
              <X size={20} />
            </button>

          </div>

        )}


        {/* ==========================================
            VIDEO POPUP
        =========================================== */}

        {selectedVideo && (

          <div
            className="
              relative
              w-full
              max-w-2xl
            "
            onMouseDown={(event) => event.stopPropagation()}
          >

            <video
              key={selectedVideo.src}
              src={selectedVideo.src}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="
                mx-auto
                max-h-[70vh]
                w-full
                rounded-xl
                bg-black
                object-contain
                shadow-2xl
              "
            />


            {/* VIDEO TITLE */}

            <div className="mt-3 text-center">

              <p
                className="
                  text-sm
                  font-semibold
                  text-white
                  sm:text-base
                "
              >
                {selectedVideo.title}
              </p>

              <p className="mt-1 text-xs text-white/50">
                Nalan Catering • Trichy, Tamil Nadu
              </p>

            </div>


            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={() => {
                setSelectedVideo(null);
              }}
              aria-label="Close video player"
              className="
                absolute
                right-0
                -top-12
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/70
                text-white
                backdrop-blur-md
                transition
                hover:bg-black
              "
            >
              <X size={20} />
            </button>

          </div>

        )}

      </div>,

      document.body

    );

  };


  // ===================================================
  // MAIN UI
  // ===================================================

  return (
    <>

      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="
          relative
          overflow-hidden
          bg-[#071a11]
          py-16
          sm:py-20
        "
      >

        {/* ==========================================
            BACKGROUND
        =========================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#0b2417]
            via-[#071a11]
            to-[#041009]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-0
            h-72
            w-[700px]
            max-w-full
            -translate-x-1/2
            rounded-full
            bg-green-500/[0.06]
            blur-3xl
          "
        />


        {/* ==========================================
            CONTENT
        =========================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-5
            sm:px-6
            lg:px-8
          "
        >

          {/* ========================================
              HEADER
          ========================================= */}

          <header className="mx-auto max-w-3xl text-center">

            <div
              className="
                mb-3
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <Images
                size={18}
                aria-hidden="true"
                className="text-green-400"
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-green-300
                  sm:text-sm
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
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >

              ஒவ்வொரு விழாவும்

              <span className="block text-green-400">
                ஒரு இனிய நினைவு
              </span>

            </h2>


            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-white/70
                sm:text-base
              "
            >
              நளன் கேட்டரிங் வழங்கும் திருமணம், பிறந்தநாள்,
              குடும்ப விழாக்கள் மற்றும் சிறப்பு நிகழ்வுகளின்
              அழகான தருணங்களை காணுங்கள்.
            </p>


            <div
              aria-hidden="true"
              className="
                mx-auto
                mt-5
                h-1
                w-14
                rounded-full
                bg-green-500
              "
            />

          </header>


          {/* ========================================
              IMAGE + VIDEO
          ========================================= */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-2
              lg:gap-8
            "
          >

            {/* ======================================
                IMAGES
            ======================================= */}

            <div className="min-w-0">

              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-between
                "
              >

                <div>

                  <h3
                    className="
                      flex
                      items-center
                      gap-2
                      text-xl
                      font-bold
                      text-white
                      sm:text-2xl
                    "
                  >

                    <Images
                      size={21}
                      className="text-green-400"
                      aria-hidden="true"
                    />

                    புகைப்படங்கள்

                  </h3>

                  <p className="mt-1 text-xs text-white/50 sm:text-sm">
                    Tap an image to view
                  </p>

                </div>


                {/* IMAGE ARROWS */}

                <div className="flex gap-2">

                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous gallery image"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-green-400/30
                      bg-green-500/10
                      text-green-300
                      transition
                      hover:bg-green-500/20
                    "
                  >
                    <ChevronLeft size={18} />
                  </button>


                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next gallery image"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-green-400/30
                      bg-green-500/10
                      text-green-300
                      transition
                      hover:bg-green-500/20
                    "
                  >
                    <ChevronRight size={18} />
                  </button>

                </div>

              </div>


              {/* IMAGE VIEWPORT */}

              <div className="overflow-hidden">

                <div
                  className="
                    flex
                    gap-4
                    transition-transform
                    duration-700
                    ease-in-out
                  "
                  style={{
                    transform:
                      `translateX(calc(-${imageIndex} * (60% + 16px)))`,
                  }}
                >

                  {images.map((image, index) => (

                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      aria-label={`View gallery image ${index + 1}`}
                      className="
                        group
                        relative
                        min-w-[60%]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-black
                        text-left
                        shadow-lg
                        outline-none
                        focus:border-green-400
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
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />

                      </div>


                      {/* IMAGE GRADIENT */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          bg-gradient-to-t
                          from-black/80
                          to-transparent
                          px-4
                          pb-4
                          pt-12
                        "
                      >

                        <p className="text-xs font-semibold text-white sm:text-sm">
                          Nalan Catering • Trichy
                        </p>

                      </div>


                      {/* VIEW ICON */}

                      <div
                        className="
                          absolute
                          right-3
                          top-3
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-black/50
                          text-white
                          backdrop-blur-sm
                          opacity-100
                          sm:opacity-0
                          sm:transition
                          sm:group-hover:opacity-100
                        "
                      >
                        <Images size={17} />
                      </div>

                    </button>

                  ))}

                </div>

              </div>


              {/* IMAGE DOTS */}

              <div className="mt-4 flex justify-center gap-2">

                {images.map((_, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() => setImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        imageIndex === index
                          ? "w-7 bg-green-400"
                          : "w-1.5 bg-white/25"
                      }
                    `}
                  />

                ))}

              </div>

            </div>


            {/* ======================================
                VIDEOS
            ======================================= */}

            <div className="min-w-0">

              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-between
                "
              >

                <div>

                  <h3
                    className="
                      flex
                      items-center
                      gap-2
                      text-xl
                      font-bold
                      text-white
                      sm:text-2xl
                    "
                  >

                    <Video
                      size={21}
                      className="text-green-400"
                      aria-hidden="true"
                    />

                    வீடியோ தருணங்கள்

                  </h3>

                  <p className="mt-1 text-xs text-white/50 sm:text-sm">
                    Tap a video to play
                  </p>

                </div>


                {/* VIDEO ARROWS */}

                <div className="flex gap-2">

                  <button
                    type="button"
                    onClick={previousVideo}
                    aria-label="Previous gallery video"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-green-400/30
                      bg-green-500/10
                      text-green-300
                      transition
                      hover:bg-green-500/20
                    "
                  >
                    <ChevronLeft size={18} />
                  </button>


                  <button
                    type="button"
                    onClick={nextVideo}
                    aria-label="Next gallery video"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-green-400/30
                      bg-green-500/10
                      text-green-300
                      transition
                      hover:bg-green-500/20
                    "
                  >
                    <ChevronRight size={18} />
                  </button>

                </div>

              </div>


              {/* VIDEO VIEWPORT */}

              <div className="overflow-hidden">

                <div
                  className="
                    flex
                    gap-4
                    transition-transform
                    duration-700
                    ease-in-out
                  "
                  style={{
                    transform:
                      `translateX(calc(-${videoIndex} * (60% + 16px)))`,
                  }}
                >

                  {videos.map((video, index) => (

                    <button
                      key={video.src}
                      type="button"
                      onClick={() => setSelectedVideo(video)}
                      aria-label={`Play ${video.title}`}
                      className="
                        group
                        relative
                        min-w-[60%]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-black
                        text-left
                        shadow-lg
                        outline-none
                        focus:border-green-400
                      "
                    >

                      <div className="relative aspect-[4/3] overflow-hidden">

                        <video
  src={video.src}
  muted
  playsInline
  preload="metadata"
  aria-label={video.title}
  className="
    h-full
    w-full
    object-cover
  "
                        />


                        {/* DARK OVERLAY */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-black/20
                            transition
                            group-hover:bg-black/35
                          "
                        />


                        {/* PLAY BUTTON */}

                        <div
                          className="
                            absolute
                            left-1/2
                            top-1/2
                            flex
                            h-12
                            w-12
                            -translate-x-1/2
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            bg-green-500
                            text-white
                            shadow-lg
                            transition
                            duration-300
                            group-hover:scale-110
                            group-hover:bg-green-400
                          "
                        >

                          <Play
                            size={20}
                            fill="currentColor"
                            className="ml-0.5"
                          />

                        </div>

                      </div>


                      <div className="px-4 py-3">

                        <h4
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-white
                          "
                        >
                          {video.title}
                        </h4>

                        

                      </div>

                    </button>

                  ))}

                </div>

              </div>


              {/* VIDEO DOTS */}

              <div className="mt-4 flex justify-center gap-2">

                {videos.map((_, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() => setVideoIndex(index)}
                    aria-label={`Go to video ${index + 1}`}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        videoIndex === index
                          ? "w-7 bg-green-400"
                          : "w-1.5 bg-white/25"
                      }
                    `}
                  />

                ))}

              </div>

            </div>

          </div>


          {/* ========================================
              BOTTOM TEXT
          ========================================= */}

          <div className="mt-10 text-center">

            <p className="text-sm font-medium text-green-300/80">
              தமிழ் பாரம்பரியம் • சுவையின் பெருமை
            </p>

          </div>

        </div>


        {/* ==========================================
            BOTTOM ACCENT
        =========================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-green-500/50
            to-transparent
          "
        />

      </section>


      {/* =================================================
          POPUP
          Rendered directly into document.body
          ================================================= */}

      <Popup />

    </>
  );
}

export default Gallery;

