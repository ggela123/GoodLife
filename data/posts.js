const posts = [
  {
    id: 1,
    user: {
      name: 'Hans Berg',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vinlxzc9_expires_30_days.png',
    },
    location: 'Wallis, Switzerland',
    rating: 5.0,
    likes: 234,
    comments: 16,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/HansBerngif.gif',
    caption: 'Hiking the Swiss Alps was a dream come true! 🏔️',
    isVideo: true,
    duration: '2:34',
    flag: '🇨🇭'
  },
  {
    id: 2,
    user: {
      name: 'Ivan Petrov',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/xbegbmh1_expires_30_days.png',
    },
    location: 'Dubrovnik, Croatia',
    rating: 4.5,
    likes: 189,
    comments: 31,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/croatia.gif',
    caption: 'Street food adventure in Shibuya! Must try the ramen here ',
    isVideo: false,
    flag: '🇭🇷'
  },
  {
    id: 3,
    user: {
      name: 'Anneliese Muller',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/e0v047vl_expires_30_days.png',
    },
    location: 'Garmisch-Partenkirchen, Germany',
    rating: 4.9,
    likes: 412,
    comments: 12,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/Anneliese%20Muller.gif',
    caption: 'Central Park in autumn is breathtaking 🍂',
    isVideo: true,
    duration: '1:12',
    flag: '🇩🇪'
  },
  {
    id: 4,
    user: {
      name: 'John Smith',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/4lkzjkno_expires_30_days.png',
    },
    location: 'York, United Kingdom',
    rating: 4.8,
    likes: 156,
    comments: 8,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/uk.gif',
    caption: "Gaudi's architecture never fails to amaze me",
    isVideo: false,
    flag: '🇬🇧'
  },
  {
    id: 5,
    user: {
      name: 'Lena Fischer',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/ft0q3w4r_expires_30_days.png',
    },
    location: 'Munich, Germany',
    rating: 4.8,
    likes: 298,
    comments: 22,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/germany2.gif',
    caption: 'Korean BBQ night with friends! 🥩',
    isVideo: true,
    duration: '3:45',
    flag: '🇩🇪'
  },
  {
    id: 6,
    user: {
      name: 'Erik Svensson',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/om2o9rmx_expires_30_days.png',
    },
    location: 'Kiruna, Sweden',
    rating: 4.2,
    likes: 89,
    comments: 12,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/sweden.gif',
    caption: 'Rainy day at Big Ben, still beautiful!',
    isVideo: false,
    flag: '🇸🇪'
  },
  {
    id: 7,
    user: {
      name: 'Maria Santos',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/qry2mhz4_expires_30_days.png',
    },
    location: 'Oslo, Norway',
    rating: 4.7,
    likes: 342,
    comments: 42,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/norway.gif',
    caption: 'Copacabana beach vibes are unmatched! 🏖️',
    isVideo: true,
    duration: '4:12',
    flag: '🇳🇴'
  },
  {
    id: 8,
    user: {
      name: 'Claire Dubois',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/e8h0ygqm_expires_30_days.png',
    },
    location: 'Paris, France',
    rating: 4.0,
    likes: 167,
    comments: 56,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/france.gif',
    caption: 'Opera House at sunset - pure magic ✨',
    isVideo: true,
    duration: '2:58',
    flag: '🇫🇷'
  },
  {
    id: 9,
    user: {
      name: 'Sophie Laurent',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/dm49e6xd_expires_30_days.png',
    },
    location: 'Vienna, Austria',
    rating: 4.9,
    likes: 521,
    comments: 60,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/austria.gif',
    caption: 'Eiffel Tower never gets old 🇫🇷',
    isVideo: false,
    flag: '🇦🇹'
  },
  {
    id: 10,
    user: {
      name: 'Liam O\'Connor',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/6pdl8ldl_expires_30_days.png',
    },
    location: 'Dublin, Ireland',
    rating: 5.0,
    likes: 389,
    comments: 28,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/ireland.gif',
    caption: 'Burj Khalifa views from the top! 🏢',
    isVideo: true,
    duration: '1:45',
    flag: '🇮🇪'
  },
  {
    id: 11,
    user: {
      name: 'Emma Jansen',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/bckqhiui_expires_30_days.png',
    },
    location: 'Amsterdam, Netherlands',
    rating: 5.0,
    likes: 234,
    comments: 19,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/netherlands.gif',
    caption: 'Red Square in winter is magical ❄️',
    isVideo: true,
    duration: '3:21',
    flag: '🇳🇱'
  },
  {
    id: 12,
    user: {
      name: 'Oliver Brown',
      avatar: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/08FLrV2n9F/vht18voq_expires_30_days.png',
    },
    location: 'London, United Kingdom',
    rating: 5.0,
    likes: 445,
    comments: 33,
    image: 'https://ggfdeiqcfkfjrucvisfd.supabase.co/storage/v1/object/public/org-media/uk2.gif',
    caption: 'Table Mountain hike was incredible! 🏔️',
    isVideo: true,
    duration: '5:12',
    flag: '🇬🇧'
  }
];

export default posts;
