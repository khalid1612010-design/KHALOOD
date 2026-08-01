// ===== Supabase Configuration (Placeholder) =====
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_API_KEY = 'YOUR_SUPABASE_API_KEY';

// ===== Internationalization (i18n) =====
const translations = {
  en: {
    // App
    appName: 'KHALOOD',
    appSubtitle: 'Life Management Dashboard',
    
    // Navigation
    navDashboard: 'Dashboard',
    navHabits: 'Habits',
    navTasks: 'Tasks',
    navNotes: 'Notes',
    navCourses: 'Courses',
    navReflection: 'Questions',
    navCalendar: 'Calendar',
    navSettings: 'Settings',
    navSections: 'Sections',
    navManagement: 'Management',
    
    // Dashboard
    dashboardTitle: 'Dashboard',
    todayOverview: "Today's Overview",
    motivationalTitle: 'Daily Inspiration',
    dailyProgress: 'Daily Progress',
    quickActions: 'Quick Actions',
    todayHabits: "Today's Habits",
    todayTasks: "Today's Tasks",
    tasksCompleted: 'Tasks Completed',
    habitsCompleted: 'Habits Completed',
    coursesActive: 'Active Courses',
    streakDays: 'Day Streak',
    
    // Quick Actions
    addHabit: 'Add Habit',
    addTask: 'Add Task',
    addNote: 'Add Note',
    addCourse: 'Add Course',
    
    // Habits
    habitsTitle: 'Habits Tracker',
    addNewHabit: 'Add New Habit',
    editHabit: 'Edit Habit',
    habitName: 'Habit Name',
    habitNamePlaceholder: 'Enter habit name',
    habitType: 'Habit Type',
    habitDaily: 'Daily',
    habitOnce: 'One-time',
    habitTemporary: 'Temporary',
    habitStreak: 'streak',
    noHabits: 'No habits yet',
    noHabitsDesc: 'Start tracking your daily habits to build consistency',
    habitAdded: 'Habit added successfully!',
    habitUpdated: 'Habit updated successfully!',
    habitDeleted: 'Habit deleted successfully!',
    confirmDeleteHabit: 'Are you sure you want to delete this habit?',
    
    // Tasks
    tasksTitle: 'Tasks Manager',
    addNewTask: 'Add New Task',
    editTask: 'Edit Task',
    taskTitle: 'Task Title',
    taskTitlePlaceholder: 'Enter task title',
    taskDescription: 'Description (Optional)',
    taskDescPlaceholder: 'Add a description...',
    taskPriority: 'Priority',
    priorityHigh: 'High',
    priorityMedium: 'Medium',
    priorityLow: 'Low',
    taskRecurring: 'Recurring Task',
    recurringNone: 'None',
    recurringDaily: 'Daily',
    recurringWeekly: 'Weekly',
    recurringMonthly: 'Monthly',
    noTasks: 'No tasks for today',
    noTasksDesc: 'Add tasks to plan your day effectively',
    taskAdded: 'Task added successfully!',
    taskUpdated: 'Task updated successfully!',
    taskDeleted: 'Task deleted successfully!',
    confirmDeleteTask: 'Are you sure you want to delete this task?',
    highPriority: 'High Priority',
    mediumPriority: 'Medium Priority',
    lowPriority: 'Low Priority',
    
    // Notes
    notesTitle: 'Notes',
    addNewNote: 'Add New Note',
    editNote: 'Edit Note',
    noteTitle: 'Note Title',
    noteTitlePlaceholder: 'Enter note title',
    noteContent: 'Content',
    noteContentPlaceholder: 'Write your note here...',
    noteDate: 'Date',
    noteToday: 'Today',
    noteFuture: 'Future',
    noNotes: 'No notes yet',
    noNotesDesc: 'Capture your thoughts and ideas',
    noteAdded: 'Note added successfully!',
    noteUpdated: 'Note updated successfully!',
    noteDeleted: 'Note deleted successfully!',
    confirmDeleteNote: 'Are you sure you want to delete this note?',
    
    // Courses
    coursesTitle: 'Courses Tracker',
    addNewCourse: 'Add New Course',
    editCourse: 'Edit Course',
    courseName: 'Course Name',
    courseNamePlaceholder: 'Enter course name',
    totalHours: 'Total Hours',
    hoursPlaceholder: '0',
    studiedToday: 'Hours Studied Today',
    studiedPlaceholder: 'Enter hours',
    totalStudied: 'Total Studied',
    remaining: 'Remaining',
    progress: 'Progress',
    noCourses: 'No courses added',
    noCoursesDesc: 'Track your learning progress by adding courses',
    courseAdded: 'Course added successfully!',
    courseUpdated: 'Course updated successfully!',
    courseDeleted: 'Course deleted successfully!',
    confirmDeleteCourse: 'Are you sure you want to delete this course?',
    hoursStudied: 'hours studied',
    hoursRemaining: 'hours remaining',
    logStudy: 'Log Study',
    
    // Reflection
    reflectionTitle: 'Daily Questions',
    addQuestion: 'Add Question',
    editQuestion: 'Edit Question',
    questionText: 'Question',
    questionPlaceholder: 'Enter your reflection question',
    defaultQuestion1: 'What did I improve today?',
    defaultQuestion2: 'What needs improvement?',
    defaultQuestion3: 'What am I grateful for?',
    noReflection: 'No reflection questions',
    noReflectionDesc: 'Add questions to guide your daily reflection',
    questionAdded: 'Question added successfully!',
    questionUpdated: 'Question updated successfully!',
    questionDeleted: 'Question deleted successfully!',
    confirmDeleteQuestion: 'Are you sure you want to delete this question?',
    saveAnswer: 'Save Answer',
    answerSaved: 'Answer saved!',
    
    // Calendar
    calendarTitle: 'Calendar',
    today: 'Today',
    noDataForDay: 'No data for this day',
    habitsLabel: 'Habits',
    tasksLabel: 'Tasks',
    notesLabel: 'Notes',
    reflectionLabel: 'Questions',
    coursesLabel: 'Courses',
    completedHabits: 'Completed Habits',
    completedTasks: 'Completed Tasks',
    notesForDay: 'Notes',
    reflectionAnswers: 'Answers',
    courseProgress: 'Course Progress',
    studied: 'studied',
    
    // Days
    sunday: 'Sun',
    monday: 'Mon',
    tuesday: 'Tue',
    wednesday: 'Wed',
    thursday: 'Thu',
    friday: 'Fri',
    saturday: 'Sat',
    
    // Months
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',
    
    // General
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    close: 'Close',
    confirm: 'Confirm',
    search: 'Search...',
    darkMode: 'Dark Mode',
    language: 'Language',
    todayStr: 'Today',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    completed: 'Completed',
    pending: 'Pending',
    recurring: 'Recurring',
    
    // Motivational quotes
    quotes: [
      { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
      { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
      { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
      { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" }
    ]
  },
  ar: {
    // App
    appName: 'خالود',
    appSubtitle: 'لوحة إدارة الحياة',
    
    // Navigation
    navDashboard: 'الرئيسية',
    navHabits: 'العادات',
    navTasks: 'المهام',
    navNotes: 'الملاحظات',
    navCourses: 'الدورات',
    navReflection: 'أسئلة',
    navCalendar: 'التقويم',
    navSettings: 'الإعدادات',
    navSections: 'الأقسام',
    navManagement: 'الإدارة',
    
    // Dashboard
    dashboardTitle: 'الرئيسية',
    todayOverview: 'نظرة اليوم',
    motivationalTitle: 'إلهام اليوم',
    dailyProgress: 'التقدم اليومي',
    quickActions: 'إجراءات سريعة',
    todayHabits: 'عادات اليوم',
    todayTasks: 'مهام اليوم',
    tasksCompleted: 'المهام المكتملة',
    habitsCompleted: 'العادات المكتملة',
    coursesActive: 'الدورات النشطة',
    streakDays: 'أيام متتالية',
    
    // Quick Actions
    addHabit: 'إضافة عادة',
    addTask: 'إضافة مهمة',
    addNote: 'إضافة ملاحظة',
    addCourse: 'إضافة دورة',
    
    // Habits
    habitsTitle: 'متتبع العادات',
    addNewHabit: 'إضافة عادة جديدة',
    editHabit: 'تعديل العادة',
    habitName: 'اسم العادة',
    habitNamePlaceholder: 'أدخل اسم العادة',
    habitType: 'نوع العادة',
    habitDaily: 'يومية',
    habitOnce: 'لمرة واحدة',
    habitTemporary: 'مؤقتة',
    habitStreak: 'متتالية',
    noHabits: 'لا توجد عادات بعد',
    noHabitsDesc: 'ابدأ بتتبع عاداتك اليومية لبناء الاستمرارية',
    habitAdded: 'تمت إضافة العادة بنجاح!',
    habitUpdated: 'تم تحديث العادة بنجاح!',
    habitDeleted: 'تم حذف العادة بنجاح!',
    confirmDeleteHabit: 'هل أنت متأكد من حذف هذه العادة؟',
    
    // Tasks
    tasksTitle: 'مدير المهام',
    addNewTask: 'إضافة مهمة جديدة',
    editTask: 'تعديل المهمة',
    taskTitle: 'عنوان المهمة',
    taskTitlePlaceholder: 'أدخل عنوان المهمة',
    taskDescription: 'الوصف (اختياري)',
    taskDescPlaceholder: 'أضف وصفاً...',
    taskPriority: 'الأولوية',
    priorityHigh: 'عالية',
    priorityMedium: 'متوسطة',
    priorityLow: 'منخفضة',
    taskRecurring: 'مهمة متكررة',
    recurringNone: 'لا يوجد',
    recurringDaily: 'يومية',
    recurringWeekly: 'أسبوعية',
    recurringMonthly: 'شهرية',
    noTasks: 'لا توجد مهام اليوم',
    noTasksDesc: 'أضف مهاماً لتخطيط يومك بفعالية',
    taskAdded: 'تمت إضافة المهمة بنجاح!',
    taskUpdated: 'تم تحديث المهمة بنجاح!',
    taskDeleted: 'تم حذف المهمة بنجاح!',
    confirmDeleteTask: 'هل أنت متأكد من حذف هذه المهمة؟',
    highPriority: 'أولوية عالية',
    mediumPriority: 'أولوية متوسطة',
    lowPriority: 'أولوية منخفضة',
    
    // Notes
    notesTitle: 'الملاحظات',
    addNewNote: 'إضافة ملاحظة جديدة',
    editNote: 'تعديل الملاحظة',
    noteTitle: 'عنوان الملاحظة',
    noteTitlePlaceholder: 'أدخل عنوان الملاحظة',
    noteContent: 'المحتوى',
    noteContentPlaceholder: 'اكتب ملاحظتك هنا...',
    noteDate: 'التاريخ',
    noteToday: 'اليوم',
    noteFuture: 'مستقبلية',
    noNotes: 'لا توجد ملاحظات بعد',
    noNotesDesc: 'دوّن أفكارك وרעיונותك',
    noteAdded: 'تمت إضافة الملاحظة بنجاح!',
    noteUpdated: 'تم تحديث الملاحظة بنجاح!',
    noteDeleted: 'تم حذف الملاحظة بنجاح!',
    confirmDeleteNote: 'هل أنت متأكد من حذف هذه الملاحظة؟',
    
    // Courses
    coursesTitle: 'متتبع الدورات',
    addNewCourse: 'إضافة دورة جديدة',
    editCourse: 'تعديل الدورة',
    courseName: 'اسم الدورة',
    courseNamePlaceholder: 'أدخل اسم الدورة',
    totalHours: 'إجمالي الساعات',
    hoursPlaceholder: '0',
    studiedToday: 'ساعات الدراسة اليوم',
    studiedPlaceholder: 'أدخل الساعات',
    totalStudied: 'إجمالي المدروس',
    remaining: 'المتبقي',
    progress: 'التقدم',
    noCourses: 'لم تتم إضافة دورات',
    noCoursesDesc: 'تتبع تقدمك في التعلم بإضافة الدورات',
    courseAdded: 'تمت إضافة الدورة بنجاح!',
    courseUpdated: 'تم تحديث الدورة بنجاح!',
    courseDeleted: 'تم حذف الدورة بنجاح!',
    confirmDeleteCourse: 'هل أنت متأكد من حذف هذه الدورة؟',
    hoursStudied: 'ساعات مدروسة',
    hoursRemaining: 'ساعات متبقية',
    logStudy: 'تسجيل الدراسة',
    
    // Reflection
    reflectionTitle: 'أسئلة يومية',
    addQuestion: 'إضافة سؤال',
    editQuestion: 'تعديل السؤال',
    questionText: 'السؤال',
    questionPlaceholder: 'أدخل السؤال',
    defaultQuestion1: 'ما الذي تحسنت فيه اليوم؟',
    defaultQuestion2: 'ما الذي يحتاج إلى تحسين؟',
    defaultQuestion3: 'ممتن لـ؟',
    noReflection: 'لا توجد أسئلة',
    noReflectionDesc: 'أضف أسئلة يومية لتنظيم يومك',
    questionAdded: 'تمت إضافة السؤال بنجاح!',
    questionUpdated: 'تم تحديث السؤال بنجاح!',
    questionDeleted: 'تم حذف السؤال بنجاح!',
    confirmDeleteQuestion: 'هل أنت متأكد من حذف هذا السؤال؟',
    saveAnswer: 'حفظ الإجابة',
    answerSaved: 'تم حفظ الإجابة!',
    
    // Calendar
    calendarTitle: 'التقويم',
    today: 'اليوم',
    noDataForDay: 'لا توجد بيانات لهذا اليوم',
    habitsLabel: 'العادات',
    tasksLabel: 'المهام',
    notesLabel: 'الملاحظات',
    reflectionLabel: 'الأسئلة',
    coursesLabel: 'الدورات',
    completedHabits: 'العادات المكتملة',
    completedTasks: 'المهام المكتملة',
    notesForDay: 'الملاحظات',
    reflectionAnswers: 'إجابات الأسئلة',
    courseProgress: 'تقدم الدورة',
    studied: 'مدروس',
    
    // Days
    sunday: 'أحد',
    monday: 'اثنين',
    tuesday: 'ثلاثاء',
    wednesday: 'أربعاء',
    thursday: 'خميس',
    friday: 'جمعة',
    saturday: 'سبت',
    
    // Months
    january: 'يناير',
    february: 'فبراير',
    march: 'مارس',
    april: 'أبريل',
    may: 'مايو',
    june: 'يونيو',
    july: 'يوليو',
    august: 'أغسطس',
    september: 'سبتمبر',
    october: 'أكتوبر',
    november: 'نوفمبر',
    december: 'ديسمبر',
    
    // General
    save: 'حفظ',
    cancel: 'إلغاء',
    delete: 'حذف',
    edit: 'تعديل',
    add: 'إضافة',
    close: 'إغلاق',
    confirm: 'تأكيد',
    search: 'بحث...',
    darkMode: 'الوضع الداكن',
    language: 'اللغة',
    todayStr: 'اليوم',
    yesterday: 'أمس',
    tomorrow: 'غداً',
    completed: 'مكتمل',
    pending: 'قيد الانتظار',
    recurring: 'متكرر',
    
    // Motivational quotes
    quotes: [
      { text: "سر التقدم هو البدء.", author: "مارك توين" },
      { text: "دائماً يبدو مستحيلاً حتى يتم.", author: "نيلسون مانديلا" },
      { text: "لا تراقب الساعة، افعل ما تفعله. استمر.", author: "سام ليفنسون" },
      { text: "الطريقة الوحيدة لعمل عظيم هي أن تحب ما تفعله.", author: "ستيف جوبز" },
      { text: "آمن بأنك تستطيع وستكون في منتصف الطريق.", author: "ثيودور روزفلت" },
      { text: "النجاح ليس نهائياً، والفشل ليس قاتلاً: إنها الشجاعة للاستمرار.", author: "ونستون تشرشل" },
      { text: "المستقبل لأولئك الذين يؤمنون بجمال أحلامهم.", author: "إليانور روزفلت" },
      { text: "في منتصف الصعوبة تكمن الفرصة.", author: "ألبرت أينشتاين" }
    ]
  }
};

// ===== Application State =====
class AppState {
  constructor() {
    this.currentLang = localStorage.getItem('khalood-lang') || 'en';
    this.currentTheme = localStorage.getItem('khalood-theme') || 'light';
    this.currentSection = 'dashboard';
    this.currentDate = new Date();
    this.selectedCalendarDate = null;
    this.editingItem = null;
    
    this.data = {
      habits: [],
      tasks: [],
      notes: [],
      courses: [],
      reflections: [],
      dailyLogs: {}
    };
    
    this.loadData();
  }
  
  t(key) {
    return translations[this.currentLang][key] || key;
  }
  
  getTodayKey() {
    return this.formatDateKey(new Date());
  }
  
  formatDateKey(date) {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  
  getDayLog(dateKey) {
    if (!this.data.dailyLogs[dateKey]) {
      this.data.dailyLogs[dateKey] = {
        completedHabits: [],
        completedTasks: [],
        studyHours: {},
        reflectionAnswers: {}
      };
    }
    return this.data.dailyLogs[dateKey];
  }
  
  saveData() {
    const dataToSave = JSON.stringify(this.data);
    localStorage.setItem('khalood-data', dataToSave);
    
    // Future Supabase sync placeholder
    // this.syncToSupabase(dataToSave);
  }
  
  loadData() {
    const saved = localStorage.getItem('khalood-data');
    if (saved) {
      try {
        this.data = JSON.parse(saved);
        // Ensure dailyLogs exists
        if (!this.data.dailyLogs) {
          this.data.dailyLogs = {};
        }
      } catch (e) {
        console.error('Error loading data:', e);
      }
    }
    
    // Initialize default reflections if empty
    if (this.data.reflections.length === 0) {
      this.data.reflections = [
        { id: this.generateId(), question: this.t('defaultQuestion1') },
        { id: this.generateId(), question: this.t('defaultQuestion2') },
        { id: this.generateId(), question: this.t('defaultQuestion3') }
      ];
      this.saveData();
    }
  }
  
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  
  // Future Supabase integration
  async syncToSupabase(data) {
    if (SUPABASE_URL === 'YOUR_SUPABASE_URL') return;
    
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/user_data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_API_KEY,
          'Authorization': `Bearer ${SUPABASE_API_KEY}`
        },
        body: data
      });
      return await response.json();
    } catch (error) {
      console.error('Supabase sync error:', error);
    }
  }
}

// ===== Initialize App State =====
const state = new AppState();

// ===== DOM Utilities =====
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function createElement(tag, className, innerHTML) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

// ===== Toast Notifications =====
function showToast(message, type = 'success') {
  const container = $('.toast-container');
  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ'
  };
  
  const toast = createElement('div', `toast ${type}`);
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ===== Modal Management =====
function openModal(title, content, onSave) {
  const overlay = $('.modal-overlay');
  const modal = overlay.querySelector('.modal');
  
  modal.querySelector('.modal-title').textContent = title;
  modal.querySelector('.modal-body').innerHTML = content;
  
  const saveBtn = modal.querySelector('.modal-save');
  const newSaveBtn = saveBtn.cloneNode(true);
  saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
  
  newSaveBtn.addEventListener('click', () => {
    if (onSave) onSave();
    closeModal();
  });
  
  overlay.classList.add('active');
}

function closeModal() {
  $('.modal-overlay').classList.remove('active');
}

// ===== Theme Management =====
function toggleTheme() {
  state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.currentTheme);
  localStorage.setItem('khalood-theme', state.currentTheme);
  updateThemeToggle();
}

