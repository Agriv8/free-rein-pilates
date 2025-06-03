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

          {/* Instagram Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { title: "Studio Sessions", desc: "1-2-1 Pilates" },
              { title: "Mat Classes", desc: "Group Sessions" },
              { title: "Equestrian", desc: "Horse & Rider" },
              { title: "Retreats", desc: "Day Escapes" },
              { title: "Sports Therapy", desc: "Recovery" },
              { title: "Community", desc: "Our Students" }
            ].map((item, index) => (
              <div 
                key={index}
                className="aspect-square bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 rounded-lg flex flex-col items-center justify-center group hover:scale-105 transition-all cursor-pointer border-2 border-transparent hover:border-pilates-rose/30"
                onClick={() => window.open('https://www.instagram.com/freereinpilates', '_blank')}
              >
                <Instagram className="w-8 h-8 text-pilates-rose mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-semibold text-pilates-dark text-center">
                  {item.title}
                </h4>
                <p className="text-xs text-pilates-brown text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-pilates-brown mb-4">
              Click any image above to see real posts from our Instagram
            </p>
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