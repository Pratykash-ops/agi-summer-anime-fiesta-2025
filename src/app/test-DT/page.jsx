// app/characters/page.tsx
import characters from "../../data/agentInfo.json";

export default function CharacterPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-950 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Anime Character Preview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {characters.data.map((char) => (
          <div key={char.id} className="bg-gray-900 rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform">
            <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              {char.image ? (
                <img src={char.image} alt={char.character} className="object-cover w-full h-full rounded-lg" />
              ) : (
                <span className="text-gray-400">No Image</span>
              )}
            </div>
            <h2 className="text-xl font-semibold">{char.character}</h2>
            <p className="text-sm text-gray-400 italic mb-1">{char.anime}</p>
            <p className="text-sm mb-1"><strong>Special Move:</strong> {char.special_move}</p>
            <p className="text-sm text-gray-300">{char.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
