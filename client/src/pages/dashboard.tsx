export default function Dashboard() {

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Dashboard Navbar */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold gradient-text">AI Coworker</div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h7a3 3 0 013 3v6"></path>
                </svg>
              </button>
              <a 
                href="/api/logout"
                className="gradient-bg text-white px-4 py-2 rounded-xl font-medium hover:scale-105 transition-transform duration-200"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">Welcome to AI Coworker</h1>
          <p className="text-gray-300">Your intelligent assistant is ready to transform your workflow.</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Tasks Automated</p>
                <p className="text-3xl font-bold text-white">127</p>
              </div>
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Time Saved</p>
                <p className="text-3xl font-bold text-white">24h</p>
              </div>
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Emails Processed</p>
                <p className="text-3xl font-bold text-white">342</p>
              </div>
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Meetings Summarized</p>
                <p className="text-3xl font-bold text-white">28</p>
              </div>
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-slate-700 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Email summary completed</p>
                  <p className="text-sm text-gray-400">15 emails processed - 2 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-slate-700 rounded-xl">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Meeting notes generated</p>
                  <p className="text-sm text-gray-400">Team standup - 1 hour ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-slate-700 rounded-xl">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Task automation started</p>
                  <p className="text-sm text-gray-400">Follow-up workflow - 3 hours ago</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="gradient-bg text-white p-4 rounded-xl font-medium hover:scale-105 transition-transform duration-200 text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Process Emails
              </button>
              
              <button className="gradient-bg text-white p-4 rounded-xl font-medium hover:scale-105 transition-transform duration-200 text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Schedule Meeting
              </button>
              
              <button className="gradient-bg text-white p-4 rounded-xl font-medium hover:scale-105 transition-transform duration-200 text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                Create Workflow
              </button>
              
              <button className="gradient-bg text-white p-4 rounded-xl font-medium hover:scale-105 transition-transform duration-200 text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
