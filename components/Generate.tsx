import React from 'react';
import { Sparkles, Video, Mic, Image, Edit3, Users, Zap } from 'lucide-react';
import { IoVideocam } from "react-icons/io5";
import { IoIosArrowDown } from 'react-icons/io';


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
  iconBg = '#697e91',
}) => {
  const badgeColors = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white', // sample colors
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-500 text-white'
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex items-center space-x-3">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{ background: iconBg }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Title & Description */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-gray-900">{title}</h3>
            {badge && (
              <span
                className={`px-2 py-0.5 text-xs font-medium rounded ${badgeColors[badgeColor]}`}
              >
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-600">{description}</p>
        </div>

        {/* Open Button */}
        <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 bg-gray-100 rounded-full transition-colors shrink-0">
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
    iconBg?: string;
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
        badge: 'New',
        // badgeColor: 'green',
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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Generate</h1>
        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 dark:text-white">
          Show all
          <IoIosArrowDown className="w-4 h-4" />
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


