"use client";
import data from "../../../../data/agentInfo.json";
import { notFound } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/legacy/image";

function DominantColorExtractor({ imageUrl, onExtract }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const handleLoad = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      if (width === 0 || height === 0) {
        console.warn("Image dimensions not ready.");
        return;
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height).data;

      let r = 0, g = 0, b = 0, count = 0;

      for (let i = 0; i < imageData.length; i += 4) {
        const red = imageData[i];
        const green = imageData[i + 1];
        const blue = imageData[i + 2];
        const alpha = imageData[i + 3];

        if (alpha < 180) continue;

        const brightness = 0.2126 * red + 0.7152 * green + 0.0722 * blue; // Perceptual brightness

        if (brightness > 80) continue; // Ignore everything bright — this threshold makes it *really* dark

        r += red;
        g += green;
        b += blue;
        count++;
      }

      if (count === 0) {
        onExtract([15, 15, 15]); // Fallback to almost black
        return;
      }

      const avgColor = [
        Math.max(0, Math.floor(r / count - 10)), // darken even more
        Math.max(0, Math.floor(g / count - 10)),
        Math.max(0, Math.floor(b / count - 10)),
      ];

      onExtract(avgColor);
    };

    if (img.complete && img.naturalWidth && img.naturalHeight) {
      handleLoad();
    } else {
      img.onload = handleLoad;
    }

    return () => {
      img.onload = null;
    };
  }, [imageUrl, onExtract]);

  return (
    <img
      ref={imgRef}
      src={imageUrl}
      crossOrigin="anonymous"
      alt="analyze"
      className="hidden"
    />
  );
}


export default function CharacterPage({ params }) {
  const char = data.data.find((c) => c.id === params.id);
  const [bgColor, setBgColor] = useState([245, 245, 245]); // fallback
  const [Blurred, setBlurred] = useState(true)
  if (!char) return notFound();

  const bgGradient = `linear-gradient(to bottom, rgba(${bgColor.join(",")}, 0.3), white 80%)`;

  return (
    <div
      className="min-h-screen w-full px-10 py-8 transition-colors duration-700 satuate-150"
      style={{ background: bgGradient }}
    >
      <div className="w-32 relative h-32 ">
        
        <Image src='/agi_black_logo.png' layout='fill' objectFit='contain'></Image>
      </div>
      <DominantColorExtractor imageUrl={char.image} onExtract={setBgColor} />
      <h4 className="md:text-center text-xl text-slate-800 md:text-3xl mb-7">
        Hi, Player! Keep this information secret
      </h4>
      <div className="max-w-5xl mx-auto space-y-8 text-gray-900 flex md:flex-row flex-col items-center justify-center">
        <div onClick={()=>setBlurred(!Blurred)} className="relative w-80 md:h-[70vh] h-96 rounded-xl object-cover overflow-hidden">
          <div className={`bg-whte w-full h-full transition-opacity duration-1000 delay-400 absolute backdrop-blur-3xl z-50 flex items-center justify-center ${Blurred?"opacity-100":"opacity-0"}`}>
            <h2 className="text-white/40">Click to reveal/hide</h2>
          </div>
          <Image
            src={char.image}
            alt={char.character}
            layout="fill"
            objectFit="cover"
          // crossOrigin="anonymous"
          />
        </div>
        <div className="md:px-7">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{char.character}</h1>
            <p className="text-lg italic text-gray-600">{char.anime}</p>
          </div>
          <div className="mt-6 text-lg space-y-4 max-w-3xl mx-auto">
            <div>
              <strong className="block text-xl">Special Move / Item:</strong>
              <span>{char.special_move}</span>
            </div>
            {char.description && (
              <div>
                <strong className="block text-xl">About</strong>
                <p className="">{char.description}</p>
              </div>
            )}
          </div>
          <div className="text-center mt-10">
            <span>{char.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}