import { useState } from 'react';
import { motion } from 'framer-motion';

interface SSCQuizProps {
  onSuccess: () => void;
}

const SSCQuiz = ({ onSuccess }: SSCQuizProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
   // 选项数据
   const options = [
     { id: 'A', text: '舒服、刺激、合法合规' },
     { id: 'B', text: '安全、理智、知情同意' },
     { id: 'C', text: '契约、顺从、风险接受' },
     { id: 'D', text: '服务、服从、互相尊重' }
   ];

  // 处理选项选择
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  // 提交答案
  const handleSubmit = () => {
    if (!selectedOption) return;
    
    const correct = selectedOption === 'B';
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // 如果正确，2秒后跳转到性别选择页面
    if (correct) {
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-xl relative z-10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1"
    >
      {/* 问题标题文本 */}
      {!showFeedback && (
        <div className="mb-8 text-center space-y-2">
          <p className="text-gray-400 text-base sm:text-lg whitespace-nowrap">为了确保您是圈内人士</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap">请选择SSC原则的正确定义</h2>
        </div>
      )}
     
      <div className="space-y-4 mb-8 mt-4">
        {options.map((option) => {
          // 当答案正确时，只显示正确选项B；答案错误时，只显示选中的错误选项
          if (showFeedback && ((isCorrect && option.id !== 'B') || (!isCorrect && option.id !== selectedOption))) {
            return null;
          }
         
         return (
           <motion.div 
             key={option.id}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3 }}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedOption === option.id 
                  ? 'border-purple-500 bg-purple-900/30 ring-2 ring-purple-500/20' 
                  : 'border-gray-700/50 hover:border-gray-500 hover:bg-gray-800/80'
              } ${showFeedback && option.id === 'B' ? 'border-green-500 bg-green-900/20 ring-2 ring-green-500/20' : ''} ${
                showFeedback && selectedOption === option.id && !isCorrect ? 'border-red-500 bg-red-900/20 ring-2 ring-red-500/20' : ''
              } ${
                showFeedback ? 'mb-2' : '' // 显示反馈时减少下边距
              }`}
             onClick={() => !showFeedback && handleOptionSelect(option.id)}
             whileHover={!showFeedback ? { scale: 1.02 } : undefined}
             whileTap={!showFeedback ? { scale: 0.98 } : undefined}
           >
             <div className="flex items-center">
               <span className="w-8 h-8 flex items-center justify-center rounded-full border mr-3 font-bold">
                 {option.id}
               </span>
               <span className="text-lg">{option.text}</span>
             </div>
           </motion.div>
         );
       })}
      </div>
      
      {/* 提交按钮 */}
      {/* 只在未显示反馈或答案正确时显示按钮 */}
      {!showFeedback || isCorrect ? (
        <motion.button 
          onClick={handleSubmit}
          disabled={!selectedOption || showFeedback}
          whileHover={{ scale: !selectedOption || showFeedback ? 1 : 1.02 }}
          whileTap={{ scale: !selectedOption || showFeedback ? 1 : 0.98 }}
          className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
            !selectedOption || showFeedback
              ? 'bg-gray-700 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {showFeedback ? '正确！进入下一步...' : '提交答案'}
        </motion.button>
      ) : null}
      
      {/* 错误反馈信息 */}
      {showFeedback && !isCorrect && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 p-5 rounded-xl bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 backdrop-blur-sm"
        >
            <p className="text-center text-red-400 font-bold text-lg">
              抱歉，<br/>我们社群只欢迎圈内人士！<br/>谢谢您的理解。
            </p>
        </motion.div>
      )}
      
      {/* 正确答案解释框 */}
      {showFeedback && isCorrect && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 p-5 rounded-xl bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30 backdrop-blur-sm"
        >
            <p className="text-center text-green-400 font-bold text-lg">
              安全(Safe) 理智(Sane)<br/>知情同意(Consensual)
            </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SSCQuiz;