import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Settings, Package, Calendar, Users, FileText, Image } from 'lucide-react'

const AdminDashboard = () => {
  const { user, isAdmin, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect if not admin
    if (!loading && !isAdmin) {
      navigate('/admin/login')
    }
  }, [isAdmin, loading, navigate])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-pilates-dark">Loading...</div>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  const adminSections = [
    {
      title: 'Content Management',
      icon: FileText,
      description: 'Edit website content and pages',
      link: '/admin/content',
      color: 'bg-pilates-rose'
    },
    {
      title: 'Products',
      icon: Package,
      description: 'Manage shop products and inventory',
      link: '/admin/products',
      color: 'bg-pilates-sage'
    },
    {
      title: 'Classes',
      icon: Calendar,
      description: 'Schedule and manage pilates classes',
      link: '/admin/classes',
      color: 'bg-pilates-taupe'
    },
    {
      title: 'Customers',
      icon: Users,
      description: 'View and manage customer accounts',
      link: '/admin/customers',
      color: 'bg-pilates-brown'
    },
    {
      title: 'Images',
      icon: Image,
      description: 'Upload and manage site images',
      link: '/admin/images',
      color: 'bg-pilates-dark'
    },
    {
      title: 'Settings',
      icon: Settings,
      description: 'Configure site settings',
      link: '/admin/settings',
      color: 'bg-pilates-rose'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-pilates-dark">
              Admin Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.email}
              </span>
              <button
                onClick={() => navigate('/')}
                className="text-sm bg-pilates-sand hover:bg-pilates-taupe text-pilates-dark px-4 py-2 rounded transition-colors"
              >
                View Site
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminSections.map((section) => {
            const Icon = section.icon
            return (
              <button
                key={section.title}
                onClick={() => navigate(section.link)}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 text-left"
              >
                <div className={`${section.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-pilates-dark mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {section.description}
                </p>
              </button>
            )
          })}
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-yellow-900 mb-2">
            🚀 Phase 2 Development In Progress
          </h2>
          <p className="text-yellow-800">
            The admin dashboard is being built. Content management and e-commerce features will be available soon.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard