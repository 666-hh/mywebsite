import { motion } from 'framer-motion';

interface PainPointsProps {
  onContinue: () => void;
}

const PainPoints = ({ onContinue }: PainPointsProps) => {
  // 用户痛点数据
  const painPoints = [
    "你是否刷遍擦边引流，却始终找不到真正的圈内社群？",
    "你是否付完门槛，却被拉黑或进了“货不对板”的假群？",
    "你是否进群之后发现无人管理，氛围混乱体验极差？",
    "你是否作为女生，遭遇过不懂圈子的男士频繁骚扰？",
    "你是否作为男生，被群内女生骗钱骗感情后直接拉黑？",
    "你是否渴望加入一个纯粹、干净、免费的圈内社群？"
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md relative z-10"
    >
      {/* 标题 */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">你是否也遇到这些问题？</h2>
      
      {/* 痛点列表 */}
      <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-gray-800 shadow-xl mb-8 max-h-[500px] overflow-y-auto pr-2">
        <ul className="space-y-5">
          {painPoints.map((point, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start group p-2 rounded-lg transition-colors duration-300 hover:bg-gray-800/50"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-purple-600/30 transition-colors">
                <span className="text-purple-400 font-bold">{index + 1}</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{point}</p>
            </motion.li>
          ))}
        </ul>
      </div>
      
      {/* 继续按钮 */}
      <motion.button
        onClick={onContinue}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 20 }}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-purple-600/20 hover:from-purple-700 hover:to-indigo-700 active:scale-98 transition-all duration-300 flex items-center justify-center"
      >
        <span>继续</span>
        <i className="fa-solid fa-arrow-right ml-2"></i>
      </motion.button>
    </motion.div>
  );
};

export default PainPoints;