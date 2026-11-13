import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Terminal,
  Play,
  Pause,
  CheckCircle2,
  Circle,
  Award,
  Search,
  Flame,
  Clock,
  Star,
  BookOpen,
  Bookmark,
  Sparkles,
  Volume2,
  VolumeX,
  ArrowUpRight,
  RotateCcw,
  Compass,
  LayoutDashboard,
  Code2,
  PlayCircle,
  Printer,
  X,
  CreditCard,
  QrCode,
  Check,
  Zap,
  Calendar as CalendarIcon,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Info,
  LogIn,
  LogOut,
  User,
  PlusCircle,
  TrendingUp,
  IndianRupee,
  Users,
  Send,
  Cpu,
  Globe,
  FileCheck,
  MessageSquare,
  BarChart3,
  Layers,
  Edit3,
  Trash2,
  ThumbsUp,
  Flag,
  Download,
  FileText,
  AlertTriangle
} from 'lucide-react';

const INITIAL_COURSES = [
  {
    id: 'c1',
    title: 'Distributed Systems & Next.js 14 Production Patterns',
    category: 'Web Dev',
    level: 'Advanced',
    priceType: 'Paid',
    priceINR: 2499,
    rating: 4.95,
    reviewsCount: 1840,
    duration: '18h 40m',
    lessonsCount: 5,
    instructorName: 'Dr. Sarah Drasner',
    instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    description: 'Master Server Actions, App Router caching internals, Redis token-bucket rate limiters, and micro-frontend isolation.',
    sections: [
      {
        id: 's1',
        title: 'Module 1: Server Components & Boundary Isolation',
        lessons: [
          {
            id: 'l1',
            title: '1. Streaming SSR and Concurrent React Tree Hydration',
            duration: '00:15',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            completed: true,
            starterCode: '// Task: Cache Partition Invalidation\nfunction invalidateCacheTag(tag) {\n  console.log(`[Cache Engine] Purging partition tag: "${tag}"`);\n  return { success: true, timestamp: Date.now() };\n}\n\ninvalidateCacheTag("user-profile-node");'
          },
          {
            id: 'l2',
            title: '2. Distributed Edge Caching & Cache-Control Tags',
            duration: '00:15',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            completed: false,
            starterCode: '// Task: Set Edge CDN Headers\nconst createCacheHeader = (sMaxAge, stale) => {\n  const val = `public, s-maxage=${sMaxAge}, stale-while-revalidate=${stale}`;\n  console.log(`Edge Header: ${val}`);\n  return val;\n};\n\ncreateCacheHeader(3600, 86400);'
          }
        ]
      }
    ]
  },
  {
    id: 'c2',
    title: 'Deep Neural Architectures & PyTorch Acceleration',
    category: 'AI/ML',
    level: 'Intermediate',
    priceType: 'Free',
    priceINR: 0,
    rating: 4.88,
    reviewsCount: 2910,
    duration: '22h 15m',
    lessonsCount: 2,
    instructorName: 'Dr. Chen Wei',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80',
    description: 'Build Transformers, Diffusion auto-encoders, and CUDA acceleration kernels from foundational mathematical tensors.',
    sections: [
      {
        id: 's1',
        title: 'Module 1: Vector Math & Matrix Operations',
        lessons: [
          {
            id: 'l1',
            title: '1. Vector Dot-Product Backpropagation',
            duration: '00:15',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            completed: true,
            starterCode: '// Task: Vector Dot Product\nconst dot = (a, b) => a.reduce((sum, v, i) => sum + v * b[i], 0);\nconst v1 = [0.5, 0.2, -0.1];\nconst v2 = [1.0, 2.0, 0.5];\nconsole.log(`Dot Product Result: ${dot(v1, v2).toFixed(4)}`);'
          }
        ]
      }
    ]
  },
  {
    id: 'c3',
    title: 'Enterprise Figma Design Systems & Token Architecture',
    category: 'UI/UX',
    level: 'Intermediate',
    priceType: 'Paid',
    priceINR: 1499,
    rating: 4.92,
    reviewsCount: 1420,
    duration: '14h 30m',
    lessonsCount: 2,
    instructorName: 'Marcus Vance',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
    description: 'Bridge design to code using multi-brand tokens, slot components, responsive layout math, and Tailwind CSS mappings.',
    sections: [
      {
        id: 's1',
        title: 'Module 1: Semantic Token Mapping',
        lessons: [
          {
            id: 'l1',
            title: '1. Color Token Hierarchy and Dark Palettes',
            duration: '00:15',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            completed: false,
            starterCode: '// Task: Hex to CSS RGBA Token\nfunction hexToRgba(hex, a = 1) {\n  const r = parseInt(hex.slice(1,3), 16);\n  const g = parseInt(hex.slice(3,5), 16);\n  const b = parseInt(hex.slice(5,7), 16);\n  return `rgba(${r}, ${g}, ${b}, ${a})`;\n}\nconsole.log(hexToRgba("#6366F1", 0.2));'
          }
        ]
      }
    ]
  }
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'How do React Server Components optimize client runtime bundle payloads?',
    options: [
      'By converting client JavaScript into WebAssembly binaries',
      'By executing strictly on the server and shipping 0 KB client-side JS for static subtrees',
      'By minifying CSS utility strings during browser runtime execution',
      'By delegating routing decisions to an external WebWorker thread'
    ],
    correct: 1,
    explanation: 'Server Components render on the server, streaming lightweight JSON-like JSX representations to the browser without bundling imported server dependencies.'
  },
  {
    id: 2,
    question: 'What mechanism provides instant cache invalidation across distributed edge nodes during write operations?',
    options: [
      'Manual polling every 50 milliseconds',
      'Targeted on-demand tag revalidation via revalidateTag() webhooks',
      'Hard rebooting the edge worker cluster',
      'Disabling all browser session cookies'
    ],
    correct: 1,
    explanation: 'revalidateTag() allows targeted cache purging tied to specific database entities across all global CDN partitions.'
  }
];

const INITIAL_MOCK_QUESTIONS = [
  {
    id: 'q1',
    question: 'Which React Hook should be used to optimize rendering performance by memoizing a computed value across renders?',
    options: ['useCallback', 'useMemo', 'useEffect', 'useRef'],
    correct: 1,
    category: 'React',
    explanation: 'useMemo returns a memoized value that only recalculates when one of its dependencies changes, avoiding expensive computations on every render.'
  },
  {
    id: 'q2',
    question: 'In React 19, what is the primary architectural purpose of Server Actions?',
    options: [
      'To run client-side computational algorithms in a separate browser Web Worker',
      'To allow seamless RPC invocation of server-side database operations directly from client UI events',
      'To compile dynamic components into static HTML chunks during runtime',
      'To enable state synchronization across multiple browser tabs'
    ],
    correct: 1,
    category: 'React',
    explanation: 'Server Actions compile client action triggers into server RPC requests, allowing developers to execute secure server-side logic and DB transactions directly from forms or events.'
  },
  {
    id: 'q3',
    question: 'Which Python mechanism allows parallel CPU-bound execution by completely bypassing the limitations of the Global Interpreter Lock (GIL)?',
    options: ['The standard threading module', 'The asyncio event loop', 'The multiprocessing module', 'Generator yielding routines'],
    correct: 2,
    category: 'Python',
    explanation: 'The multiprocessing module spawns separate OS processes instead of threads, meaning each process receives its own independent GIL and virtual runtime core.'
  },
  {
    id: 'q4',
    question: 'Which system design architecture pattern is best suited for decoupled async communications between multiple consumer microservices?',
    options: ['Singleton Registry Pattern', 'Publisher-Subscriber (Pub/Sub) Brokerage', 'Model-View-Controller isolation', 'Abstract Factory Dependency Injection'],
    correct: 1,
    category: 'System Design',
    explanation: 'The Pub/Sub pattern decouples microservices by routing messages through a central event broker (e.g. Apache Kafka or RabbitMQ) rather than point-to-point connections.'
  },
  {
    id: 'q5',
    question: 'How do you optimize a large-scale Python list comprehension that encounters Out-of-Memory (OOM) errors?',
    options: [
      'Convert it into a generator expression by changing square brackets [] to parentheses ()',
      'Define the collection with the global scope keyword inside the execution block',
      'Encapsulate the compilation script in a multi-core lambda statement',
      'Wrap it inside a standard recursive try-except block'
    ],
    correct: 0,
    category: 'Python',
    explanation: 'Generator expressions iterate lazily and yield elements on-demand (O(1) auxiliary space), preventing the runtime from allocating the entire memory block at once.'
  }
];

const INITIAL_DOUBTS = [
  {
    id: 'd1',
    title: 'How does React 19 handle action states during form submissions?',
    category: 'React',
    content: 'I am reading about the new useActionState hook. Does it automatically track pending state and resolve transition updates without requiring manually tracking isLoading state?',
    author: 'Mohammed Ezaz Ali',
    handle: '@ezaz_dev',
    time: '2 hours ago',
    upvotes: 8,
    replies: [
      {
        id: 'r1',
        author: 'Prof. Sarah Jenkins',
        handle: '@prof_jenkins',
        time: '1 hour ago',
        text: 'Yes! useActionState (formerly useFormState) manages the state of an Action. It returns [state, formAction, isPending], where isPending will be true automatically while the action is executing.'
      }
    ]
  },
  {
    id: 'd2',
    title: 'What is the performance overhead of using GIL-free Python forks?',
    category: 'Python',
    content: 'Has anyone tested the experimental PEP 703 free-threaded builds of Python 3.13? Are there major gotchas in standard thread-safety with libraries like NumPy or PyTorch?',
    author: 'Priya Sharma',
    handle: '@priya_sharma',
    time: '4 hours ago',
    upvotes: 14,
    replies: []
  },
  {
    id: 'd3',
    title: 'Designing a rate-limiter: Token Bucket vs. Leaky Bucket',
    category: 'System Design',
    content: 'For an API gateway that needs to handle bursty traffic without dropping requests immediately, which algorithm is preferred and what is the optimal caching layer design?',
    author: 'Rithwik Dokku',
    handle: '@rithwik_core',
    time: '1 day ago',
    upvotes: 21,
    replies: []
  }
];

const INITIAL_CHECKLIST = [
  { id: 't1', text: 'Complete Module 1: Server Components', completed: true },
  { id: 't2', text: 'Solve 1 Mock Test Arena assessment', completed: false },
  { id: 't3', text: 'Write 2 Notes on cache tags or tensors', completed: false },
  { id: 't4', text: 'Review Python Multiprocessing guidelines', completed: false }
];

const INITIAL_TEST_HISTORY = [
  { id: 'th1', studentName: 'Rithwik Dokku', score: 80, passed: true, timeTaken: '06:12', date: '2026-08-19' },
  { id: 'th2', studentName: 'Priya Sharma', score: 100, passed: true, timeTaken: '08:45', date: '2026-08-19' },
  { id: 'th3', studentName: 'Mohammed Ezaz Ali', score: 60, passed: false, timeTaken: '09:59', date: '2026-08-18' }
];

