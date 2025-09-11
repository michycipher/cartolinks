
// export default function Generate() {
//   return (
//     <div className="px-6 py-10">
//       <h2 className="text-xl font-semibold mb-6">Generate</h2>
//       <div className="grid grid-cols-4 gap-4">
//         {items.map((i) => (
//           <div key={i.title} className="border rounded-lg p-4 flex gap-2 hover:shadow-lg dark:border-gray-800">
//             <div className={`h-10 w-10 rounded ${i.color}`}></div>

//             <div>
//               <h3 className="font-medium">{i.title}</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">{i.desc}</p>
//             </div>

//             <button className="mt-2 text-sm bg-gray-100 px-4 rounded-xl dark:text-gray-300 dark:bg-gray-700">Open</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import { ExternalLink, Sparkles, Video, Mic, Image, Edit3, Users, Zap } from 'lucide-react';

// // Individual Tool Card Component
// type ToolCardProps = {
//   icon: React.ComponentType<{ className?: string }>;
//   title: string;
//   description: string;
//   badge?: string | null;
//   badgeColor?: 'blue' | 'green' | 'purple' | 'orange';
// };

// const ToolCard: React.FC<ToolCardProps> = ({ 
//   icon: Icon, 
//   title, 
//   description, 
//   badge, 
//   badgeColor = 'blue',
// }) => {
//   const badgeColors = {
//     blue: 'bg-blue-500 text-white',
//     green: 'bg-green-500 text-white',
//     purple: 'bg-purple-500 text-white',
//     orange: 'bg-orange-500 text-white'
//   };

//   return (
//     <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer group">
//       <div className="flex justify-between mb-3 space-x-2">

//         <div className="w-14 h-14 bg-[#697e91] rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
//             <Icon className="w-5 h-5 text-white" />
//           </div>

//         <div className="flex items-center gap-3">
//           <div>
//             <div className="flex items-center gap-2">
//               <h3 className="font-medium text- text-gray-900">{title}</h3>
//               {badge && (
//                 <span className={`px-2 py-0.5 text-xs font-medium rounded ${badgeColors[badgeColor]}`}>
//                   {badge}
//                 </span>
//               )}
//             </div>
//             <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
//           </div>
//         </div>

//         <button className="px-4 py-1 text-sm text-gray-600 hover:text-gray-900 bg-gray-100 rounded-xl transition-colors">
//           Open
//         </button>

//       </div>
//     </div>
//   );
// };

// // Main Generate Page Component
// const GeneratePage = () => {
//   const tools: Array<{
//     icon: React.ComponentType<{ className?: string }>;
//     title: string;
//     description: string;
//     badge?: string | null;
//     badgeColor?: 'blue' | 'green' | 'purple' | 'orange';
//   }> = [
//     {
//       icon: Image,
//       title: 'Image',
//       description: 'Generate images with captions, styles in PNG and Webp/art.',
//       badge: 'New',
//       badgeColor: 'blue'
//     },
//     {
//       icon: Video,
//       title: 'Video',
//       description: 'Generate videos with stories, Plot, Rewind, Letmo, and more.',
//       badge: null,
//       badgeColor: undefined
//     },
//     {
//       icon: Mic,
//       title: 'Realtime',
//       description: 'Realtime AI rendering on a canvas. Instant feedback loops.',
//       badge: null,
//       badgeColor: undefined
//     },
//     {
//       icon: Sparkles,
//       title: 'Enhancer',
//       description: 'Upscale and enhance images and videos up to 2x.',
//       badge: 'New',
//       badgeColor: 'blue'
//     },
//     {
//       icon: Edit3,
//       title: 'Edit',
//       description: 'Edit text, discharge style, or expand photos and generations.',
//       badge: 'Live',
//       badgeColor: 'green'
//     },
//     {
//       icon: Video,
//       title: 'Video Lipsync',
//       description: 'Lip sync any video using audio.',
//       badge: 'New',
//       badgeColor: 'blue'
//     },
//     {
//       icon: Users,
//       title: 'Motion Transfer',
//       description: 'Transfer motion to images and animate characters.',
//       badge: 'New',
//       badgeColor: 'blue'
//     },
//     {
//       icon: Zap,
//       title: 'Train',
//       description: 'Teach flux to replicate your style, products, or characters.',
//       badge: null,
//       badgeColor: undefined
//     }
//   ];

//   return (
//     <div className="max-w mx-auto p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-2xl font-bold text-gray-900">Generate</h1>
//         <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
//           Show all
//           <ExternalLink className="w-4 h-4" />
//         </button>
//       </div>

//       {/* Tools Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {tools.map((tool, index) => (
//           <ToolCard
//             key={index}
//             icon={tool.icon}
//             title={tool.title}
//             description={tool.description}
//             badge={tool.badge}
//             badgeColor={tool.badgeColor}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GeneratePage;







import React from 'react';
import { ExternalLink, Sparkles, Video, Mic, Image, Edit3, Users, Zap } from 'lucide-react';
import { IoVideocam } from "react-icons/io5";


// Individual Tool Card Component
type ToolCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  badge?: string | null;
  badgeColor?: 'blue' | 'green' | 'purple' | 'orange';
  iconBg?: string;
};

const ToolCard: React.FC<ToolCardProps> = ({
  icon: Icon,
  title,
  description,
  badge,
  badgeColor = 'blue',
  iconBg = '#697e91', // Default color
}) => {
  const badgeColors = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-500 text-white'
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex justify-between mb-3 space-x-2">

        <div
          className="w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{  background: iconBg }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>

        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-gray-900">{title}</h3>
              {badge && (
                <span className={`px-2 py-0.5 text-xs font-medium rounded ${badgeColors[badgeColor]}`}>
                  {badge}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-600">{description}</p>
          </div>
        </div>

        <button className="p-3 text-sm text-gray-600 hover:text-gray-900 bg-gray-100 rounded-2xl transition-colors">
          Open
        </button>

      </div>
    </div>
  );
};

// Main Generate Page Component
const GeneratePage = () => {
  const tools: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    badge?: string | null;
    badgeColor?: 'blue' | 'green' | 'purple' | 'orange';
    iconBg?: string; // Add this to the type
  }> = [
      {
        icon: Image,
        title: 'Image',
        description: 'Generate images with captions, styles in PNG and Webp/art.',
        badge: 'New',
        badgeColor: 'blue',
        iconBg: 'linear-gradient(36deg,rgba(9, 9, 10, 1) 5%, rgba(255, 255, 255, 1) 30%, rgba(105, 126, 145, 1) 82%)'
      },
      {
        icon: IoVideocam,
        title: 'Video',
        description: 'Generate videos with stories, Plot, Rewind, Letmo, and more.',
        badge: null,
        badgeColor: undefined,
        iconBg: '#f59e0b' // Amber/Orange
      },
      {
        icon: Mic,
        title: 'Realtime',
        description: 'Realtime AI rendering on a canvas. Instant feedback loops.',
        badge: null,
        badgeColor: undefined,
        iconBg: '#3b82f6' // Blue
      },
      {
        icon: Sparkles,
        title: 'Enhancer',
        description: 'Upscale and enhance images and videos up to 2x.',
        badge: 'New',
        badgeColor: 'blue',
        iconBg: '#1f2937' // Dark gray
      },
      {
        icon: Edit3,
        title: 'Edit',
        description: 'Edit text, discharge style, or expand photos and generations.',
        badge: 'Live',
        badgeColor: 'green',
        iconBg: '#8b5cf6' // Purple
      },
      {
        icon: Video,
        title: 'Video Lipsync',
        description: 'Lip sync any video using audio.',
        badge: 'New',
        badgeColor: 'blue',
        iconBg: '#10b981' // Emerald/Green
      },
      {
        icon: Users,
        title: 'Motion Transfer',
        description: 'Transfer motion to images and animate characters.',
        badge: 'New',
        badgeColor: 'blue',
        iconBg: '#374151' // Gray
      },
      {
        icon: Zap,
        title: 'Train',
        description: 'Teach flux to replicate your style, products, or characters.',
        badge: null,
        badgeColor: undefined,
        iconBg: '#f97316' // Orange
      }
    ];

  return (
    <div className="mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Generate</h1>
        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
          Show all
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            badge={tool.badge}
            badgeColor={tool.badgeColor}
            iconBg={tool.iconBg}
          />
        ))}
      </div>
    </div>
  );
};

export default GeneratePage;


