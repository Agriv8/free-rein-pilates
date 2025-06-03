import { Instagram } from 'lucide-react'

const InstagramFeed = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-pilates-rose" />
            <h2 className="text-3xl md:text-4xl font-bold text-pilates-dark">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-lg text-pilates-brown max-w-2xl mx-auto">
            Stay connected with Free Rein Pilates on Instagram for daily inspiration, 
            behind-the-scenes moments, and the latest updates from our studio and retreats.
          </p>
        </div>

        {/* Instagram Widget Container */}
        <div className="bg-pilates-cream rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-pilates-dark mb-2">
              @freereinpilates
            </h3>
            <a 
              href="https://www.instagram.com/freereinpilates" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-pilates-rose text-white rounded-full hover:bg-pilates-brown transition-all transform hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>

          {/* Instagram Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                image: "/client-content/1-2-1- Studio Pilates.webp",
                caption: "Beautiful studio session today! 💪✨ #pilates #studio #personaltraining",
                likes: "24",
                time: "2h"
              },
              {
                image: "/client-content/Equestrian Pilates Sessions .webp", 
                caption: "Horse and rider harmony through Pilates 🐎 #equestrianpilates #horseback",
                likes: "31",
                time: "1d"
              },
              {
                image: "/client-content/Mat Pilates Courses.webp",
                caption: "Mat class energy is unmatched! 🧘‍♀️ #matpilates #groupfitness #pilateslife",
                likes: "18",
                time: "3d"
              },
              {
                image: "/client-content/Center Parcs Woburn Day Retreats.webp",
                caption: "Center Parcs retreat - pure bliss! 🌿 #retreat #centerparcs #wellness",
                likes: "42",
                time: "5d"
              },
              {
                image: "/client-content/erin 2.webp",
                caption: "Meet your instructor Erin! Passionate about movement ❤️ #instructor #pilates",
                likes: "28",
                time: "1w"
              },
              {
                image: "/client-content/studio.webp",
                caption: "Our beautiful studio space in Shefford 🏡 #studio #pilatesstudio #shefford",
                likes: "35",
                time: "1w"
              }
            ].map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all cursor-pointer"
                onClick={() => window.open('https://www.instagram.com/freereinpilates', '_blank')}
              >
                {/* Instagram Post Header */}
                <div className="flex items-center gap-3 p-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">FR</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">freereinpilates</p>
                    <p className="text-xs text-gray-500">{post.time} ago</p>
                  </div>
                  <Instagram className="w-5 h-5 text-gray-400" />
                </div>
                
                {/* Post Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={post.image} 
                    alt="Instagram post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Post Footer */}
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <span className="text-red-500">❤️</span>
                      <span className="text-sm text-gray-600">{post.likes}</span>
                    </div>
                    <span className="text-gray-400">💬</span>
                    <span className="text-gray-400">📤</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">freereinpilates</span> {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-pilates-brown">
              See more pilates inspiration, class updates, and retreat highlights on our Instagram
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed