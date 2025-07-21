import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import PainPoints from './components/PainPoints';
import SSCQuiz from './components/SSCQuiz';
import GenderSelection from './components/GenderSelection';

export default function App() {
  const [currentView, setCurrentView] = useState<'painPoints' | 'quiz' | 'gender'>('painPoints');

  const handleQuizSuccess = () => {
    setCurrentView('gender');
  };

  const handlePainPointsComplete = () => {
    setCurrentView('quiz');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* 字体样式 */}
      
        {/* 黑色主题背景装饰 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.15),transparent_70%),radial-gradient(circle_at_bottom_left,rgba(255,50,150,0.15),transparent_70%)]"></div>
        
        {/* 网格纹理 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2LTRoLTR2NHptMC04aDR2LTRoLTR2NHptLTItMTZoNHYtNGgtNHY0em0tMi04aDR2LTRoLTR2NHptLTItMTZoNHYtNGgtNHY0em0tMi04aDR2LTRoLTR2NHptLTItMTZoNHYtNGgtNHY0em0tMi04aDR2LTRoLTR2NHptLTItMTZoNHYtNGgtNHY0em0tMi04aDR2LTRoLTR2NHptLTItMTZoNHYtNGgtNHY0em0tMi04aDR2LTRoLTR2NHptLTItMTZoNHYtNGgtNHY0em0tMi04aDR2LTRoLTR2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      
       {/* LOGO - 增强质感和现代感 */}
       <div className="flex justify-center mb-6 relative z-10">
         <motion.div 
           className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-lg shadow-purple-900/20 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-800/30 hover:border-white/20"
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.98 }}
         >
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/127550374914/attachment/f13b145aa38b4ae76409705f8bbcae81_20250719230214.png" 
               alt="SM Logo" 
               className="w-full h-full object-contain bg-transparent filter invert-100"
            />
         </motion.div>
       </div>

       {/* 社群标题 */}
       <div className="text-center mb-12 relative z-10 max-w-2xl mx-auto">
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-4 font-light tracking-wider opacity-90 whitespace-nowrap">—你的情欲再小众，也值得被认真对待—</p>
          <h1 className="font-[CheeseFont] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">圈内人•免费社群</h1>
       </div>
      
       {/* 根据当前视图状态显示不同内容 */}
       {currentView === 'painPoints' ? (
         <PainPoints onContinue={handlePainPointsComplete} />
       ) : currentView === 'quiz' ? (
         <SSCQuiz onSuccess={handleQuizSuccess} />
       ) : (
         <GenderSelection />
       )}
    </div>
  );
}