function updateThemeToggle() {
  const btn = $('.theme-toggle');
  if (btn) {
    btn.innerHTML = state.currentTheme === 'dark' ? '☀️' : '🌙';
    btn.title = state.currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
}

// ===== Language Management =====
function toggleLanguage() {
  state.currentLang = state.currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('khalood-lang', state.currentLang);
  applyLanguage();
  renderCurrentSection();
}

function applyLanguage() {
  const html = document.documentElement;
  html.setAttribute('lang', state.currentLang);
  html.setAttribute('dir', state.currentLang === 'ar' ? 'rtl' : 'ltr');
  
  // Update all translatable elements
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' && el.type !== 'checkbox') {
      el.placeholder = state.t(key);
    } else if (el.tagName === 'TEXTAREA') {
      el.placeholder = state.t(key);
    } else {
      el.textContent = state.t(key);
    }
  });
  
  // Update language toggle button
  const langBtn = $('.lang-toggle');
  if (langBtn) {
    langBtn.textContent = state.currentLang === 'en' ? 'عربي' : 'EN';
  }
  
  // Update page title
  const titleMap = {
    dashboard: 'dashboardTitle',
    habits: 'habitsTitle',
    tasks: 'tasksTitle',
    notes: 'notesTitle',
    courses: 'coursesTitle',
    reflection: 'reflectionTitle',
    calendar: 'calendarTitle'
  };
  
  const pageTitle = $('.page-title');
  if (pageTitle && titleMap[state.currentSection]) {
    pageTitle.textContent = state.t(titleMap[state.currentSection]);
  }
}

