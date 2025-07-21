import { motion } from 'framer-motion';

const GenderSelection = () => {
  // 跳转到指定网址的函数
  const handleGenderSelect = (gender: string) => {
    // 使用用户提供的指定网址
    const urls = {
      male: 'https://qvm1.f2z.cn/z2cyP3',
      female: 'https://example.com/female'
    };
    
    window.location.href = gender === 'male' ? urls.male : urls.female;
  };

  return (
    <div className="w-full max-w-md relative z-10">
      {/* 选择提示 */}
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center relative z-10">请选择你的性别</h2>
      
      {/* 性别选择按钮 - 左右排列 */}
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <motion.button
          onClick={() => handleGenderSelect('male')}
          className="flex-1 py-8 px-4 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 text-3xl font-bold transition-all duration-300 hover:bg-blue-900/30 hover:border-blue-500 active:scale-95"
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          男士
        </motion.button>
        
        <motion.button
          onClick={() => handleGenderSelect('female')}
          className="flex-1 py-8 px-4 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 text-3xl font-bold transition-all duration-300 hover:bg-pink-900/30 hover:border-pink-500 active:scale-95"
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          女士
        </motion.button>
      </div>
    </div>
  );
};

export default GenderSelection;