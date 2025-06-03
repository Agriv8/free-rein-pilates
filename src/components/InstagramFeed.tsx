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

          {/* Instagram Feed Embed */}
          <div 
            className="flex justify-center"
            dangerouslySetInnerHTML={{
              __html: `
                <!-- SnapWidget -->
                <iframe src="https://snapwidget.com/embed/1094374" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; max-width:600px; height:600px"></iframe>
              `
            }}
          />

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