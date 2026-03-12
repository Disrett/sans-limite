'use client';

import { useState } from 'react';
import Sidebar from '../components/sidebar';
import MobileMenu from '../components/mobilemenu';
import Header from '../components/header';
import Footer from '../components/Footer/Footer';
import { Calendar, MapPin, Users, Clock, ChevronRight, Filter, Search } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Marathon de Paris',
    category: 'Course',
    categoryColor: 'bg-blue-100 text-blue-700',
    date: '6 avril 2025',
    time: '08h00',
    location: 'Paris, Île-de-France',
    participants: 1240,
    maxParticipants: 2000,
    level: 'Tous niveaux',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Courez les 42km du mythique parcours parisien à travers les plus beaux monuments de la capitale. Parcours accessible aux débutants avec une formule 10km.',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&h=300&fit=crop',
    tags: ['Course à pied', 'Outdoor', 'Chrono'],
    accessible: false,
  },
  {
    id: 2,
    title: 'Yoga en plein air — Parc de la Tête d\'Or',
    category: 'Bien-être',
    categoryColor: 'bg-purple-100 text-purple-700',
    date: '12 avril 2025',
    time: '09h30',
    location: 'Lyon, Auvergne-Rhône-Alpes',
    participants: 85,
    maxParticipants: 120,
    level: 'Débutant',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Séance de yoga en plein air adaptée à tous. Aucun matériel requis, tapis fournis. Idéal pour démarrer la pratique ou se reconnecter à la nature.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=300&fit=crop',
    tags: ['Yoga', 'Outdoor', 'Détente'],
    accessible: true,
  },
  {
    id: 3,
    title: 'Tournoi de Bocce Ball Handibasket',
    category: 'Sport adapté',
    categoryColor: 'bg-orange-100 text-orange-700',
    date: '19 avril 2025',
    time: '10h00',
    location: 'Bordeaux, Nouvelle-Aquitaine',
    participants: 48,
    maxParticipants: 80,
    level: 'Tous niveaux',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Tournoi amical de bocce ball et initiation au basket en fauteuil roulant. Événement inclusif ouvert aux personnes valides et en situation de handicap.',
    image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?w=600&h=300&fit=crop',
    tags: ['Inclusif', 'Handibasket', 'Tournoi'],
    accessible: true,
  },
  {
    id: 4,
    title: 'Randonnée nordique en forêt',
    category: 'Randonnée',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    date: '26 avril 2025',
    time: '07h45',
    location: 'Strasbourg, Grand Est',
    participants: 62,
    maxParticipants: 100,
    level: 'Intermédiaire',
    levelColor: 'bg-yellow-100 text-yellow-700',
    description: 'Randonnée de 15km dans la forêt rhénane avec bâtons de marche nordique. Encadrement professionnel, pique-nique partagé à mi-parcours.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop',
    tags: ['Marche nordique', 'Nature', 'Groupe'],
    accessible: false,
  },
  {
    id: 5,
    title: 'Initiation au paddle — Lac d\'Annecy',
    category: 'Nautique',
    categoryColor: 'bg-cyan-100 text-cyan-700',
    date: '3 mai 2025',
    time: '14h00',
    location: 'Annecy, Haute-Savoie',
    participants: 30,
    maxParticipants: 40,
    level: 'Débutant',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Découvrez le stand-up paddle sur les eaux turquoise du lac d\'Annecy. Équipement fourni, moniteur diplômé. Accessible aux personnes à mobilité réduite sur demande.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=300&fit=crop',
    tags: ['Paddle', 'Eau', 'Découverte'],
    accessible: true,
  },
  {
    id: 6,
    title: 'Crossfit Open Box Challenge',
    category: 'Musculation',
    categoryColor: 'bg-red-100 text-red-700',
    date: '10 mai 2025',
    time: '09h00',
    location: 'Toulouse, Occitanie',
    participants: 156,
    maxParticipants: 200,
    level: 'Avancé',
    levelColor: 'bg-red-100 text-red-700',
    description: 'Compétition de CrossFit en équipes de 3. WODs variés sur la journée entière. Catégories par niveau, remise des prix le soir. Food truck sur place.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=300&fit=crop',
    tags: ['CrossFit', 'Compétition', 'Équipe'],
    accessible: false,
  },
  {
    id: 7,
    title: 'Vélo adapté & handcycle — Tour de ville',
    category: 'Sport adapté',
    categoryColor: 'bg-orange-100 text-orange-700',
    date: '17 mai 2025',
    time: '10h30',
    location: 'Nantes, Pays de la Loire',
    participants: 35,
    maxParticipants: 60,
    level: 'Tous niveaux',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Balade à vélo et handcycle de 20km à travers Nantes. Vélos adaptés disponibles, parcours plat et balisé. Accueil des personnes avec ou sans handicap moteur.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=300&fit=crop',
    tags: ['Cyclisme', 'Inclusif', 'Balade'],
    accessible: true,
  },
  {
    id: 8,
    title: 'Tournoi de pétanque intergénérationnel',
    category: 'Loisirs',
    categoryColor: 'bg-lime-100 text-lime-700',
    date: '24 mai 2025',
    time: '14h00',
    location: 'Marseille, PACA',
    participants: 90,
    maxParticipants: 160,
    level: 'Tous niveaux',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Grand tournoi de pétanque en doublettes mêlant toutes les générations. Ambiance conviviale garantie, buvette et restauration sur place. Aucune expérience requise.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop',
    tags: ['Pétanque', 'Famille', 'Convivial'],
    accessible: true,
  },
  {
    id: 9,
    title: 'Escalade en salle — Journée découverte',
    category: 'Escalade',
    categoryColor: 'bg-stone-100 text-stone-700',
    date: '31 mai 2025',
    time: '10h00',
    location: 'Grenoble, Isère',
    participants: 40,
    maxParticipants: 50,
    level: 'Débutant',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Journée d\'initiation à l\'escalade en salle. Tout l\'équipement est fourni. Les moniteurs s\'adaptent à chaque profil. Ouvert aux personnes avec handicap visuel partiel.',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&h=300&fit=crop',
    tags: ['Escalade', 'Indoor', 'Initiation'],
    accessible: true,
  },
  {
    id: 10,
    title: 'Triathlon Sprint — Lac de Vassivière',
    category: 'Triathlon',
    categoryColor: 'bg-indigo-100 text-indigo-700',
    date: '7 juin 2025',
    time: '07h30',
    location: 'Vassivière, Creuse',
    participants: 280,
    maxParticipants: 400,
    level: 'Intermédiaire',
    levelColor: 'bg-yellow-100 text-yellow-700',
    description: '750m natation, 20km vélo, 5km course. Format idéal pour franchir le cap du premier triathlon. Catégories handisport para-triathlon disponibles.',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=300&fit=crop',
    tags: ['Triathlon', 'Multi-sport', 'Chronométré'],
    accessible: true,
  },
  {
    id: 11,
    title: 'Aquagym & natation adaptée',
    category: 'Aquatique',
    categoryColor: 'bg-sky-100 text-sky-700',
    date: '14 juin 2025',
    time: '11h00',
    location: 'Lille, Hauts-de-France',
    participants: 28,
    maxParticipants: 40,
    level: 'Tous niveaux',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Séance d\'aquagym et natation adaptée en piscine municipale. Encadrée par un MNS formé au handicap. Accès PMR, vestiaires adaptés. Très efficace pour le dos et les articulations.',
    image: 'https://images.unsplash.com/photo-1560090995-01632a28895b?w=600&h=300&fit=crop',
    tags: ['Aquagym', 'Natation', 'Adapté'],
    accessible: true,
  },
  {
    id: 12,
    title: 'Tournoi de tennis de table',
    category: 'Raquette',
    categoryColor: 'bg-pink-100 text-pink-700',
    date: '21 juin 2025',
    time: '13h00',
    location: 'Rennes, Bretagne',
    participants: 64,
    maxParticipants: 128,
    level: 'Tous niveaux',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Tournoi de ping-pong en poules puis en direct. Tableau valide et tableau parathlète. Sport accessible depuis une chaise ou un fauteuil. Bonne humeur obligatoire !',
    image: 'https://images.unsplash.com/photo-1611251135345-18c56206b863?w=600&h=300&fit=crop',
    tags: ['Ping-pong', 'Tournoi', 'Inclusif'],
    accessible: true,
  },
  {
    id: 13,
    title: 'Trail nocturne des Causses',
    category: 'Trail',
    categoryColor: 'bg-violet-100 text-violet-700',
    date: '28 juin 2025',
    time: '21h00',
    location: 'Millau, Aveyron',
    participants: 310,
    maxParticipants: 500,
    level: 'Avancé',
    levelColor: 'bg-red-100 text-red-700',
    description: 'Trail nocturne de 25km sur les sentiers des Grands Causses. Lampe frontale obligatoire. Paysages époustouflants, ravitaillements toutes les 8km. Expérience trail recommandée.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=300&fit=crop',
    tags: ['Trail', 'Nuit', 'Nature'],
    accessible: false,
  },
  {
    id: 14,
    title: 'Initiation au tir à l\'arc — Toutes capacités',
    category: 'Précision',
    categoryColor: 'bg-teal-100 text-teal-700',
    date: '5 juillet 2025',
    time: '10h00',
    location: 'Dijon, Bourgogne',
    participants: 22,
    maxParticipants: 30,
    level: 'Débutant',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Journée d\'initiation au tir à l\'arc en club agréé. Discipline praticable en position debout, assise ou en fauteuil. Matériel adapté disponible, aucun prérequis physique.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=300&fit=crop',
    tags: ['Tir à l\'arc', 'Précision', 'Adapté'],
    accessible: true,
  },
  {
    id: 15,
    title: 'Surf pour tous — Les Landes',
    category: 'Nautique',
    categoryColor: 'bg-cyan-100 text-cyan-700',
    date: '12 juillet 2025',
    time: '09h00',
    location: 'Hossegor, Landes',
    participants: 50,
    maxParticipants: 60,
    level: 'Débutant',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Initiation au surf encadrée par des moniteurs brevetés. Formule inclusive avec planche adaptée pour personnes à mobilité réduite (surf assis). Matériel et combinaisons fournis.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=300&fit=crop',
    tags: ['Surf', 'Mer', 'Inclusif'],
    accessible: true,
  },
  {
    id: 16,
    title: 'Course d\'orientation en forêt',
    category: 'Orientation',
    categoryColor: 'bg-amber-100 text-amber-700',
    date: '19 juillet 2025',
    time: '08h30',
    location: 'Fontainebleau, Seine-et-Marne',
    participants: 75,
    maxParticipants: 150,
    level: 'Tous niveaux',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Course d\'orientation en forêt de Fontainebleau. Parcours courts (famille), moyens (sportifs) et longs (compétiteurs). Idéal pour développer sens de l\'observation et endurance.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=300&fit=crop',
    tags: ['Orientation', 'Forêt', 'Famille'],
    accessible: false,
  },
  {
    id: 17,
    title: 'Boccia — Championnat régional',
    category: 'Sport adapté',
    categoryColor: 'bg-orange-100 text-orange-700',
    date: '26 juillet 2025',
    time: '10h00',
    location: 'Montpellier, Hérault',
    participants: 42,
    maxParticipants: 64,
    level: 'Tous niveaux',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Championnat régional de boccia, sport paralympique officiel. Accessible aux personnes souffrant de paralysie cérébrale ou de handicap moteur sévère. Ouvert aux spectateurs valides.',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=600&h=300&fit=crop',
    tags: ['Boccia', 'Paralympique', 'Compétition'],
    accessible: true,
  },
  {
    id: 18,
    title: 'Randonnée en raquettes — Vosges',
    category: 'Montagne',
    categoryColor: 'bg-blue-100 text-blue-700',
    date: '18 janvier 2026',
    time: '08h00',
    location: 'Gérardmer, Vosges',
    participants: 38,
    maxParticipants: 50,
    level: 'Intermédiaire',
    levelColor: 'bg-yellow-100 text-yellow-700',
    description: 'Randonnée en raquettes à neige sur les hauts sommets des Vosges. Circuit de 10km, dénivelé modéré. Guide montagne certifié. Raquettes disponibles à la location sur place.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=300&fit=crop',
    tags: ['Raquettes', 'Neige', 'Montagne'],
    accessible: false,
  },
  {
    id: 19,
    title: 'Volley-ball assis — Tournoi amical',
    category: 'Sport adapté',
    categoryColor: 'bg-orange-100 text-orange-700',
    date: '8 février 2026',
    time: '13h30',
    location: 'Clermont-Ferrand, Puy-de-Dôme',
    participants: 56,
    maxParticipants: 80,
    level: 'Tous niveaux',
    levelColor: 'bg-green-100 text-green-700',
    description: 'Tournoi amical de volley-ball assis. Valides et personnes en situation de handicap jouent ensemble. Initiation le matin, tournoi l\'après-midi. Convivialité et fairplay avant tout.',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=300&fit=crop',
    tags: ['Volley', 'Assis', 'Inclusif'],
    accessible: true,
  },
  {
    id: 20,
    title: 'Défi SANSLimites — Journée multisports',
    category: 'Multisports',
    categoryColor: 'bg-gradient-to-r from-blue-100 to-orange-100 text-[#0047AB]',
    date: '14 mars 2026',
    time: '09h00',
    location: 'Paris, Île-de-France',
    participants: 520,
    maxParticipants: 1000,
    level: 'Tous niveaux',
    levelColor: 'bg-green-100 text-green-700',
    description: 'L\'événement phare de SANSLimites ! Une journée entière avec 12 ateliers sportifs : trail, yoga, escalade, natation, boccia, tir à l\'arc... Valides, seniors, juniors, personnes handicapées : tous bienvenus.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=300&fit=crop',
    tags: ['Multisports', 'Inclusif', 'SANSLimites'],
    accessible: true,
    featured: true,
  },
];