export default function App() {
  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('nexus_role_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Login View States
  const [loginRole, setLoginRole] = useState('student');
  const [authMode, setAuthMode] = useState('login');
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '', department: 'Computer Science & Engineering' });

  // Navigation Tabs
  const [activeTab, setActiveTab] = useState('catalog');

  // Student Classroom States
  const [selectedCourseId, setSelectedCourseId] = useState('c1');
  const [activeLessonId, setActiveLessonId] = useState('l1');
  const [activeConsoleTab, setActiveConsoleTab] = useState('editor');

  // Courses & Data State
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('nexus_courses');
    return saved ? JSON.parse(saved) : INITIAL_COURSES;
  });

  const [enrolledIds, setEnrolledIds] = useState(() => {
    const saved = localStorage.getItem('nexus_enrolled');
    return saved ? JSON.parse(saved) : ['c1', 'c2'];
  });

  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    const saved = localStorage.getItem('nexus_bookmarked');
    return saved ? JSON.parse(saved) : ['c3'];
  });

  // Faculty Pending Lab Submissions
  const [submissions, setSubmissions] = useState([
    { id: 'sub_1', studentName: 'Rithwik Dokku', course: 'Next.js 14 Production Patterns', task: 'Redis Distributed Lock Implementation', submittedTime: '2 hours ago', status: 'Pending Review', score: null },
    { id: 'sub_2', studentName: 'Priya Sharma', course: 'Deep Neural Architectures', task: 'Custom PyTorch Attention Kernel', submittedTime: '5 hours ago', status: 'Graded', score: '98/100' }
  ]);

  // Video State
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Sandbox Code Editor
  const [codeSnippet, setCodeSnippet] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('');
  const [isExecutingCode, setIsExecutingCode] = useState(false);

  // Notes State
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('nexus_notes');
    return saved ? JSON.parse(saved) : {
      c1: '• Module 1: Revalidate tags directly inside Server Actions.\n• Redis locks eliminate concurrent mutation deadlocks.'
    };
  });

  // Classroom Discussion comments
  const [comments, setComments] = useState([
    { id: 1, author: 'Rithwik D.', handle: '@rithwik_core', time: '2h ago', text: 'Does edge caching work with dynamic JWT cookies?', upvotes: 12 },
    { id: 2, author: 'Pooja R.', handle: '@pooja_ai', time: '5h ago', text: 'The token architecture explanation in Module 1 is crystal clear!', upvotes: 27 }
  ]);
  const [newComment, setNewComment] = useState('');

  // Modals
  const [showCertificate, setShowCertificate] = useState(false);
  const [checkoutCourse, setCheckoutCourse] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showCreateCourseModal, setShowCreateCourseModal] = useState(false);

  // Faculty New Course Creation Form
  const [newCourseForm, setNewCourseForm] = useState({
    title: '',
    category: 'Web Dev',
    level: 'Beginner',
    priceType: 'Paid',
    priceINR: 1999,
    description: '',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    lectureTitle: '1. Architecture Setup & Initializing Module',
    starterCode: '// Instructor starter code\nconsole.log("System Initialized");'
  });

  // Filters & Search
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Faculty Revenue Tracking
  const [revenueINR, setRevenueINR] = useState(() => {
    const saved = localStorage.getItem('nexus_faculty_revenue');
    return saved ? Number(saved) : 384000;
  });

  // 1. Mock Test Arena States
  const [testQuestions, setTestQuestions] = useState(() => {
    const saved = localStorage.getItem('nexus_test_questions');
    return saved ? JSON.parse(saved) : INITIAL_MOCK_QUESTIONS;
  });

  const [testHistory, setTestHistory] = useState(() => {
    const saved = localStorage.getItem('nexus_test_history');
    return saved ? JSON.parse(saved) : INITIAL_TEST_HISTORY;
  });

  const [testStarted, setTestStarted] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [visitedQuestions, setVisitedQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);

  // 2. Doubts & Community Forum States
  const [doubts, setDoubts] = useState(() => {
    const saved = localStorage.getItem('nexus_doubts');
    return saved ? JSON.parse(saved) : INITIAL_DOUBTS;
  });
  const [selectedForumCategory, setSelectedForumCategory] = useState('All');
  const [forumSearch, setForumSearch] = useState('');
  const [newQueryTitle, setNewQueryTitle] = useState('');
  const [newQueryCategory, setNewQueryCategory] = useState('React');
  const [newQueryContent, setNewQueryContent] = useState('');
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [newReplyText, setNewReplyText] = useState('');

  // 3. Daily Checklist States
  const [checklist, setChecklist] = useState(() => {
    const saved = localStorage.getItem('nexus_checklist');
    return saved ? JSON.parse(saved) : INITIAL_CHECKLIST;
  });
  const [newChecklistItem, setNewChecklistItem] = useState('');

  // 4. Faculty Question Builder Input States
  const [questionText, setQuestionText] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctOpt, setCorrectOpt] = useState(0);
  const [questionCategory, setQuestionCategory] = useState('React');
  const [questionExplanation, setQuestionExplanation] = useState('');

  // Persistence Effects
  useEffect(() => {
    if (currentUser) localStorage.setItem('nexus_role_user', JSON.stringify(currentUser));
    else localStorage.removeItem('nexus_role_user');
  }, [currentUser]);

  useEffect(() => { localStorage.setItem('nexus_enrolled', JSON.stringify(enrolledIds)); }, [enrolledIds]);
  useEffect(() => { localStorage.setItem('nexus_bookmarked', JSON.stringify(bookmarkedIds)); }, [bookmarkedIds]);
  useEffect(() => { localStorage.setItem('nexus_courses', JSON.stringify(courses)); }, [courses]);
  useEffect(() => { localStorage.setItem('nexus_notes', JSON.stringify(notes)); }, [notes]);
  useEffect(() => { localStorage.setItem('nexus_faculty_revenue', String(revenueINR)); }, [revenueINR]);
  useEffect(() => { localStorage.setItem('nexus_test_questions', JSON.stringify(testQuestions)); }, [testQuestions]);
  useEffect(() => { localStorage.setItem('nexus_test_history', JSON.stringify(testHistory)); }, [testHistory]);
  useEffect(() => { localStorage.setItem('nexus_doubts', JSON.stringify(doubts)); }, [doubts]);
  useEffect(() => { localStorage.setItem('nexus_checklist', JSON.stringify(checklist)); }, [checklist]);

  useEffect(() => {
    if (currentUser) {
      if (currentUser.role === 'faculty') {
        if (!['faculty_dashboard', 'faculty_courses', 'faculty_grading', 'about'].includes(activeTab)) {
          setActiveTab('faculty_dashboard');
        }
      } else {
        if (!['catalog', 'player', 'arena', 'matrix', 'forum', 'about'].includes(activeTab)) {
          setActiveTab('catalog');
        }
      }
    }
  }, [currentUser]);

  // Assessment Timer
  useEffect(() => {
    if (!testStarted || testSubmitted) return;
    if (timeLeft <= 0) {
      handleTestSubmit(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [testStarted, testSubmitted, timeLeft]);

  useEffect(() => {
    if (testStarted && !testSubmitted && timeLeft === 0) {
      handleTestSubmit(true);
    }
  }, [timeLeft, testStarted, testSubmitted]);

  const currentCourse = useMemo(() => {
    return courses.find(c => c.id === selectedCourseId) || courses[0];
  }, [courses, selectedCourseId]);

  const currentLesson = useMemo(() => {
    for (const sec of currentCourse.sections || []) {
      const match = sec.lessons.find(l => l.id === activeLessonId);
      if (match) return match;
    }
    return currentCourse.sections?.[0]?.lessons?.[0] || {
      title: 'Introductory Session',
      duration: '00:15',
      videoUrl: '',
      starterCode: '// Ready for code execution'
    };
  }, [currentCourse, activeLessonId]);

  useEffect(() => {
    setCodeSnippet(currentLesson.starterCode || '// Interactive Sandbox Ready\nconsole.log("Ready");');
    setTerminalOutput('');
    setIsPlaying(false);
  }, [currentLesson]);

  const getCourseProgress = (course) => {
    let total = 0;
    let done = 0;
    course.sections?.forEach(s => {
      s.lessons?.forEach(l => {
        total++;
        if (l.completed) done++;
      });
    });
    return total === 0 ? 0 : Math.round((done / total) * 100);
  };

  const toggleLesson = (courseId, lessonId) => {
    setCourses(prev => prev.map(c => {
      if (c.id !== courseId) return c;
      return {
        ...c,
        sections: c.sections.map(s => ({
          ...s,
          lessons: s.lessons.map(l => l.id === lessonId ? { ...l, completed: !l.completed } : l)
        }))
      };
    }));
  };

  // Auth Handlers
  const handleQuickDemoLogin = (role) => {
    if (role === 'student') {
      const studentUser = {
        name: 'Mohammed Ezaz Ali',
        handle: '@ezaz_dev',
        email: 'ezaz@nexus.io',
        role: 'student',
        roleDisplay: 'Data Science & Full-Stack Scholar',
        streak: 7,
        xp: 1840,
        dailyMinutesTarget: 60,
        dailyMinutesCompleted: 45
      };
      setCurrentUser(studentUser);
      setActiveTab('catalog');
    } else {
      const facultyUser = {
        name: 'Prof. Sarah Jenkins',
        handle: '@prof_jenkins',
        email: 'jenkins@nexus.edu',
        role: 'faculty',
        roleDisplay: 'Senior Faculty & Systems Architect',
        department: 'Department of Computer Science',
        activeEnrolledStudents: 6120,
        publishedCoursesCount: courses.length
      };
      setCurrentUser(facultyUser);
      setActiveTab('faculty_dashboard');
    }
  };

  const handleCustomAuth = (e) => {
    e.preventDefault();
    if (loginRole === 'student') {
      setCurrentUser({
        name: authForm.name || 'Mohammed Ezaz Ali',
        handle: `@${(authForm.name || 'student').toLowerCase().replace(/\s+/g, '_')}`,
        email: authForm.email || 'student@nexus.io',
        role: 'student',
        roleDisplay: 'Engineering Student',
        streak: 1,
        xp: 120,
        dailyMinutesTarget: 65,
        dailyMinutesCompleted: 15
      });
      setActiveTab('catalog');
    } else {
      setCurrentUser({
        name: authForm.name || 'Prof. Sarah Jenkins',
        handle: `@${(authForm.name || 'faculty').toLowerCase().replace(/\s+/g, '_')}`,
        email: authForm.email || 'faculty@nexus.edu',
        role: 'faculty',
        roleDisplay: 'Faculty Lead',
        department: authForm.department,
        activeEnrolledStudents: 0,
        publishedCoursesCount: courses.length
      });
      setActiveTab('faculty_dashboard');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('nexus_role_user');
  };

  // Interactive Sandbox Code Runner
  const handleRunCode = () => {
    setIsExecutingCode(true);
    setTerminalOutput('Executing sandbox container...');
    setTimeout(() => {
      let logs = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.map(a => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' '));
      };
      try {
        const result = new Function(codeSnippet)();
        if (result !== undefined) logs.push(`[Return Value]: ${result}`);
        setTerminalOutput(logs.length > 0 ? logs.join('\n') : '[Success] Code executed with zero warnings.');
      } catch (err) {
        setTerminalOutput(`[Execution Error]: ${err.message}`);
      } finally {
        console.log = originalLog;
        setIsExecutingCode(false);
      }
    }, 350);
  };

  // Faculty course creator
  const handleFacultyCreateCourse = (e) => {
    e.preventDefault();
    const created = {
      id: `c_${Date.now()}`,
      title: newCourseForm.title || 'Untitled Faculty Course',
      category: newCourseForm.category,
      level: newCourseForm.level,
      priceType: newCourseForm.priceType,
      priceINR: newCourseForm.priceType === 'Free' ? 0 : Number(newCourseForm.priceINR),
      rating: 5.0,
      reviewsCount: 0,
      duration: '12h 00m',
      lessonsCount: 1,
      instructorName: currentUser.name,
      instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      thumbnail: newCourseForm.thumbnail,
      description: newCourseForm.description || 'Hands-on architectural curriculum engineered for developers.',
      sections: [
        {
          id: 's1',
          title: 'Module 1: Architecture & Foundation',
          lessons: [
            {
              id: `l_${Date.now()}`,
              title: newCourseForm.lectureTitle,
              duration: '00:15',
              videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
              completed: false,
              starterCode: newCourseForm.starterCode
            }
          ]
        }
      ]
    };
    setCourses([created, ...courses]);
    setShowCreateCourseModal(false);
    alert(`Course "${created.title}" is now published to the student catalog.`);
  };

  const handleGradeSubmission = (subId, scoreAwarded) => {
    setSubmissions(prev => prev.map(s => s.id === subId ? { ...s, status: 'Graded', score: scoreAwarded } : s));
  };

  const filteredCourses = useMemo(() => {
    return courses.filter(c => {
      const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase()) ||
        c.instructorName.toLowerCase().includes(search.toLowerCase());
      const matchesCat = selectedCat === 'All' || c.category === selectedCat;
      return matchesSearch && matchesCat;
    });
  }, [courses, search, selectedCat]);

  // Mock Assessment Handlers
  const handleStartTest = () => {
    setTestStarted(true);
    setTestSubmitted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setFlaggedQuestions({});
    setVisitedQuestions({ 0: true });
    setTimeLeft(600);
  };

  const handleTestSubmit = (isTimeout = false) => {
    setTestSubmitted(true);
    let correctCount = 0;
    testQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        correctCount++;
      }
    });

    const scorePercentage = Math.round((correctCount / testQuestions.length) * 100);
    const passed = scorePercentage >= 70;
    const elapsedSeconds = 600 - timeLeft;
    const timeTakenStr = `${Math.floor(elapsedSeconds / 60).toString().padStart(2, '0')}:${(elapsedSeconds % 60).toString().padStart(2, '0')}`;

    const newReport = {
      id: `th_${Date.now()}`,
      studentName: currentUser?.name || 'Mohammed Ezaz Ali',
      score: scorePercentage,
      passed: passed,
      timeTaken: timeTakenStr,
      date: new Date().toISOString().split('T')[0]
    };

    setTestHistory(prev => [newReport, ...prev]);

    if (isTimeout) {
      alert("Session expired! Your responses have been submitted automatically.");
    }
  };

  const handleSelectOption = (optIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optIndex
    }));
  };

  const handleFlagQuestion = () => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQuestionIndex]: !prev[currentQuestionIndex]
    }));
  };

  const handleNavigateQuestion = (idx) => {
    setCurrentQuestionIndex(idx);
    setVisitedQuestions(prev => ({
      ...prev,
      [idx]: true
    }));
  };

  // Community Forum Handlers
  const handleAddForumPost = (e) => {
    e.preventDefault();
    if (!newQueryTitle.trim() || !newQueryContent.trim()) {
      alert("Please fill in both the query title and detail description.");
      return;
    }
    const newPost = {
      id: `d_${Date.now()}`,
      title: newQueryTitle,
      category: newQueryCategory,
      content: newQueryContent,
      author: currentUser?.name || 'Anonymous Student',
      handle: currentUser?.handle || '@anonymous',
      time: 'Just now',
      upvotes: 0,
      replies: []
    };
    setDoubts([newPost, ...doubts]);
    setNewQueryTitle('');
    setNewQueryContent('');
    alert("Your discussion thread has been posted successfully.");
  };

  const handleUpvoteForumPost = (postId) => {
    setDoubts(prev => prev.map(post => {
      if (post.id === postId) {
        return { ...post, upvotes: post.upvotes + 1 };
      }
      return post;
    }));
  };

  const handleAddForumReply = (e, postId) => {
    e.preventDefault();
    if (!newReplyText.trim()) return;

    setDoubts(prev => prev.map(post => {
      if (post.id === postId) {
        const newReply = {
          id: `r_${Date.now()}`,
          author: currentUser?.name || 'Anonymous User',
          handle: currentUser?.handle || '@anonymous',
          time: 'Just now',
          text: newReplyText
        };
        return {
          ...post,
          replies: [...post.replies, newReply]
        };
      }
      return post;
    }));
    setNewReplyText('');
  };

  const filteredDoubts = useMemo(() => {
    return doubts.filter(post => {
      const matchesCategory = selectedForumCategory === 'All' || post.category === selectedForumCategory;
      const matchesSearch = post.title.toLowerCase().includes(forumSearch.toLowerCase()) ||
        post.content.toLowerCase().includes(forumSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [doubts, selectedForumCategory, forumSearch]);

  // Daily Checklist Handlers
  const handleToggleChecklist = (id) => {
    setChecklist(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  };

  const handleAddChecklistItem = (e) => {
    e.preventDefault();
    if (!newChecklistItem.trim()) return;
    const newItem = {
      id: `t_${Date.now()}`,
      text: newChecklistItem,
      completed: false
    };
    setChecklist([...checklist, newItem]);
    setNewChecklistItem('');
  };

  const handleDeleteChecklistItem = (id) => {
    setChecklist(prev => prev.filter(item => item.id !== id));
  };

  const checklistProgress = useMemo(() => {
    if (checklist.length === 0) return 0;
    const completed = checklist.filter(t => t.completed).length;
    return Math.round((completed / checklist.length) * 100);
  }, [checklist]);

  // Download Utilities
  const handleDownloadCheatsheet = (type) => {
    let filename = '';
    let content = '';

    if (type === 'nextjs') {
      filename = 'nextjs14_production_cheatsheet.txt';
      content = `NEXUSLEARN LABS: DISTRIBUTED SYSTEMS & NEXT.JS 14 PRODUCTION PATTERNS CHEATSHEET
================================================================================
1. CACHE BOUNDARY ISOLATION
   Use revalidateTag("tag") inside Server Actions to purge CDNs globally.
   Headers: Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400

2. RATE LIMITING (TOKEN BUCKET)
   Use Redis Eval scripting to evaluate lock boundaries:
   import redis from "@/lib/redis";
   async function rateLimit(ip) {
     const [tokens] = await redis.eval(SCRIPT, 1, ip, LIMIT, WINDOW);
     return tokens >= 0;
   }

3. SERVER COMPONENTS vs. CLIENT COMPONENTS
   - Keep DB fetches and secrets strictly inside 'use server' subtrees.
   - Ship 0 KB JS to client bundle for static branches.

================================================================================
Generated for: ${currentUser?.name || 'Nexus Student'} • Secure SHA-256 Hash Verified
`;
    } else {
      filename = 'pytorch_tensor_acceleration_cheatsheet.txt';
      content = `NEXUSLEARN LABS: DEEP NEURAL ARCHITECTURES & PYTORCH ACCELERATION
================================================================
1. TENSOR OPERATIONS & BACKPROPAGATION
   import torch
   x = torch.tensor([[1., 2.], [3., 4.]], requires_grad=True)
   y = x.pow(2).sum()
   y.backward()
   print(x.grad) # yields [[2., 4.], [6., 8.]]

2. MULTIPROCESSING CONCURRENCY (BYPASS GIL)
   from multiprocessing import Process, Queue
   def worker(q):
       # Process operations inside clean process threads
       q.put("Data backpropagated")

3. CUDA HARWARE COMPUTATION
   device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
   model.to(device)

================================================================================
Generated for: ${currentUser?.name || 'Nexus Student'} • Secure SHA-256 Hash Verified
`;
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadStarterRepo = () => {
    const filename = 'nexus_starter_project_guide.txt';
    const content = `NEXUSLEARN SYSTEM STARTER REPOSITORY BOILERPLATE
================================================
Folder structure:
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── index.css
└── README.md

package.json configuration parameters:
{
  "name": "nexus-lab-starter",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}

================================================================================
Vite developer setup: Run 'npm install' followed by 'npm run dev' to boot the sandbox server.
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Faculty Question Builder Handlers
  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!questionText.trim() || !optA.trim() || !optB.trim() || !optC.trim() || !optD.trim() || !questionExplanation.trim()) {
      alert("Please fill out all Question Builder input options.");
      return;
    }
    const newQuestion = {
      id: `q_${Date.now()}`,
      question: questionText,
      options: [optA, optB, optC, optD],
      correct: Number(correctOpt),
      category: questionCategory,
      explanation: questionExplanation
    };
    setTestQuestions(prev => [newQuestion, ...prev]);
    setQuestionText('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
    setCorrectOpt(0);
    setQuestionExplanation('');
    alert("New mock question appended successfully to the Exam Arena pool.");
  };

  const handleDeleteQuestion = (id) => {
    if (testQuestions.length <= 1) {
      alert("Action cancelled! The assessment pool requires at least 1 mock question.");
      return;
    }
    if (window.confirm("Verify: Are you sure you want to delete this question?")) {
      setTestQuestions(prev => prev.filter(q => q.id !== id));
    }
  };

  // Faculty Analytics Metrics Computation
  const testMetrics = useMemo(() => {
    if (testHistory.length === 0) return { avgScore: 0, passRate: 0, totalTests: 0, passedCount: 0, failedCount: 0 };
    const totalTests = testHistory.length;
    const totalScore = testHistory.reduce((sum, item) => sum + item.score, 0);
    const passedCount = testHistory.filter(item => item.passed).length;
    const failedCount = totalTests - passedCount;
    return {
      avgScore: Math.round(totalScore / totalTests),
      passRate: Math.round((passedCount / totalTests) * 100),
      totalTests,
      passedCount,
      failedCount
    };
  }, [testHistory]);

  // =========================================================================
  // AUTHENTICATION SCREEN (WHEN USER IS LOGGED OUT)
  // =========================================================================
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#090D14] text-zinc-200 font-sans flex items-center justify-center p-4 selection:bg-indigo-500/30 selection:text-indigo-200">
        <div className="max-w-md w-full bg-[#0F1522] border border-[#1E2638] rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="text-center space-y-2">
            <div className="h-12 w-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mx-auto shadow-lg shadow-indigo-600/20">
              <Terminal className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">NexusLearn Portal</h1>
            <p className="text-xs text-zinc-400">Select your role to access your dedicated workspace.</p>
          </div>

          <div className="grid grid-cols-2 gap-2 p-1 bg-[#07090C] border border-[#1E2638] rounded-xl">
            <button
              onClick={() => setLoginRole('student')}
              className={`py-2 text-xs font-semibold rounded-lg transition flex items-center justify-center gap-1.5 ${loginRole === 'student' ? 'bg-indigo-600 text-white shadow' : 'text-zinc-400 hover:text-zinc-200'
                }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Student Login</span>
            </button>
            <button
              onClick={() => setLoginRole('faculty')}
              className={`py-2 text-xs font-semibold rounded-lg transition flex items-center justify-center gap-1.5 ${loginRole === 'faculty' ? 'bg-cyan-600 text-white shadow' : 'text-zinc-400 hover:text-zinc-200'
                }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Faculty Login</span>
            </button>
          </div>

          <div className="p-3 bg-[#07090C] border border-[#1E2638] rounded-xl space-y-2">
            <span className="text-[10px] font-mono uppercase text-zinc-400 block font-semibold">1-Click Fast Demo Login</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('student')}
                className="p-2.5 rounded-lg bg-[#161F33] hover:bg-[#1E2B47] border border-[#2B3B60] text-xs font-mono text-indigo-300 transition text-left"
              >
                <p className="font-bold flex items-center gap-1">Student Demo <ChevronRight className="w-3.5 h-3.5" /></p>
                <p className="text-[10px] text-zinc-500">Mohammed Ezaz Ali</p>
              </button>

              <button
                type="button"
                onClick={() => handleQuickDemoLogin('faculty')}
                className="p-2.5 rounded-lg bg-[#161F33] hover:bg-[#1E2B47] border border-[#2B3B60] text-xs font-mono text-cyan-300 transition text-left"
              >
                <p className="font-bold flex items-center gap-1">Faculty Demo <ChevronRight className="w-3.5 h-3.5" /></p>
                <p className="text-[10px] text-zinc-500">Prof. Sarah Jenkins</p>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-[#1E2638]" />
            <span className="text-[10px] font-mono text-zinc-600 uppercase">or enter credentials</span>
            <div className="h-px flex-1 bg-[#1E2638]" />
          </div>

          <form onSubmit={handleCustomAuth} className="space-y-3 text-xs">
            {authMode === 'signup' && (
              <div>
                <label className="text-[10px] font-mono text-zinc-400 block mb-1 uppercase">Full Name</label>
                <input
                  type="text"
                  required
                  value={authForm.name}
                  onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                  placeholder={loginRole === 'student' ? 'Mohammed Ezaz Ali' : 'Prof. Sarah Jenkins'}
                  className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>
            )}

            <div>
              <label className="text-[10px] font-mono text-zinc-400 block mb-1 uppercase">Institutional Email</label>
              <input
                type="email"
                required
                value={authForm.email}
                onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                placeholder={loginRole === 'student' ? 'ezaz@cmrcet.ac.in' : 'sarah@cmrcet.ac.in'}
                className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono text-zinc-400 block mb-1 uppercase">Password</label>
              <input
                type="password"
                required
                value={authForm.password}
                onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                placeholder="••••••••••••"
                className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2.5 rounded-xl text-xs font-semibold text-white transition shadow-lg ${loginRole === 'student'
                ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20'
                : 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/20'
                }`}
            >
              {authMode === 'login' ? `Authenticate as ${loginRole === 'student' ? 'Student' : 'Faculty'}` : `Create ${loginRole === 'student' ? 'Student' : 'Faculty'} Account`}
            </button>
          </form>

          <div className="text-center text-[11px] text-zinc-400">
            {authMode === 'login' ? (
              <span>Need a new account? <button onClick={() => setAuthMode('signup')} className="text-indigo-400 hover:underline">Sign up</button></span>
            ) : (
              <span>Already registered? <button onClick={() => setAuthMode('login')} className="text-indigo-400 hover:underline">Sign in</button></span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // LOGGED-IN PORTAL (STRICTLY PARTITIONED ROLE VIEWS)
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#090D14] text-zinc-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col justify-between">

      {/* 1. TOP DYNAMIC NAVBAR */}
      <div>
        <header className="sticky top-0 z-40 border-b border-[#1E2638] bg-[#090D14]/90 backdrop-blur-xl animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-0 md:h-14 flex flex-col md:flex-row items-center justify-between gap-3">

            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 w-full md:w-auto">
              <div
                onClick={() => setActiveTab(currentUser.role === 'faculty' ? 'faculty_dashboard' : 'catalog')}
                className="flex items-center gap-2.5 cursor-pointer group self-start md:self-auto"
              >
                <div className={`h-7 w-7 rounded-lg bg-[#0F1522] border flex items-center justify-center transition shadow-sm ${currentUser.role === 'faculty' ? 'border-cyan-500/50 text-cyan-400' : 'border-indigo-500/50 text-indigo-400'
                  }`}>
                  <Terminal className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm tracking-tight text-zinc-100">Nexus</span>
                  <span className="text-zinc-600 text-xs">/</span>
                  <span className={`text-xs font-mono font-semibold ${currentUser.role === 'faculty' ? 'text-cyan-400' : 'text-indigo-400'}`}>
                    {currentUser.role === 'faculty' ? 'faculty-portal' : 'student-workspace'}
                  </span>
                </div>
              </div>

              {/* STRICTLY SEPARATED NAVIGATION TABS */}
              <nav className="flex flex-wrap items-center gap-1.5 pl-0 md:pl-3 border-t md:border-t-0 md:border-l border-[#1E2638] pt-2 md:pt-0 w-full md:w-auto justify-start">
                {currentUser.role === 'faculty' ? (
                  <>
                    <button
                      onClick={() => setActiveTab('faculty_dashboard')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === 'faculty_dashboard'
                        ? 'text-zinc-100 bg-[#161F33] border border-[#2B3B60]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0F1522]'
                        }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <LayoutDashboard className="w-3.5 h-3.5 text-cyan-400" />
                        Executive Dashboard
                      </span>
                    </button>

                    <button
                      onClick={() => setActiveTab('faculty_courses')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === 'faculty_courses'
                        ? 'text-zinc-100 bg-[#161F33] border border-[#2B3B60]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0F1522]'
                        }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                        Course Management
                      </span>
                    </button>

                    <button
                      onClick={() => setActiveTab('faculty_grading')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === 'faculty_grading'
                        ? 'text-zinc-100 bg-[#161F33] border border-[#2B3B60]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0F1522]'
                        }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Grading & Submissions ({submissions.filter(s => s.status === 'Pending Review').length})
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setActiveTab('catalog')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === 'catalog'
                        ? 'text-zinc-100 bg-[#161F33] border border-[#2B3B60]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0F1522]'
                        }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-indigo-400" />
                        Explore Catalog
                      </span>
                    </button>

                    <button
                      onClick={() => setActiveTab('player')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === 'player'
                        ? 'text-zinc-100 bg-[#161F33] border border-[#2B3B60]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0F1522]'
                        }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                        Classroom Studio
                      </span>
                    </button>

                    <button
                      onClick={() => setActiveTab('arena')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === 'arena'
                        ? 'text-zinc-100 bg-[#161F33] border border-[#2B3B60]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0F1522]'
                        }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 animate-pulse text-rose-400" />
                        Mock Test Arena
                      </span>
                    </button>

                    <button
                      onClick={() => setActiveTab('matrix')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === 'matrix'
                        ? 'text-zinc-100 bg-[#161F33] border border-[#2B3B60]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0F1522]'
                        }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                        Study Matrix & Docs
                      </span>
                    </button>

                    <button
                      onClick={() => setActiveTab('forum')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === 'forum'
                        ? 'text-zinc-100 bg-[#161F33] border border-[#2B3B60]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0F1522]'
                        }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                        Doubts Forum
                      </span>
                    </button>
                  </>
                )}

                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition ${activeTab === 'about'
                    ? 'text-zinc-100 bg-[#161F33] border border-[#2B3B60]'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0F1522]'
                    }`}
                >
                  About
                </button>
              </nav>
            </div>

            {/* Profile Info & Logout */}
            <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto mt-2 md:mt-0 border-t md:border-t-0 border-[#1E2638] pt-2 md:pt-0">
              {currentUser.role === 'student' && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F1522] border border-[#1E2638] text-[11px] text-zinc-300 font-mono">
                  <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span>{currentUser.streak}d streak</span>
                </div>
              )}

              <div className="flex items-center gap-2 pl-2">
                <div className={`h-7 w-7 rounded-full text-white font-medium text-[11px] flex items-center justify-center border border-zinc-700 ${currentUser.role === 'faculty'
                  ? 'bg-gradient-to-tr from-cyan-500 to-blue-600'
                  : 'bg-gradient-to-tr from-indigo-500 to-cyan-500'
                  }`}>
                  {currentUser.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-zinc-200 leading-none">{currentUser.name}</p>
                  <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{currentUser.roleDisplay}</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                title="Log Out"
                className="p-1.5 rounded-lg bg-[#0F1522] hover:bg-rose-950/40 text-zinc-400 hover:text-rose-400 border border-[#1E2638] hover:border-rose-800 transition"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* 2. MAIN VIEW CONTAINER */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

          {/* ========================================================================= */}
          {/* SECTION A: FACULTY VIEWS (ONLY FOR FACULTY ROLE)                          */}
          {/* ========================================================================= */}

          {currentUser.role === 'faculty' && activeTab === 'faculty_dashboard' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="border-b border-[#1E2638] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                    Faculty Command Console
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mt-1">
                    Academic Operations & Revenue Metrics
                  </h1>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">
                    Logged in as <strong className="text-zinc-200">{currentUser.name}</strong> • {currentUser.department}
                  </p>
                </div>

                <button
                  onClick={() => setShowCreateCourseModal(true)}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition shadow-lg shadow-cyan-600/20"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Create New Lab Course</span>
                </button>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-1 relative overflow-hidden group">
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-emerald-500 shadow-[0_0_10px_#10B981]"></div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                    <IndianRupee className="w-3 h-3 text-emerald-400" />
                    Gross Course Revenue
                  </span>
                  <p className="text-2xl font-bold font-mono text-emerald-400">₹{revenueINR.toLocaleString('en-IN')}</p>
                  <p className="text-[10px] text-zinc-500">Live dynamic calculations (INR)</p>
                </div>

                <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-1 relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-500 shadow-[0_0_10px_#06B6D4]"></div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    Enrolled Students
                  </span>
                  <p className="text-2xl font-bold font-mono text-zinc-100">{currentUser.activeEnrolledStudents.toLocaleString('en-IN')}</p>
                  <p className="text-[10px] text-cyan-400">Across {courses.length} active courses</p>
                </div>

                <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-1 relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-500 shadow-[0_0_10px_#F59E0B]"></div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    Pending Submissions
                  </span>
                  <p className="text-2xl font-bold font-mono text-amber-400">{submissions.filter(s => s.status === 'Pending Review').length}</p>
                  <p className="text-[10px] text-zinc-500">Requires code review</p>
                </div>

                <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-1 relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-indigo-500 shadow-[0_0_10px_#6366F1]"></div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-indigo-400" />
                    Arena Pass Rate
                  </span>
                  <p className="text-2xl font-bold font-mono text-indigo-400">{testMetrics.passRate}% Pass</p>
                  <p className="text-[10px] text-zinc-500">Average score: {testMetrics.avgScore}%</p>
                </div>
              </div>

              {/* Analytics Section & Question Builder */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1E2638] pb-3 gap-2">
                      <div>
                        <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
                          <BarChart3 className="w-4 h-4 text-cyan-400" />
                          Student Mock Test Ledger
                        </h3>
                        <p className="text-xs text-zinc-400">Verifying live candidate screening data from the Assessment Arena.</p>
                      </div>
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded">
                        Total Attempts: {testMetrics.totalTests}
                      </span>
                    </div>

                    <div className="bg-[#07090C] border border-[#1E2638] p-4 rounded-xl space-y-3">
                      <span className="text-[10px] font-mono uppercase text-zinc-400 block font-semibold">Test Score Distribution</span>
                      <div className="space-y-2 text-xs">
                        <div>
                          <div className="flex justify-between text-[11px] mb-1 font-mono">
                            <span className="text-emerald-400">Excellence (90-100%)</span>
                            <span>{testHistory.filter(h => h.score >= 90).length} students</span>
                          </div>
                          <div className="w-full bg-[#161F33] h-2 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-500 rounded-full"
                              style={{ width: `${testHistory.length > 0 ? (testHistory.filter(h => h.score >= 90).length / testHistory.length) * 100 : 0}%` }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] mb-1 font-mono">
                            <span className="text-indigo-400">Passing (70-89%)</span>
                            <span>{testHistory.filter(h => h.score >= 70 && h.score < 90).length} students</span>
                          </div>
                          <div className="w-full bg-[#161F33] h-2 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-indigo-500 rounded-full"
                              style={{ width: `${testHistory.length > 0 ? (testHistory.filter(h => h.score >= 70 && h.score < 90).length / testHistory.length) * 100 : 0}%` }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] mb-1 font-mono">
                            <span className="text-rose-400">Needs Review (&lt; 70%)</span>
                            <span>{testHistory.filter(h => h.score < 70).length} students</span>
                          </div>
                          <div className="w-full bg-[#161F33] h-2 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-rose-500 rounded-full"
                              style={{ width: `${testHistory.length > 0 ? (testHistory.filter(h => h.score < 70).length / testHistory.length) * 100 : 0}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-[#1E2638] text-zinc-500 font-mono text-[10px] uppercase">
                            <th className="pb-2">Student</th>
                            <th className="pb-2">Score</th>
                            <th className="pb-2">Status</th>
                            <th className="pb-2">Time</th>
                            <th className="pb-2 text-right">Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1E2638]/40">
                          {testHistory.map(history => (
                            <tr key={history.id} className="hover:bg-zinc-800/20">
                              <td className="py-2.5 font-medium text-zinc-200">{history.studentName}</td>
                              <td className="py-2.5 font-mono text-zinc-300">{history.score}%</td>
                              <td className="py-2.5">
                                <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono uppercase ${history.passed
                                  ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                                  : 'bg-rose-950/60 text-rose-400 border border-rose-800/40'
                                  }`}>
                                  {history.passed ? 'Pass' : 'Fail'}
                                </span>
                              </td>
                              <td className="py-2.5 font-mono text-zinc-400">{history.timeTaken}</td>
                              <td className="py-2.5 text-right font-mono text-zinc-500">{history.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Submissions Section */}
                  <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-[#1E2638] pb-3">
                      <div>
                        <h3 className="text-sm font-bold text-zinc-100">Recent Student Code Submissions</h3>
                        <p className="text-xs text-zinc-400">Verify and assign grades to student sandbox capstone tasks.</p>
                      </div>
                      <button onClick={() => setActiveTab('faculty_grading')} className="text-xs font-mono text-cyan-400 hover:underline">
                        View All Submissions →
                      </button>
                    </div>

                    <div className="divide-y divide-[#1E2638]/60">
                      {submissions.map(sub => (
                        <div key={sub.id} className="py-3 flex items-center justify-between text-xs">
                          <div>
                            <p className="font-semibold text-zinc-200">{sub.studentName} • <span className="font-normal text-zinc-400">{sub.task}</span></p>
                            <p className="text-[10px] text-zinc-500 font-mono">{sub.course} • Submitted {sub.submittedTime}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${sub.status === 'Graded' ? 'bg-emerald-950/60 border border-emerald-700/50 text-emerald-300' : 'bg-amber-950/60 border border-amber-700/50 text-amber-300'
                              }`}>
                              {sub.status}: {sub.score || 'Pending'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Test Question Builder */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-6 space-y-4 shadow-lg shadow-cyan-600/5">
                    <div className="border-b border-[#1E2638] pb-3">
                      <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        Mock Question Builder
                      </h3>
                      <p className="text-xs text-zinc-400">Add custom screening questions instantly to the student exam arena.</p>
                    </div>

                    <form onSubmit={handleAddQuestion} className="space-y-3.5 text-xs">
                      <div>
                        <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Question Content</label>
                        <textarea
                          required
                          rows={2}
                          value={questionText}
                          onChange={(e) => setQuestionText(e.target.value)}
                          placeholder="e.g. Which Hook should be used to optimize rendering performance?"
                          className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500 font-sans"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Option A</label>
                          <input
                            type="text"
                            required
                            value={optA}
                            onChange={(e) => setOptA(e.target.value)}
                            placeholder="Option A"
                            className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Option B</label>
                          <input
                            type="text"
                            required
                            value={optB}
                            onChange={(e) => setOptB(e.target.value)}
                            placeholder="Option B"
                            className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Option C</label>
                          <input
                            type="text"
                            required
                            value={optC}
                            onChange={(e) => setOptC(e.target.value)}
                            placeholder="Option C"
                            className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Option D</label>
                          <input
                            type="text"
                            required
                            value={optD}
                            onChange={(e) => setOptD(e.target.value)}
                            placeholder="Option D"
                            className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Correct Answer</label>
                          <select
                            value={correctOpt}
                            onChange={(e) => setCorrectOpt(Number(e.target.value))}
                            className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500 font-mono"
                          >
                            <option value={0}>Option A</option>
                            <option value={1}>Option B</option>
                            <option value={2}>Option C</option>
                            <option value={3}>Option D</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Category</label>
                          <select
                            value={questionCategory}
                            onChange={(e) => setQuestionCategory(e.target.value)}
                            className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500 font-mono"
                          >
                            <option value="React">React</option>
                            <option value="Python">Python</option>
                            <option value="System Design">System Design</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Detailed Explanation</label>
                        <textarea
                          required
                          rows={2}
                          value={questionExplanation}
                          onChange={(e) => setQuestionExplanation(e.target.value)}
                          placeholder="Provide structural context for the correct option..."
                          className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500 font-sans"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold transition mt-2 shadow-lg shadow-cyan-600/20 flex items-center justify-center gap-1.5"
                      >
                        <PlusCircle className="w-3.5 h-3.5" />
                        <span>Add Question to Exam Pool</span>
                      </button>
                    </form>

                    {/* Question pool list */}
                    <div className="border-t border-[#1E2638] pt-4 space-y-3">
                      <span className="text-[10px] font-mono uppercase text-zinc-400 block font-semibold">Active Assessment Pool ({testQuestions.length} Questions)</span>
                      <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                        {testQuestions.map((q, idx) => (
                          <div key={q.id} className="p-3 bg-[#07090C] border border-[#1E2638] rounded-lg text-[11px] flex justify-between items-start gap-2">
                            <div className="space-y-1">
                              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-cyan-950/60 border border-cyan-900 text-cyan-300 font-semibold uppercase">
                                {q.category}
                              </span>
                              <p className="font-semibold text-zinc-200 line-clamp-2 mt-1">
                                {idx + 1}. {q.question}
                              </p>
                              <p className="text-[10px] text-emerald-400 font-mono mt-0.5">Correct: Opt {['A','B','C','D'][q.correct]}</p>
                            </div>
                            <button
                              onClick={() => handleDeleteQuestion(q.id)}
                              title="Delete Question"
                              className="text-zinc-500 hover:text-rose-400 p-1 rounded transition"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FACULTY VIEW 2: COURSE MANAGEMENT & PUBLISHING */}
          {currentUser.role === 'faculty' && activeTab === 'faculty_courses' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-[#1E2638] pb-4">
                <div>
                  <h2 className="text-xl font-bold text-zinc-100">Course Syllabus & Curriculum Management</h2>
                  <p className="text-xs text-zinc-400">Edit existing modules, add coding exercises, or publish new technical tracks.</p>
                </div>
                <button
                  onClick={() => setShowCreateCourseModal(true)}
                  className="px-3.5 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Publish New Track</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map(c => (
                  <div key={c.id} className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 flex gap-4">
                    <img src={c.thumbnail} alt={c.title} className="w-28 h-28 rounded-lg object-cover border border-[#1E2638] shrink-0" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono uppercase text-cyan-400 font-semibold">{c.category}</span>
                          <span className="text-xs font-mono font-bold text-emerald-400">{c.priceType === 'Free' ? 'FREE' : `₹${c.priceINR}`}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-zinc-100 line-clamp-1 mt-0.5">{c.title}</h3>
                        <p className="text-xs text-zinc-400 line-clamp-2 mt-1">{c.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-[#1E2638]">
                        <span className="text-[10px] font-mono text-zinc-500">{c.duration} • {c.lessonsCount} Modules</span>
                        <button
                          onClick={() => alert(`Opening curriculum editor for "${c.title}"`)}
                          className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>Edit Syllabus</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FACULTY VIEW 3: GRADING & CODE REVIEW CONSOLE */}
          {currentUser.role === 'faculty' && activeTab === 'faculty_grading' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-[#1E2638] pb-4">
                <h2 className="text-xl font-bold text-zinc-100">Student Sandbox Grading Console</h2>
                <p className="text-xs text-zinc-400">Evaluate capstone project submissions and grant verified completion certificates.</p>
              </div>

              <div className="space-y-4">
                {submissions.map(sub => (
                  <div key={sub.id} className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-zinc-100">{sub.studentName}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-700/50 text-cyan-300">
                          {sub.course}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 font-mono">Task: {sub.task}</p>
                      <p className="text-[10px] text-zinc-500">Submitted {sub.submittedTime}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      {sub.status === 'Pending Review' ? (
                        <>
                          <button
                            onClick={() => handleGradeSubmission(sub.id, '100/100')}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Grade 100/100 (Pass)</span>
                          </button>
                          <button
                            onClick={() => handleGradeSubmission(sub.id, '85/100')}
                            className="px-3 py-1.5 bg-[#161F33] hover:bg-[#1E2B47] text-zinc-300 rounded-lg text-xs font-medium transition"
                          >
                            Grade 85/100
                          </button>
                        </>
                      ) : (
                        <span className="px-3 py-1 bg-emerald-950/80 border border-emerald-700 text-emerald-300 rounded-lg text-xs font-mono font-bold">
                          Graded: {sub.score}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SECTION B: STUDENT VIEWS (ONLY FOR STUDENT ROLE)                          */}
          {/* ========================================================================= */}

          {/* STUDENT VIEW 1: EXPLORE & ENROLL CATALOG */}
          {currentUser.role === 'student' && activeTab === 'catalog' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="border-b border-[#1E2638] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                    Student Curricula & Sandboxes
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mt-1">
                    Master High-Velocity Engineering
                  </h1>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 max-w-2xl">
                    Interactive real-world curricula, integrated cloud code modules, architectural sandboxes, and verified milestone certifications.
                  </p>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 shrink-0">
                  <span className="px-2.5 py-1 bg-[#0F1522] border border-[#1E2638] rounded">
                    <strong className="text-zinc-200">{courses.length}</strong> Modules
                  </span>
                  <span className="px-2.5 py-1 bg-[#0F1522] border border-[#1E2638] rounded text-emerald-400">
                    ● Verified Labs
                  </span>
                </div>
              </div>

              {/* Filter Toolbar */}
              <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search courses, instructors, tech stack..."
                    className="w-full bg-[#0F1522] border border-[#1E2638] rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  {['All', 'Web Dev', 'AI/ML', 'UI/UX'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCat(cat)}
                      className={`px-2.5 py-1 rounded text-xs transition font-medium ${selectedCat === cat
                        ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30'
                        : 'bg-[#0F1522] text-zinc-400 hover:text-zinc-200 border border-[#1E2638]'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCourses.map(course => {
                  const isEnrolled = enrolledIds.includes(course.id);
                  const isBookmarked = bookmarkedIds.includes(course.id);
                  const progress = getCourseProgress(course);

                  return (
                    <div
                      key={course.id}
                      className="bg-[#0F1522] border border-[#1E2638] hover:border-[#2B3B60] rounded-xl p-5 flex flex-col justify-between transition-all duration-200 group"
                    >
                      <div className="space-y-3.5">
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-[#1E2638] bg-zinc-950">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold bg-black/80 backdrop-blur-md text-indigo-300 border border-zinc-700">
                              {course.category}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-300 bg-black/80 backdrop-blur-md border border-zinc-700">
                              {course.level}
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              setBookmarkedIds(prev => prev.includes(course.id) ? prev.filter(id => id !== course.id) : [...prev, course.id]);
                            }}
                            className={`absolute top-2.5 right-2.5 p-1.5 rounded-md backdrop-blur-md transition ${isBookmarked ? 'bg-indigo-600 text-white' : 'bg-black/70 text-zinc-400 hover:text-white border border-zinc-700'
                              }`}
                          >
                            <Bookmark className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-base font-semibold text-zinc-100 group-hover:text-indigo-300 transition line-clamp-1">
                              {course.title}
                            </h3>
                            <span className="text-xs font-mono font-bold text-emerald-400 shrink-0 ml-2">
                              {course.priceType === 'Free' ? 'FREE' : `₹${course.priceINR.toLocaleString('en-IN')}`}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                            {course.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-zinc-400" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1 text-amber-400">
                            <Star className="w-3 h-3 fill-amber-400" />
                            {course.rating}
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 pt-3.5 border-t border-[#1E2638] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={course.instructorAvatar}
                            alt={course.instructorName}
                            className="w-6 h-6 rounded-full object-cover border border-zinc-700"
                          />
                          <span className="text-xs text-zinc-300 font-medium">{course.instructorName}</span>
                        </div>

                        {isEnrolled ? (
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] font-mono text-indigo-400">{progress}% done</span>
                            <button
                              onClick={() => {
                                setSelectedCourseId(course.id);
                                setActiveTab('player');
                              }}
                              className="px-3 py-1 rounded bg-[#161F33] hover:bg-[#1E2B47] text-xs font-medium text-zinc-100 flex items-center gap-1 transition"
                            >
                              <span>Resume Lab</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              if (course.priceType === 'Free') {
                                setEnrolledIds([...enrolledIds, course.id]);
                                setSelectedCourseId(course.id);
                                setActiveTab('player');
                              } else {
                                setCheckoutCourse(course);
                              }
                            }}
                            className="px-3.5 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white flex items-center gap-1 transition shadow-lg shadow-indigo-600/20"
                          >
                            <span>{course.priceType === 'Free' ? 'Enroll Free' : `Get Course (₹${course.priceINR})`}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STUDENT VIEW 2: CLASSROOM & CODE SANDBOX */}
          {currentUser.role === 'student' && activeTab === 'player' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-zinc-400">ACTIVE:</span>
                    <span className="text-xs font-medium text-zinc-100">{currentLesson.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleLesson(currentCourse.id, currentLesson.id)}
                      className={`px-3 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition ${currentLesson.completed
                        ? 'bg-emerald-950/60 border border-emerald-700/50 text-emerald-300'
                        : 'bg-[#161F33] hover:bg-[#1E2B47] text-zinc-300'
                        }`}
                    >
                      {currentLesson.completed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Circle className="w-3.5 h-3.5" />}
                      <span>{currentLesson.completed ? 'Completed' : 'Mark Done'}</span>
                    </button>

                    {getCourseProgress(currentCourse) === 100 && (
                      <button
                        onClick={() => setShowCertificate(true)}
                        className="px-3 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-medium flex items-center gap-1.5 hover:bg-amber-500/30 transition"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        <span>Certificate</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Video Player */}
                <div className="relative aspect-video bg-black border border-[#1E2638] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between group">
                  <video
                    ref={videoRef}
                    src={currentLesson.videoUrl}
                    onTimeUpdate={() => {
                      if (videoRef.current) {
                        setCurrentTime(videoRef.current.currentTime);
                        setDuration(videoRef.current.duration || 0);
                      }
                    }}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full h-full object-cover"
                  />

                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                      <button
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.play();
                            setIsPlaying(true);
                          }
                        }}
                        className="w-14 h-14 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center shadow-xl hover:scale-105 transition"
                      >
                        <Play className="w-6 h-6 ml-0.5" />
                      </button>
                    </div>
                  )}

                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent space-y-1.5 z-10">
                    <input
                      type="range"
                      min="0"
                      max={duration || 100}
                      value={currentTime}
                      onChange={(e) => {
                        const t = parseFloat(e.target.value);
                        if (videoRef.current) {
                          videoRef.current.currentTime = t;
                          setCurrentTime(t);
                        }
                      }}
                      className="w-full h-1 bg-zinc-700 accent-indigo-500 rounded-full appearance-none cursor-pointer"
                    />
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300">
                      <div className="flex items-center gap-3">
                        <button onClick={() => {
                          if (videoRef.current) {
                            if (isPlaying) videoRef.current.pause();
                            else videoRef.current.play();
                            setIsPlaying(!isPlaying);
                          }
                        }} className="hover:text-white">
                          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        </button>
                        <button onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.muted = !isMuted;
                            setIsMuted(!isMuted);
                          }
                        }} className="hover:text-white">
                          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Multi-Tab Console */}
                <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl overflow-hidden">
                  <div className="flex border-b border-[#1E2638] px-3 bg-zinc-950/40 text-xs font-medium overflow-x-auto scrollbar-none">
                    {[
                      { id: 'editor', label: 'Live Code Sandbox', icon: Code2 },
                      { id: 'notes', label: 'Persistent Notes', icon: Bookmark },
                      { id: 'discussion', label: 'Terminal Q&A', icon: Terminal },
                      { id: 'quiz', label: 'Verification Quiz', icon: CheckCircle2 }
                    ].map(tab => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveConsoleTab(tab.id)}
                          className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 transition whitespace-nowrap ${activeConsoleTab === tab.id
                            ? 'border-indigo-500 text-zinc-100 font-semibold'
                            : 'border-transparent text-zinc-500 hover:text-zinc-300'
                            }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-4 text-xs">
                    {activeConsoleTab === 'editor' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span>Node.js / V8 Sandbox Runtime</span>
                          <button
                            onClick={handleRunCode}
                            disabled={isExecutingCode}
                            className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-1.5 transition"
                          >
                            <PlayCircle className="w-3.5 h-3.5" />
                            <span>{isExecutingCode ? 'Evaluating...' : 'Run Test Suite'}</span>
                          </button>
                        </div>

                        <textarea
                          rows={7}
                          value={codeSnippet}
                          onChange={(e) => setCodeSnippet(e.target.value)}
                          className="w-full bg-[#07090C] border border-[#1E2638] rounded-lg p-3 font-mono text-xs text-indigo-300 focus:outline-none focus:border-indigo-500"
                        />

                        {terminalOutput && (
                          <div className="p-3 bg-black border border-[#1E2638] rounded-lg font-mono text-[11px] text-emerald-400 whitespace-pre-wrap">
                            <div className="text-zinc-500 pb-1 border-b border-zinc-900 mb-1">STDOUT Console Stream:</div>
                            {terminalOutput}
                          </div>
                        )}
                      </div>
                    )}

                    {activeConsoleTab === 'notes' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-zinc-400 font-mono text-[11px]">
                          <span>Local State Persistence Buffer</span>
                          <span className="text-emerald-400">● Auto-Saved</span>
                        </div>
                        <textarea
                          rows={6}
                          value={notes[selectedCourseId] || ''}
                          onChange={(e) => setNotes({ ...notes, [selectedCourseId]: e.target.value })}
                          placeholder="Log code snippets, thoughts, architectural tradeoffs..."
                          className="w-full bg-[#07090C] border border-[#1E2638] rounded-lg p-3 font-mono text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    )}

                    {activeConsoleTab === 'discussion' && (
                      <div className="space-y-4">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (!newComment.trim()) return;
                            setComments([
                              { id: Date.now(), author: currentUser.name, handle: currentUser.handle, time: 'Just now', text: newComment, upvotes: 1 },
                              ...comments
                            ]);
                            setNewComment('');
                          }}
                          className="flex gap-2"
                        >
                          <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Post query to workspace thread..."
                            className="flex-1 bg-[#07090C] border border-[#1E2638] rounded-lg px-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500"
                          />
                          <button type="submit" className="px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition">
                            Submit
                          </button>
                        </form>

                        <div className="space-y-2">
                          {comments.map(c => (
                            <div key={c.id} className="p-3 bg-[#07090C] border border-[#1E2638] rounded-lg space-y-1">
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="font-medium text-zinc-300">{c.author} <span className="text-zinc-600 font-mono">{c.handle}</span></span>
                                <span className="text-zinc-600 font-mono">{c.time}</span>
                              </div>
                              <p className="text-xs text-zinc-400">{c.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeConsoleTab === 'quiz' && (
                      <div className="space-y-4">
                        {QUIZ_QUESTIONS.map((q, idx) => (
                          <div key={q.id} className="space-y-2">
                            <p className="font-medium text-zinc-200">
                              <span className="font-mono text-indigo-400 mr-1">{idx + 1}.</span>
                              {q.question}
                            </p>
                            <div className="space-y-1.5">
                              {q.options.map((opt, optIdx) => {
                                const isSelected = quizAnswers[q.id] === optIdx;
                                const isCorrect = q.correct === optIdx;
                                let style = 'bg-[#07090C] border-[#1E2638] text-zinc-400 hover:border-zinc-700';

                                if (quizSubmitted) {
                                  if (isCorrect) style = 'bg-emerald-950/40 border-emerald-600/60 text-emerald-300';
                                  else if (isSelected && !isCorrect) style = 'bg-rose-950/40 border-rose-600/60 text-rose-300';
                                } else if (isSelected) {
                                  style = 'bg-indigo-950/40 border-indigo-500 text-indigo-200';
                                }

                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: optIdx })}
                                    disabled={quizSubmitted}
                                    className={`w-full text-left p-2.5 rounded border text-xs transition flex justify-between items-center ${style}`}
                                  >
                                    <span>{opt}</span>
                                    {quizSubmitted && isCorrect && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}

                        {!quizSubmitted ? (
                          <button
                            onClick={() => setQuizSubmitted(true)}
                            disabled={Object.keys(quizAnswers).length < QUIZ_QUESTIONS.length}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded text-xs font-medium transition"
                          >
                            Verify Solutions
                          </button>
                        ) : (
                          <button
                            onClick={() => { setQuizAnswers({}); setQuizSubmitted(false); }}
                            className="px-3 py-1.5 bg-[#161F33] hover:bg-[#1E2B47] text-zinc-300 rounded text-xs font-medium flex items-center gap-1"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Reset Test</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar Syllabus */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-[#1E2638] pb-3">
                    <div>
                      <h3 className="text-xs font-semibold text-zinc-100 uppercase font-mono">Module Index</h3>
                      <p className="text-[11px] text-zinc-500">{currentCourse.title}</p>
                    </div>
                    <span className="font-mono text-xs text-indigo-400 font-semibold">{getCourseProgress(currentCourse)}%</span>
                  </div>

                  <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                      style={{ width: `${getCourseProgress(currentCourse)}%` }}
                    />
                  </div>

                  <div className="space-y-3 pt-2">
                    {currentCourse.sections?.map((section) => (
                      <div key={section.id} className="rounded-lg bg-[#07090C] border border-[#1E2638] overflow-hidden">
                        <div className="px-3 py-2 bg-[#0F1522] border-b border-[#1E2638] text-[11px] font-mono text-zinc-400 font-semibold">
                          {section.title}
                        </div>
                        <div className="divide-y divide-[#1E2638]/60">
                          {section.lessons.map((lesson) => {
                            const isActive = lesson.id === activeLessonId;
                            return (
                              <div
                                key={lesson.id}
                                onClick={() => setActiveLessonId(lesson.id)}
                                className={`p-2.5 flex items-center justify-between text-xs cursor-pointer transition ${isActive
                                  ? 'bg-indigo-950/30 text-indigo-300 font-medium'
                                  : 'hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                                  }`}
                              >
                                <div className="flex items-center gap-2 overflow-hidden pr-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleLesson(currentCourse.id, lesson.id);
                                    }}
                                    className="text-zinc-600 hover:text-emerald-400 transition"
                                  >
                                    {lesson.completed ? (
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                    ) : (
                                      <Circle className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                  <span className="truncate">{lesson.title}</span>
                                </div>
                                <span className="font-mono text-[10px] text-zinc-600 shrink-0">{lesson.duration}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STUDENT VIEW 3: MOCK TEST ARENA */}
          {currentUser.role === 'student' && activeTab === 'arena' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-[#1E2638] pb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-rose-400 font-semibold">
                  Exam Portal Console
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 mt-1">
                  Technical Mock Assessment Arena
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Simulate high-fidelity interview screening exams with automated timers and detailed scorecard evaluations.
                </p>
              </div>

              {!testStarted && !testSubmitted && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 bg-[#0F1522] border border-[#1E2638] rounded-2xl p-6 space-y-6 relative overflow-hidden">
                    <div className="space-y-2">
                      <div className="px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs rounded-full font-mono inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 animate-pulse" />
                        <span>10-Minute Technical Screening Test</span>
                      </div>
                      <h2 className="text-xl font-bold text-zinc-100">Exam Instructions & Guidelines</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                      <div className="p-4 bg-[#07090C] border border-[#1E2638] rounded-xl space-y-1">
                        <span className="text-zinc-500 block">TIME ALLOCATED</span>
                        <span className="text-zinc-200 text-sm font-bold">10 Minutes (600s)</span>
                      </div>
                      <div className="p-4 bg-[#07090C] border border-[#1E2638] rounded-xl space-y-1">
                        <span className="text-zinc-500 block">TOTAL QUESTIONS</span>
                        <span className="text-zinc-200 text-sm font-bold">{testQuestions.length} Questions</span>
                      </div>
                      <div className="p-4 bg-[#07090C] border border-[#1E2638] rounded-xl space-y-1">
                        <span className="text-zinc-500 block">PASS THRESHOLD</span>
                        <span className="text-emerald-400 text-sm font-bold">70% Grade Minimum</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-zinc-400 leading-relaxed">
                      <p className="flex gap-2"><span className="text-indigo-400 font-bold">•</span> Auto-Submission executes immediately when the countdown timer expires.</p>
                      <p className="flex gap-2"><span className="text-indigo-400 font-bold">•</span> Questions can be skipped or flagged for evaluation review using the side navigation palette.</p>
                      <p className="flex gap-2"><span className="text-indigo-400 font-bold">•</span> Exiting or refreshing during the live test will auto-evaluate current selected responses.</p>
                    </div>

                    <button
                      onClick={handleStartTest}
                      className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-500 hover:to-rose-500 text-white rounded-xl text-xs font-bold transition shadow-lg shadow-indigo-600/20 flex items-center gap-2 transform active:scale-95"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Start Assessment Simulator</span>
                    </button>
                  </div>

                  {/* Previous Test Attempts */}
                  <div className="lg:col-span-4 bg-[#0F1522] border border-[#1E2638] rounded-2xl p-5 space-y-4">
                    <h3 className="text-xs font-semibold text-zinc-200 uppercase font-mono tracking-wider flex items-center gap-1">
                      <Award className="w-4 h-4 text-rose-400" />
                      Arena Attempts Ledger
                    </h3>

                    <div className="space-y-3">
                      {testHistory.length === 0 ? (
                        <p className="text-xs text-zinc-500 italic">No historical test records found.</p>
                      ) : (
                        testHistory.map((hist, idx) => (
                          <div key={hist.id || idx} className="p-3 bg-[#07090C] border border-[#1E2638] rounded-xl text-xs flex justify-between items-center gap-2">
                            <div>
                              <p className="font-mono text-zinc-300 font-bold">Attempt #{testHistory.length - idx}</p>
                              <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{hist.date} • {hist.timeTaken} taken</p>
                              <p className="text-[9px] text-zinc-500 font-mono">Candidate: {hist.studentName}</p>
                            </div>
                            <div className="text-right">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold block text-center ${hist.passed
                                ? 'bg-emerald-950/60 border border-emerald-800/40 text-emerald-400'
                                : 'bg-rose-950/60 border border-rose-800/40 text-rose-400'
                                }`}>
                                {hist.score}%: {hist.passed ? 'PASS' : 'FAIL'}
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ACTIVE EXAMINATION CONSOLE MODE */}
              {testStarted && !testSubmitted && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-scaleUp">
                  <div className="lg:col-span-8 bg-[#0F1522] border border-[#1E2638] rounded-2xl p-6 space-y-6">
                    <div className="flex justify-between items-center border-b border-[#1E2638]/60 pb-3">
                      <span className="text-xs text-zinc-300 font-mono">
                        Question <strong className="text-zinc-100">{currentQuestionIndex + 1}</strong> of {testQuestions.length}
                      </span>

                      <div className={`px-3.5 py-1.5 rounded-lg border font-mono text-xs font-bold flex items-center gap-1.5 transition-all ${timeLeft < 120
                        ? 'bg-rose-950/60 border-rose-500 text-rose-400 animate-pulse'
                        : timeLeft < 300
                          ? 'bg-amber-950/40 border-amber-500 text-amber-300'
                          : 'bg-emerald-950/40 border-emerald-600/40 text-emerald-400'
                        }`}>
                        <Clock className="w-3.5 h-3.5 animate-spin" />
                        <span>
                          {Math.floor(timeLeft / 60).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 animate-fadeIn">
                      <div className="flex items-start gap-2.5">
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-[#161F33] border border-[#2B3B60] text-indigo-300 font-semibold mt-1">
                          {testQuestions[currentQuestionIndex].category}
                        </span>
                        <h2 className="text-base sm:text-lg font-semibold text-zinc-100 leading-relaxed">
                          {testQuestions[currentQuestionIndex].question}
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 gap-3.5 pt-2">
                        {testQuestions[currentQuestionIndex].options.map((opt, oIdx) => {
                          const isSelected = selectedAnswers[currentQuestionIndex] === oIdx;
                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectOption(oIdx)}
                              className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all duration-200 flex justify-between items-center group ${isSelected
                                ? 'bg-indigo-950/40 border-indigo-500 text-indigo-200'
                                : 'bg-[#07090C] border-[#1E2638] text-zinc-300 hover:border-zinc-700 hover:bg-[#0c0f17]'
                                }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`h-5 w-5 rounded-md border flex items-center justify-center text-[10px] font-bold font-mono transition ${isSelected
                                  ? 'bg-indigo-600 border-indigo-500 text-white'
                                  : 'border-[#1E2638] text-zinc-500 group-hover:text-zinc-300'
                                  }`}>
                                  {['A', 'B', 'C', 'D'][oIdx]}
                                </span>
                                <span>{opt}</span>
                              </div>
                              {isSelected && <Check className="w-4 h-4 text-indigo-400" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#1E2638]/60 pt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleNavigateQuestion(currentQuestionIndex - 1)}
                          disabled={currentQuestionIndex === 0}
                          className="px-3.5 py-2 bg-[#161F33] hover:bg-[#1E2B47] disabled:opacity-30 disabled:pointer-events-none text-zinc-300 rounded-lg text-xs font-semibold transition"
                        >
                          Previous
                        </button>
                        <button
                          onClick={handleFlagQuestion}
                          className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${flaggedQuestions[currentQuestionIndex]
                            ? 'bg-cyan-950/60 border border-cyan-800 text-cyan-300'
                            : 'bg-[#161F33] hover:bg-[#1E2B47] text-zinc-300'
                            }`}
                        >
                          <Flag className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{flaggedQuestions[currentQuestionIndex] ? 'Flagged' : 'Flag for Review'}</span>
                        </button>
                      </div>

                      {currentQuestionIndex < testQuestions.length - 1 ? (
                        <button
                          onClick={() => handleNavigateQuestion(currentQuestionIndex + 1)}
                          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition"
                        >
                          Next Question
                        </button>
                      ) : (
                        <button
                          onClick={() => handleTestSubmit(false)}
                          className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold transition shadow-lg shadow-rose-600/20"
                        >
                          Submit Assessment
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Navigation Palette */}
                  <div className="lg:col-span-4 bg-[#0F1522] border border-[#1E2638] rounded-2xl p-5 space-y-5">
                    <div>
                      <h3 className="text-xs font-semibold text-zinc-200 uppercase font-mono tracking-wider">
                        Navigation Palette
                      </h3>
                      <p className="text-[10px] text-zinc-500 font-mono mt-0.5">Toggle and review question index tags.</p>
                    </div>

                    <div className="grid grid-cols-5 gap-2.5">
                      {testQuestions.map((q, idx) => {
                        const isVisited = visitedQuestions[idx];
                        const isAnswered = selectedAnswers[idx] !== undefined;
                        const isFlagged = flaggedQuestions[idx];
                        const isCurrent = currentQuestionIndex === idx;

                        let styleClasses = "bg-[#07090C] border-[#1E2638] text-zinc-500 hover:text-zinc-200";

                        if (isFlagged) {
                          styleClasses = "bg-[#1A1C29] border-cyan-500 text-cyan-300";
                        } else if (isAnswered) {
                          styleClasses = "bg-emerald-950/45 border-emerald-500 text-emerald-300 font-semibold";
                        } else if (isVisited) {
                          styleClasses = "bg-amber-950/45 border-amber-500/80 text-amber-300";
                        }

                        if (isCurrent) {
                          styleClasses += " ring-2 ring-indigo-500 ring-offset-2 ring-offset-[#0F1522]";
                        }

                        return (
                          <button
                            key={q.id}
                            onClick={() => handleNavigateQuestion(idx)}
                            className={`p-2.5 h-10 w-full border rounded-lg text-xs font-mono transition flex items-center justify-center ${styleClasses}`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>

                    <div className="border-t border-[#1E2638]/60 pt-4 space-y-2 text-[10px] font-mono text-zinc-400">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded bg-emerald-950/60 border border-emerald-500"></span>
                        <span>Answered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded bg-amber-950/60 border border-amber-500"></span>
                        <span>Skipped (Visited)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded bg-[#1A1C29] border border-cyan-500"></span>
                        <span>Flagged for Review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded bg-[#07090C] border border-[#1E2638]"></span>
                        <span>Unvisited</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (window.confirm("Are you sure you want to exit? Unsaved answers will be lost.")) {
                          setTestStarted(false);
                          setTestSubmitted(false);
                        }
                      }}
                      className="w-full py-2 bg-zinc-900 hover:bg-[#1E2638] text-rose-400 border border-zinc-800 text-xs font-mono rounded-lg transition"
                    >
                      Exit Session (Discard)
                    </button>
                  </div>
                </div>
              )}

              {/* SCORE REPORT CARD VIEW */}
              {testSubmitted && (
                <div className="space-y-6 animate-scaleUp">
                  {(() => {
                    const latestReport = testHistory[0] || { score: 0, passed: false, timeTaken: '00:00' };
                    return (
                      <div className="bg-[#0F1522] border border-[#1E2638] rounded-2xl p-6 space-y-6 relative overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="space-y-3 flex-1">
                            <div className={`px-3 py-1 text-xs rounded-full font-mono font-bold inline-flex items-center gap-1.5 shadow ${latestReport.passed
                              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                              : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                              }`}>
                              {latestReport.passed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />}
                              <span>{latestReport.passed ? 'ASSESSMENT PASSED' : 'MINIMUM GRADE REQUIREMENT UNMET'}</span>
                            </div>

                            <h2 className="text-2xl font-extrabold text-zinc-100">
                              {latestReport.passed ? 'Congratulations on your technical milestone!' : 'Keep practicing and try again.'}
                            </h2>
                            <p className="text-xs text-zinc-400 max-w-xl">
                              Candidates scoring above 70% demonstrate intermediate workspace competence in systems and scripting.
                            </p>
                          </div>

                          <div className="flex items-center gap-6 shrink-0 bg-[#07090C] border border-[#1E2638] p-5 rounded-2xl text-center shadow-lg shadow-black/40">
                            <div>
                              <span className="text-[10px] font-mono text-zinc-500 block uppercase">Final Grade</span>
                              <span className={`text-4xl font-extrabold font-mono ${latestReport.passed ? 'text-emerald-400' : 'text-rose-400'}`}>{latestReport.score}%</span>
                            </div>
                            <div className="w-px h-10 bg-zinc-800"></div>
                            <div className="text-left font-mono text-xs">
                              <p className="text-zinc-400">Duration: <strong className="text-zinc-200">{latestReport.timeTaken}</strong></p>
                              <p className="text-zinc-400 mt-1">Goal: <strong className="text-emerald-400">70% Pass</strong></p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3 border-t border-[#1E2638]/60 pt-4">
                          <button
                            onClick={handleStartTest}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition"
                          >
                            Retake Assessment Simulator
                          </button>
                          <button
                            onClick={() => { setTestStarted(false); setTestSubmitted(false); }}
                            className="px-4 py-2 bg-[#161F33] hover:bg-[#1E2B47] text-zinc-300 text-xs font-semibold rounded-lg transition"
                          >
                            Exit to Arena Dashboard
                          </button>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-zinc-200 font-mono uppercase tracking-wider">
                      Question-by-Question Score Report Breakdown
                    </h3>

                    <div className="space-y-4">
                      {testQuestions.map((q, idx) => {
                        const selectedOpt = selectedAnswers[idx];
                        const isCorrect = selectedOpt === q.correct;

                        return (
                          <div key={q.id} className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-4">
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E2638]/40 pb-2">
                              <span className="text-xs text-zinc-400 font-mono font-semibold">
                                Question {idx + 1}
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-zinc-950/60 border border-zinc-800 text-indigo-300">
                                  {q.category}
                                </span>
                                <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase ${isCorrect
                                  ? 'bg-emerald-950/40 border border-emerald-900/60 text-emerald-400'
                                  : 'bg-rose-950/40 border border-rose-900/60 text-rose-400'
                                  }`}>
                                  {isCorrect ? 'Correct' : selectedOpt === undefined ? 'Skipped/Unanswered' : 'Incorrect'}
                                </span>
                              </div>
                            </div>

                            <p className="text-xs sm:text-sm font-semibold text-zinc-100">{q.question}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              {q.options.map((opt, oIdx) => {
                                const isCorrectOpt = oIdx === q.correct;
                                const isSelectedOpt = oIdx === selectedOpt;

                                let borderStyle = 'border-[#1E2638] bg-[#07090C]/60 text-zinc-400';
                                let badge = null;

                                if (isCorrectOpt) {
                                  borderStyle = 'border-emerald-600 bg-emerald-950/20 text-emerald-300 font-medium';
                                  badge = <span className="text-[9px] uppercase font-mono text-emerald-400">Correct Answer</span>;
                                } else if (isSelectedOpt && !isCorrectOpt) {
                                  borderStyle = 'border-rose-700 bg-rose-950/20 text-rose-300';
                                  badge = <span className="text-[9px] uppercase font-mono text-rose-400">Your Selection</span>;
                                }

                                return (
                                  <div key={oIdx} className={`p-3 rounded-lg border flex justify-between items-center gap-2 ${borderStyle}`}>
                                    <span>{opt}</span>
                                    {badge}
                                  </div>
                                );
                              })}
                            </div>

                            <div className="p-4 bg-[#07090C] border border-[#1E2638] rounded-xl space-y-1.5">
                              <span className="text-[10px] font-mono uppercase text-indigo-400 font-semibold block">Explanation Context</span>
                              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{q.explanation}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STUDENT VIEW 4: STUDY MATRIX, CALENDAR & UNIVERSAL PDF DOWNLOADS */}
          {currentUser.role === 'student' && activeTab === 'matrix' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: 'Enrolled Labs', val: enrolledIds.length, desc: 'Active learning workspaces', icon: BookOpen },
                  { label: 'Saved Bookmarks', val: bookmarkedIds.length, desc: 'Bookmarked for later', icon: Bookmark },
                  { label: 'Learning Velocity', val: `${currentUser.streak} Days`, desc: 'Continuous commit cadence', icon: Flame },
                  { label: 'Experience XP', val: `${currentUser.xp} XP`, desc: 'Staff Rank Milestone', icon: Sparkles }
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-4 space-y-1 animate-fadeIn">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase">
                        <span>{stat.label}</span>
                        <Icon className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                      <p className="text-xl font-semibold text-zinc-100 font-mono">{stat.val}</p>
                      <p className="text-[11px] text-zinc-500">{stat.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Side: Daily Checklist & Downloadable PDF Warehouse */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Daily Study Checklist */}
                  <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-4">
                    <div>
                      <h3 className="text-xs font-semibold text-zinc-100 uppercase font-mono tracking-wider flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-indigo-400" />
                        Daily Study Checklist
                      </h3>
                      <p className="text-[10px] text-zinc-500 font-mono mt-0.5">Toggle checklist items and monitor complete ratios.</p>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                        <span>Daily Completion Target</span>
                        <span className="text-indigo-400 font-bold">{checklistProgress}%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transition-all duration-300"
                          style={{ width: `${checklistProgress}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                      {checklist.map(item => (
                        <div key={item.id} className="flex items-center justify-between gap-2 p-2.5 bg-[#07090C] border border-[#1E2638]/80 rounded-lg hover:border-zinc-700 transition">
                          <div
                            onClick={() => handleToggleChecklist(item.id)}
                            className="flex items-center gap-2.5 cursor-pointer flex-1"
                          >
                            <button className="text-zinc-500 hover:text-indigo-400 transition shrink-0">
                              {item.completed ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <Circle className="w-4 h-4" />
                              )}
                            </button>
                            <span className={`text-xs ${item.completed ? 'text-zinc-500 line-through' : 'text-zinc-200'}`}>
                              {item.text}
                            </span>
                          </div>
                          <button
                            onClick={() => handleDeleteChecklistItem(item.id)}
                            className="text-zinc-500 hover:text-rose-400 p-1 rounded transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleAddChecklistItem} className="flex gap-2 text-xs">
                      <input
                        type="text"
                        required
                        value={newChecklistItem}
                        onChange={(e) => setNewChecklistItem(e.target.value)}
                        placeholder="Add custom learning task..."
                        className="flex-1 bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-indigo-500 font-sans"
                      />
                      <button
                        type="submit"
                        className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition"
                      >
                        Add Task
                      </button>
                    </form>
                  </div>

                  {/* Downloadable PDF & Cheat Sheets Warehouse */}
                  <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-4 animate-fadeIn">
                    <div>
                      <h3 className="text-xs font-semibold text-zinc-100 uppercase font-mono tracking-wider flex items-center gap-1.5">
                        <Download className="w-4 h-4 text-cyan-400" />
                        Downloadable PDFs & Cheat Sheets
                      </h3>
                      <p className="text-[10px] text-zinc-500 font-mono mt-0.5">Direct offline access on Mobile & Desktop devices.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5 text-xs">
                      {/* UNIVERSAL MOBILE & DESKTOP ALL.PDF DOWNLOAD CARD */}
                      <div className="p-3 bg-indigo-950/30 border border-indigo-500/40 rounded-lg flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 shrink-0">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="truncate">
                            <p className="font-semibold text-zinc-100 truncate">ALL.pdf — Complete Course Handbook</p>
                            <p className="text-[10px] text-indigo-300 font-mono">PDF Document • 111 KB • Universal Download</p>
                          </div>
                        </div>
                        <a
                          href="/ALL.pdf"
                          download="NexusLearn_Complete_Study_Guide.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition flex items-center gap-1.5 shrink-0 shadow-sm"
                          title="Download ALL.pdf on Mobile or PC"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </a>
                      </div>

                      <div className="p-3 bg-[#07090C] border border-[#1E2638] rounded-lg flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-zinc-300">Next.js 14 Production Cheat Sheet</p>
                          <p className="text-[10px] text-zinc-500 font-mono">Purging CDN, Redis limiting setups</p>
                        </div>
                        <button
                          onClick={() => handleDownloadCheatsheet('nextjs')}
                          className="p-2 bg-[#161F33] hover:bg-[#1E2B47] text-cyan-400 border border-[#2B3B60] rounded-lg transition"
                          title="Download Text Cheat Sheet"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="p-3 bg-[#07090C] border border-[#1E2638] rounded-lg flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-zinc-300">PyTorch Acceleration Cheat Sheet</p>
                          <p className="text-[10px] text-zinc-500 font-mono">CUDA compiler flags, backprop formulas</p>
                        </div>
                        <button
                          onClick={() => handleDownloadCheatsheet('pytorch')}
                          className="p-2 bg-[#161F33] hover:bg-[#1E2B47] text-cyan-400 border border-[#2B3B60] rounded-lg transition"
                          title="Download Text Cheat Sheet"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="p-3 bg-[#07090C] border border-[#1E2638] rounded-lg flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-zinc-300">Vite Developer Starter Boilerplate</p>
                          <p className="text-[10px] text-zinc-500 font-mono">Clean template structured project guide</p>
                        </div>
                        <button
                          onClick={handleDownloadStarterRepo}
                          className="p-2 bg-[#161F33] hover:bg-[#1E2B47] text-cyan-400 border border-[#2B3B60] rounded-lg transition"
                          title="Download Starter Guide"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Monthly Calendar Matrix */}
                <div className="lg:col-span-7 space-y-6 animate-fadeIn">
                  <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E2638] pb-3">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-indigo-400" />
                        <h3 className="text-xs font-semibold text-zinc-100 uppercase font-mono">Monthly Learning Matrix (August 2026)</h3>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
                        <span>Daily Target: <strong className="text-emerald-400">{currentUser.dailyMinutesCompleted}/{currentUser.dailyMinutesTarget} mins</strong></span>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-2 pt-1 text-center font-mono">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                        <div key={day} className="text-[10px] uppercase text-zinc-500 font-bold py-1">
                          {day}
                        </div>
                      ))}

                      {Array.from({ length: 31 }).map((_, idx) => {
                        const dayNum = idx + 1;
                        const intensityTiers = [
                          'bg-[#07090C] border-[#1E2638] text-zinc-600',
                          'bg-indigo-950/40 border-indigo-900/40 text-indigo-300',
                          'bg-indigo-600/20 border-indigo-500/65 text-indigo-200 shadow-sm',
                          'bg-emerald-500/20 border-emerald-500/70 text-emerald-200 shadow-md font-bold'
                        ];
                        const intensity = intensityTiers[(dayNum * 7) % 4];

                        return (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-lg border text-xs flex flex-col justify-between h-14 transition hover:scale-105 cursor-pointer ${intensity}`}
                          >
                            <span className="text-[10px] text-left">{dayNum}</span>
                            <span className="text-[9px] text-right font-mono opacity-80">
                              {dayNum % 2 === 0 ? '2.5h' : '1.0h'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STUDENT VIEW 5: DOUBTS & DISCUSSION COMMUNITY */}
          {currentUser.role === 'student' && activeTab === 'forum' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-[#1E2638] pb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  Scholastic Threads
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 mt-1">
                  Doubts & Community Workspace Forum
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Post system queries, exchange debugging guidelines, and discuss implementation architecture with peers and faculty leads.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                      <input
                        type="text"
                        value={forumSearch}
                        onChange={(e) => setForumSearch(e.target.value)}
                        placeholder="Search queries, details..."
                        className="w-full bg-[#0F1522] border border-[#1E2638] rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-1 text-xs">
                      {['All', 'React', 'Python', 'System Design'].map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedForumCategory(cat)}
                          className={`px-2.5 py-1 rounded text-xs transition font-semibold ${selectedForumCategory === cat
                            ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                            : 'bg-[#0F1522] text-zinc-400 hover:text-zinc-200 border border-[#1E2638]'
                            }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 animate-fadeIn">
                    {filteredDoubts.length === 0 ? (
                      <div className="p-8 text-center bg-[#0F1522] border border-[#1E2638] rounded-xl text-zinc-500 text-xs italic animate-pulse">
                        No discussion threads found.
                      </div>
                    ) : (
                      filteredDoubts.map(post => {
                        const isExpanded = expandedPostId === post.id;
                        const catColors = {
                          'React': 'bg-indigo-950/60 border border-indigo-700 text-indigo-300',
                          'Python': 'bg-amber-950/60 border border-amber-700 text-amber-300',
                          'System Design': 'bg-cyan-950/60 border border-cyan-700 text-cyan-300'
                        };

                        return (
                          <div key={post.id} className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-4 hover:border-zinc-700 transition duration-150">
                            <div className="flex justify-between items-start gap-2">
                              <div className="space-y-1">
                                <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase font-semibold inline-block ${catColors[post.category] || 'bg-zinc-800 text-zinc-300'}`}>
                                  {post.category}
                                </span>
                                <h3
                                  onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                                  className="text-sm sm:text-base font-bold text-zinc-100 hover:text-cyan-400 transition cursor-pointer mt-1"
                                >
                                  {post.title}
                                </h3>
                              </div>

                              <button
                                onClick={() => handleUpvoteForumPost(post.id)}
                                className="px-2.5 py-1 bg-[#161F33] hover:bg-[#1E2B47] text-zinc-300 hover:text-cyan-400 border border-[#2B3B60] rounded-lg transition flex items-center gap-1 font-mono text-[11px]"
                              >
                                <ThumbsUp className="w-3.5 h-3.5 text-cyan-400" />
                                <span>{post.upvotes}</span>
                              </button>
                            </div>

                            <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-3">
                              {post.content}
                            </p>

                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-[#1E2638]/40 pt-3">
                              <span>Asked by {post.author} ({post.handle}) • {post.time}</span>
                              <button
                                onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                                className="text-cyan-400 hover:underline flex items-center gap-1"
                              >
                                {post.replies.length} Replies {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                              </button>
                            </div>

                            {isExpanded && (
                              <div className="mt-4 pt-4 border-t border-[#1E2638] space-y-4 animate-scaleUp">
                                <form onSubmit={(e) => handleAddForumReply(e, post.id)} className="flex gap-2">
                                  <input
                                    type="text"
                                    required
                                    value={newReplyText}
                                    onChange={(e) => setNewReplyText(e.target.value)}
                                    placeholder="Write a community solution reply..."
                                    className="flex-1 bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500 font-sans"
                                  />
                                  <button
                                    type="submit"
                                    className="px-3.5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-xl transition shadow"
                                  >
                                    Reply
                                  </button>
                                </form>

                                <div className="space-y-3 pt-1">
                                  {post.replies.length === 0 ? (
                                    <p className="text-[11px] text-zinc-500 italic">No solution responses yet. Be the first to answer!</p>
                                  ) : (
                                    post.replies.map(rep => (
                                      <div key={rep.id} className="p-3 bg-[#07090C] border border-[#1E2638] rounded-lg space-y-1">
                                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                                          <span className="font-semibold text-zinc-300">{rep.author} ({rep.handle})</span>
                                          <span>{rep.time}</span>
                                        </div>
                                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">{rep.text}</p>
                                      </div>
                                    ))
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Right Side: Create New query Form */}
                <div className="lg:col-span-5">
                  <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-4 shadow-lg shadow-cyan-600/5">
                    <div className="border-b border-[#1E2638] pb-3">
                      <h3 className="text-xs font-semibold text-zinc-100 uppercase font-mono tracking-wider flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-cyan-400" />
                        Create New Doubt Thread
                      </h3>
                      <p className="text-[10px] text-zinc-500 font-mono mt-0.5">Publish your implementation problems.</p>
                    </div>

                    <form onSubmit={handleAddForumPost} className="space-y-3.5 text-xs">
                      <div>
                        <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Query Category Tag</label>
                        <select
                          value={newQueryCategory}
                          onChange={(e) => setNewQueryCategory(e.target.value)}
                          className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500 font-mono"
                        >
                          <option value="React">React</option>
                          <option value="Python">Python</option>
                          <option value="System Design">System Design</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Doubt Title</label>
                        <input
                          type="text"
                          required
                          value={newQueryTitle}
                          onChange={(e) => setNewQueryTitle(e.target.value)}
                          placeholder="e.g. Server Actions state invalidation problem"
                          className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500 font-sans"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Detailed Description</label>
                        <textarea
                          required
                          rows={4}
                          value={newQueryContent}
                          onChange={(e) => setNewQueryContent(e.target.value)}
                          placeholder="Provide trace outputs, stack errors, code blocks, or conceptual query parameters..."
                          className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500 font-sans"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold transition mt-2 shadow-lg shadow-cyan-600/20"
                      >
                        Publish Thread to Community
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SECTION C: SHARED ABOUT VIEW                                              */}
          {/* ========================================================================= */}
          {activeTab === 'about' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="border-b border-[#1E2638] pb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                  About the Platform
                </span>
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mt-1">
                  Engineered for Hands-On Technical Mastery
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 max-w-3xl">
                  NexusLearn provides distinct, collision-free operating workspaces for Students and Faculty with in-browser sandboxes, assignment verification engines, and instant UPI billing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-100">Live In-Browser VM</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Test distributed algorithms, concurrency patterns, and data transforms directly alongside video modules.
                  </p>
                </div>

                <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-100">Role-Separated Security</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Faculty access executive grading and course publishing tools while Students get distraction-free study matrixes.
                  </p>
                </div>

                <div className="bg-[#0F1522] border border-[#1E2638] rounded-xl p-5 space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-100">UPI & Multi-Currency</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Integrated INR (₹) pricing, discount promo engines, and UPI QR code flows.
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* 3. UNIVERSAL FOOTER */}
      <footer className="border-t border-[#1E2638] bg-[#090D14] mt-12 py-6 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>NexusLearn © 2026 • Authenticated as {currentUser.name} ({currentUser.role.toUpperCase()})</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab('about')} className="hover:text-zinc-300 transition">About System</button>
          </div>
        </div>
      </footer>

      {/* ===================== MODAL: FACULTY CREATE COURSE ===================== */}
      {showCreateCourseModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0F1522] border border-[#2B3B60] rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-[#1E2638] pb-3">
              <h3 className="text-sm font-bold text-zinc-100">Publish New Curriculum Sandbox</h3>
              <button onClick={() => setShowCreateCourseModal(false)} className="text-zinc-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleFacultyCreateCourse} className="space-y-3 text-xs">
              <div>
                <label className="text-[10px] font-mono text-zinc-400 block mb-1 uppercase">Course Title</label>
                <input
                  type="text"
                  required
                  value={newCourseForm.title}
                  onChange={(e) => setNewCourseForm({ ...newCourseForm, title: e.target.value })}
                  placeholder="e.g. Distributed Consensus with Raft & Go"
                  className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-mono text-zinc-400 block mb-1 uppercase">Category</label>
                  <select
                    value={newCourseForm.category}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, category: e.target.value })}
                    className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Web Dev">Web Dev</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="UI/UX">UI/UX</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-zinc-400 block mb-1 uppercase">Price in ₹ (INR)</label>
                  <input
                    type="number"
                    required
                    value={newCourseForm.priceINR}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, priceINR: e.target.value })}
                    className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-zinc-400 block mb-1 uppercase">Lecture 1 Title</label>
                <input
                  type="text"
                  required
                  value={newCourseForm.lectureTitle}
                  onChange={(e) => setNewCourseForm({ ...newCourseForm, lectureTitle: e.target.value })}
                  className="w-full bg-[#07090C] border border-[#1E2638] rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold transition mt-2 shadow-lg shadow-cyan-600/20"
              >
                Publish Directly to Student Catalog
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===================== MODAL: STUDENT UPI CHECKOUT ===================== */}
      {checkoutCourse && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0F1522] border border-[#2B3B60] rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-[#1E2638] pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-indigo-400 font-semibold">Instant Checkout</span>
                <h3 className="text-sm font-bold text-zinc-100">{checkoutCourse.title}</h3>
              </div>
              <button onClick={() => setCheckoutCourse(null)} className="text-zinc-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-[#07090C] border border-[#1E2638] rounded-xl text-center space-y-3">
              <div className="w-36 h-36 mx-auto bg-white p-2 rounded-lg flex items-center justify-center shadow-md">
                <div className="w-full h-full border-4 border-dashed border-zinc-900 flex flex-col items-center justify-center font-mono text-[10px] text-zinc-900 font-bold">
                  <span>SCAN WITH</span>
                  <span>GPay / PhonePe</span>
                  <span className="mt-1 text-indigo-600">nexus@upi</span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400">Scan QR using any UPI App or tap Pay to confirm.</p>
            </div>

            <div className="flex justify-between text-zinc-100 font-bold border-t border-zinc-800 pt-2 font-mono text-xs">
              <span>Total Payable:</span>
              <span className="text-emerald-400">₹{checkoutCourse.priceINR.toLocaleString('en-IN')}</span>
            </div>

            <button
              onClick={() => {
                setPaymentSuccess(true);
                setTimeout(() => {
                  if (!enrolledIds.includes(checkoutCourse.id)) {
                    setEnrolledIds([...enrolledIds, checkoutCourse.id]);
                  }
                  setRevenueINR(prev => prev + checkoutCourse.priceINR);
                  setSelectedCourseId(checkoutCourse.id);
                  setCheckoutCourse(null);
                  setPaymentSuccess(false);
                  setActiveTab('player');
                }, 1000);
              }}
              disabled={paymentSuccess}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              {paymentSuccess ? <Check className="w-4 h-4 animate-bounce" /> : <ShieldCheck className="w-4 h-4" />}
              <span>{paymentSuccess ? 'Payment Verified! Launching...' : 'Pay with UPI & Unlock'}</span>
            </button>
          </div>
        </div>
      )}

      {/* ===================== MODAL: PRINTABLE CERTIFICATE ===================== */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-scaleUp">
          <div className="bg-[#0F1522] border border-zinc-700 rounded-2xl p-6 max-w-lg w-full text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Verification of Competence</span>
              <h3 className="text-lg font-bold text-zinc-100 mt-1">{currentCourse.title}</h3>
              <p className="text-xs text-zinc-400 mt-2">
                Conferred to <strong className="text-zinc-200 font-mono">{currentUser.name}</strong> for completing all interactive system architecture verifications.
              </p>
            </div>
            <div className="p-3 bg-[#07090C] border border-[#1E2638] rounded-lg font-mono text-[11px] flex justify-between text-zinc-400">
              <span>HASH: 0x8F92...B41E</span>
              <span className="text-emerald-400 font-bold">VERIFIED STATUS</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className="px-4 py-2 bg-[#161F33] hover:bg-[#1E2B47] text-zinc-200 rounded-lg text-xs font-medium transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