// ===== Navigation =====
function navigateTo(section) {
  state.currentSection = section;
  
  // Update active nav item
  $$('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === section);
  });
  
  // Update active section
  $$('.section').forEach(sec => {
    sec.classList.toggle('active', sec.id === `section-${section}`);
  });
  
  // Update page title
  const titleMap = {
    dashboard: 'dashboardTitle',
    habits: 'habitsTitle',
    tasks: 'tasksTitle',
    notes: 'notesTitle',
    courses: 'coursesTitle',
    reflection: 'reflectionTitle',
    calendar: 'calendarTitle'
  };
  
  const pageTitle = $('.page-title');
  if (pageTitle && titleMap[section]) {
    pageTitle.textContent = state.t(titleMap[section]);
  }
  
  // Render section content
  renderCurrentSection();
  
  // Close mobile sidebar
  closeSidebar();
}

function renderCurrentSection() {
  switch (state.currentSection) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'habits':
      renderHabits();
      break;
    case 'tasks':
      renderTasks();
      break;
    case 'notes':
      renderNotes();
      break;
    case 'courses':
      renderCourses();
      break;
    case 'reflection':
      renderReflection();
      break;
    case 'calendar':
      renderCalendar();
      break;
  }
}

// ===== Sidebar Mobile =====
function toggleSidebar() {
  const sidebar = $('.sidebar');
  const overlay = $('.sidebar-overlay');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

function closeSidebar() {
  const sidebar = $('.sidebar');
  const overlay = $('.sidebar-overlay');
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

// ===== Dashboard Rendering =====
function renderDashboard() {
  renderMotivationalQuote();
  renderDailyProgress();
  renderQuickActions();
  renderDashboardStats();
  renderTodaySummary();
  renderTodayHabits();
  renderTodayTasks();
}

function renderMotivationalQuote() {
  const quotes = state.t('quotes');
  const today = new Date().getDate();
  const quote = quotes[today % quotes.length];
  
  const container = $('.motivational-card .motivational-content');
  if (container) {
    container.innerHTML = `
      <p class="motivational-quote">"${quote.text}"</p>
      <p class="motivational-author">— ${quote.author}</p>
    `;
  }
}

function renderDailyProgress() {
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  const todayHabits = state.data.habits.filter(h => {
    if (h.type === 'daily') return true;
    if (h.type === 'temporary' && h.createdAt === todayKey) return true;
    if (h.type === 'once' && !dayLog.completedHabits.includes(h.id)) return true;
    return false;
  });
  
  const completedCount = todayHabits.filter(h => dayLog.completedHabits.includes(h.id)).length;
  const totalCount = todayHabits.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  
  const progressValue = $('.progress-ring-value');
  const progressRing = $('.progress-ring-fill');
  
  if (progressValue) {
    progressValue.textContent = `${percentage}%`;
  }
  
  if (progressRing) {
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (percentage / 100) * circumference;
    progressRing.style.strokeDasharray = circumference;
    progressRing.style.strokeDashoffset = offset;
  }
  
  // Update progress steps
  const stepsContainer = $('.progress-steps');
  if (stepsContainer) {
    const steps = 10;
    const filledSteps = Math.round((percentage / 100) * steps);
    stepsContainer.innerHTML = Array.from({ length: steps }, (_, i) => 
      `<div class="progress-step ${i < filledSteps ? 'filled' : ''}"></div>`
    ).join('');
  }
}

function renderQuickActions() {
  const container = $('.quick-actions');
  if (!container) return;
  
  container.innerHTML = `
    <div class="quick-action" onclick="showAddHabitModal()">
      <div class="quick-action-icon" style="background: var(--success-light); color: var(--success);">🎯</div>
      <span class="quick-action-label">${state.t('addHabit')}</span>
    </div>
    <div class="quick-action" onclick="showAddTaskModal()">
      <div class="quick-action-icon" style="background: var(--accent-primary-light); color: var(--accent-primary);">✓</div>
      <span class="quick-action-label">${state.t('addTask')}</span>
    </div>
    <div class="quick-action" onclick="showAddNoteModal()">
      <div class="quick-action-icon" style="background: var(--warning-light); color: var(--warning);">📝</div>
      <span class="quick-action-label">${state.t('addNote')}</span>
    </div>
    <div class="quick-action" onclick="showAddCourseModal()">
      <div class="quick-action-icon" style="background: var(--accent-secondary-light); color: var(--accent-secondary);">📚</div>
      <span class="quick-action-label">${state.t('addCourse')}</span>
    </div>
  `;
}

function renderDashboardStats() {
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  
  const todayHabits = state.data.habits.filter(h => {
    if (h.type === 'daily') return true;
    if (h.type === 'temporary' && h.createdAt === todayKey) return true;
    if (h.type === 'once' && !dayLog.completedHabits.includes(h.id)) return true;
    return false;
  });
  
  const completedHabits = todayHabits.filter(h => dayLog.completedHabits.includes(h.id)).length;
  const completedTasks = state.data.tasks.filter(t => dayLog.completedTasks.includes(t.id)).length;
  const activeCourses = state.data.courses.length;
  
  // Calculate max streak
  let maxStreak = 0;
  state.data.habits.forEach(h => {
    if (h.streak && h.streak > maxStreak) maxStreak = h.streak;
  });
  
  const statsGrid = $('.dashboard-grid');
  if (statsGrid) {
    statsGrid.innerHTML = `
      <div class="stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon blue">✓</div>
        </div>
        <div class="stat-card-value">${completedTasks}</div>
        <div class="stat-card-label">${state.t('tasksCompleted')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon green">🎯</div>
        </div>
        <div class="stat-card-value">${completedHabits}/${todayHabits.length}</div>
        <div class="stat-card-label">${state.t('habitsCompleted')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon purple">📚</div>
        </div>
        <div class="stat-card-value">${activeCourses}</div>
        <div class="stat-card-label">${state.t('coursesActive')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon orange">🔥</div>
        </div>
        <div class="stat-card-value">${maxStreak}</div>
        <div class="stat-card-label">${state.t('streakDays')}</div>
      </div>
    `;
  }
}

function renderTodaySummary() {
  const container = $('.today-summary');
  if (!container) return;
  
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  
  const pendingTasks = state.data.tasks.filter(t => !dayLog.completedTasks.includes(t.id)).length;
  const todayNotes = state.data.notes.filter(n => n.date === todayKey).length;
  
  container.innerHTML = `
    <div class="summary-item">
      <div class="summary-icon" style="background: var(--warning-light); color: var(--warning);">📋</div>
      <div class="summary-content">
        <div class="summary-value">${pendingTasks}</div>
        <div class="summary-label">${state.t('pending')} ${state.t('tasksLabel')}</div>
      </div>
    </div>
    <div class="summary-item">
      <div class="summary-icon" style="background: var(--info-light); color: var(--info);">📝</div>
      <div class="summary-content">
        <div class="summary-value">${todayNotes}</div>
        <div class="summary-label">${state.t('notesLabel')}</div>
      </div>
    </div>
  `;
}

function renderTodayHabits() {
  const container = $('.today-habits-list');
  if (!container) return;
  
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  
  const todayHabits = state.data.habits.filter(h => {
    if (h.type === 'daily') return true;
    if (h.type === 'temporary' && h.createdAt === todayKey) return true;
    if (h.type === 'once' && !dayLog.completedHabits.includes(h.id)) return true;
    return false;
  }).slice(0, 5);
  
  if (todayHabits.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 30px;">
        <p class="empty-state-description">${state.t('noHabits')}</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = todayHabits.map(habit => `
    <div class="habit-item">
      <div class="habit-checkbox ${dayLog.completedHabits.includes(habit.id) ? 'checked' : ''}" 
           onclick="toggleHabit('${habit.id}')"></div>
      <div class="habit-info">
        <div class="habit-name">${habit.name}</div>
        <div class="habit-meta">
          <span class="habit-type-badge ${habit.type}">${state.t('habit' + habit.type.charAt(0).toUpperCase() + habit.type.slice(1))}</span>
          ${habit.streak > 0 ? `<span class="habit-streak">🔥 ${habit.streak} ${state.t('habitStreak')}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function renderTodayTasks() {
  const container = $('.today-tasks-list');
  if (!container) return;
  
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  
  const todayTasks = state.data.tasks.slice(0, 5);
  
  if (todayTasks.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 30px;">
        <p class="empty-state-description">${state.t('noTasks')}</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = todayTasks.map(task => `
    <div class="task-item ${dayLog.completedTasks.includes(task.id) ? 'completed' : ''}">
      <div class="task-checkbox ${dayLog.completedTasks.includes(task.id) ? 'checked' : ''}" 
           onclick="toggleTask('${task.id}')"></div>
      <div class="task-content">
        <div class="task-title">${task.title}</div>
        <div class="task-footer">
          <span class="task-priority ${task.priority}">${state.t('priority' + task.priority.charAt(0).toUpperCase() + task.priority.slice(1))}</span>
          ${task.recurring !== 'none' ? `<span class="task-recurring">🔄 ${state.t('recurring' + task.recurring.charAt(0).toUpperCase() + task.recurring.slice(1))}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// ===== Habits =====
function renderHabits() {
  const container = $('#habits-list');
  if (!container) return;
  
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  
  if (state.data.habits.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🎯</div>
        <h3 class="empty-state-title">${state.t('noHabits')}</h3>
        <p class="empty-state-description">${state.t('noHabitsDesc')}</p>
        <button class="btn btn-primary" onclick="showAddHabitModal()">
          <span>+</span> ${state.t('addNewHabit')}
        </button>
      </div>
    `;
    return;
  }
  
  container.innerHTML = state.data.habits.map(habit => `
    <div class="habit-item" data-id="${habit.id}">
      <div class="habit-checkbox ${dayLog.completedHabits.includes(habit.id) ? 'checked' : ''}" 
           onclick="toggleHabit('${habit.id}')"></div>
      <div class="habit-info">
        <div class="habit-name">${habit.name}</div>
        <div class="habit-meta">
          <span class="habit-type-badge ${habit.type}">${state.t('habit' + habit.type.charAt(0).toUpperCase() + habit.type.slice(1))}</span>
          ${habit.streak > 0 ? `<span class="habit-streak">🔥 ${habit.streak} ${state.t('habitStreak')}</span>` : ''}
        </div>
      </div>
      <div class="habit-actions">
        <button class="btn btn-ghost btn-icon" onclick="showEditHabitModal('${habit.id}')" title="${state.t('edit')}">✏️</button>
        <button class="btn btn-ghost btn-icon" onclick="deleteHabit('${habit.id}')" title="${state.t('delete')}">🗑️</button>
      </div>
    </div>
  `).join('');
}

function showAddHabitModal() {
  state.editingItem = null;
  const content = `
    <div class="form-group">
      <label class="form-label">${state.t('habitName')}</label>
      <input type="text" class="form-input" id="habit-name-input" placeholder="${state.t('habitNamePlaceholder')}">
    </div>
    <div class="form-group">
      <label class="form-label">${state.t('habitType')}</label>
      <select class="form-select" id="habit-type-input">
        <option value="daily">${state.t('habitDaily')}</option>
        <option value="once">${state.t('habitOnce')}</option>
        <option value="temporary">${state.t('habitTemporary')}</option>
      </select>
    </div>
  `;
  
  openModal(state.t('addNewHabit'), content, saveHabit);
}

function showEditHabitModal(id) {
  const habit = state.data.habits.find(h => h.id === id);
  if (!habit) return;
  
  state.editingItem = habit;
  const content = `
    <div class="form-group">
      <label class="form-label">${state.t('habitName')}</label>
      <input type="text" class="form-input" id="habit-name-input" value="${habit.name}" placeholder="${state.t('habitNamePlaceholder')}">
    </div>
    <div class="form-group">
      <label class="form-label">${state.t('habitType')}</label>
      <select class="form-select" id="habit-type-input">
        <option value="daily" ${habit.type === 'daily' ? 'selected' : ''}>${state.t('habitDaily')}</option>
        <option value="once" ${habit.type === 'once' ? 'selected' : ''}>${state.t('habitOnce')}</option>
        <option value="temporary" ${habit.type === 'temporary' ? 'selected' : ''}>${state.t('habitTemporary')}</option>
      </select>
    </div>
  `;
  
  openModal(state.t('editHabit'), content, saveHabit);
}

function saveHabit() {
  const name = $('#habit-name-input').value.trim();
  const type = $('#habit-type-input').value;
  
  if (!name) {
    showToast(state.t('habitNamePlaceholder'), 'error');
    return;
  }
  
  if (state.editingItem) {
    // Update existing habit
    const index = state.data.habits.findIndex(h => h.id === state.editingItem.id);
    if (index !== -1) {
      state.data.habits[index].name = name;
      state.data.habits[index].type = type;
      state.data.habits[index].updatedAt = state.getTodayKey();
    }
    showToast(state.t('habitUpdated'));
  } else {
    // Add new habit
    state.data.habits.push({
      id: state.generateId(),
      name,
      type,
      streak: 0,
      createdAt: state.getTodayKey(),
      updatedAt: state.getTodayKey()
    });
    showToast(state.t('habitAdded'));
  }
  
  state.saveData();
  renderCurrentSection();
}

function toggleHabit(id) {
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  const habit = state.data.habits.find(h => h.id === id);
  
  if (!habit) return;
  
  const index = dayLog.completedHabits.indexOf(id);
  if (index === -1) {
    dayLog.completedHabits.push(id);
    // Update streak
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = state.formatDateKey(yesterday);
    const yesterdayLog = state.getDayLog(yesterdayKey);
    
    if (yesterdayLog.completedHabits.includes(id)) {
      habit.streak = (habit.streak || 0) + 1;
    } else {
      habit.streak = 1;
    }
  } else {
    dayLog.completedHabits.splice(index, 1);
    habit.streak = Math.max(0, (habit.streak || 1) - 1);
  }
  
  state.saveData();
  renderCurrentSection();
}

function deleteHabit(id) {
  if (confirm(state.t('confirmDeleteHabit'))) {
    state.data.habits = state.data.habits.filter(h => h.id !== id);
    state.saveData();
    renderCurrentSection();
    showToast(state.t('habitDeleted'));
  }
}

// ===== Tasks =====
function renderTasks() {
  const container = $('#tasks-list');
  if (!container) return;
  
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  
  if (state.data.tasks.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">✓</div>
        <h3 class="empty-state-title">${state.t('noTasks')}</h3>
        <p class="empty-state-description">${state.t('noTasksDesc')}</p>
        <button class="btn btn-primary" onclick="showAddTaskModal()">
          <span>+</span> ${state.t('addNewTask')}
        </button>
      </div>
    `;
    return;
  }
  
  // Group tasks by priority
  const highPriority = state.data.tasks.filter(t => t.priority === 'high');
  const mediumPriority = state.data.tasks.filter(t => t.priority === 'medium');
  const lowPriority = state.data.tasks.filter(t => t.priority === 'low');
  
  let html = '';
  
  const renderGroup = (title, tasks) => {
    if (tasks.length === 0) return '';
    return `
      <div class="tasks-group">
        <div class="tasks-group-header">
          <span class="tasks-group-title">${title}</span>
          <span class="tasks-group-count">${tasks.length}</span>
        </div>
        ${tasks.map(task => `
          <div class="task-item ${dayLog.completedTasks.includes(task.id) ? 'completed' : ''}">
            <div class="task-checkbox ${dayLog.completedTasks.includes(task.id) ? 'checked' : ''}" 
                 onclick="toggleTask('${task.id}')"></div>
            <div class="task-content">
              <div class="task-title">${task.title}</div>
              ${task.description ? `<div class="task-description">${task.description}</div>` : ''}
              <div class="task-footer">
                <span class="task-priority ${task.priority}">${state.t('priority' + task.priority.charAt(0).toUpperCase() + task.priority.slice(1))}</span>
                ${task.recurring !== 'none' ? `<span class="task-recurring">🔄 ${state.t('recurring')}</span>` : ''}
              </div>
            </div>
            <div class="task-actions">
              <button class="btn btn-ghost btn-icon" onclick="showEditTaskModal('${task.id}')" title="${state.t('edit')}">✏️</button>
              <button class="btn btn-ghost btn-icon" onclick="deleteTask('${task.id}')" title="${state.t('delete')}">🗑️</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  };
  
  html += renderGroup(state.t('highPriority'), highPriority);
  html += renderGroup(state.t('mediumPriority'), mediumPriority);
  html += renderGroup(state.t('lowPriority'), lowPriority);
  
  container.innerHTML = html;
}

function showAddTaskModal() {
  state.editingItem = null;
  const content = `
    <div class="form-group">
      <label class="form-label">${state.t('taskTitle')}</label>
      <input type="text" class="form-input" id="task-title-input" placeholder="${state.t('taskTitlePlaceholder')}">
    </div>
    <div class="form-group">
      <label class="form-label">${state.t('taskDescription')}</label>
      <textarea class="form-textarea" id="task-desc-input" placeholder="${state.t('taskDescPlaceholder')}" rows="3"></textarea>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">${state.t('taskPriority')}</label>
        <select class="form-select" id="task-priority-input">
          <option value="low">${state.t('priorityLow')}</option>
          <option value="medium" selected>${state.t('priorityMedium')}</option>
          <option value="high">${state.t('priorityHigh')}</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">${state.t('taskRecurring')}</label>
        <select class="form-select" id="task-recurring-input">
          <option value="none">${state.t('recurringNone')}</option>
          <option value="daily">${state.t('recurringDaily')}</option>
          <option value="weekly">${state.t('recurringWeekly')}</option>
          <option value="monthly">${state.t('recurringMonthly')}</option>
        </select>
      </div>
    </div>
  `;
  
  openModal(state.t('addNewTask'), content, saveTask);
}

function showEditTaskModal(id) {
  const task = state.data.tasks.find(t => t.id === id);
  if (!task) return;
  
  state.editingItem = task;
  const content = `
    <div class="form-group">
      <label class="form-label">${state.t('taskTitle')}</label>
      <input type="text" class="form-input" id="task-title-input" value="${task.title}" placeholder="${state.t('taskTitlePlaceholder')}">
    </div>
    <div class="form-group">
      <label class="form-label">${state.t('taskDescription')}</label>
      <textarea class="form-textarea" id="task-desc-input" placeholder="${state.t('taskDescPlaceholder')}" rows="3">${task.description || ''}</textarea>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">${state.t('taskPriority')}</label>
        <select class="form-select" id="task-priority-input">
          <option value="low" ${task.priority === 'low' ? 'selected' : ''}>${state.t('priorityLow')}</option>
          <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>${state.t('priorityMedium')}</option>
          <option value="high" ${task.priority === 'high' ? 'selected' : ''}>${state.t('priorityHigh')}</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">${state.t('taskRecurring')}</label>
        <select class="form-select" id="task-recurring-input">
          <option value="none" ${task.recurring === 'none' ? 'selected' : ''}>${state.t('recurringNone')}</option>
          <option value="daily" ${task.recurring === 'daily' ? 'selected' : ''}>${state.t('recurringDaily')}</option>
          <option value="weekly" ${task.recurring === 'weekly' ? 'selected' : ''}>${state.t('recurringWeekly')}</option>
          <option value="monthly" ${task.recurring === 'monthly' ? 'selected' : ''}>${state.t('recurringMonthly')}</option>
        </select>
      </div>
    </div>
  `;
  
  openModal(state.t('editTask'), content, saveTask);
}

function saveTask() {
  const title = $('#task-title-input').value.trim();
  const description = $('#task-desc-input').value.trim();
  const priority = $('#task-priority-input').value;
  const recurring = $('#task-recurring-input').value;
  
  if (!title) {
    showToast(state.t('taskTitlePlaceholder'), 'error');
    return;
  }
  
  if (state.editingItem) {
    const index = state.data.tasks.findIndex(t => t.id === state.editingItem.id);
    if (index !== -1) {
      state.data.tasks[index] = {
        ...state.data.tasks[index],
        title,
        description,
        priority,
        recurring,
        updatedAt: state.getTodayKey()
      };
    }
    showToast(state.t('taskUpdated'));
  } else {
    state.data.tasks.push({
      id: state.generateId(),
      title,
      description,
      priority,
      recurring,
      createdAt: state.getTodayKey(),
      updatedAt: state.getTodayKey()
    });
    showToast(state.t('taskAdded'));
  }
  
  state.saveData();
  renderCurrentSection();
}

function toggleTask(id) {
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  
  const index = dayLog.completedTasks.indexOf(id);
  if (index === -1) {
    dayLog.completedTasks.push(id);
  } else {
    dayLog.completedTasks.splice(index, 1);
  }
  
  state.saveData();
  renderCurrentSection();
}

function deleteTask(id) {
  if (confirm(state.t('confirmDeleteTask'))) {
    state.data.tasks = state.data.tasks.filter(t => t.id !== id);
    state.saveData();
    renderCurrentSection();
    showToast(state.t('taskDeleted'));
  }
}

// ===== Notes =====
function renderNotes() {
  const container = $('#notes-grid');
  if (!container) return;
  
  if (state.data.notes.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state-icon">📝</div>
        <h3 class="empty-state-title">${state.t('noNotes')}</h3>
        <p class="empty-state-description">${state.t('noNotesDesc')}</p>
        <button class="btn btn-primary" onclick="showAddNoteModal()">
          <span>+</span> ${state.t('addNewNote')}
        </button>
      </div>
    `;
    return;
  }
  
  const todayKey = state.getTodayKey();
  
  container.innerHTML = state.data.notes.map(note => {
    const isFuture = note.date > todayKey;
    const dateObj = new Date(note.date + 'T00:00:00');
    const dateStr = dateObj.toLocaleDateString(state.currentLang === 'ar' ? 'ar-SA' : 'en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    
    return `
      <div class="note-card">
        <div class="note-card-header">
          <span class="note-date">📅 ${dateStr}</span>
          <span class="note-type ${isFuture ? 'future' : 'today'}">${isFuture ? state.t('noteFuture') : state.t('noteToday')}</span>
        </div>
        <h3 class="note-title">${note.title}</h3>
        <p class="note-content">${note.content}</p>
        <div class="note-card-actions">
          <button class="btn btn-ghost btn-sm" onclick="showEditNoteModal('${note.id}')">✏️ ${state.t('edit')}</button>
          <button class="btn btn-ghost btn-sm" onclick="deleteNote('${note.id}')">🗑️ ${state.t('delete')}</button>
        </div>
      </div>
    `;
  }).join('');
}

function showAddNoteModal() {
  state.editingItem = null;
  const todayKey = state.getTodayKey();
  const content = `
    <div class="form-group">
      <label class="form-label">${state.t('noteTitle')}</label>
      <input type="text" class="form-input" id="note-title-input" placeholder="${state.t('noteTitlePlaceholder')}">
    </div>
    <div class="form-group">
      <label class="form-label">${state.t('noteContent')}</label>
      <textarea class="form-textarea" id="note-content-input" placeholder="${state.t('noteContentPlaceholder')}" rows="5"></textarea>
    </div>
    <div class="form-group">
      <label class="form-label">${state.t('noteDate')}</label>
      <input type="date" class="form-input" id="note-date-input" value="${todayKey}">
    </div>
  `;
  
  openModal(state.t('addNewNote'), content, saveNote);
}

function showEditNoteModal(id) {
  const note = state.data.notes.find(n => n.id === id);
  if (!note) return;
  
  state.editingItem = note;
  const content = `
    <div class="form-group">
      <label class="form-label">${state.t('noteTitle')}</label>
      <input type="text" class="form-input" id="note-title-input" value="${note.title}" placeholder="${state.t('noteTitlePlaceholder')}">
    </div>
    <div class="form-group">
      <label class="form-label">${state.t('noteContent')}</label>
      <textarea class="form-textarea" id="note-content-input" placeholder="${state.t('noteContentPlaceholder')}" rows="5">${note.content}</textarea>
    </div>
    <div class="form-group">
      <label class="form-label">${state.t('noteDate')}</label>
      <input type="date" class="form-input" id="note-date-input" value="${note.date}">
    </div>
  `;
  
  openModal(state.t('editNote'), content, saveNote);
}

function saveNote() {
  const title = $('#note-title-input').value.trim();
  const content = $('#note-content-input').value.trim();
  const date = $('#note-date-input').value;
  
  if (!title || !content) {
    showToast('Please fill in all fields', 'error');
    return;
  }
  
  if (state.editingItem) {
    const index = state.data.notes.findIndex(n => n.id === state.editingItem.id);
    if (index !== -1) {
      state.data.notes[index] = {
        ...state.data.notes[index],
        title,
        content,
        date,
        updatedAt: state.getTodayKey()
      };
    }
    showToast(state.t('noteUpdated'));
  } else {
    state.data.notes.push({
      id: state.generateId(),
      title,
      content,
      date,
      createdAt: state.getTodayKey(),
      updatedAt: state.getTodayKey()
    });
    showToast(state.t('noteAdded'));
  }
  
  state.saveData();
  renderCurrentSection();
}

function deleteNote(id) {
  if (confirm(state.t('confirmDeleteNote'))) {
    state.data.notes = state.data.notes.filter(n => n.id !== id);
    state.saveData();
    renderCurrentSection();
    showToast(state.t('noteDeleted'));
  }
}

// ===== Courses =====
function renderCourses() {
  const container = $('#courses-list');
  if (!container) return;
  
  if (state.data.courses.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📚</div>
        <h3 class="empty-state-title">${state.t('noCourses')}</h3>
        <p class="empty-state-description">${state.t('noCoursesDesc')}</p>
        <button class="btn btn-primary" onclick="showAddCourseModal()">
          <span>+</span> ${state.t('addNewCourse')}
        </button>
      </div>
    `;
    return;
  }
  
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  
  container.innerHTML = state.data.courses.map(course => {
    const totalStudied = calculateTotalStudied(course.id);
    const remaining = Math.max(0, course.totalHours - totalStudied);
    const progress = course.totalHours > 0 ? Math.round((totalStudied / course.totalHours) * 100) : 0;
    const todayStudied = dayLog.studyHours[course.id] || 0;
    
    return `
      <div class="course-card">
        <div class="course-header">
          <div class="course-info">
            <h3 class="course-name">${course.name}</h3>
            <p class="course-meta">${state.t('totalHours')}: ${course.totalHours}h</p>
          </div>
          <div class="course-actions">
            <button class="btn btn-ghost btn-icon" onclick="showEditCourseModal('${course.id}')" title="${state.t('edit')}">✏️</button>
            <button class="btn btn-ghost btn-icon" onclick="deleteCourse('${course.id}')" title="${state.t('delete')}">🗑️</button>
          </div>
        </div>
        <div class="course-progress-section">
          <div class="course-stats">
            <div class="course-stat">
              <div class="course-stat-value">${totalStudied}h</div>
              <div class="course-stat-label">${state.t('totalStudied')}</div>
            </div>
            <div class="course-stat">
              <div class="course-stat-value">${remaining}h</div>
              <div class="course-stat-label">${state.t('remaining')}</div>
            </div>
            <div class="course-stat">
              <div class="course-stat-value">${progress}%</div>
              <div class="course-stat-label">${state.t('progress')}</div>
            </div>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${progress}%"></div>
          </div>
          <div class="progress-text">
            <span>${totalStudied} ${state.t('hoursStudied')}</span>
            <span>${remaining} ${state.t('hoursRemaining')}</span>
          </div>
        </div>
        <div class="course-actions">
          <div class="course-input-group">
            <input type="number" class="course-input" id="study-${course.id}" placeholder="${state.t('studiedPlaceholder')}" min="0" step="0.5" value="${todayStudied || ''}">
            <button class="btn btn-primary btn-sm" onclick="logStudyHours('${course.id}')">
              ${state.t('logStudy')}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function calculateTotalStudied(courseId) {
  let total = 0;
  Object.values(state.data.dailyLogs).forEach(log => {
    if (log.studyHours && log.studyHours[courseId]) {
      total += log.studyHours[courseId];
    }
  });
  return total;
}

function showAddCourseModal() {
  state.editingItem = null;
  const content = `
    <div class="form-group">
      <label class="form-label">${state.t('courseName')}</label>
      <input type="text" class="form-input" id="course-name-input" placeholder="${state.t('courseNamePlaceholder')}">
    </div>
    <div class="form-group">
      <label class="form-label">${state.t('totalHours')}</label>
      <input type="number" class="form-input" id="course-hours-input" placeholder="${state.t('hoursPlaceholder')}" min="1">
    </div>
  `;
  
  openModal(state.t('addNewCourse'), content, saveCourse);
}

function showEditCourseModal(id) {
  const course = state.data.courses.find(c => c.id === id);
  if (!course) return;
  
  state.editingItem = course;
  const content = `
    <div class="form-group">
      <label class="form-label">${state.t('courseName')}</label>
      <input type="text" class="form-input" id="course-name-input" value="${course.name}" placeholder="${state.t('courseNamePlaceholder')}">
    </div>
    <div class="form-group">
      <label class="form-label">${state.t('totalHours')}</label>
      <input type="number" class="form-input" id="course-hours-input" value="${course.totalHours}" placeholder="${state.t('hoursPlaceholder')}" min="1">
    </div>
  `;
  
  openModal(state.t('editCourse'), content, saveCourse);
}

function saveCourse() {
  const name = $('#course-name-input').value.trim();
  const totalHours = parseFloat($('#course-hours-input').value);
  
  if (!name || isNaN(totalHours) || totalHours <= 0) {
    showToast('Please fill in all fields correctly', 'error');
    return;
  }
  
  if (state.editingItem) {
    const index = state.data.courses.findIndex(c => c.id === state.editingItem.id);
    if (index !== -1) {
      state.data.courses[index] = {
        ...state.data.courses[index],
        name,
        totalHours,
        updatedAt: state.getTodayKey()
      };
    }
    showToast(state.t('courseUpdated'));
  } else {
    state.data.courses.push({
      id: state.generateId(),
      name,
      totalHours,
      createdAt: state.getTodayKey(),
      updatedAt: state.getTodayKey()
    });
    showToast(state.t('courseAdded'));
  }
  
  state.saveData();
  renderCurrentSection();
}

function logStudyHours(courseId) {
  const input = $(`#study-${courseId}`);
  const hours = parseFloat(input.value);
  
  if (isNaN(hours) || hours < 0) {
    showToast('Please enter valid hours', 'error');
    return;
  }
  
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  dayLog.studyHours[courseId] = hours;
  
  state.saveData();
  renderCurrentSection();
  showToast(`${hours}h ${state.t('hoursStudied')}`);
}

function deleteCourse(id) {
  if (confirm(state.t('confirmDeleteCourse'))) {
    state.data.courses = state.data.courses.filter(c => c.id !== id);
    state.saveData();
    renderCurrentSection();
    showToast(state.t('courseDeleted'));
  }
}

// ===== Reflection =====
function renderReflection() {
  const container = $('#reflection-list');
  if (!container) return;
  
  if (state.data.reflections.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">💭</div>
        <h3 class="empty-state-title">${state.t('noReflection')}</h3>
        <p class="empty-state-description">${state.t('noReflectionDesc')}</p>
        <button class="btn btn-primary" onclick="showAddQuestionModal()">
          <span>+</span> ${state.t('addQuestion')}
        </button>
      </div>
    `;
    return;
  }
  
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  
  container.innerHTML = state.data.reflections.map(ref => {
    const answer = dayLog.reflectionAnswers[ref.id] || '';
    
    return `
      <div class="reflection-item">
        <div class="reflection-question">
          <span class="reflection-question-icon">💭</span>
          <span>${ref.question}</span>
        </div>
        <textarea class="reflection-answer" id="answer-${ref.id}" placeholder="${state.t('taskDescPlaceholder')}">${answer}</textarea>
        <div class="reflection-actions">
          <button class="btn btn-ghost btn-sm" onclick="showEditQuestionModal('${ref.id}')">✏️ ${state.t('edit')}</button>
          <button class="btn btn-ghost btn-sm" onclick="deleteQuestion('${ref.id}')">🗑️ ${state.t('delete')}</button>
          <button class="btn btn-primary btn-sm" onclick="saveAnswer('${ref.id}')">${state.t('saveAnswer')}</button>
        </div>
      </div>
    `;
  }).join('');
}

function showAddQuestionModal() {
  state.editingItem = null;
  const content = `
    <div class="form-group">
      <label class="form-label">${state.t('questionText')}</label>
      <textarea class="form-textarea" id="question-input" placeholder="${state.t('questionPlaceholder')}" rows="3"></textarea>
    </div>
  `;
  
  openModal(state.t('addQuestion'), content, saveQuestion);
}

function showEditQuestionModal(id) {
  const question = state.data.reflections.find(r => r.id === id);
  if (!question) return;
  
  state.editingItem = question;
  const content = `
    <div class="form-group">
      <label class="form-label">${state.t('questionText')}</label>
      <textarea class="form-textarea" id="question-input" placeholder="${state.t('questionPlaceholder')}" rows="3">${question.question}</textarea>
    </div>
  `;
  
  openModal(state.t('editQuestion'), content, saveQuestion);
}

function saveQuestion() {
  const question = $('#question-input').value.trim();
  
  if (!question) {
    showToast('Please enter a question', 'error');
    return;
  }
  
  if (state.editingItem) {
    const index = state.data.reflections.findIndex(r => r.id === state.editingItem.id);
    if (index !== -1) {
      state.data.reflections[index].question = question;
    }
    showToast(state.t('questionUpdated'));
  } else {
    state.data.reflections.push({
      id: state.generateId(),
      question
    });
    showToast(state.t('questionAdded'));
  }
  
  state.saveData();
  renderCurrentSection();
}

function saveAnswer(id) {
  const textarea = $(`#answer-${id}`);
  const answer = textarea.value.trim();
  
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  dayLog.reflectionAnswers[id] = answer;
  
  state.saveData();
  showToast(state.t('answerSaved'));
}

function deleteQuestion(id) {
  if (confirm(state.t('confirmDeleteQuestion'))) {
    state.data.reflections = state.data.reflections.filter(r => r.id !== id);
    state.saveData();
    renderCurrentSection();
    showToast(state.t('questionDeleted'));
  }
}

// ===== Calendar =====
function renderCalendar() {
  const container = $('.calendar-container');
  if (!container) return;
  
  const year = state.currentDate.getFullYear();
  const month = state.currentDate.getMonth();
  
  // Update month display
  const monthNames = [
    state.t('january'), state.t('february'), state.t('march'), state.t('april'),
    state.t('may'), state.t('june'), state.t('july'), state.t('august'),
    state.t('september'), state.t('october'), state.t('november'), state.t('december')
  ];
  
  const monthDisplay = container.querySelector('.calendar-month');
  if (monthDisplay) {
    monthDisplay.textContent = `${monthNames[month]} ${year}`;
  }
  
  // Generate calendar grid
  const grid = container.querySelector('.calendar-grid');
  if (!grid) return;
  
  const dayNames = [
    state.t('sunday'), state.t('monday'), state.t('tuesday'), state.t('wednesday'),
    state.t('thursday'), state.t('friday'), state.t('saturday')
  ];
  
  // Day headers
  let html = dayNames.map(day => `<div class="calendar-day-header">${day}</div>`).join('');
  
  // Get first day of month and total days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const todayKey = state.formatDateKey(today);
  
  // Previous month days
  const prevMonthDays = new Date(year, month, 0).getDate();
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = prevMonthDays - i;
    html += `<div class="calendar-day other-month"><span class="calendar-day-number">${day}</span></div>`;
  }
  
  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const isToday = dateKey === todayKey;
    const isSelected = state.selectedCalendarDate === dateKey;
    const dayLog = state.getDayLog(dateKey);
    
    // Count indicators
    const habitCount = dayLog.completedHabits.length;
    const taskCount = dayLog.completedTasks.length;
    const noteCount = state.data.notes.filter(n => n.date === dateKey).length;
    
    html += `
      <div class="calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}" 
           onclick="selectCalendarDate('${dateKey}')">
        <span class="calendar-day-number">${day}</span>
        <div class="calendar-day-indicators">
          ${habitCount > 0 ? '<div class="calendar-indicator habit"></div>' : ''}
          ${taskCount > 0 ? '<div class="calendar-indicator task"></div>' : ''}
          ${noteCount > 0 ? '<div class="calendar-indicator note"></div>' : ''}
        </div>
      </div>
    `;
  }
  
  // Next month days
  const totalCells = firstDay + daysInMonth;
  const remainingCells = 7 - (totalCells % 7);
  if (remainingCells < 7) {
    for (let i = 1; i <= remainingCells; i++) {
      html += `<div class="calendar-day other-month"><span class="calendar-day-number">${i}</span></div>`;
    }
  }
  
  grid.innerHTML = html;
  
  // Render selected date detail
  renderCalendarDetail();
}

function selectCalendarDate(dateKey) {
  state.selectedCalendarDate = dateKey;
  renderCalendar();
}

function renderCalendarDetail() {
  const container = $('.calendar-day-detail');
  if (!container || !state.selectedCalendarDate) return;
  
  const dateKey = state.selectedCalendarDate;
  const dayLog = state.getDayLog(dateKey);
  const dateObj = new Date(dateKey + 'T00:00:00');
  const dateStr = dateObj.toLocaleDateString(state.currentLang === 'ar' ? 'ar-SA' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const completedHabits = state.data.habits.filter(h => dayLog.completedHabits.includes(h.id));
  const completedTasks = state.data.tasks.filter(t => dayLog.completedTasks.includes(t.id));
  const dayNotes = state.data.notes.filter(n => n.date === dateKey);
  
  let html = `
    <div class="day-detail-header">
      <h3 class="day-detail-title">${dateStr}</h3>
    </div>
  `;
  
  // Completed Habits
  if (completedHabits.length > 0) {
    html += `
      <div class="day-detail-section">
        <h4 class="day-detail-section-title">✅ ${state.t('completedHabits')}</h4>
        ${completedHabits.map(h => `
          <div class="day-detail-item">
            <span class="day-detail-item-icon">✓</span>
            <span>${h.name}</span>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Completed Tasks
  if (completedTasks.length > 0) {
    html += `
      <div class="day-detail-section">
        <h4 class="day-detail-section-title">📋 ${state.t('completedTasks')}</h4>
        ${completedTasks.map(t => `
          <div class="day-detail-item">
            <span class="day-detail-item-icon">✓</span>
            <span>${t.title}</span>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Notes
  if (dayNotes.length > 0) {
    html += `
      <div class="day-detail-section">
        <h4 class="day-detail-section-title">📝 ${state.t('notesForDay')}</h4>
        ${dayNotes.map(n => `
          <div class="day-detail-item" style="flex-direction: column; align-items: flex-start;">
            <strong>${n.title}</strong>
            <span style="color: var(--text-secondary); font-size: 0.875rem;">${n.content}</span>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Reflection Answers
  const reflectionAnswers = Object.entries(dayLog.reflectionAnswers || {}).filter(([_, v]) => v);
  if (reflectionAnswers.length > 0) {
    html += `
      <div class="day-detail-section">
        <h4 class="day-detail-section-title">💭 ${state.t('reflectionAnswers')}</h4>
        ${reflectionAnswers.map(([id, answer]) => {
          const question = state.data.reflections.find(r => r.id === id);
          return question ? `
            <div class="day-detail-item" style="flex-direction: column; align-items: flex-start;">
              <strong>${question.question}</strong>
              <span style="color: var(--text-secondary); font-size: 0.875rem;">${answer}</span>
            </div>
          ` : '';
        }).join('')}
      </div>
    `;
  }
  
  // Course Progress
  const studyEntries = Object.entries(dayLog.studyHours || {}).filter(([_, v]) => v > 0);
  if (studyEntries.length > 0) {
    html += `
      <div class="day-detail-section">
        <h4 class="day-detail-section-title">📚 ${state.t('courseProgress')}</h4>
        ${studyEntries.map(([id, hours]) => {
          const course = state.data.courses.find(c => c.id === id);
          return course ? `
            <div class="day-detail-item">
              <span class="day-detail-item-icon">📖</span>
              <span>${course.name}: ${hours}h ${state.t('studied')}</span>
            </div>
          ` : '';
        }).join('')}
      </div>
    `;
  }
  
  // No data message
  if (completedHabits.length === 0 && completedTasks.length === 0 && dayNotes.length === 0 && reflectionAnswers.length === 0 && studyEntries.length === 0) {
    html += `
      <div class="empty-state" style="padding: 30px;">
        <p class="empty-state-description">${state.t('noDataForDay')}</p>
      </div>
    `;
  }
  
  container.innerHTML = html;
  container.style.display = 'block';
}

function navigateMonth(direction) {
  state.currentDate.setMonth(state.currentDate.getMonth() + direction);
  renderCalendar();
}

function goToToday() {
  state.currentDate = new Date();
  state.selectedCalendarDate = state.formatDateKey(new Date());
  renderCalendar();
}

// ===== Search Functionality =====
function handleSearch(query) {
  query = query.toLowerCase().trim();
  if (!query) {
    renderCurrentSection();
    return;
  }
  
  // Search across all data
  const results = {
    habits: state.data.habits.filter(h => h.name.toLowerCase().includes(query)),
    tasks: state.data.tasks.filter(t => t.title.toLowerCase().includes(query) || (t.description && t.description.toLowerCase().includes(query))),
    notes: state.data.notes.filter(n => n.title.toLowerCase().includes(query) || n.content.toLowerCase().includes(query)),
    courses: state.data.courses.filter(c => c.name.toLowerCase().includes(query))
  };
  
  console.log('Search results:', results);
  // Implement UI for search results as needed
}

// ===== Initialize Application =====
function initApp() {
  // Apply theme
  document.documentElement.setAttribute('data-theme', state.currentTheme);
  updateThemeToggle();
  
  // Apply language
  applyLanguage();
  
  // Set up event listeners
  setupEventListeners();
  
  // Render initial section
  renderCurrentSection();
  
  // Register service worker
  registerServiceWorker();

  // Upgrade manifest icons to crisp PNGs for the installed app icon
  enhancePwaIcons();
  
  // Update badge counts
  updateBadges();
}

function setupEventListeners() {
  // Theme toggle
  const themeBtn = $('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
  
  // Language toggle
  const langBtn = $('.lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
  
  // Menu toggle (mobile)
  const menuBtn = $('.menu-toggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleSidebar);
  }
  
  // Sidebar overlay
  const overlay = $('.sidebar-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
  
  // Navigation items
  $$('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      navigateTo(item.dataset.section);
    });
  });
  
  // Modal close
  const modalClose = $('.modal-close');
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  const modalCancel = $('.modal-cancel');
  if (modalCancel) {
    modalCancel.addEventListener('click', closeModal);
  }
  
  // Modal overlay click
  const modalOverlay = $('.modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
  
  // Search input
  const searchInput = $('.search-input');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        handleSearch(e.target.value);
      }, 300);
    });
  }
  
  // Calendar navigation
  const prevMonth = $('.calendar-prev');
  const nextMonth = $('.calendar-next');
  const todayBtn = $('.calendar-today');
  
  if (prevMonth) prevMonth.addEventListener('click', () => navigateMonth(-1));
  if (nextMonth) nextMonth.addEventListener('click', () => navigateMonth(1));
  if (todayBtn) todayBtn.addEventListener('click', goToToday);
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Escape to close modal
    if (e.key === 'Escape') {
      closeModal();
    }
    
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = $('.search-input');
      if (searchInput) searchInput.focus();
    }
  });
}

function updateBadges() {
  const todayKey = state.getTodayKey();
  const dayLog = state.getDayLog(todayKey);
  
  const pendingTasks = state.data.tasks.filter(t => !dayLog.completedTasks.includes(t.id)).length;
  const taskBadge = $('.tasks-badge');
  if (taskBadge) {
    taskBadge.textContent = pendingTasks;
    taskBadge.style.display = pendingTasks > 0 ? 'block' : 'none';
  }
}

// ===== Service Worker Registration =====
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  }
}

// ===== PWA Icons: render logo.svg to crisp PNGs for the install icon =====
function svgToPngDataUrl(svgText, size) {
  return new Promise((resolve) => {
    const svg64 = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgText)));
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, size, size);
        resolve(canvas.toDataURL('image/png'));
      } catch (e) {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = svg64;
  });
}