const allCategories = ['Tous', ...Array.from(new Set(events.map((e) => e.category)))];

function ProgressBar({ value, max }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
      <div
        className="h-1.5 rounded-full bg-gradient-to-r from-[#0047AB] to-[#FFA75F] transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function EventCard({ event }) {
  const spotsLeft = event.maxParticipants - event.participants;
  const isFull = spotsLeft <= 0;
  const isAlmostFull = spotsLeft > 0 && spotsLeft <= 20;

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border-2 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col
      ${event.featured ? 'border-[#FFA75F]' : 'border-gray-100 hover:border-[#0047AB]/30'}`}>

      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Badges top */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${event.categoryColor} backdrop-blur-sm`}>
            {event.category}
          </span>
          {event.accessible && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-[#0047AB]">
              ♿ Accessible
            </span>
          )}
        </div>

        {event.featured && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FFA75F] text-white shadow">
              ⭐ Événement phare
            </span>
          </div>
        )}

        {/* Date sur l'image */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-center">
          <p className="text-xs font-bold text-[#0047AB] leading-tight">{event.date}</p>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
            <Clock size={10} />{event.time}
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-[#0047AB] text-base leading-snug mb-1 line-clamp-2">
          {event.title}
        </h3>

        <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-2">
          <MapPin size={12} className="shrink-0 text-[#FFA75F]" />
          <span className="truncate">{event.location}</span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-3 flex-1">
          {event.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {event.tags.map((tag) => (
            <span key={tag} className="text-xs bg-[#0047AB]/8 text-[#0047AB] px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Niveau */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${event.levelColor}`}>
            {event.level}
          </span>
          {isFull ? (
            <span className="text-xs font-semibold text-red-500">Complet</span>
          ) : isAlmostFull ? (
            <span className="text-xs font-semibold text-orange-500">Plus que {spotsLeft} place{spotsLeft > 1 ? 's' : ''} !</span>
          ) : null}
        </div>

        {/* Participants */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="flex items-center gap-1">
              <Users size={11} />{event.participants.toLocaleString()} participants
            </span>
            <span>{event.maxParticipants.toLocaleString()} max</span>
          </div>
          <ProgressBar value={event.participants} max={event.maxParticipants} />
        </div>

        {/* Bouton */}
        <button
          disabled={isFull}
          className={`w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all
            ${isFull
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : event.featured
                ? 'bg-gradient-to-r from-[#0047AB] to-[#FFA75F] text-white hover:opacity-90 shadow-md'
                : 'bg-[#0047AB] text-white hover:bg-[#003a8c]'
            }`}
        >
          {isFull ? 'Événement complet' : 'S\'inscrire'}
          {!isFull && <ChevronRight size={16} />}
        </button>
      </div>
    </div>
  );
}

export default function EvenementsPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [accessibleOnly, setAccessibleOnly] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = events.filter((e) => {
    const matchCat = activeCategory === 'Tous' || e.category === activeCategory;
    const matchAccess = !accessibleOnly || e.accessible;
    const matchSearch =
      search.trim() === '' ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase()) ||
      e.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchAccess && matchSearch;
  });

  return (
    <div className="flex h-screen bg-[#f8f9fa] overflow-hidden">
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />

      <div className="lg:ml-64 flex-1 flex flex-col w-full" onClick={() => setShowMenu(false)}>
        <Header setShowMobileMenu={setShowMobileMenu} />

        <main className="flex-1 overflow-y-auto">

          {/* Hero */}
          <div className="bg-gradient-to-r from-[#0047AB] to-[#FFA75F] px-6 py-8 lg:py-10">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-1 flex items-center gap-3">
                <Calendar size={30} />
                Événements sportifs
              </h1>
              <p className="text-white/80 text-sm lg:text-base">
                {events.length} événements pour tous les niveaux — sportifs, débutants, personnes en situation de handicap
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 lg:px-6 pt-6">

            {/* Filtres */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
              {/* Barre de recherche */}
              <div className="relative mb-4">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un événement, une ville, un tag..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0047AB] transition-colors"
                />
              </div>

              {/* Catégories */}
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <Filter size={14} className="text-gray-400 shrink-0" />
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all
                      ${activeCategory === cat
                        ? 'bg-[#0047AB] text-white shadow'
                        : 'bg-gray-100 text-gray-600 hover:bg-[#0047AB]/10 hover:text-[#0047AB]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Filtre accessible */}
              <label className="flex items-center gap-2 cursor-pointer w-fit">
                <div
                  onClick={() => setAccessibleOnly(!accessibleOnly)}
                  className={`w-10 h-5 rounded-full transition-colors relative ${accessibleOnly ? 'bg-[#0047AB]' : 'bg-gray-200'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all shadow ${accessibleOnly ? 'left-5' : 'left-0.5'}`} />
                </div>
                <span className="text-xs font-medium text-gray-600">Afficher uniquement les événements accessibles ♿</span>
              </label>
            </div>

            {/* Compteur résultats */}
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-bold text-[#0047AB]">{filtered.length}</span> événement{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
            </p>

            {/* Grille 2 colonnes */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <Calendar size={52} className="mb-3 opacity-30" />
                <p className="font-semibold text-base">Aucun événement trouvé</p>
                <p className="text-sm">Essayez de modifier vos filtres</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filtered.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>

          <div>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
