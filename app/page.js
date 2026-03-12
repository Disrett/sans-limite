'use client';

import { useState } from 'react';
import Sidebar from './components/sidebar';
import MobileMenu from './components/mobilemenu';
import Header from './components/header';
import FeaturedAthletes from './components/featuredathletes';
import DailyChallenge from './components/dailychallenge';
import PostCard from './components/postcard';
import PostModal from './components/postmodal';
import Footer from './components/Footer/Footer';

export default function Home() {
  // États
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newComment, setNewComment] = useState('');

  // Données des posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Marie Dupont",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
      content: "Nouveau record personnel au marathon ! 3h45 💪 Les limites sont faites pour être dépassées !",
      image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=600&fit=crop",
      likes: 156,
      comments: 23,
      isLiked: false,
      isSaved: false,
      timeAgo: "Il y a 2h",
      category: "Course"
    },
    {
      id: 2,
      author: "Thomas Martin",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
      content: "Session de CrossFit intense ce matin ! Qui est motivé pour me rejoindre demain ? 🔥",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      likes: 89,
      comments: 12,
      isLiked: false,
      isSaved: false,
      timeAgo: "Il y a 4h",
      category: "Musculation"
    },
    {
      id: 3,
      author: "Sophie Bernard",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
      content: "Escalade en extérieur aujourd'hui. La peur des hauteurs ? Connais pas ! 🧗‍♀️",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop",
      likes: 234,
      comments: 45,
      isLiked: true,
      isSaved: false,
      timeAgo: "Il y a 6h",
      category: "Escalade"
    },
    {
      id: 4,
      author: "Lucas Petit",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
      content: "100 km à vélo sous la pluie ☔ Rien ne peut m'arrêter ! #SansLimites",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
      likes: 178,
      comments: 31,
      isLiked: false,
      isSaved: true,
      timeAgo: "Il y a 8h",
      category: "Cyclisme"
    }
  ]);

  // Données des athlètes en vedette
  const featuredAthletes = [
    {
      id: 1,
      name: "Julie Moreau",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julie",
      achievement: "Premier Marathon",
      description: "A terminé son premier marathon en 3h32 ! 🏃‍♀️",
      badge: "🏅",
      stats: { posts: 42, followers: 1234 }
    },
    {
      id: 2,
      name: "Alex Dubois",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      achievement: "2 ans sur Sans Limites",
      description: "2ème anniversaire ! Plus de 500 défis relevés 🎉",
      badge: "🎂",
      stats: { posts: 156, followers: 3421 }
    },
    {
      id: 3,
      name: "Camille Rousseau",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Camille",
      achievement: "Défi 100 jours",
      description: "100 jours d'entraînement consécutifs ! Incroyable 💪",
      badge: "🔥",
      stats: { posts: 89, followers: 2156 }
    }
  ];

  // Commentaires
  const [allComments, setAllComments] = useState({
    1: [
      { id: 1, author: "Paul Laurent", authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Paul", text: "Bravo ! Quel temps incroyable 👏", timeAgo: "Il y a 1h" },
      { id: 2, author: "Emma Blanc", authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", text: "Impressionnant ! Tu as fait quoi comme préparation ?", timeAgo: "Il y a 45min" },
      { id: 3, author: "Lucas Petit", authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas2", text: "Félicitations ! Prochain objectif sous les 3h30 ? 💪", timeAgo: "Il y a 30min" }
    ],
    2: [
      { id: 1, author: "Sophie Bernard", authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie", text: "Je viens demain ! À quelle heure ?", timeAgo: "Il y a 2h" },
      { id: 2, author: "Marie Dupont", authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie", text: "J'adore le CrossFit ! Bon courage 🔥", timeAgo: "Il y a 1h" }
    ],
    3: [
      { id: 1, author: "Thomas Martin", authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas", text: "Quelle vue magnifique ! C'était où ?", timeAgo: "Il y a 3h" },
      { id: 2, author: "Julie Moreau", authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julie", text: "J'ai toujours voulu essayer l'escalade 🧗‍♀️", timeAgo: "Il y a 2h" },
      { id: 3, author: "Alex Dubois", authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", text: "Respect total ! 👊", timeAgo: "Il y a 1h" }
    ],
    4: [
      { id: 1, author: "Camille Rousseau", authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Camille", text: "100 km sous la pluie ?! Tu es fou ! 😱", timeAgo: "Il y a 4h" },
      { id: 2, author: "Paul Laurent", authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Paul", text: "Quel mental ! Bravo champion 🚴", timeAgo: "Il y a 3h" }
    ]
  });

  // Fonctions
  const toggleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
    
    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost({
        ...selectedPost,
        isLiked: !selectedPost.isLiked,
        likes: selectedPost.isLiked ? selectedPost.likes - 1 : selectedPost.likes + 1
      });
    }
  };

  const toggleSave = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isSaved: !post.isSaved }
        : post
    ));
    
    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost({
        ...selectedPost,
        isSaved: !selectedPost.isSaved
      });
    }
  };

  const handleAddComment = (postId) => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now(),
        author: "Vous",
        authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
        text: newComment,
        timeAgo: "À l'instant"
      };
      
      setAllComments(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newCommentObj]
      }));
      
      setPosts(posts.map(post => 
        post.id === postId 
          ? { ...post, comments: post.comments + 1 }
          : post
      ));
      
      if (selectedPost && selectedPost.id === postId) {
        setSelectedPost({
          ...selectedPost,
          comments: selectedPost.comments + 1
        });
      }
      
      setNewComment('');
    }
  };

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

        <main className="flex-1 overflow-y-auto px-4 lg:px-0">
          <div className="max-w-2xl mx-auto pt-4 lg:pt-6">
            <FeaturedAthletes athletes={featuredAthletes} />
            <DailyChallenge />
            
            {posts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                onLike={toggleLike}
                onSave={toggleSave}
                onOpenModal={setSelectedPost}
              />
            ))}
          </div>
          <Footer />
        </main>
      </div>

      <PostModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onLike={toggleLike}
        onSave={toggleSave}
        comments={allComments}
        newComment={newComment}
        setNewComment={setNewComment}
        onAddComment={handleAddComment}
      />
    </div>
  );
}