async function enhancePwaIcons() {
  try {
    const [svgRes, manifestRes] = await Promise.all([
      fetch('/logo.svg'),
      fetch('/manifest.json')
    ]);
    if (!svgRes.ok || !manifestRes.ok) return;

    const svgText = await svgRes.text();
    const manifest = await manifestRes.json();

    const pngIcons = [];
    for (const size of [512, 192]) {
      const dataUrl = await svgToPngDataUrl(svgText, size);
      if (dataUrl) {
        pngIcons.push({ src: dataUrl, sizes: `${size}x${size}`, type: 'image/png', purpose: 'any' });
        pngIcons.push({ src: dataUrl, sizes: `${size}x${size}`, type: 'image/png', purpose: 'maskable' });
      }
    }

    if (pngIcons.length === 0) return;

    // PNG icons first so installers pick the raster version
    manifest.icons = [...pngIcons, ...(manifest.icons || [])];

    const blob = new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' });
    const link = document.querySelector('link[rel="manifest"]');
    if (link) link.href = URL.createObjectURL(blob);
  } catch (e) {
    // Silently fall back to the static SVG manifest
    console.log('PWA icon enhancement skipped:', e);
  }
}

// ===== PWA Install Prompt =====
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Show install button if needed
  const installBtn = $('.install-btn');
  if (installBtn) {
    installBtn.style.display = 'flex';
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User ${outcome} the install prompt`);
        deferredPrompt = null;
        installBtn.style.display = 'none';
      }
    });
  }
});

window.addEventListener('appinstalled', () => {
  console.log('App installed successfully');
  deferredPrompt = null;
});

// ===== Initialize on DOM Ready =====
document.addEventListener('DOMContentLoaded', initApp);

// ===== Export functions for global access =====
window.showAddHabitModal = showAddHabitModal;
window.showAddTaskModal = showAddTaskModal;
window.showAddNoteModal = showAddNoteModal;
window.showAddCourseModal = showAddCourseModal;
window.showAddQuestionModal = showAddQuestionModal;
window.showEditHabitModal = showEditHabitModal;
window.showEditTaskModal = showEditTaskModal;
window.showEditNoteModal = showEditNoteModal;
window.showEditCourseModal = showEditCourseModal;
window.showEditQuestionModal = showEditQuestionModal;
window.toggleHabit = toggleHabit;
window.toggleTask = toggleTask;
window.deleteHabit = deleteHabit;
window.deleteTask = deleteTask;
window.deleteNote = deleteNote;
window.deleteCourse = deleteCourse;
window.deleteQuestion = deleteQuestion;
window.logStudyHours = logStudyHours;
window.saveAnswer = saveAnswer;
window.selectCalendarDate = selectCalendarDate;
window.navigateMonth = navigateMonth;
window.goToToday = goToToday;
window.navigateTo = navigateTo;
window.toggleSidebar = toggleSidebar;
window.closeModal = closeModal;