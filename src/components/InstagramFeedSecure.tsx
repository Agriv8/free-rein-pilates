import { Instagram } from 'lucide-react'

const InstagramFeedSecure = () => {
  const instagramPosts = [
    {
      id: 1,
      url: 'https://www.instagram.com/p/DDU6D1NtUWI/',
      caption: 'Latest pilates session highlights',
      thumbnail: '/client-content/Mat Pilates Courses.webp'
    },
    {
      id: 2,
      url: 'https://www.instagram.com/p/DDRuRRTNi_u/',
      caption: 'Studio pilates workout',
      thumbnail: '/client-content/1-2-1- Studio Pilates.webp'
    },
    {
      id: 3,
      url: 'https://www.instagram.com/p/DDOGOVKNMcF/',
      caption: 'Equestrian pilates training',
      thumbnail: '/client-content/Equestrian Pilates Sessions .webp'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-8 h-8 text-pilates-rose" />
            <h2 className="text-4xl md:text-5xl font-display text-pilates-dark">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-lg text-pilates-brown max-w-3xl mx-auto">
            Stay connected with Free Rein Pilates on Instagram for daily inspiration, 
            behind-the-scenes content, and wellness tips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Instagram className="w-4 h-4 text-pilates-rose" />
                  <span className="text-sm text-pilates-brown">@freereinpilates</span>
                </div>
                <p className="text-pilates-dark font-medium">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/freereinpilates/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all font-medium"
          >
            <Instagram className="w-5 h-5" />
            Follow @freereinpilates
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramFeedSecure