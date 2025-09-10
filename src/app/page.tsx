"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Menu, X, Star, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      {/* Floating Header */}
      <header className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 shadow-2xl">
        <div className="flex items-center justify-between space-x-8">
          <div className="text-2xl font-bold tracking-wider text-white gradient-text">
            ✨ LUXE
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105">Главная</a>
            <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105">О нас</a>
            <a href="#collections" className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105">Коллекции</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105">Контакты</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>

          <Button className="bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-400/25">
            Связаться
          </Button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-2xl border border-white/20 shadow-2xl animate-in slide-in-from-top-2 duration-300"
               style={{
                 borderRadius: '30px 30px 40px 40px',
                 borderTopLeftRadius: '15px',
                 borderTopRightRadius: '15px',
                 borderBottomLeftRadius: '25px 40px',
                 borderBottomRightRadius: '25px 40px'
               }}>
            <div className="p-4">
              <nav className="flex flex-col space-y-3">
                <a
                  href="#home"
                  className="text-white hover:text-amber-400 transition-all duration-300 text-sm font-medium px-4 py-3 bg-white/10 hover:bg-white/20 hover:scale-105 text-center border border-white/10"
                  style={{ borderRadius: '20px 15px 25px 15px' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🏠 Главная
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-amber-400 transition-all duration-300 text-sm font-medium px-4 py-3 bg-white/10 hover:bg-white/20 hover:scale-105 text-center border border-white/10"
                  style={{ borderRadius: '15px 25px 15px 20px' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ℹ️ О нас
                </a>
                <a
                  href="#collections"
                  className="text-white hover:text-amber-400 transition-all duration-300 text-sm font-medium px-4 py-3 bg-white/10 hover:bg-white/20 hover:scale-105 text-center border border-white/10"
                  style={{ borderRadius: '25px 15px 20px 15px' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  👗 Коллекции
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-amber-400 transition-all duration-300 text-sm font-medium px-4 py-3 bg-white/10 hover:bg-white/20 hover:scale-105 text-center border border-white/10"
                  style={{ borderRadius: '15px 20px 25px 20px' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  📞 Контакты
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Animated Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-black to-amber-900/60" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/81e51587371983.5db984333fbe8.jpg')"
            }}
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Enhanced Floating Elements */}
          <div className="absolute top-20 left-10 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-70" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-60" />
          <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-80" />
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-70" />
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-50" />
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-bounce opacity-60" />

          {/* Large Decorative Shapes */}
          <div className="absolute top-16 right-16 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-24 left-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-wide">
            <span className="text-white block mb-4 relative">
              СОЗДАЕМ
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white/30 to-white/60 rounded-full" />
            </span>
            <span className="gradient-text block relative">
              СТИЛЬ
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-80" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/80">
            Эксклюзивная мода для стильных и уверенных в себе людей.
            <span className="block mt-2 text-amber-400 font-semibold text-2xl md:text-3xl">
              Откройте свою уникальность ✨
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:from-amber-500 hover:to-orange-600 px-12 py-5 text-xl font-bold shadow-2xl hover:shadow-amber-400/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                    style={{ borderRadius: '30px 15px 30px 15px' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ borderRadius: '30px 15px 30px 15px' }} />
              <span className="relative z-10">Смотреть коллекции</span>
              <ArrowRight className="ml-3 w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button variant="outline" size="lg" className="border-2 border-white/50 text-white bg-white/10 backdrop-blur-lg hover:bg-white hover:text-black px-12 py-5 text-xl font-bold transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                    style={{ borderRadius: '15px 30px 15px 30px' }}>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ borderRadius: '15px 30px 15px 30px' }} />
              <span className="relative z-10">Записаться на консультацию</span>
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            {[{
              number: "500+", label: "Довольных клиентов", icon: "🎉", color: "from-pink-400 to-purple-500", radius: "30px 15px 30px 15px"
            }, {
              number: "15", label: "Лет опыта", icon: "⭐", color: "from-amber-400 to-orange-500", radius: "15px 30px 15px 30px"
            }, {
              number: "50+", label: "Премиум брендов", icon: "💎", color: "from-cyan-400 to-blue-500", radius: "25px 25px 35px 15px"
            }].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 relative overflow-hidden"
                     style={{ borderRadius: stat.radius }}>
                  {/* Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                       style={{ borderRadius: stat.radius }} />

                  <div className="relative z-10">
                    <div className="flex justify-center mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                           style={{ borderRadius: index === 0 ? '50% 30% 50% 30%' : index === 1 ? '30% 50% 30% 50%' : '40% 40% 20% 60%' }}>
                        <span className="text-2xl">{stat.icon}</span>
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 group-hover:text-white transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-3 right-3 w-4 h-4 bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-60 transition-opacity duration-300`}
                       style={{ borderRadius: '50% 20% 50% 20%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden"
               style={{ borderRadius: '20px 20px 30px 30px' }}>
            <div className="w-2 h-4 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full mt-2 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 rounded-full"
                 style={{ borderRadius: '20px 20px 30px 30px' }} />
          </div>
          <div className="text-white/60 text-xs mt-2 text-center">Листайте вниз</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-stone-100 to-amber-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20 blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full opacity-15 blur-xl"></div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 px-6 py-3 text-sm font-semibold shadow-lg"
                       style={{ borderRadius: '25px 10px 25px 10px' }}>
                  ✨ О магазине
                </Badge>
                <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
                  15 лет создаем
                  <span className="gradient-text block">неповторимый стиль</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
                  <p className="text-gray-600 text-lg leading-relaxed pl-8">
                    LUXE - это больше чем магазин модной одежды. Мы создаем персональный стиль для каждого клиента,
                    подбирая эксклюзивные вещи от ведущих дизайнеров мира.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                  <p className="text-gray-600 text-lg leading-relaxed pl-8">
                    Наша миссия - помочь вам выразить свою индивидуальность через качественную, стильную и современную одежду.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-amber-400">
                  <div className="text-4xl font-black text-gray-900 mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">500+</div>
                  <div className="text-gray-600 font-medium">Довольных клиентов</div>
                </div>
                <div className="text-center p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-purple-400">
                  <div className="text-4xl font-black text-gray-900 mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">50+</div>
                  <div className="text-gray-600 font-medium">Брендов в коллекции</div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-gray-900 to-black text-white hover:scale-105 transition-all duration-300 px-8 py-3 font-semibold shadow-xl"
                      style={{ borderRadius: '20px 10px 20px 10px' }}>
                Узнать больше
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500"
                   style={{ borderRadius: '40px 20px 40px 20px' }}>
                <img
                  src="https://images.pexels.com/photos/13680054/pexels-photo-13680054.jpeg"
                  alt="Интерьер магазина"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-3xl p-6 shadow-2xl hover:scale-110 transition-all duration-300"
                   style={{ borderRadius: '30px 15px 30px 15px' }}>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    <Star className="w-6 h-6 text-amber-400 fill-current" />
                    <Star className="w-6 h-6 text-amber-400 fill-current" />
                    <Star className="w-6 h-6 text-amber-400 fill-current" />
                    <Star className="w-6 h-6 text-amber-400 fill-current" />
                    <Star className="w-6 h-6 text-amber-400 fill-current" />
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-900 mt-2">4.9/5 отзывов</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl p-6 shadow-2xl hover:scale-110 transition-all duration-300"
                   style={{ borderRadius: '20px 35px 20px 35px' }}>
                <div className="text-3xl font-black text-black">💎</div>
                <div className="text-sm font-bold text-black mt-2">Премиум качество</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
        </div>

        {/* Animated Floating Particles */}
        <div className="absolute top-16 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-ping" />
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-bounce" />

        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-white/10 backdrop-blur-lg text-white border-white/20 px-6 py-3 text-sm font-semibold shadow-xl"
                   style={{ borderRadius: '30px 15px 30px 15px' }}>
              ✨ Коллекции
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
              Наши
              <span className="gradient-text block relative">
                коллекции
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-50" />
              </span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Откройте для себя эксклюзивные коллекции от ведущих мировых дизайнеров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              title: "Женская коллекция",
              subtitle: "Элегантность и стиль",
              image: "https://sc04.alicdn.com/kf/H5acf044d5db84590bd2f7f10e77fb6f0L.jpg",
              gradient: "from-pink-500/20 to-purple-600/20",
              accent: "pink",
              borderRadius: "40px 20px 40px 20px"
            }, {
              title: "Мужская коллекция",
              subtitle: "Классика и современность",
              image: "http://ledlightsdirect.com/cdn/shop/articles/1_c7e30df2-6633-4c10-a2ff-0c867913c44c.png?v=1682501558",
              gradient: "from-blue-500/20 to-cyan-600/20",
              accent: "blue",
              borderRadius: "20px 40px 20px 40px"
            }, {
              title: "Аксессуары",
              subtitle: "Завершающие штрихи",
              image: "https://sc04.alicdn.com/kf/H6279a29068c7402dbed0241b8537d616E.jpg",
              gradient: "from-amber-500/20 to-orange-600/20",
              accent: "amber",
              borderRadius: "30px 30px 20px 50px"
            }].map((item, index) => (
              <Card key={index} className="group overflow-hidden border-0 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:shadow-2xl relative"
                    style={{ borderRadius: item.borderRadius }}>
                <div className="relative overflow-hidden h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                  {/* Decorative Corner Element */}
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-${item.accent}-400/20 backdrop-blur-lg border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                       style={{ borderRadius: '15px 5px 15px 5px' }}>
                    <span className="text-white text-lg">
                      {index === 0 ? '👗' : index === 1 ? '👔' : '💎'}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors duration-300">{item.title}</h3>
                    <p className="text-white/80">{item.subtitle}</p>
                  </div>

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 border-2 border-${item.accent}-400/0 group-hover:border-${item.accent}-400/50 transition-colors duration-500`}
                       style={{ borderRadius: item.borderRadius }} />
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold hover:scale-105 transition-all duration-300 px-10 py-4 text-lg shadow-2xl hover:shadow-amber-400/25"
                    style={{ borderRadius: '25px 10px 25px 10px' }}>
              Посмотреть все коллекции
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-50 via-gray-100 to-pink-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-16 right-16 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-yellow-300/30 rounded-full blur-lg" />
        </div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 px-6 py-3 text-sm font-semibold shadow-lg"
                   style={{ borderRadius: '20px 35px 20px 30px' }}>
              ✨ Услуги
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
              Что мы
              <span className="gradient-text block relative">
                предлагаем
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-40" />
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: "👗",
              title: "Персональный стилист",
              description: "Индивидуальная консультация по подбору стиля и созданию гардероба",
              color: "from-pink-100 to-rose-100",
              borderColor: "border-pink-300",
              shadowColor: "hover:shadow-pink-200/50",
              iconBg: "from-pink-200 to-rose-200",
              borderRadius: "30px 15px 30px 15px"
            }, {
              icon: "✂️",
              title: "Подгонка по фигуре",
              description: "Профессиональная подгонка и ремонт одежды для идеальной посадки",
              color: "from-blue-100 to-indigo-100",
              borderColor: "border-blue-300",
              shadowColor: "hover:shadow-blue-200/50",
              iconBg: "from-blue-200 to-indigo-200",
              borderRadius: "15px 30px 15px 30px"
            }, {
              icon: "🎁",
              title: "VIP обслуживание",
              description: "Эксклюзивное обслуживание для постоянных клиентов",
              color: "from-amber-100 to-yellow-100",
              borderColor: "border-amber-300",
              shadowColor: "hover:shadow-amber-200/50",
              iconBg: "from-amber-200 to-yellow-200",
              borderRadius: "25px 25px 40px 15px"
            }].map((service, index) => (
              <Card key={index} className={`text-center p-8 border-2 ${service.borderColor} bg-white shadow-xl hover:shadow-2xl ${service.shadowColor} transition-all duration-500 hover:scale-105 group relative overflow-hidden`}
                    style={{ borderRadius: service.borderRadius }}>
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                     style={{ borderRadius: service.borderRadius }} />

                <div className="relative z-10">
                  <div className={`w-24 h-24 bg-gradient-to-br ${service.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                       style={{ borderRadius: index === 0 ? '50% 30% 50% 30%' : index === 1 ? '30% 50% 30% 50%' : '40% 40% 20% 60%' }}>
                    <span className="text-4xl group-hover:animate-pulse">{service.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Decorative Bottom Element */}
                  <div className="mt-6 flex justify-center">
                    <div className={`w-12 h-1 bg-gradient-to-r ${service.iconBg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-4 right-4 w-6 h-6 bg-gradient-to-br ${service.iconBg} opacity-20 group-hover:opacity-60 transition-opacity duration-300`}
                     style={{ borderRadius: '50% 20% 50% 20%' }} />
              </Card>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-200/50"
                 style={{ borderRadius: '40px 20px 40px 20px' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Готовы создать свой неповторимый стиль?
              </h3>
              <p className="text-gray-600 mb-6">
                Запишитесь на консультацию и получите персональный подход к созданию гардероба
              </p>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition-all duration-300 px-8 py-3 font-semibold shadow-xl"
                      style={{ borderRadius: '20px 30px 20px 30px' }}>
                Записаться на консультацию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-black via-purple-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
        </div>

        {/* Floating Particles */}
        <div className="absolute top-24 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-60" />
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50" />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-40" />

        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <Badge className="mb-6 bg-white/10 backdrop-blur-lg text-white border-white/20 px-6 py-3 text-sm font-semibold shadow-xl"
                       style={{ borderRadius: '35px 15px 35px 15px' }}>
                  ✨ Контакты
                </Badge>
                <h2 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
                  Свяжитесь
                  <span className="gradient-text block relative">
                    с нами
                    <div className="absolute -bottom-3 left-0 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-60" />
                  </span>
                </h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  Мы всегда рады помочь вам в выборе идеального образа. Свяжитесь с нами любым удобным способом.
                </p>
              </div>

              <div className="space-y-6">
                {[{
                  icon: MapPin,
                  title: "Адрес",
                  info: "ул. Тверская, 12, Москва, 125009",
                  color: "from-blue-400 to-cyan-500",
                  borderRadius: "25px 15px 25px 15px"
                }, {
                  icon: Phone,
                  title: "Телефон",
                  info: "+7 (495) 123-45-67",
                  color: "from-green-400 to-emerald-500",
                  borderRadius: "15px 25px 15px 25px"
                }, {
                  icon: Mail,
                  title: "Email",
                  info: "info@luxe-fashion.ru",
                  color: "from-purple-400 to-violet-500",
                  borderRadius: "30px 10px 30px 10px"
                }, {
                  icon: Clock,
                  title: "Режим работы",
                  info: "Пн-Вс: 10:00 - 21:00",
                  color: "from-amber-400 to-orange-500",
                  borderRadius: "20px 30px 20px 30px"
                }].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                       style={{ borderRadius: contact.borderRadius }}>
                    <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                         style={{ borderRadius: index % 2 === 0 ? '50% 30% 50% 30%' : '30% 50% 30% 50%' }}>
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-amber-300 transition-colors duration-300">{contact.title}</h4>
                      <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{contact.info}</p>
                    </div>
                    {/* Decorative Element */}
                    <div className={`w-3 h-8 bg-gradient-to-b ${contact.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full`} />
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-white mb-6 text-lg">Мы в соцсетях</h4>
                <div className="flex space-x-4">
                  {[{
                    Icon: Instagram,
                    color: 'from-pink-500 to-purple-600',
                    radius: '50% 20% 50% 20%'
                  }, {
                    Icon: Facebook,
                    color: 'from-blue-500 to-blue-700',
                    radius: '20% 50% 20% 50%'
                  }, {
                    Icon: Twitter,
                    color: 'from-cyan-400 to-blue-500',
                    radius: '40% 40% 20% 60%'
                  }].map(({ Icon, color, radius }, index) => (
                    <Button key={index} variant="outline" size="icon"
                            className="border-white/20 bg-white/5 backdrop-blur-lg text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group relative overflow-hidden"
                            style={{ borderRadius: radius }}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                           style={{ borderRadius: radius }} />
                      <Icon className="w-5 h-5 relative z-10" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <Card className="p-8 border-0 bg-white/10 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
                  style={{ borderRadius: '40px 20px 40px 20px' }}>
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
                   style={{ borderRadius: '40px 20px 40px 20px' }} />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-white">Записаться на консультацию</h3>
                <div className="space-y-6">
                  {["Имя", "Телефон"].map((label, index) => (
                    <div key={index} className="group">
                      <label className="block text-sm font-medium text-white/80 mb-3 group-focus-within:text-amber-400 transition-colors duration-300">{label}</label>
                      <input
                        type={index === 1 ? "tel" : "text"}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                        style={{ borderRadius: index === 0 ? '20px 10px 20px 10px' : '10px 20px 10px 20px' }}
                        placeholder={index === 0 ? "Ваше имя" : "+7 (___) ___-__-__"}
                      />
                    </div>
                  ))}

                  <div className="group">
                    <label className="block text-sm font-medium text-white/80 mb-3 group-focus-within:text-amber-400 transition-colors duration-300">Сообщение</label>
                    <textarea
                      rows={4}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:bg-white/15 resize-none"
                      style={{ borderRadius: '25px 15px 25px 15px' }}
                      placeholder="Расскажите о ваших предпочтениях..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold py-4 text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-amber-400/25"
                          style={{ borderRadius: '30px 15px 30px 15px' }}>
                    Отправить заявку
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-amber-400/20 opacity-50"
                   style={{ borderRadius: '50% 20% 50% 20%' }} />
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-400/20 opacity-40"
                   style={{ borderRadius: '40% 40% 20% 60%' }} />
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16 px-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-xl" />
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-lg" />
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 space-y-6">
              <div className="text-4xl font-black tracking-wider gradient-text relative">
                ✨ LUXE
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-60" />
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-md text-lg">
                Эксклюзивная мода для тех, кто ценит качество и стиль. Создаем неповторимые образы уже 15 лет.
              </p>

              <div className="flex space-x-4">
                {[{
                  Icon: Instagram,
                  color: 'from-pink-500 to-purple-600',
                  radius: '50% 30% 50% 30%'
                }, {
                  Icon: Facebook,
                  color: 'from-blue-500 to-blue-700',
                  radius: '30% 50% 30% 50%'
                }, {
                  Icon: Twitter,
                  color: 'from-cyan-400 to-blue-500',
                  radius: '40% 40% 20% 60%'
                }].map(({ Icon, color, radius }, index) => (
                  <Button key={index} variant="outline" size="icon"
                          className="border-gray-700 bg-gray-800/50 backdrop-blur-lg text-gray-300 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group relative overflow-hidden"
                          style={{ borderRadius: radius }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                         style={{ borderRadius: radius }} />
                    <Icon className="w-5 h-5 relative z-10" />
                  </Button>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl ml-0 md:ml-0"
                   style={{ borderRadius: '25px 40px 25px 15px', marginLeft: '-0.5rem' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center"
                       style={{ borderRadius: '50% 30% 50% 30%' }}>
                    <span className="text-black font-bold text-sm">15</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">лет на рынке</div>
                    <div className="text-gray-400 text-sm">Проверенное качество</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:pl-4">
              <h4 className="font-bold mb-6 text-white text-xl relative">
                Навигация
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
              </h4>
              <ul className="space-y-4 text-gray-400">
                {[{
                  name: "Главная",
                  icon: "🏠"
                }, {
                  name: "О нас",
                  icon: "ℹ️"
                }, {
                  name: "Коллекции",
                  icon: "👗"
                }, {
                  name: "Контакты",
                  icon: "📞"
                }].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.name.toLowerCase().replace(" ", "")}`}
                       className="hover:text-white transition-colors duration-300 hover:translate-x-2 inline-flex items-center space-x-3 group"
                       style={{ borderRadius: '15px' }}>
                      <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      <span className="group-hover:text-amber-300 transition-colors duration-300">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 md:pl-4">
              <h4 className="font-bold mb-6 text-white text-xl relative">
                Контакты
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
              </h4>
              <ul className="space-y-4 text-gray-400">
                {[{
                  text: "ул. Тверская, 12, Москва",
                  icon: "📍"
                }, {
                  text: "+7 (495) 123-45-67",
                  icon: "📞"
                }, {
                  text: "info@luxe-fashion.ru",
                  icon: "✉️"
                }, {
                  text: "Пн-Вс: 10:00 - 21:00",
                  icon: "🕐"
                }].map((contact, index) => (
                  <li key={index} className="flex items-center space-x-3 group hover:text-white transition-colors duration-300">
                    <span className="group-hover:scale-110 transition-transform duration-300">{contact.icon}</span>
                    <span className="group-hover:text-gray-200 transition-colors duration-300 text-sm">{contact.text}</span>
                  </li>
                ))}
              </ul>

              {/* Quick Action - Centered on mobile */}
              <div className="mt-8 flex justify-center md:justify-start w-full">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:scale-105 transition-all duration-300 px-6 py-3 font-semibold shadow-lg -ml-[30%] md:ml-0"
                        style={{ borderRadius: '20px 30px 20px 30px' }}>
                  Быстрая консультация
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  &copy; 2025 LUXE. Все права защищены.
                  <span className="text-amber-400 ml-1">Создано с ❤️ для стильных людей.</span>
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-gray-400 text-sm">Сайт работает</span>
                </div>
                <div className="text-gray-500 text-sm">
                  v2.0.1
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


