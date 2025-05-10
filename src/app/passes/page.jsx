// pages/passes.js
import Head from 'next/head';

export default function PassesComingSoon() {
  return (
    <>
      <Head>
        <title>Passes Coming Soon | Summer Anime Fiesta 2025</title>
        <meta
          name="description"
          content="Stay tuned! Passes for Summer Anime Fiesta 2025 will be available soon. Don't miss Delhi's most exclusive anime celebration."
        />
      </Head>

      <main className="bg-gradient-to-br from-sky-100 to-blue-200 min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-xl">
          <img src="/agi_black_logo.png" alt="Summer Anime Fiesta Logo" className="w-32 mx-auto mb-6" />

          <h1 className="text-4xl md:text-5xl font-bold text-sky-600 mb-4">Passes Coming Soon!</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            We&apos;re putting the final touches on your gateway to the biggest anime event of the summer. <br />
            <span className="font-semibold">Summer Anime Fiesta 2025</span> passes will be live shortly!
          </p>

          <div className="bg-white bg-opacity-60 p-4 rounded-xl shadow-md mb-6">
            <h2 className="text-xl font-semibold text-sky-700 mb-2">What to Expect</h2>
            <ul className="text-left text-gray-700 list-disc list-inside space-y-2">
              <li>Exclusive anime screenings & cosplay showcase</li>
              <li>Japanese snacks, games & giveaways</li>
              <li>Meet fellow fans and immerse in otaku culture</li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-gray-800 text-sm mb-2">Follow us for updates:</p>
            <div className="flex justify-center gap-6 text-sky-600 text-2xl">
              <a href="https://instagram.com/animegroupindia" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="mailto:animegroupindia@gmail.com">
                <i class="fa-regular fa-envelope"></i>
              </a>
              <a href="https://discord.gg/VjN8VuGFFw" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-discord"></i>
              </a>
            </div>
          </div>

          <footer className="mt-12 text-xs text-gray-500">
            © 2025 Anime Group India. All rights reserved.
          </footer>
        </div>
      </main>
    </>
  );
}
