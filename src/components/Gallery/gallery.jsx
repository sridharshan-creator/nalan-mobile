import { useRef } from "react";
import useIsMobile from "../useIsMobile";
import { motion, useInView } from "framer-motion";
import { Sparkles, Play } from "lucide-react";

import backgroundImage from "../../assets/images/IMG-20260803-WA0010.jpg";
import photo1 from "../../assets/images/IMG-20260803-WA0011.jpg";
import photo2 from "../../assets/images/IMG-20260803-WA0014.jpg";

import video1 from "../../assets/videos/VID-20260803-WA0030.mp4";
import video2 from "../../assets/videos/VID-20260803-WA0024.mp4";

function Gallery() {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.2,
    once: true,
  });

  return (
    <section
      ref={sectionRef}
      id="gallery"
      aria-labelledby="gallery-heading"
      className="
        relative
        overflow-hidden
        min-h-[900px]
        md:min-h-[950px]
        bg-black
      "
    >

      {/* =====================================================
          FULL BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">

        <img
          decoding="async"
          loading="lazy"
          src={backgroundImage}
          alt="Nalan Catering wedding and event catering celebration"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/35
            via-[#062e1b]/30
            to-black/60
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#063b24]/30
            via-transparent
            to-[#063b24]/30
          "
        />

      </div>


      {/* =====================================================
          ANIMATED GREEN GLOW — TOP LEFT
      ====================================================== */}

      <motion.div
        animate={{
          x: isInView ? [0, 35, 0] : 0,
          y: isInView ? [0, -20, 0] : 0,
          opacity: isInView ? [0.08, 0.16, 0.08] : 0,
        }}
        transition={{
          duration: 8,
          repeat: isInView && !isMobile ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-48
          -left-48
          w-[500px]
          h-[500px]
          rounded-full
          bg-green-400
          blur-[75px] sm:blur-[140px]
          pointer-events-none
        "
      />


      {/* =====================================================
          ANIMATED GREEN GLOW — BOTTOM RIGHT
      ====================================================== */}

      <motion.div
        animate={{
          x: isInView ? [0, -30, 0] : 0,
          y: isInView ? [0, 20, 0] : 0,
          opacity: isInView ? [0.06, 0.13, 0.06] : 0,
        }}
        transition={{
          duration: 9,
          repeat: isInView && !isMobile ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-48
          -right-48
          w-[500px]
          h-[500px]
          rounded-full
          bg-green-700
          blur-[75px] sm:blur-[140px]
          pointer-events-none
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          min-h-[900px]
          md:min-h-[950px]
          px-5
          md:px-8
        "
      >


        {/* =================================================
            CENTER TEXT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 100,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            z-30
            left-1/2
            -translate-x-1/2
            top-[24%]
            md:top-[23%]
            w-[90%]
            max-w-3xl
            text-center
          "
        >

          {/* LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              mb-5
            "
          >

            <Sparkles
              size={18}
              className="text-green-300"
            />

            <p
              className="
                text-green-200
                text-xs
                md:text-sm
                font-semibold
                tracking-[3px]
                drop-shadow-lg
              "
            >
              எங்கள் நினைவுகள்
            </p>

            <Sparkles
              size={18}
              className="text-green-300"
            />

          </div>


          {/* MAIN HEADING */}

          <h2
            id="gallery-heading"
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-white
              leading-[1.15]
              drop-shadow-[0_5px_20px_rgba(0,0,0,0.7)]
            "
          >
            ஒவ்வொரு விழாவும்

            <br />

            <span className="text-green-300">
              ஒரு இனிய நினைவு
            </span>
          </h2>


          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              text-white/85
              text-sm
              md:text-base
              leading-7
              max-w-2xl
              mx-auto
              drop-shadow-lg
            "
          >
            நளன் கேட்டரிங் வழங்கும் திருமணம், பிறந்தநாள்,
            குடும்ப விழாக்கள் மற்றும் சிறப்பு நிகழ்வுகளின்
            அழகான தருணங்களை காணுங்கள். தரமான உணவு,
            பாரம்பரிய சுவை மற்றும் சிறந்த catering service
            மூலம் உங்கள் விழாவை மறக்க முடியாத நினைவாக
            மாற்றுகிறோம்.
          </p>


          {/* GREEN DIVIDER */}

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: isInView ? 90 : 0,
            }}
            transition={{
              duration: 0.6,
              delay: isInView ? 0.25 : 0,
              ease: "easeOut",
            }}
            className="
              h-[3px]
              bg-green-400
              rounded-full
              mx-auto
              mt-6
              shadow-[0_0_15px_rgba(74,222,128,0.5)]
            "
          />


          {/* BOTTOM TEXT */}

          <p
            className="
              mt-6
              text-green-200/80
              text-xs
              md:text-sm
              font-medium
              tracking-wide
              drop-shadow-lg
            "
          >
            தமிழ் பாரம்பரியம் • சுவையின் பெருமை
          </p>

        </motion.div>


        {/* =================================================
            TOP LEFT IMAGE
            INCREASED SIZE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -180,
            rotate: -8,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -180,
            rotate: isInView ? -5 : -8,
          }}
          transition={{
            duration: 0.85,
            delay: isInView ? 0.15 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            z-20
            left-3
            md:left-8
            lg:left-14
            top-[8%]

            w-36
            sm:w-44
            md:w-52
            lg:w-60

            rounded-2xl
            md:rounded-3xl
            overflow-hidden
            border
            border-green-300/50
            shadow-[0_20px_50px_rgba(0,0,0,0.45)]
            bg-black
            group
          "
        >

          <div className="aspect-[4/3] overflow-hidden">

            <img
              src={photo1}
              alt="Nalan Catering wedding celebration and catering service"
              loading="lazy"
              decoding="async"
              className="
                w-full
                h-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

          </div>

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              p-3
              bg-gradient-to-t
              from-black/80
              to-transparent
            "
          >

            <p className="text-white text-[10px] md:text-xs font-semibold">
              இனிய தருணங்கள்
            </p>

          </div>

        </motion.div>


        {/* =================================================
            TOP RIGHT VIDEO
            INCREASED SIZE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 180,
            rotate: 8,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 180,
            rotate: isInView ? 5 : 8,
          }}
          transition={{
            duration: 0.85,
            delay: isInView ? 0.2 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            z-20
            right-3
            md:right-8
            lg:right-14
            top-[8%]

            w-36
            sm:w-44
            md:w-52
            lg:w-60

            rounded-2xl
            md:rounded-3xl
            overflow-hidden
            border
            border-green-300/50
            shadow-[0_20px_50px_rgba(0,0,0,0.45)]
            bg-black
            group
          "
        >

          <div className="aspect-[4/3] overflow-hidden">

            {isMobile ? (
              <img
                src={photo1}
                alt="Nalan Catering wedding and event catering"
                loading="lazy"
                decoding="async"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />
            ) : (
              <video
                src={video1}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Nalan Catering event catering video"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            )}

          </div>


          {/* PLAY BADGE */}

          <div
            className="
              absolute
              top-3
              right-3
              w-8
              h-8
              rounded-full
              bg-green-700/80
              backdrop-blur-sm md:backdrop-blur-md
              border
              border-white/40
              flex
              items-center
              justify-center
              text-white
              shadow-lg
            "
          >

            <Play
              size={13}
              fill="currentColor"
            />

          </div>


          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-3
              bg-gradient-to-t
              from-black/80
              to-transparent
            "
          >

            <p className="text-white text-[10px] md:text-xs font-semibold">
              விழா தருணங்கள்
            </p>

          </div>

        </motion.div>


        {/* =================================================
            BOTTOM LEFT IMAGE
            INCREASED SIZE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -160,
            y: 100,
            rotate: 7,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -160,
            y: isInView ? 0 : 100,
            rotate: isInView ? 4 : 7,
          }}
          transition={{
            duration: 0.9,
            delay: isInView ? 0.3 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            z-20
            left-3
            md:left-[10%]
            lg:left-[14%]
            bottom-[6%]

            w-36
            sm:w-44
            md:w-52
            lg:w-56

            rounded-2xl
            md:rounded-3xl
            overflow-hidden
            border
            border-green-300/50
            shadow-[0_20px_50px_rgba(0,0,0,0.45)]
            bg-black
            group
          "
        >

          <div className="aspect-[4/3] overflow-hidden">

            <img
              src={photo2}
              alt="Traditional Tamil food catering by Nalan Catering"
              loading="lazy"
              decoding="async"
              className="
                w-full
                h-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

          </div>


          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-3
              bg-gradient-to-t
              from-black/80
              to-transparent
            "
          >

            <p className="text-white text-[10px] md:text-xs font-semibold">
              பாரம்பரிய சுவை
            </p>

          </div>

        </motion.div>


        {/* =================================================
            BOTTOM RIGHT VIDEO
            INCREASED SIZE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 160,
            y: 100,
            rotate: -7,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 160,
            y: isInView ? 0 : 100,
            rotate: isInView ? -4 : -7,
          }}
          transition={{
            duration: 0.9,
            delay: isInView ? 0.35 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            z-20
            right-3
            md:right-[10%]
            lg:right-[14%]
            bottom-[6%]

            w-36
            sm:w-44
            md:w-52
            lg:w-56

            rounded-2xl
            md:rounded-3xl
            overflow-hidden
            border
            border-green-300/50
            shadow-[0_20px_50px_rgba(0,0,0,0.45)]
            bg-black
            group
          "
        >

          <div className="aspect-[4/3] overflow-hidden">

            {isMobile ? (
              <img
                src={photo2}
                alt="Traditional Tamil food served by Nalan Catering"
                loading="lazy"
                decoding="async"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />
            ) : (
              <video
                src={video2}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Nalan Catering celebration and food service video"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            )}

          </div>


          {/* PLAY BADGE */}

          <div
            className="
              absolute
              top-3
              right-3
              w-8
              h-8
              rounded-full
              bg-green-700/80
              backdrop-blur-sm md:backdrop-blur-md
              border
              border-white/40
              flex
              items-center
              justify-center
              text-white
              shadow-lg
            "
          >

            <Play
              size={13}
              fill="currentColor"
            />

          </div>


          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-3
              bg-gradient-to-t
              from-black/80
              to-transparent
            "
          >

            <p className="text-white text-[10px] md:text-xs font-semibold">
              கொண்டாட்ட தருணங்கள்
            </p>

          </div>

        </motion.div>


        {/* =================================================
            DECORATIVE GREEN DOTS
        ================================================== */}

        <motion.div
          animate={{
            opacity: isInView
              ? [0.3, 0.9, 0.3]
              : 0,
            scale: isInView
              ? [1, 1.3, 1]
              : 1,
          }}
          transition={{
            duration: 2.5,
            repeat: isInView && !isMobile ? Infinity : 0,
          }}
          className="
            absolute
            top-[48%]
            left-[30%]
            w-2
            h-2
            rounded-full
            bg-green-300
            shadow-[0_0_12px_rgba(74,222,128,0.8)]
            hidden
            md:block
          "
        />


        <motion.div
          animate={{
            opacity: isInView
              ? [0.3, 0.9, 0.3]
              : 0,
            scale: isInView
              ? [1, 1.3, 1]
              : 1,
          }}
          transition={{
            duration: 3,
            repeat: isInView && !isMobile ? Infinity : 0,
            delay: 1,
          }}
          className="
            absolute
            top-[52%]
            right-[30%]
            w-2
            h-2
            rounded-full
            bg-green-300
            shadow-[0_0_12px_rgba(74,222,128,0.8)]
            hidden
            md:block
          "
        />

      </div>


      {/* =====================================================
          BOTTOM GREEN ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-1
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